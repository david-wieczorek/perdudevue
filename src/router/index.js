import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Test from '@/components/Test';
import UserProfile from '@/components/Profil';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      children: [
        {
          // `UserProfile` va être rendu à l'intérieur du `<router-view>` de `User`
          // quand `/utilisateur/:id/profil` concorde
          path: 'profile',
          component: UserProfile,
        },
      ],
    },
  ],
});
