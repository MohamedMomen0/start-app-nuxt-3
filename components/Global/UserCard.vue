<template>
  <div class="userCard">
    <div class="image">
      <img :src="src" alt="" />
    </div>

    <div class="_info">
      <h5>{{ title }}</h5>
      <span>{{ desc }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["title", "desc", "src"],

  computed: {
    ...mapGetters({
      user: "auth_module/currentUser",
    }),
  },
};
</script>

<style lang="scss" scoped>
.userCard {
  padding: 20px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  .image {
    img {
      height: 80px;
      width: 80px;
      margin-inline-end: 15px;
      border-radius: 50%;
    }
  }
}

._info {
  line-height: 1.2;
  h5 {
  }
  span {
    color: gray;
    font-size: 15px;
  }
}
</style>
