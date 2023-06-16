import { useThemeStore } from "~/stores/theme";
import { useLangStore } from "~/stores/lang";

export default defineNuxtPlugin((nuxtApp) => {
  // Theme
  const theme_store = useThemeStore();
  theme_store.handleTheme();

  // Lang
  const lang_store = useLangStore();
  lang_store.handleLang();
});
