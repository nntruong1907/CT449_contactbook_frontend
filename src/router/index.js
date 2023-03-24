import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import {useAccountStore} from "@/stores/AccountStore"

const routes = [
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/Register.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login.vue"),
    },

    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params và làm props
    },
    {
        path: "/add",
        name: "contact.add",
        component: () => import("@/views/ContactAdd.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const userStore = useAccountStore();
    if (!userStore.isLogin && to.name != "login" && to.name != "register") {
      next({
        path: "/login",
        replace: true,
      });
    }
    next();
  });

export default router;