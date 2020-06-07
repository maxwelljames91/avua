import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout3.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Agenda', component: () => import('pages/Agenda.vue') },
      { path: 'Cursos', component: () => import('pages/Cursos.vue') },
      { path: 'Quadros', component: () => import('pages/Quadros.vue') },
      { path: 'QuemSomos', component: () => import('pages/Somos.vue') }
    ]
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
