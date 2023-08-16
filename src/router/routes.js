
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'DiscoveryBibleStudy',
        path: '/',
        component: () => import('pages/DiscoveryBibleStudy.vue')
      },
      {
        name: 'DiscoveryBibleStudy',
        path: 'dbs/:languageCodeHL1?/:languageCodeHL2?/:session?',
        component: () => import('pages/DiscoveryBibleStudy.vue')
      },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
