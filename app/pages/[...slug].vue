<script lang="ts" setup>
definePageMeta({ layout: "default" });
</script>

<template>
  <div class="flex flex-1 flex-col items-center justify-center py-16 text-center">
    <p class="font-mono text-7xl font-bold text-black dark:text-white">404</p>
    <h1 class="mt-4 font-mono text-2xl font-semibold text-black dark:text-white">Page not found</h1>
    <p class="mt-2 font-mono text-gray-500 dark:text-gray-400">The page you're looking for doesn't exist.</p>
    <NuxtLink
      to="/"
      class="mt-8 rounded-lg border border-gray-300 px-4 py-2 font-mono text-sm text-black transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
    >
      Back to home
    </NuxtLink>
  </div>
</template>
