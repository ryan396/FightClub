<template>
  <nav id="nav"><Navbar /></nav>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  border: 0;
  padding: 0;
  margin: 0;
}

html {
  background-color: #d3d3d3;
  margin: 0;
}
</style>
