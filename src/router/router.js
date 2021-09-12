import Encounters from "../views/EncounterBuilder";
import MyEncounters from "../views/MyEncounters";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Encounters },
  { path: "/MyEncounters", component: MyEncounters },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
