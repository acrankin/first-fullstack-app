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
    <AddDrink :on-add="handleAdd"/>  
  </section>  
</template>

<script>
import api from '../../services/api';
import Drink from './Drink.vue';
import AddDrink from './AddDrink.vue';

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
      });
  },
  components: {
    Drink,
    AddDrink
  },
  methods: {
    handleAdd(drink) {
      return api.addDrink(drink)
        .then(saved => {
          this.drinks.push(saved);
        });
    }
  }
};
</script>

<style>
.list {
  display: grid;
  grid-template-columns: auto auto auto;
  list-style: none;
  grid-gap: 10px;
  
}

</style>
