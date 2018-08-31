<template>
  <section>
    <h2>Add a Drink</h2>
    <DrinkForm
      label="Add"
      :spirits="spirits"
      :onEdit="handleAdd"/>
  </section>
    
</template>

<script>
import DrinkForm from './DrinkForm.vue';
import api from '../../services/api';

export default {
  components: {
    DrinkForm
  },
  props: {
    spirits: Array
  },
  methods: {
    handleAdd(drink) {
      return api.addDrink(drink)
        .then(added => {
          this.$router.push(`/drinks/${added.id}`);
        });
    }
  }
};
</script>

<style>

</style>
