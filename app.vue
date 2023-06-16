<template>
  <NuxtLayout>
    <LoaderGeneral v-if="loading" />
    <NuxtPage v-else></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
import { useGlobalStore } from "~/stores/global";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : "Site Title";
  },
});

const global_store = useGlobalStore();
const loading = computed(() => {
  return global_store.loading;
});
</script>

<style lang="scss"></style>
