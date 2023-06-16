<template>
  <div class="div">
    <h1>index page</h1>
    <NuxtLink to="/authentication/login">Login</NuxtLink> |
    <NuxtLink to="/policy">policy</NuxtLink>
    <v-btn color="primary">lol</v-btn>

    <v-form>
      <select-input v-model="city" getUrl="cities" label="City" />
      <select-input
        v-model="area"
        :getUrl="`areas?city_id=${city?.id}`"
        :_sync="city"
        label="Area"
      />
    </v-form>
  </div>
</template>

<script setup>
const city = ref(null);
const area = ref(null);

useHead({
  // meta: [{ name: "description", content: "My amazing site." }],
  // bodyAttrs: {
  //   class: "test",
  // },
  // script: [{ innerHTML: "console.log('Hello world')" }],
});

useSeoMeta({
  title: "Index Page SeoMeta",
  description: "My about page",
  ogDescription: "Still about my about page",
  ogTitle: "About",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>

<style lang="scss" scoped></style>
