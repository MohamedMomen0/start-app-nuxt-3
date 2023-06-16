<template>
  <span class="search">
    <Icon @click="show = !show" name="el:search" />

    <search-model
      :show="show"
      :closeIcon="false"
      @close="show = false"
    ></search-model>
  </span>
</template>

<script setup>
const props = defineProps(["url"]);
const show = ref(false);
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  margin-top: 5px !important;
}
</style>
