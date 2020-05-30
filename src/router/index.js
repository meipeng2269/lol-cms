import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/categories/create',
        name: 'CategoryEdit',
        component: CategoryEdit
      },
      {
        path: '/categories/create/:id',
        name: 'CategoryEdit',
        component: CategoryEdit,
        props: true
      },
      {
        path: '/categoties/list',
        name: 'CategoryList',
        component: CategoryList
      },
      {
        path: '/items/create',
        name: 'ItemEdit',
        component: ItemEdit,
        props: true
      },
      {
        path: '/items/create/:id',
        name: 'ItemEdit',
        component: ItemEdit,
        props: true
      },
      {
        path: '/items/list',
        name: 'ItemList',
        component: ItemList
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
