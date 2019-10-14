<template>
  <div id="app">
    <BContainer>
        <HomePage/>
    </BContainer>
    
  </div>
</template>

<script>
import HomePage from "./containers/HomePage.vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {BContainer, BRow, BCol} from "bootstrap-vue"

export default {
  name: "app",
  components: {
    HomePage
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
