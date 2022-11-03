import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
import HomePage from "@/components/HomePage";
import DownloadPage from "@/components/DownloadPage";
const router = new VueRouter({
    routes:[
        {path:"/" ,redirect:"/homePage"},
        {path:"/homePage",component:HomePage},
        {path:"/downloadPage",component:DownloadPage},
    ]
})

export default router