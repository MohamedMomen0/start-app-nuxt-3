import { useThemeStore } from "~/stores/theme";

import logo_light from "@/assets/media/images/logo/logo_light.png";
import logo_dark from "@/assets/media/images/logo/logo_dark.png";

export const useLogo = () => {
  const theme = useThemeStore().current_theme;
  return computed(() => {
    if (theme == "light") {
      return logo_light;
    } else {
      return logo_dark;
    }
  });
};
