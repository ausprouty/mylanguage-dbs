
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'DiscoveryBibleStudy',
        path: '/dbs',
        component: () => import('pages/DiscoveryBibleStudy.vue')
      },
      {
        name: 'AudioSample',
        path: '/audioSample',
        component: () => import('pages/AudioSample.vue')
      },
      {
        name: 'LifePrinciples',
        path: 'life/:languageCodeHL1?/:languageCodeHL2?/:session?',
        component: () => import('pages/LifePrinciples.vue')
      },



      {
        name: 'CountryLanguages',
        path: 'languages/:countryCode/:countryName',
        component: () => import('pages/CountryLanguages.vue')
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
        name: 'MapWorld',
        path: '/',
        component: () => import('src/pages/MapContinents.vue')
      },
      {
        name: 'MapAfrica',
        path: '/map/africa',
        component: () => import('src/pages/MapAfrica.vue')
      },
      {
        name: 'MapSouthAmerica',
        path: '/map/south_america',
        component: () => import('src/pages/MapSouthAmerica.vue')
      },
      {
        name: 'VideoPage',
        path: 'video/:languageCodeHL1?/:languageCodeHL2?/:segment?',
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
