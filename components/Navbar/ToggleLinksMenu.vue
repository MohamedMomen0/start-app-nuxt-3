<template>
  <div class="toggleMenu" @click="show = !show">
    <Icon name="codicon:three-bars" />

    <side-menu :show="show" @close="show = false">
      <!-- ** Logo-->
      <div class="logo">
        <NuxtLink to="/"><img :src="logo" alt="mainLogo" /></NuxtLink>
      </div>

      <links-menu
        @linkClicked="show = false"
        :links="links"
        class="smallScreen"
      ></links-menu>

      <div class="actions_side">
        <!-- ** Language -->
        <switch-language class="smallScreen"></switch-language>

        <!-- ** Login -->
        <base-button v-if="!user.token" link to="/authentication/login">
          login
        </base-button>
      </div>
    </side-menu>
  </div>
</template>

<script setup>
const props = defineProps(["links"]);

const logo = useLogo();

const show = ref(false);

const user = ref({ token: true });
</script>

<style lang="scss">
.theNav {
  .toggleMenu {
    .logo {
      img {
        height: 100px !important;
        margin: 15px auto;
        display: block;
      }
    }

    ul.links.smallScreen {
      display: block;
      flex-direction: column;
      padding: 10px;

      li.link {
        margin: 10px auto;
        width: fit-content;
      }
    }

    .actions_side {
      display: flex;
      flex-direction: column;

      .language {
        margin: 25px 0;
        width: fit-content;
      }
    }
  }
}
</style>
