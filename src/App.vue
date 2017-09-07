<template>
  <div id="app">
    <div><img src="./assets/logo.png" /></div>
    <router-link to="/">Home</router-link>
    <router-link to="/test">Aller à la page test</router-link>
    <router-view name="a" class="view content"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
