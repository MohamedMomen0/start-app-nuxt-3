<template>
  <div>
    <h1>Login</h1>
    <NuxtLink to="/">Home</NuxtLink>

    <base-button @click="logIn">Login</base-button>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
useHead({
  title: "login Page",
});

definePageMeta({
  layout: "custome",
});

const logIn = () => {
  const user = {
    id: 5,
    name: "omar",
    phone: "01009867150",
    email: "tugrp@example.com",
    token: "asdwascascsadfggf fgh fghgfh fgh fgh hfghd cascsacascasasc",
  };
  useAuthStore().logIn(user);
};
</script>

<style lang="scss" scoped></style>
