<template>
    <section v-if="drink">
      <h1>wow that is a sweet detail view</h1>
      <p>{{ drink.name }}</p>
      <p>{{ drink.year}}</p>
    </section>
</template>

<script>
import api from '../../services/api';
export default {
  data() {
    return {
      drink: null
    };
  },
  created() {
    api.getDrinkDetail(this.$route.params.id)
      .then(drink => {
        this.drink = drink;
      });
  }
};
</script>

<style>

</style>
