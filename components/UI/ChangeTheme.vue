<template>
  <div class="change_theme" @click="theme_store.changeTheme()">
    <Icon name="fluent:dark-theme-20-filled"></Icon>
  </div>
</template>

<script setup>
import { useThemeStore } from "~/stores/theme";
const theme_store = useThemeStore();
</script>

<style lang="scss" scoped>
.change_theme {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #db8900;
}
</style>
