import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { redirect: '/home', path: '/' },
  {
    name: 'home',
    component: () => import('../components/Home.vue'),
    path: '/home',
    children: [
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
      }, {
        name: 'weather',
        path: 'weather',
        component: () => import('../components/23-03-12/ZWeather.vue'),
      }, {
        name: 'vrView',
        path: 'vrView',
        component: () => import('../components/23-05-04/VrView.vue'),
      }, {
        name: 'plumBlossom',
        path: 'plumBlossom',
        component: () => import('../components/PlumBlossom.vue'),
      }, {
        name: 'zLoading',
        path: 'zLoading',
        component: () => import('../components/animations/ZLoading.vue'),
      },
    ],
  },

]
