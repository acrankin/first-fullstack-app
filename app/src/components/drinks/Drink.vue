<template>
  <li class="drink-tile">
    <router-link :to="`/drinks/${drink.id}`">{{ drink.name }}</router-link>
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
