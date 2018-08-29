<template>
  <section class="add-drink">
    <h2>New Drink</h2>
    <form @submit.prevent="handleSubmit">
      <p>
        <label>
          Name: 
          <input type="text" name="name" placeholder="Name" required
            v-model="drink.name">      
        </label>
      </p>
      <p>
        <label>
          Base Spirit: 
          <input type="text" name="base-spirit" placeholder="Gin, Whiskey, etc." required
            v-model="drink.baseSpirit">      
        </label>
      </p>
      <p>
        <label>
          Year Created: 
          <input type="number" name="year" placeholder="Year"
            v-model="drink.year">
        </label>
      </p>

      <label>
        <button type="submit">Add</button>
      </label>


    </form>
  </section>
    
</template>

<script>
const initDrink = () => {
  return {
    name: '',
    baseSpirit: ''
  };
};

export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      drink: initDrink()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.drink)
        .then(() => {
          this.drink = initDrink();
        });
    }
  }
};
</script>

<style>

</style>
