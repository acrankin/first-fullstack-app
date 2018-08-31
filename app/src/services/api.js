const URL = 'http://localhost:3000/api';
const DRINKS_URL = `${URL}/drinks`;
const SPIRITS_URL = `${URL}/spirits`;

export default {
  getDrinks() {
    return fetch(DRINKS_URL, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  getDrinkDetail(id) {
    return fetch(`${DRINKS_URL}/${id}`, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  addDrink(drink) {
    return fetch(DRINKS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(drink)
    })
      .then(response => response.json());
  },
  getSpirits() {
    return fetch(SPIRITS_URL, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  }
};
