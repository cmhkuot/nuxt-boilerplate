<script setup lang="ts">
interface IconProps {
  name: string;
  filled?: boolean;
  fontControlled?: boolean;
}
withDefaults(defineProps<IconProps>(), {
  filled: true,
  fontControlled: false,
});
</script>

<template>
  <component :is="`icon-${name}`" :filled="filled" :font-controlled="fontControlled" />
</template>
