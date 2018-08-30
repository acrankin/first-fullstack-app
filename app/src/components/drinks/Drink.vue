<template>
  <li class="drink-tile">
    <!-- <img :src="drink.image"> -->
    <router-link :to="`/drinks/${drink.id}`">{{ drink.name }}</router-link>
    <!-- <p>{{ drink.baseSpirit }}</p>
    <p>{{ drink.year }}</p>
    <p v-if="drink.containsEgg === true">
      <em>*contains raw egg</em> -->
    <!-- </p> -->
  </li>
    
</template>

<script>
export default {
  props: {
    drink: Object
  }
};
</script>

<style>
.drink-tile {
  border: 1px solid;
}

</style>
