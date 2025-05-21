<script setup lang="ts">
import type { ToasterProps } from '@nuxt/ui'

const toaster = useAppConfig().toaster as ToasterProps
</script>

<template>
    <UApp :toaster color-mode="light">
        <NuxtRouteAnnouncer />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>
