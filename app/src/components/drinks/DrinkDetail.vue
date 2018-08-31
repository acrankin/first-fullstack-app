<template>
    <section v-if="drink">
      <h1>wow that is a sweet detail view</h1>
      <p>{{ drink.name }}</p>
      <p>{{ drink.year}}</p>
      <p v-if="drink.containsEgg === true">
        <em>*contains raw egg</em>
      </p>
      <p>{{ drink.baseSpirit }}</p>
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
        console.log(this.drink);
      });
  }
};
</script>

<style>

</style>
