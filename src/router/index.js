import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/Committee/MainPage.vue'
import MembersC from '@/views/Committee/MembersC.vue'
import MembersF from '@/views/Committee/MembersF.vue'
import Request from '@/views/Committee/Request.vue'
import AboutC from '@/views/Committee/About.vue'
import RequestsC from '@/views/Committee/RequestsC.vue'

import Accreditation  from '@/views/Federation/Requests/Accreditation.vue'
import Trainer        from '@/views/Federation/Requests/Trainer.vue'
import Sportsman      from '@/views/Federation/Requests/Sportsman.vue'
import Judge          from '@/views/Federation/Requests/Judge.vue'

import AccreditationDoc from '@/views/Federation/Docs/AccreditationDoc.vue'
import SportsmanDoc     from '@/views/Federation/Docs/SportsmanDoc.vue'
import TrainerDoc       from '@/views/Federation/Docs/TrainerDoc.vue'
import JudgeDoc         from '@/views/Federation/Docs/JudgeDoc.vue'
//import CalPlan        from '@/views/Committee/CalPlan.vue'


import AboutF from '@/views/Federation/About.vue'
import Members from '@/views/Federation/Members.vue'
import Table from '@/views/Federation/Table.vue'
import RequestsF from '@/views/Federation/Requests.vue'
import CreateDocF from '@/views/Federation/CreateDoc.vue'

import Autorization from '@/views/Autorization/Autorization.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { // дефолт
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
      path: '/Federation/Trainer',
      name: 'Trainer',
      component: Trainer
    },
    {
      path: '/Federation/Sportsman',
      name: 'Sportsman',
      component: Sportsman
    },
    {
      path: '/Federation/Judge',
      name: 'Judge',
      component: Judge
    },
    {
      path: '/Federation/TrainerDoc',
      name: 'TrainerDoc',
      component: TrainerDoc
    },
    {
      path: '/Federation/JudgeDoc',
      name: 'JudgeDoc',
      component: JudgeDoc
    },
    {
      path: '/Federation/AccreditationDoc',
      name: 'AccreditationDoc',
      component: AccreditationDoc
    },
    {
      path: '/Federation/SportsmanDoc',
      name: 'SportsmanDoc',
      component: SportsmanDoc
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
