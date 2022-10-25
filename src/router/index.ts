import { createRouter, createWebHistory } from "vue-router";
import UsersList from "@/pages/usersList/blocks/UsersList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "usersList",
      component: UsersList,
    },
    {
      path: "/:login",
      name: "userDetails",
      component: () => import("@/pages/userDetails/blocks/UserDetails.vue"),
    },
  ],
});

export default router;
