import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/solutions",
    name: "Solutions",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView"),
  },
  {
    path: "/prix",
    name: "Prix",
    component: () =>
      import(/* webpackChunkName: "hello" */ "../views/HomeView"),
  },
  {
    path: "/ressources",
    name: "Ressources",
    component: () =>
      import(/* webpackChunkName: "hello" */ "../views/Login.vue"),
  },
  {
    path: "/qui-sommes-nous",
    name: "Qui sommes nous",
    component: () =>
      import(/* webpackChunkName: "hello" */ "../views/Login.vue"),
  },
  {
    path: "/detail",
    name: "Qui sommes nous",
    component: () => import(/* webpackChunkName: "hello" */ "../views/detail"),
  },

  {
    path: "/fin_commande",
    // name: "Qui sommes nous",
    component: () =>
      import(/* webpackChunkName: "hello" */ "../views/fin_commande"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from) => {
//   if (to.path === "/") {
//     return "/login";
//   }
// });

export default router;
