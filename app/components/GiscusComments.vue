<template>
    <div class="giscus-wrapper">
        <Giscus
            :repo="repo"
            :repo-id="repoId"
            :category="category"
            :category-id="categoryId"
            :mapping="mapping"
            :strict="strict"
            :reactions-enabled="reactionsEnabled"
            :emit-metadata="emitMetadata"
            :input-position="inputPosition"
            :theme="theme"
            :lang="lang"
            :loading="loading"
        />
    </div>
</template>

<script setup lang="ts">
import Giscus from "@giscus/vue";
import type { Theme } from "@giscus/vue";

interface Props {
    theme?: Theme;
    lang?: string;
}

const props = withDefaults(defineProps<Props>(), {
    theme: "light",
    lang: "hu",
});

// Giscus configuration for BÜCHL project
const repo = "Prevision-Lab/buechl";
const repoId = "R_kgDOOt0njw";
const category = "Oldaltervek visszajelzések";
const categoryId = "DIC_kwDOOt0nj84Cqfcj";

// Additional Giscus settings
const mapping = "pathname"; // Map discussions to page pathname
const strict = "0"; // Use relaxed matching
const reactionsEnabled = "1"; // Enable reactions
const emitMetadata = "0"; // Don't emit metadata
const inputPosition = "bottom"; // Comment input at bottom
const loading = "lazy"; // Lazy load the component
</script>

<style scoped>
.giscus-wrapper {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #e5e7eb;
}

/* Ensure Giscus iframe is responsive */
:deep(.giscus) {
    max-width: 100%;
}

:deep(.giscus-frame) {
    width: 100%;
}
</style>
