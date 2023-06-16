<template>
  <div class="logo mx-2">
    <NuxtLink to="/"><img :src="logo" alt="mainLogo" /></NuxtLink>
  </div>
</template>

<script setup>
const logo = useLogo();
</script>

<style lang="scss" scoped>
.logo {
  a {
    height: 56px;
    display: block;

    img {
      height: inherit;
    }
  }
}
</style>
