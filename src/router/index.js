import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Test from '@/components/Test';
import Sidebar from '@/components/Sidebar';
import UserProfile from '@/components/Profil';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        default: Hello,
      },
    },
    {
      path: '/test',
      name: 'Test',
      components: {
        default: Sidebar,
        a: Test,
      },
      children: [
        {
          // `UserProfile` va être rendu à l'intérieur du `<router-view>` de `Test`
          path: 'profile',
          components: UserProfile,
        },
      ],
    },
  ],
});
