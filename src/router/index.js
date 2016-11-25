import Vue from 'vue'
import VueRouter from 'vue-router'

import List from '../views/index/list.vue'
import Themes from '../views/index/themes.vue'

const Default1 = { template: '<div>default</div>' }


import AATest from '../views/index/test.vue'


Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'index',
            // component: AATest
            component: List
            // component: (resolve) => {
                // require(['../views/index/list.vue'], resolve)
                // require([List], resolve)
            //     require([Default1], resolve)
            // }
        },
        {
            path: '/themes',
            name: 'themes',
            component: Themes
            // component: List
            // component: Default1

            // component: (resolve) => {
                // require(['../views/index/themes.vue'], resolve)
            //     require([Themes], resolve)
            // }
        },
        {
            path: '/themes/:id',
            name: 'theme-list',
            component: (resolve) => {
                require(['../views/index/themeList.vue'], resolve)
            }
        },
        {
            path: '/news/:id',
            name: 'news',
            // component: Default1
            component: (resolve) => {
                require(['../views/index/news.vue'], resolve)
            }
        },
        {
            path: '/about/',
            name: 'about',
            component: (resolve) => [
                require(['../views/index/about.vue'], resolve)
            ]
        }
    ]
})

// const router1 = new VueRouter({
//     mode: 'history',
//     base: __dirname,
//     routes: [
//         {path: '/', component: Home, name: 'aaa'}
//     ]
// })

export default router
