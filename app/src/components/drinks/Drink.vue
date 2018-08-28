<template>
  <li>
    <p>{{ drink.name }}</p>
    <p>{{ drink.baseSpirit }}</p>
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

</style>
