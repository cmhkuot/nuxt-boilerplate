<script lang="ts" setup>
const appConfig = useAppConfig();

useSeoMeta({
  title: appConfig.title,
  description: appConfig.description,
  ogTitle: appConfig.title,
  ogDescription: appConfig.description,
  twitterTitle: appConfig.title,
  twitterDescription: appConfig.description,
});
useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
