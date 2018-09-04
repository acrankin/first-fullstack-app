<template id="drink-template">
  <section class="drink-form-container">
    <form @submit.prevent="handleSubmit">
      <label>
        Name: 
        <input type="text" name="name" placeholder="Name" required
          v-model="edit.name">      
      </label>

      <label>
        Base Spirit:
        <select v-model.number="edit.spiritId" required>
          <option disabled value="">Choose Your Poison</option>
          <option v-if="spirits"
            v-for="spirit in spirits"
            :key="spirit.id"
            :value="spirit.id">
            {{spirit.name}}
          </option>
        </select>
      </label>

      <label>
        Year Created: 
        <input type="number" name="year" placeholder="Year"
          v-model="edit.year">
      </label>

      <label>
        <button type="submit">{{ label }}</button>
      </label>
      {{ edit }}
    </form>
  </section>
</template>

<script>
const initDrink = () => {
  return {
    name: '',
    year: '',
    containsEgg: false,
    image: ''
  };
};

export default {
  props: {
    drink: Object,
    label: String,
    spirits: Array,
    onEdit: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      edit: this.drink ? Object.assign({}, this.drink) : initDrink()
    };
  },
  computed: {
    editMode() {
      return !!this.drink;  
    }
  },
  methods: {
    handleSubmit() {
      this.onEdit(this.edit)
        .then(() => {
          this.edit = initDrink();
        });
    }
  }
};
</script>

<style>

</style>
