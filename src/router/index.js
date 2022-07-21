import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/Main.vue";
import LoginPage from "../views/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/login",
        name: "login",
        component: LoginPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
