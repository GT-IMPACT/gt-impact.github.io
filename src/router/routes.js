const routes = [
  /*{
    path: '/',
    component: () => import('layouts/MainLayout'),
    children: [
      {path: '', component: () => import('pages/Index')}
    ]
  }, */{
    path: '/about',
    component: () => import('layouts/MainLayout'),
    children: [
      {path: '', component: () => import('pages/About')}
    ]
  }, {
    path: '/download',
    component: () => import('layouts/MainLayout'),
    children: [
      {path: '', component: () => import('pages/Download')}
    ]
  }, {
    path: '/',
    component: () => import('layouts/MainLayout'),
    children: [
      {
        path: '',
        component: () => import('pages/Wiki'),
      },
      {
        path: '/machines',
        component: () => import('pages/wiki/Machines')
      },
      {
        path: '/mechanics',
        component: () => import('pages/wiki/Mechanics')
      },
      {
        path: '/items',
        component: () => import('pages/wiki/ItemsAndTools')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
