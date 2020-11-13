<template>
  <div id="app">
    <my-header />
    <router-view style="margin-top: 20px;"/>
  </div>
</template>

<script>
import myHeader from './components/header'
export default {
  components: {myHeader}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
