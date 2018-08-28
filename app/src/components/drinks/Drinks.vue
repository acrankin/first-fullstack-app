<template>
  <section>
    <h2>all my drinksss</h2>
    <ul class="list">
      <Drink
        v-for="(drink, index) in drinks"
        :key="index"
        :drink="drink"
      />
    </ul>  
  </section>  
</template>

<script>
import api from '../../services/api';
import Drink from './Drink.vue';

export default {
  data() {
    return {
      drinks: null
    };
  },
  created() {
    api.getDrinks()
      .then(drinks => {
        this.drinks = drinks;
        console.log(this.drinks);
      });
  },
  components: {
    Drink
    //AddDrink
  },
  methods: {
    //handleAdd
  }

};
</script>

<style>

</style>
