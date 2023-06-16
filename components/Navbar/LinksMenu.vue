<template>
  <ul class="links">
    <li
      @click="$emit('linkClicked')"
      class="link"
      v-for="link in links"
      :key="link.id"
    >
      <template v-if="link.path">
        <NuxtLink :to="link.path">
          <span class="text">{{ link.title }}</span>
        </NuxtLink>
      </template>

      <template v-else>
        <button @click="helper_scrollToElement(link.sectionId)">
          <span class="text">{{ link.title }}</span>
        </button>
      </template>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
html {
  ul.links {
    display: flex;
    justify-content: center;
    align-items: center;

    li.link {
      a,
      button {
        display: block;
        cursor: pointer;
        padding: 3px 20px;
        background: var(--main_bg);
        color: var(--main);
        font-size: 15px;
        transform: skew(-30deg);
        transition: all 0.2s ease-in-out;

        &:hover,
        .router-link-exact-active {
          background: var(--app_color);
          color: var(--anti_main);
        }

        span.text {
          display: block;
          transform: skew(30deg);
        }
      }
    }
  }

  &.darkTheme {
    ul.links {
      li.link {
        a,
        button {
          &:hover,
          .router-link-exact-active {
            background: var(--app_color);
            color: var(--main);
          }
        }
      }
    }
  }
}
</style>
