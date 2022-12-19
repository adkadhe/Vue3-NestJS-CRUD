import { createRouter, createWebHistory } from "vue-router";
import AddView from "../views/AddView.vue";
import list from "../views/list.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/add",
      name: "add",
      component: AddView,
    },
    {
      path: "/",
      name: "list",
      component: list,
    },
  ],
});

export default router;
