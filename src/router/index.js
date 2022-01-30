import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Disk from "../views/Disk.vue";
import Cpu from "../views/Cpu.vue";
import Memory from "../views/Memory.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    }
  },
  {
    path: "/disk",
    name: "Disk",
    component: Disk,
    meta: {
      title: "Diskkkkkbbb",
    }
  },
  {
    path: "/cpu",
    name: "Cpu",
    component: Cpu,
    meta: {
      title: "CPU",
    }
  },

  {
    path: "/memory",
    name: "Memory",
    component: Memory,
    meta: {
      title: "Memory",
    }
  },
];

const router = new VueRouter({
  //the default is (mode: "hash")
  //to understand the difference go to:
  //https://www.youtube.com/watch?v=js5Sr_ZSHDs&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=42
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
