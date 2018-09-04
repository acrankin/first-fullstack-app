<template>
  <div id="app">
    <header>
      <h1>Uncle Al's Cocktail Cabinet</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/drinks">Drinks</router-link>
      </nav>
    </header>

    <main>
      <router-view :spirits="spirits"></router-view>
    </main>
  </div>
</template>

<script>
import api from './services/api';

export default {
  data() {
    return {
      spirits: null
    };
  },
  created() {
    console.log('how did i get here?');
    api.getSpirits()
      .then(spirits => {
        this.spirits = spirits;
      });
  }
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
