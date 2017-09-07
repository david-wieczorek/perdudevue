<template>
  <div class="sidebar">
    <h1>{{ msg }}</h1>
    <router-link v-bind:to="'test/profile'" replace>Aller à la page profil</router-link>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      msg: 'Sidebar View',
    };
  },
};
</script>
