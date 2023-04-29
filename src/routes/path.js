export const path = {
  feature: {
    url: "feature",
    route: "feature",
    url: "/feature/",
    innerPages: {
      new: {
        route: "new",
        url: "/feature/new",
        innerPages: {
          n2: { url: "/feature/new/n2", route: "n2" },
          n3: { url: "/feature/new/n3", route: "n3" },
        },
      },
    },
  },
};
