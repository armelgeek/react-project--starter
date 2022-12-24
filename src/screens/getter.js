import * as screens from "./pages";
const pages = () => {
  let array = [];
  const allPages = Object.keys(screens);
  allPages.forEach((page) => {
    const getterPages = Object.keys(screens[page].getter);
    getterPages.forEach((route) => {
      array.push({
        private: false,
        exact: true,
        path: `/${page}/${route}`,
        render: screens[page].getter[route],
      });
    });
  });
  return array;
};
const usePage = (page, route) => {
  return `/${page}/${route}`;
};
export { pages, usePage };
