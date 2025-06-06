<template>
  <section class="relative overflow-hidden">
    <div v-if="!skewed" class="grid lg:grid-cols-2">
      <!-- Kép oldal -->
      <div class="relative h-[500px] lg:h-[600px]">
        <img
          :src="image"
          :alt="imageAlt"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
      </div>

      <!-- Tartalom oldal -->
      <div class="relative" :class="bgColor === 'green' ? 'bg-buchl-green' : 'bg-buchl-blue'">
        <div class="absolute inset-0" :class="bgColor === 'green' 
          ? 'bg-gradient-to-br from-buchl-green to-buchl-green-dark opacity-90' 
          : 'bg-gradient-to-br from-buchl-blue to-buchl-blue-dark opacity-90'"
        ></div>
        <div class="relative z-10 flex items-center h-full p-8 lg:p-16">
          <div class="max-w-lg">
            <h1 :class="[
              'text-4xl lg:text-5xl mb-6',
              bgColor === 'green' ? 'text-buchl-blue' : 'text-white',
              titleFont === 'permanent-marker' ? 'font-display' : 'font-bold'
            ]">
              {{ title }}
            </h1>
            <p :class="[
              'text-lg lg:text-xl mb-8',
              bgColor === 'green' ? 'text-buchl-blue' : 'text-white/90'
            ]">
              {{ subtitle }}
            </p>

            <!-- CTA Gombok -->
            <div class="flex flex-col sm:flex-row gap-4">
              <!-- Elsődleges gomb -->
              <UButton
                v-if="primaryCta"
                :label="primaryCta.label"
                :icon="primaryCta.icon || 'i-heroicons-arrow-right'"
                :trailing="true"
                :to="primaryCta.to"
                :href="primaryCta.href"
                color="white"
                size="lg"
                :class="bgColor === 'green' 
                  ? 'rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90'
                  : 'rounded-none bg-white text-buchl-blue border border-gray-300 hover:bg-gray-50'"
              />
              
              <!-- Másodlagos gomb -->
              <UButton
                v-if="secondaryCta"
                :label="secondaryCta.label"
                :icon="secondaryCta.icon || 'i-heroicons-arrow-right'"
                :trailing="true"
                :to="secondaryCta.to"
                :href="secondaryCta.href"
                color="white"
                size="lg"
                :class="bgColor === 'green' 
                  ? 'rounded-none bg-white text-buchl-blue border border-gray-300 hover:bg-gray-50'
                  : 'rounded-none bg-buchl-blue text-white hover:bg-buchl-blue-dark'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ferde verzió -->
    <div v-else class="relative h-[600px] lg:h-[700px] overflow-hidden">
      <!-- Háttér kép vagy videó teljes szélességben -->
      <img
        v-if="!videoUrl"
        :src="image"
        :alt="imageAlt"
        class="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      
      <!-- Videó háttér -->
      <video
        v-else-if="videoUrl"
        :key="videoUrl"
        ref="videoElement"
        class="absolute inset-0 w-full h-full object-cover"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        :poster="image"
        @loadedmetadata="setVideoStartTime"
      >
        <source :src="videoUrl" type="video/mp4" />
        <source :src="videoUrl" type="video/webm" />
        <source :src="videoUrl" type="video/ogg" />
        Böngészője nem támogatja a videó lejátszást.
      </video>

      
      <!-- Ferde háttér csak a jobb oldalon -->
      <div 
        :class="[
          'absolute top-0 right-0 h-full',
          bgColor === 'green' ? 'bg-buchl-green' : 'bg-buchl-blue'
        ]"
        style="
          width: 60%;
          clip-path: polygon(25% 0, 100% 0, 100% 100%, 0 100%);
          -webkit-clip-path: polygon(25% 0, 100% 0, 100% 100%, 0 100%);
        "
      ></div>

      <!-- Tartalom konténer -->
      <div class="absolute inset-0 flex items-center">
        <div class="w-full max-w-7xl mx-auto px-8">
          <div class="flex justify-end">
            <!-- Tartalom a jobb oldalon -->
            <div class="w-full lg:w-1/2 flex items-center justify-center">
              <div class="max-w-lg text-center lg:text-left px-8">
                <h1 :class="[
                  'text-4xl lg:text-5xl mb-6',
                  bgColor === 'green' ? 'text-buchl-blue' : 'text-white',
                  titleFont === 'permanent-marker' ? 'font-display' : 'font-bold'
                ]">
                  {{ title }}
                </h1>
                <p :class="[
                  'text-lg lg:text-xl mb-8',
                  bgColor === 'green' ? 'text-buchl-blue' : 'text-white/90'
                ]">
                  {{ subtitle }}
                </p>

                <!-- CTA Gombok -->
                <div class="flex flex-col sm:flex-row gap-4">
                  <!-- Elsődleges gomb -->
                  <UButton
                    v-if="primaryCta"
                    :label="primaryCta.label"
                    :icon="primaryCta.icon || 'i-heroicons-arrow-right'"
                    :trailing="true"
                    :to="primaryCta.to"
                    :href="primaryCta.href"
                    color="white"
                    size="lg"
                    :class="bgColor === 'green' 
                      ? 'rounded-none bg-buchl-blue text-white hover:bg-buchl-blue/90'
                      : 'rounded-none bg-white text-buchl-blue border border-gray-300 hover:bg-gray-50'"
                  />
                  
                  <!-- Másodlagos gomb -->
                  <UButton
                    v-if="secondaryCta"
                    :label="secondaryCta.label"
                    :icon="secondaryCta.icon || 'i-heroicons-arrow-right'"
                    :trailing="true"
                    :to="secondaryCta.to"
                    :href="secondaryCta.href"
                    color="white"
                    size="lg"
                    :class="bgColor === 'green' 
                      ? 'rounded-none bg-white text-buchl-blue border border-gray-300 hover:bg-gray-50'
                      : 'rounded-none bg-buchl-blue text-white hover:bg-buchl-blue-dark'"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface CtaButton {
  label: string
  to?: string
  href?: string
  icon?: string
}

interface Props {
  title: string
  subtitle: string
  image: string
  imageAlt?: string
  primaryCta?: CtaButton
  secondaryCta?: CtaButton
  bgColor?: 'blue' | 'green'
  titleFont?: 'default' | 'permanent-marker'
  skewed?: boolean
  videoUrl?: string
  videoStartTime?: number
}

const props = withDefaults(defineProps<Props>(), {
  imageAlt: 'BÜCHL Hero Kép',
  bgColor: 'blue',
  titleFont: 'default',
  skewed: false,
  videoStartTime: 0
})

const videoElement = ref<HTMLVideoElement | null>(null)

const setVideoStartTime = () => {
  if (videoElement.value && props.videoStartTime > 0) {
    videoElement.value.currentTime = props.videoStartTime
  }
}
</script>