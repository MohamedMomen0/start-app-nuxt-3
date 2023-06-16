import { useThemeStore } from "~/stores/theme";
import { useLangStore } from "~/stores/lang";
import { useAuthStore } from "~/stores/auth";

export default defineNuxtPlugin((nuxtApp) => {
  // Theme
  const theme_store = useThemeStore();
  theme_store.current_theme =
    nuxtApp.$encryptStorage.getItem("blank_App_Theme") ||
    theme_store.default_theme;

  // Lang
  const lang_store = useLangStore();
  lang_store.current_lang = nuxtApp.$encryptStorage.getItem("blank_App_Lang");

  // Auth
  const auth_store = useAuthStore();
  auth_store.user = {
    id: nuxtApp.$encryptStorage.getItem("blank_App_User_Id"),
    name: nuxtApp.$encryptStorage.getItem("blank_App_User_Name"),
    token: nuxtApp.$encryptStorage.getItem("blank_App_Token"),
    usertype: nuxtApp.$encryptStorage.getItem("blank_App_User_Type"),
    image: nuxtApp.$encryptStorage.getItem("blank_App_userImg"),
    phone: nuxtApp.$encryptStorage.getItem("blank_App_userPhone"),
  };
});
