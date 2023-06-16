import axios from "axios";

import { useAuthStore } from "@/stores/auth";
import { useLangStore } from "@/stores/lang";

export default defineNuxtPlugin((NuxtApp) => {
  const USER_TOKEN = useAuthStore().user.token;
  const CURRENT_LANG = useLangStore().current_lang;

  // ****** Global Headers
  axios.defaults.baseURL = "https://develobug.com/zal/public/provider/"; // baseurl
  axios.defaults.headers.common["cache-control"] = "no-cache";
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common["Accept-language"] = CURRENT_LANG;
  axios.defaults.headers.common["lang"] = CURRENT_LANG;

  // *** Set Token If Exists
  if (USER_TOKEN) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + USER_TOKEN;
  }

  // *** Interceptors
  // ** request
  axios.interceptors.request.use(
    function (config) {
      // NuxtApp.$NProgress.start();
      return config;
    },
    function (error) {
      // NuxtApp.$NProgress.done();
      return Promise.reject(error);
    }
  );

  // ** response
  axios.interceptors.response.use(
    function (response) {
      NuxtApp.$NProgress.done();
      return response;
    },
    function (error) {
      NuxtApp.$NProgress.done();
      if (
        error.response.status == "401" &&
        error.response.config.url != "login" &&
        error.response.config.url != "logout"
      ) {
        //   store.dispatch('auth_module/logOut', { serverlogOut: true })
      }
      return Promise.reject(error);
    }
  );

  return {
    provide: {
      axios,
    },
  };
});
