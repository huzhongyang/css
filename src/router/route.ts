import { RouteRecordRaw } from 'vue-router'


export const routes: RouteRecordRaw[] = [
    { redirect: '/home', path: '/' },
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
            },
        ],
    },

]
