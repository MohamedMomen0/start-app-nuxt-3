import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const USER_TOKEN = useAuthStore().user.token;
  if (to.meta.requireAuth && !USER_TOKEN) {
    // 1- Show Message Not Authorized
    // ...
    // 2- Cancel Navigation
    if (from.href) {
      /* {{If}} Means that you navigate throw a link normaly */
      return navigateTo("/authentication/login");
    } else {
      /* {{Else}} Means that you navigate throw writing in the web search dircetly */
      return navigateTo("/authentication/login");
    }
  }
});
