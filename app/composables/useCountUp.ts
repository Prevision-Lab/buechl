import { ref, onMounted, onUnmounted } from 'vue'

interface CountUpOptions {
  startValue?: number
  endValue: number
  duration?: number
  startOnView?: boolean
  threshold?: number
}

export const useCountUp = (options: CountUpOptions) => {
  const {
    startValue = 0,
    endValue,
    duration = 2000,
    startOnView = true,
    threshold = 0.3
  } = options

  const currentValue = ref(startValue)
  const elementRef = ref<HTMLElement | null>(null)
  const hasAnimated = ref(false)
  
  let observer: IntersectionObserver | null = null
  let animationFrame: number | null = null

  const animate = () => {
    if (hasAnimated.value) return
    hasAnimated.value = true

    const startTime = performance.now()
    const difference = endValue - startValue

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      currentValue.value = Math.round(startValue + difference * easeOut)
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }
    
    animationFrame = requestAnimationFrame(step)
  }

  const startAnimation = () => {
    if (startOnView && elementRef.value) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated.value) {
              animate()
            }
          })
        },
        { threshold }
      )
      observer.observe(elementRef.value)
    } else {
      animate()
    }
  }

  const reset = () => {
    currentValue.value = startValue
    hasAnimated.value = false
    if (animationFrame) {
      cancelAnimationFrame(animationFrame)
    }
  }

  onMounted(() => {
    if (!startOnView) {
      animate()
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
    if (animationFrame) {
      cancelAnimationFrame(animationFrame)
    }
  })

  return {
    currentValue,
    elementRef,
    startAnimation,
    reset,
    hasAnimated
  }
}
