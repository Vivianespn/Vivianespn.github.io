import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import About from '../views/about.vue';
import Projects from '../views/projects.vue';
import Contact from '../views/contact.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
