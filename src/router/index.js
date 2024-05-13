import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/Committee/MainPage.vue'
import MembersC from '@/views/Committee/MembersC.vue'
import MembersF from '@/views/Committee/MembersF.vue'
import Request from '@/views/Committee/Request.vue'
import AboutC from '@/views/Committee/About.vue'
import RequestsC from '@/views/Committee/RequestsC.vue'

// import Trainer from '@/views/Committee/Requests/Trainer.vue'
// import Sportsman from '@/views/Committee/Requests/Sportsman.vue'
// import Judge from '@/views/Committee/Requests/Judge.vue'
import CalPlan from '@/views/Committee/CalPlan.vue'


import AboutF from '@/views/Federation/About.vue'
import Members from '@/views/Federation/Members.vue'
import Table from '@/views/Federation/Table.vue'
import RequestsF from '@/views/Federation/Requests.vue'
import Accreditation from '@/views/Federation/Requests/Accreditation.vue'
import CreateDocF from '@/views/Federation/CreateDoc.vue'

import Autorization from '@/views/Autorization/Autorization.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/Committee/membersC',
      name: 'MembersC',
      component: MembersC
    },
    {
      path: '/Committee/membersF',
      name: 'MembersF',
      component: MembersF
    },
    {
      path: '/Committee/requests',
      name: 'RequestsC',
      component: RequestsC
    },
    {
      path: '/Committee/about',
      name: 'AboutC',
      component: AboutC
    },
    {
      path: '/Committee/accreditation',
      name: 'Accreditation',
      component: Accreditation
    },
    {
      path: '/Committee/request',
      name: 'Request',
      component: Request
    },
    // {
    //   path: '/Committee/calplan',
    //   name: 'CalPlan',
    //   component: CalPlan
    // },
    {
      path: '/Federation/about',
      name: 'AboutF',
      component: AboutF
    },
    {
      path: '/Federation/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/Federation/members',
      name: 'Members',
      component: Members
    },
    {
      path: '/Federation/requests',
      name: 'Requests',
      component: RequestsF
    },
    {
      path: '/Federation/Accreditation',
      name: 'Accreditation',
      component: Accreditation
    },
    {
      path: '/Federation/CreateDoc',
      name: 'CreateDoc',
      component: CreateDocF
    },
    {
      path: '/autorization',
      name: 'Autorization',
      component: Autorization
    },
  ]
})

export default router;
