<template>
  <div class="language" @click="switchLang">
    <img :src="langIcon" />
  </div>
</template>

<script setup>
import icon_ar from "@/assets/media/icons/ar.png";
import icon_en from "@/assets/media/icons/en.png";

import { useLangStore } from "~/stores/lang";
const lang_store = useLangStore();
const lang = lang_store.current_lang;

const langIcon = computed(() => {
  if (lang == "en") {
    return icon_ar;
  } else {
    return icon_en;
  }
});

const switchLang = () => {
  lang_store.switchLang();
};
</script>

<style lang="scss" scoped>
.language {
  display: flex;
  align-items: center;

  img {
    height: 33px;
  }

  // &.smallScreen {
  //   margin: 15px auto;
  //   width: fit-content;
  // }
}
</style>
