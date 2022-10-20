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
      path: "/about",
      name: "userDetails",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/pages/userDetails/UserDetails.vue"),
    },
  ],
});

export default router;
