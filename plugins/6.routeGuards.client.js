import { useGlobalStore } from "~/stores/global";

export default defineNuxtPlugin((NuxtApp) => {
  const global_store = useGlobalStore();
  NuxtApp.$router.afterEach((to, from) => {
    NuxtApp.$NProgress.start();
    global_store.loading = true;
  });
  NuxtApp.$router.afterEach((to, from) => {
    NuxtApp.$NProgress.done();
    global_store.loading = false;
  });
});
