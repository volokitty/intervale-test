import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/pages/Home.vue";
import Entity from "@/pages/Entity.vue";
import EntityElement from "@/pages/EntityElement.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/:entity",
    component: Entity,
  },
  {
    path: "/:entity/:id",
    component: EntityElement,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
