export const useGlobalStore = defineStore("global", () => {
  const loading = ref(false);

  return { loading };
});
