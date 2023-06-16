<template>
  <transition name="fadeIn">
    <div v-if="show" class="mediaModel" @click="$emit('close')">
      <main @click.stop :class="{ closeIcon: isSmallScreen || closeIcon }">
        <span
          v-if="isSmallScreen || closeIcon"
          @click.stop="$emit('close')"
          class="close"
        >
          <Icon name="ant-design:close-outlined"></Icon>
        </span>

        <div class="image">
          <img :src="src" :alt="alt || 'media'" />
        </div>
      </main>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps(["show", "src", "alt", "closeIcon"]);
const isSmallScreen = false;
</script>

<style lang="scss" scoped>
.mediaModel {
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 999;
  background: #333333d4;
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    position: relative;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    .close {
      position: absolute;
      top: 15px;
      left: 15px; // RTL
      cursor: pointer;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--app_color);
      border-radius: 50%;
      z-index: 99;

      color: #fff;

      i {
        color: #fff;
        font-size: 20px;
      }
    }

    .image {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        border-radius: 15px;
        max-height: 95vh;
      }
    }

    @media (max-width: 992px) {
      width: 100vw;
      height: 100vh;
      border-radius: 0;

      .image {
        height: 100%;

        img {
          max-height: 100%;
        }
      }
    }
  }
}
</style>
