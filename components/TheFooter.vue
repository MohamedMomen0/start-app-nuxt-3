<template>
  <footer class="theFooter custom_card">
    <div class="copyRight">Copyright © {{ new Date().getFullYear() }} O_M</div>

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
          <button @click="scrollToElement(link.sectionId)">
            <span class="text">{{ link.title }}</span>
          </button>
        </template>
      </li>
    </ul>

    <div class="socials">
      <a href="">
        <span class="social facebook">
          <Icon name="fa6-brands:facebook-f" />
        </span>
      </a>
      <a href="">
        <span class="social twitter">
          <Icon name="fa6-brands:twitter" />
        </span>
      </a>
      <a href="">
        <span class="social linkedin">
          <Icon name="fa6-brands:linkedin-in" />
        </span>
      </a>
      <a href="">
        <span class="social instagram">
          <Icon name="fa6-brands:instagram" />
        </span>
      </a>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const { scrollToElement } = useHelpers();

const links = ref([
  {
    title: t("footer.aboutUs"),
    sectionId: "#aboutUs",
  },
  {
    title: t("footer.terms"),
    path: "/terms",
  },
  {
    title: t("footer.policy"),
    path: "/policy",
  },
  {
    title: t("footer.services"),
    path: "/services",
  },
]);
</script>

<style lang="scss" scoped>
footer.theFooter {
  background: var(--main_bg);
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1070px) {
    flex-direction: column;

    .copyRight {
      margin-top: 10px;
    }

    .links {
      margin-block: 20px;
      flex-direction: column;

      .link {
        margin-block: 4px;
        &::after {
          display: none !important;
        }
      }
    }
  }

  .copyRight {
    font-size: 13px;
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;

    .link {
      font-size: 15px;
      margin-inline: 30px;

      &:not(:last-child) {
        position: relative;

        &::after {
          content: "";
          display: block;
          width: 5px;
          height: 5px;
          background: var(--main);
          border-radius: 50%;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -30px;
        }
      }

      span {
        color: var(--main);
      }
    }
  }

  .socials {
    display: flex;
    .social {
      margin: 15px 10px;
      width: 30px;
      height: 30px;
      background: #333;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: #fff;
      transition: all 0.4s ease-in-out;
      i {
        transition: all 0.4s ease-in-out;
        font-size: 15px;
      }
      &:hover {
        i {
          transform: rotate(360deg);
        }
        &.facebook {
          background: var(--facebook);
        }
        &.twitter {
          background: var(--twitter);
        }
        &.linkedin {
          background: var(--linkedin);
        }
        &.instagram {
          background: var(--instagram);
        }
      }
    }
  }
}
</style>
