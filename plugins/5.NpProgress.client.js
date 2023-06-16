import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default defineNuxtPlugin(({ vueApp }) => {
  return {
    provide: {
      NProgress,
    },
  };
});
