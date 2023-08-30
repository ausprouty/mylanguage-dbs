
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
        name: 'LifePrinciples',
        path: 'life/:languageCodeHL1?/:languageCodeHL2?/:session?',
        component: () => import('pages/LifePrinciples.vue')
      },
      {
        name: 'DiscoveryBibleStudy',
        path: 'dbs/:languageCodeHL1?/:languageCodeHL2?/:session?',
        component: () => import('pages/DiscoveryBibleStudy.vue')
      },

    {
      name: 'Language',
      path: 'language/:languageCodeHL1?/:languageCodeHL2?',
      component: () => import('pages/OurLanguages.vue')
    },
      {
        name: 'GospelTract',
        path: 'gospel/:languageCodeHL1?/:languageCodeHL2?',
        component: () => import('pages/Gospel.vue')
      },
      {
        name: 'VideoPage',
        path: 'video/:languageCodeHL1?/:languageCodeHL2?/:session?',
        component: () => import('src/pages/JesusVideo.vue')
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
