<template>
    <div class="min-h-screen flex flex-col">
        <ContextNavigation />
        
        <main class="flex-1">
            <slot />
        </main>

        <TheFooter />
    </div>
</template>