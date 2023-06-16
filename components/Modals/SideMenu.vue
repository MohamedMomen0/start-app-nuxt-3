<template>
  <div class="menu_container">
    <Transition name="fadeIn">
      <div v-if="show" @click="show = false" class="backdrop"></div>
    </Transition>
    <Transition :name="`slide-${direction}`">
      <main
        v-if="show"
        @click.stop
        class="main_body sideMenu"
        :class="{ left: direction == 'left', right: direction == 'right' }"
      >
        <span @click="show = false" class="close">
          <Icon name="ant-design:close-outlined"></Icon>
        </span>
        <slot></slot>
      </main>
    </Transition>
  </div>
</template>

<script setup>
import { useLangStore } from "~/stores/lang";

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(["closeMenu"]);

const direction = useLangStore().current_lang == "ar" ? "right" : "left";
const _show = computed(() => {
  return props.show;
});

watch(_show, (newVal) => {
  if (newVal) {
    document.querySelector("body").classList.add("noScroll");
  } else {
    document.querySelector("body").classList.remove("noScroll");
  }
});
</script>

<style lang="scss" scoped>
.menu_container {
  .backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    cursor: auto;
  }

  main.main_body:not(.insideMenu) {
    padding-top: 50px;
    overflow: hidden;
    width: 300px;
    position: fixed;
    top: 0;
    background: red;
    background: var(--main_bg);
    height: 100%;
    overflow-y: scroll;
    transition: all 0.2s linear;
    z-index: 999;
    cursor: auto;

    &.left {
      left: 0;
      .close {
        left: 20px;
      }
    }
    &.right {
      right: 0;
      .close {
        right: 20px;
      }
    }

    @media (max-width: 400px) {
      width: 100%;
    }

    .close {
      position: absolute;
      top: 20px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--app_color);
      border-radius: 50%;
      z-index: 99;

      &.chat_icon {
        background: #fff;
      }
      color: #fff;

      i {
        color: #fff;
        font-size: 20px;
      }
    }
  }
}
</style>
