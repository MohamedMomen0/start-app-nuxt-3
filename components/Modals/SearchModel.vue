<template>
  <transition name="fadeIn">
    <div v-if="show" class="searchModel" @click="$emit('close')">
      <main @click.stop>
        <span @click.stop="$emit('close')" class="close"
          ><Icon name="fa:close"
        /></span>

        <v-form @submit.prevent="submit">
          <!-- <base-input
            :keywords="keywords"
            @insideSubmit="submit"
            @setSerchTag="setSerchTag"
            type="search"
            :placeholder="$t('search.whole_title')"
            v-model="searchVal"
          ></base-input> -->
        </v-form>
      </main>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps(["show"]);

const keywords = ref([
  {
    id: 1,
    title: "keyword1",
  },
  {
    id: 2,
    title: "keyword2",
  },
  {
    id: 3,
    title: "keyword3",
  },
  {
    id: 4,
    title: "keyword4",
  },
]);

const searchVal = ref("");
const setSerchTag = (val) => {
  searchVal.value = val;
};

const submit = () => {};
</script>

<style lang="scss" scoped>
.searchModel {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(117, 19, 93, 0.73)
    ),
    url("../../assets/media/images/bg/search.jpg");
  background-position: center;
  background-size: cover;
  inset: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 600px;
    @media (max-width: 620px) {
      width: 98vw;
    }
  }

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

    i {
      color: #fff;
      font-size: 20px !important;
    }

    &:hover {
      i {
        color: #fff !important;
      }
    }
  }
}
</style>
