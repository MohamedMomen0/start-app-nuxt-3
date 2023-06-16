import { EncryptStorage } from "encrypt-storage";

export default defineNuxtPlugin(({ vueApp }) => {
  const encryptStorage = new EncryptStorage("hash-123-amoz");
  return {
    provide: {
      encryptStorage,
    },
  };
});
