<script setup lang="ts">
import type { ToasterProps } from '@nuxt/ui'

const toaster = useAppConfig().toaster as ToasterProps
</script>

<template>
    <UApp :toaster>
        <NuxtRouteAnnouncer />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>
