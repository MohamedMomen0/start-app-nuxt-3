<template>
  <button v-if="!link" :class="{ disabled: diasabled || loading }">
    <span v-if="loading" class="btn_loader"></span>
    <slot></slot>
  </button>

  <NuxtLink v-else :to="to">
    <slot></slot>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  link: {
    type: Boolean,
    required: false,
    default: false,
  },
  to: {
    type: String,
    required: false,
    default: "/",
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
  diasabled: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
@keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

body {
  button,
  a {
    position: relative;
    text-decoration: none;
    padding: 0.1em 0.7em;
    font-size: 20px;
    display: inline-block;
    border-radius: 15px;
    color: var(--anti_main);
    background: var(--app_color);
    transition: all 0.2s linear;
    font-family: inherit;
    cursor: pointer;

    .btn_loader {
      position: absolute;
      left: 10px;
      top: 30%;
      width: 20px;
      height: 20px;
      padding: 2px;
      border: 3px dotted var(--main);
      border-style: solid solid dotted dotted;
      border-radius: 50%;
      transition: all 0.6s ease-in-out;
      display: inline-block;
      animation: rotation 1.5s linear infinite;
    }

    &.big {
      padding: 0.6em 2.5em;
    }

    &.disabled {
      pointer-events: none;
      color: gray;
      border-color: gray;
      background: transparent;
    }

    &.block_center {
      display: block;
      margin: 20px auto;
      width: fit-content;
    }

    &.dark {
      background-color: var(--main);
      border-color: var(--main);
      color: #fff;

      &:hover {
        background-color: #fff;
        border-color: var(--main);
        color: var(--main);
      }
    }

    &.flat {
      border: none;
    }

    &:hover,
    &:active {
      background-color: var(--app_color_hover);
      color: var(--anti_main);
    }
  }
}

html.darkTheme {
  body {
    button,
    a {
      background-color: var(--app_color);
      color: var(--main);

      &:hover,
      &:active {
        background-color: var(--app_color_hover);
        color: var(--main);
      }
    }
  }
}
</style>
