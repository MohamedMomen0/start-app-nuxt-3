export const useHelpers = () => {
  const route = useRoute();
  const router = useRouter();

  return {
    scrollToElement: (sectionId) => {
      if (route.path == "/") {
        const el = document.querySelector(`${sectionId}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        new Promise((resolve, reject) => {
          resolve(router.push("/"));
        }).then((res) => {
          setTimeout(() => {
            const el = document.querySelector(`${sectionId}`);
            el.scrollIntoView({ behavior: "smooth" });
          }, 2000);
        });
      }
    },
  };
};
