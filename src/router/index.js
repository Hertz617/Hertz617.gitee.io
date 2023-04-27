//route 访问路径，路由
//router 路由管理者
import { createRouter, createWebHashHistory } from 'vue-router';
// 创建路由实例并传递 `routes` 配置const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//创建路由 route
//ES6 import输入  export输出
//模块化 默认私有 如何被使用 export输出
import Index from '../views/static/Index.vue'
import User from '../views/static/user.vue'
import Info from '@/views/static/info.vue'
import Footer from '@/layout/footer.vue'
import Header from '@/layout/header.vue'
import LayoutAdmin from '@/layout/admin/index.vue'
const routes = [
    {
        path: '/',//访问路由
        name: 'home',//命名路由
        components: {
            default: Index,
            Footer,
            Header
        }//页面组件 componets 普通组件 页面组件和普通组件是一对多
    },
    {
        path: '/index',//访问路由
        redirect: '/'//重定向
    },
    {
        path: '/user',
        name: 'user',
        component: User,
        meta:{
            title:'user'
        }
    },
    {
        path: '/user/:id(\\d+)',
        name: 'userId',
        component: User
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/static/login.vue')//懒加载
    },
    {
        path: '/object',
        name: 'object',
        component: () => import('../views/static/object.vue'),
        children: [
            {
                path: 'info',
                component: Info
            }

        ]
    },
    {
        path: '/shop',
        name: 'shop',
        component: () => import('../views/static/shop.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/static/cart.vue')
    },
    {
        path:'/admin',
        name:'admin',
        component:LayoutAdmin,
        children:[
            {
                path:'',
                name:'admin-index',
                component:()=>import('@/views/admin/index.vue')
            },
            {
                path:'info',
                name:'admin-info',
                component:()=>import('@/views/admin/info.vue')
            },
            {
                path:'logout',
                name:'admin-logout',
                component:()=>import('@/views/admin/logout.vue')
            },
            {
                path:'changePW',
                name:'admin-changePW',
                component:()=>import('@/views/admin/changePW.vue')
            },
            {
                path:'forgetPW',
                name:'admin-forgetPW',
                component:()=>import('@/views/admin/forgetPW.vue')
            },
        ]
    },






    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../views/404.vue')
    },

    //    { path: '/', component: Home },
    //    { path: '/about', component: About },
]
//创建路由管理 router
const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes,
}
);
// router.beforeEach((to, from, next) => {
//     console.log(to, from)
//     if (to.name !== 'cart') {
//         next({ name: 'cart' })
//     } else {
//         next();
//     }

// })
//导出路由
export default router;