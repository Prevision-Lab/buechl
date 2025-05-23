# Giscus Implementation Guide for Nuxt 3

## Overview

Giscus is a comments system powered by GitHub Discussions that allows visitors to leave comments and reactions on your website via GitHub. This guide will walk you through implementing Giscus in your Nuxt 3 application.

## Implementation Options

There are two main approaches to implement Giscus in Nuxt 3:

1. **Using @giscus/vue component** (Recommended)
2. **Manual implementation with script tag**

## Prerequisites

Before implementing Giscus, ensure these requirements are met:

1. **Public GitHub Repository**: Your repository must be public
2. **GitHub Discussions Enabled**: Enable Discussions feature in your repository
3. **Giscus App Installed**: Install the giscus app on your repository

## Step 1: Repository Setup

### Enable GitHub Discussions

1. Go to your repository on GitHub
2. Navigate to Settings → Features section
3. Check the "Discussions" checkbox
4. Click "Set up discussions" if prompted

### Install Giscus App

1. Visit https://github.com/apps/giscus
2. Click "Install"
3. Choose "Only select repositories"
4. Select your repository
5. Grant necessary permissions

## Step 2: Get Configuration

1. Visit https://giscus.app
2. Fill in the configuration:
   - **Repository**: `username/repository-name`
   - **Page ↔️ Discussions Mapping**: Choose one:
     - `pathname` (recommended for most use cases)
     - `URL`
     - `title`
     - `og:title`
     - `specific` (custom mapping)
   - **Discussion Category**: Create or select a category (e.g., "Comments", "Blog Comments")
   - **Features**: Enable reactions, metadata, etc.
   - **Theme**: Choose a theme that matches your site

3. The configuration will generate values for:
   - `repo-id`
   - `category-id`
   - Other configuration parameters

## Step 3: Implementation in Nuxt 3

### Option 1: Using @giscus/vue Component (Recommended)

#### Installation

```bash
npm install @giscus/vue
```

#### Create a Giscus Component

Create `~/components/GiscusComments.vue`:

```vue
<template>
  <div class="giscus-wrapper">
    <Giscus
      id="comments"
      :key="route.path"
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
import Giscus from '@giscus/vue'

const route = useRoute()
const colorMode = useColorMode()

// Configuration - Replace with your values from giscus.app
const repo = 'your-username/your-repo-name'
const repoId = 'your-repo-id'
const category = 'Comments'
const categoryId = 'your-category-id'
const mapping = 'pathname'
const strict = '0'
const reactionsEnabled = '1'
const emitMetadata = '0'
const inputPosition = 'bottom'
const lang = 'en'
const loading = 'lazy'

// Dynamic theme based on color mode
const theme = computed(() => 
  colorMode.value === 'dark' ? 'dark' : 'light'
)
</script>

<style scoped>
.giscus-wrapper {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

:deep(.giscus) {
  margin: 0;
}
</style>
```

#### Use the Component

In your blog post or page template:

```vue
<template>
  <div>
    <!-- Your content -->
    <article>
      <h1>{{ post.title }}</h1>
      <div v-html="post.content"></div>
    </article>
    
    <!-- Comments section -->
    <GiscusComments />
  </div>
</template>
```

### Option 2: Manual Script Implementation

Create `~/components/GiscusScript.vue`:

```vue
<template>
  <div class="giscus"></div>
</template>

<script setup lang="ts">
onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'your-username/your-repo-name')
  script.setAttribute('data-repo-id', 'your-repo-id')
  script.setAttribute('data-category', 'Comments')
  script.setAttribute('data-category-id', 'your-category-id')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', 'light')
  script.setAttribute('data-lang', 'en')
  script.setAttribute('data-loading', 'lazy')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true
  
  document.querySelector('.giscus')?.appendChild(script)
})

onUnmounted(() => {
  // Clean up if needed
  const iframe = document.querySelector('iframe.giscus-frame')
  iframe?.remove()
})
</script>
```

## Step 4: Advanced Configuration

### Theme Switching

For dynamic theme switching based on your site's color mode:

```vue
<script setup lang="ts">
import Giscus from '@giscus/vue'

const colorMode = useColorMode()

// Watch for color mode changes
const theme = computed(() => {
  const themes = {
    light: 'light',
    dark: 'dark',
    // You can also use custom themes
    // light: 'https://giscus.app/themes/custom_example.css',
  }
  return themes[colorMode.value] || 'light'
})
</script>
```

### Custom Configuration File

Create `giscus.json` in your repository root for advanced settings:

```json
{
  "defaultCommentOrder": "oldest",
  "origins": [
    "https://your-domain.com",
    "https://www.your-domain.com"
  ],
  "originsRegex": ["https://deploy-preview-\\d+--your-site\\.netlify\\.app"]
}
```

### Environment Variables

Store configuration in `.env`:

```env
NUXT_PUBLIC_GISCUS_REPO=your-username/your-repo-name
NUXT_PUBLIC_GISCUS_REPO_ID=your-repo-id
NUXT_PUBLIC_GISCUS_CATEGORY=Comments
NUXT_PUBLIC_GISCUS_CATEGORY_ID=your-category-id
```

Then in your component:

```vue
<script setup lang="ts">
const config = useRuntimeConfig()

const repo = config.public.giscusRepo
const repoId = config.public.giscusRepoId
// ... etc
</script>
```

## Step 5: Styling

### Basic Styling

```css
/* Responsive wrapper */
.giscus-wrapper {
  max-width: 100%;
  margin: 3rem auto;
  padding: 0 1rem;
}

/* Dark mode adjustments */
.dark .giscus-wrapper {
  --giscus-bg-color: #1a1a1a;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .giscus-wrapper {
    padding: 0 0.5rem;
  }
}
```

### Custom Themes

You can create custom themes by hosting a CSS file and using its URL as the theme value.

## Step 6: SEO Considerations

Since Giscus loads comments in an iframe, the content is not directly indexable. Consider:

1. Using `loading="lazy"` for better page performance
2. Implementing structured data for your articles separately
3. Using proper meta tags for social sharing

## Troubleshooting

### Common Issues

1. **Comments not loading**: 
   - Verify repository is public
   - Check Giscus app is installed
   - Ensure Discussions are enabled

2. **Wrong discussion mapping**:
   - Double-check your mapping configuration
   - Ensure consistent URL structure

3. **Theme not updating**:
   - Use a reactive computed property for theme
   - Force re-render with `:key` prop if needed

### Testing

1. Test in development: `npm run dev`
2. Test different pages to ensure proper mapping
3. Test theme switching if implemented
4. Verify mobile responsiveness

## Security Notes

- Giscus uses GitHub OAuth for authentication
- Comments are moderated through GitHub Discussions
- Only users with GitHub accounts can comment
- You maintain full control through GitHub's moderation tools

## Migration from Other Systems

If migrating from Disqus or other comment systems:

1. Export existing comments if possible
2. Consider creating GitHub Discussions manually for important threads
3. Update your privacy policy to reflect the change
4. Notify users about the migration

## Conclusion

Giscus provides a free, open-source, and privacy-respecting comment system that integrates seamlessly with Nuxt 3. The implementation is straightforward, and the system leverages GitHub's infrastructure for reliability and moderation capabilities.