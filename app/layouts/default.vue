<script lang="ts" setup>
const config = useRuntimeConfig();
const appName = config.public.appName as string;
</script>

<template>
  <div class="flex min-h-screen flex-col bg-white dark:bg-gray-900">
    <header class="border-b border-gray-200 dark:border-gray-800">
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <NuxtLink to="/" class="font-mono font-bold text-black dark:text-white">
          {{ appName }}
        </NuxtLink>
        <!-- Add navigation links here -->
      </nav>
    </header>

    <main class="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-8">
      <slot />
    </main>

    <footer class="border-t border-gray-200 dark:border-gray-800">
      <div class="mx-auto flex max-w-7xl items-center justify-center px-4 py-3">
        <p class="font-mono text-sm text-gray-500 dark:text-gray-400">© {{ new Date().getFullYear() }} {{ appName }}</p>
      </div>
    </footer>
  </div>
</template>
