<script lang="ts" setup>
interface NuxtError {
  statusCode: number;
  statusMessage: string;
  message: string;
}

const props = defineProps<{ error: NuxtError }>();

const is404 = computed(() => props.error.statusCode === 404);

const handleClearError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-white p-4 dark:bg-gray-900">
    <p class="font-mono text-7xl font-bold text-black dark:text-white">
      {{ error.statusCode }}
    </p>
    <h1 class="mt-4 font-mono text-2xl font-semibold text-black dark:text-white">
      {{ is404 ? "Page not found" : "Something went wrong" }}
    </h1>
    <p class="mt-2 font-mono text-gray-500 dark:text-gray-400">
      {{ error.statusMessage || error.message }}
    </p>
    <button
      class="mt-8 rounded-lg border border-gray-300 px-4 py-2 font-mono text-sm text-black transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
      @click="handleClearError"
    >
      Back to home
    </button>
  </div>
</template>
