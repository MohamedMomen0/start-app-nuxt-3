import axios from "axios";
import { useLangStore } from "./lang";

export const useAuthStore = defineStore("auth", () => {
  const nuxtApp = useNuxtApp();
  const user = ref({
    id: null,
    name: null,
    token: null,
    usertype: null,
    image: null,
    phone: null,
  });

  const verify_code = ref(null);
  const email = ref(null);

  const logOut = () => {
    let langStore = useLangStore();
    axios({
      method: "post",
      url: "logout",
    })
      .then(() => {
        nuxtApp.$iziToast.success({
          message:
            langStore.current_lang == "en"
              ? "Logout Successed"
              : "تم تسجيل الخروج بنجاح",
          position: "topCenter",
        });

        nuxtApp.$encryptStorage.removeItem("blank_App_User_Id");
        nuxtApp.$encryptStorage.removeItem("blank_App_User_Name");
        nuxtApp.$encryptStorage.removeItem("blank_App_Token");
        nuxtApp.$encryptStorage.removeItem("blank_App_User_Type");
        nuxtApp.$encryptStorage.removeItem("blank_App_userImg");
        nuxtApp.$encryptStorage.removeItem("blank_App_userPhone");

        this.user.id = null;
        this.user.name = null;
        this.user.token = null;
        this.user.image = null;
        this.user.usertype = null;
        this.user.phone = null;

        setTimeout(() => {
          location.reload();
        }, 500);
      })
      .catch((err) => {
        nuxtApp.$iziToast.error({
          message: err.response.data.message,
        });
      });
  };

  const logIn = (loginData) => {
    let langStore = useLangStore();

    nuxtApp.$encryptStorage.setItem("blank_App_User_Id", loginData?.id || null);
    nuxtApp.$encryptStorage.setItem(
      "blank_App_User_Name",
      loginData?.token || null
    );
    nuxtApp.$encryptStorage.setItem(
      "blank_App_Token",
      loginData?.token || null
    );
    nuxtApp.$encryptStorage.setItem(
      "blank_App_User_Type",
      loginData?.userType || null
    );
    nuxtApp.$encryptStorage.setItem(
      "blank_App_userImg",
      loginData?.image || null
    );
    nuxtApp.$encryptStorage.setItem(
      "blank_App_userPhone",
      loginData?.phone || null
    );

    nuxtApp.$iziToast.success({
      message:
        langStore.current_lang == "en" ? "Welcome to App" : "App مرحبا بك في",
      position: "topCenter",
    });

    setTimeout(() => {
      location.reload();
    }, 500);
  };

  return { user, verify_code, email, logOut, logIn };
});
