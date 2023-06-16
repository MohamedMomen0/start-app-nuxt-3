import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const myCustomTheme = {
  colors: {
    primary: "#0ff",
  },
};

import { useThemeStore } from "~/stores/theme";

export default defineNuxtPlugin((nuxtApp) => {
  const theme_store = useThemeStore();

  const vuetify = createVuetify({
    theme: {
      defaultTheme: theme_store.current_theme,
      themes: {
        myCustomTheme,
        dark: {
          colors: {
            primary: "#ff0",
          },
        },
        light: {
          colors: {
            primary: "#f0f",
          },
        },
      },
    },
    ssr: true,
    components,
    directives,
  });

  nuxtApp.vueApp.use(vuetify);

  return {
    provide: {
      vuetify,
    },
  };
});
