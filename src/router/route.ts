import {RouteRecordRaw} from 'vue-router'


export const routes: RouteRecordRaw[] = [
    {redirect: '/home', path: '/'},
    {
        name: 'home', component: () => import('../components/Home.vue'), path: '/home', children: [
            {
                name: 'checkBrowser',
                component: () => import('../components/22-08-28/CheckBrowser.vue'),
                path: 'checkBrowser',
            }, {
                name: 'volumeBar',
                component: () => import('../components/22-08-29/VolumeBar.vue'),
                path: 'volumeBar',
            }, {
                name: 'tabBar',
                path: 'tabBar',
                component: () => import('../components/22-08-30/TabBar.vue'),
            }, {
                name: 'marqueeDiv',
                path: 'marqueeDiv',
                component: () => import('../components/22-09-21/MarqueeDiv.vue'),
            }, {
                name: 'learnSCSS',
                path: 'learnSCSS',
                component: () => import('../components/22-12-17/LearnSCSS.vue'),
            },
        ],
    },

]
