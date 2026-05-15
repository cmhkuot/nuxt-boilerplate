<script lang="ts" setup>
useSeo({
  title: "Home",
  description: "Nuxt Boilerplate — a starting point for Nuxt 4 projects.",
});
</script>

<template>
  <div class="flex flex-1 flex-col items-center justify-center py-16">
    <div class="flex items-center justify-center">
      <Icon name="nuxt" class="size-20" />
    </div>
    <h1 class="font-mono text-4xl font-bold text-black dark:text-white">Welcome to Nuxt Boilerplate</h1>
    <p class="mt-4 font-mono text-lg text-gray-500 dark:text-gray-400">
      A starting point for your next Nuxt 4 project.
    </p>
  </div>
</template>
