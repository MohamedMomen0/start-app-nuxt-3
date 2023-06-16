<template>
  <nav
    class="theNav custom_card"
    :class="{ stikyNav: stikyNav, inView: inView }"
  >
    <div class="logo_links_side">
      <!-- ============== Logo -->
      <Logo />
      <!-- ============== Links -->
      <links-menu :links="links"></links-menu>
    </div>

    <div class="actions_side">
      <!-- ============== Actions -->
      <div class="actions">
        <!-- ** Search -->
        <search-menu url="/lol"></search-menu>

        <!-- ** notification -->
        <notification-menu
          :image="user.image"
          v-if="user.token"
          url="/lol"
        ></notification-menu>

        <!-- ** Theme -->
        <change-theme></change-theme>

        <!-- ** User -->
        <user-menu v-if="user.token"></user-menu>

        <!-- ** Login -->
        <base-button link to="/authentication/login">Login</base-button>

        <!-- ** Language -->
        <switch-language></switch-language>
      </div>

      <!-- ============== ToggleMenu -->
      <toggle-links-menu :links="links"></toggle-links-menu>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from "~/stores/auth";
const user = useAuthStore().user;

const links = reactive([
  {
    title: "home",
    path: "/",
  },
  {
    title: "stories",
    path: "/",
  },
  {
    title: "offers",
    path: "/",
  },
  {
    title: "favors",
    path: "/",
  },
  {
    title: "wallat",
    path: "/",
  },
]);

let stikyNav = ref(false);
let inView = ref(false);

onMounted(() => {
  const BODY = document.querySelector("body");
  const NAV_HEIGHT = document.querySelector(".theNav").clientHeight;

  window.addEventListener("scroll", () => {
    let documentScrollTop = document.documentElement.scrollTop;

    if (documentScrollTop > NAV_HEIGHT * 6) {
      BODY.style.paddingTop = NAV_HEIGHT + "px";
    } else {
      BODY.style.paddingTop = 0;
    }

    stikyNav = documentScrollTop > NAV_HEIGHT * 6;
    inView = documentScrollTop > 8 * NAV_HEIGHT;
  });
});
</script>

<style lang="scss">
.theNav {
  background: var(--main_bg);
  position: relative;
  top: 0;
  transition: all 0.3s linear;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 15px 10px;

  .logo_links_side {
    display: flex;
    align-items: center;
  }

  .actions_side {
    margin-inline-start: auto;
    display: flex;
    align-items: center;

    // Actions
    .actions {
      display: flex;
      justify-content: center;
      align-content: center;

      i {
        font-size: 25px;
        transition: all 0.2s linear;
        cursor: pointer;

        &:hover {
          color: var(--app_color);
        }
      }

      .user {
        cursor: pointer;
        height: 35px;
        border-radius: 50%;

        & > img {
          height: 100%;
          border-radius: 50%;
        }

        @media (max-width: 992px) {
          height: 30px;
        }
      }

      & > * {
        margin: 0 10px;

        @media (max-width: 500px) {
          margin: 0 10px;
        }
      }
    }

    // ToggleMenu
    .toggleMenu {
      display: block;
      margin-top: 8px;
      margin-inline-start: 13px;
      cursor: pointer;

      i {
        font-size: 25px;
      }

      @media (min-width: 992px) {
        display: none;
      }
    }
  }

  &.stikyNav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    border-bottom: 1.5px solid var(--inputBorder);
    box-shadow: 0 0 10px var(--mainShadow);
    transform: translate(0, -200px);
  }
  &.inView {
    transform: translate(0, 0);
  }

  @media (max-width: 992px) {
    padding-top: 15px;

    .logo_links_side {
      .logo {
        margin-inline-end: auto;
        img {
          height: 50px;
        }
      }

      ul.links {
        display: none;
      }
    }

    .actions_side {
      .actions {
        & > a,
        .language {
          display: none;
        }
      }
    }
  }
}
</style>
