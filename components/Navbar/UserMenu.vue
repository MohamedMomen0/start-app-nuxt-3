<template>
  <div class="user">
    <NuxtLink to="/profile">
      <img :src="image || placeholder_image" alt="" />
    </NuxtLink>
  </div>
</template>

<script setup>
import placeholder_image from "@/assets/media/images/avatars/user_placholder.jpg";
const props = defineProps(["image"]);
</script>

<style lang="scss" scoped>
.userImage {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  object-fit: cover;
}
.list {
  padding: 30px 15px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.186);

  .item {
    margin: 25px 0;

    a {
      display: flex;
      align-items: center;

      &:hover {
        h5 {
          color: #2435da;
        }
      }

      img {
        height: 50px;
        margin-inline-end: 10px;
      }

      h5 {
        transition: all 0.2s linear;
        margin-top: 10px;
      }
    }
  }
}
</style>
