import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import login from "../views/login.vue"
import register from "../views/register.vue"
import checkout from "../views/checkout.vue"
import user from "../views/user.vue"
import privacidade from "../views/privacidade.vue"
import cookies from "../views/cookies.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/AboutView.vue"),
        },
        {
            path:"/login",
            name: "login",
            component:login
        },
        {
            path:"/register",
            name: "register",
            component:register
        },
        {
            path:"/checkout",
            name:"checkout",
            component:checkout
        },
        {
            path:"/user",
            name:"user",
            component:user
        },
        {
            path:"/privacidade",
            name:"privacidade",
            component:privacidade
        },
        {
            path:"/cookies",
            name:"cookies",
            component:cookies
        },
        
    ],
});

export default router;
