export default {
  getDrinks() {
    return fetch('http://localhost:3000/api/drinks', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  getDrinkDetail(id) {
    return fetch(`http://localhost:3000/api/drinks/${id}`, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  addDrink(drink) {
    return fetch('http://localhost:3000/api/drinks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(drink)
    })
      .then(response => response.json());
  }
};
