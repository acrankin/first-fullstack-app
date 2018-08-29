<template>
  <li class="drink-tile">
    <img :src="drink.image">
    <p>{{ drink.name }}</p>
    <p>{{ drink.baseSpirit }}</p>
    <p>{{ drink.year }}</p>
    <p v-if="drink.containsEgg === true">
      <em>*contains raw egg</em>
    </p>

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
