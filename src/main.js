import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import Card from './components/Card.vue'
import Article from './components/Article.vue'
import ArticleList from './components/Article-List.vue'
import ArticleContent from './components/Article-Content.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/', name: 'card', component: Card },
  { path: '/article', component: Article,
    children: [
      { path: '', name: 'article-list', component: ArticleList },
      { path: ':num', name: 'article-content', component: ArticleContent },
      { path: 'label/:labelName', name: 'label-article-list', component: ArticleList }
    ]
  }
]

const router = new VueRouter({
  routes  // routes: routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
