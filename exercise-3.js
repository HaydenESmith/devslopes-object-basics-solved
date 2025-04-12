// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

function printPizzaPlace(obj) {
  for (key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

printPizzaPlace(dominos);

const toppingsPriceRange = (obj) => {
  const toppings = obj.pizzaToppings;
  let lowestPrice = Infinity;
  let highestPrice = -Infinity;

  for (let topping in toppings) {
    const toppingPrice = toppings[topping];

    if (toppingPrice < lowestPrice) {
      lowestPrice = toppingPrice;
    }
    if (toppingPrice > highestPrice) {
      highestPrice = toppingPrice;
    }
  }
  return [lowestPrice, highestPrice];
};

const calculateAverageRating = (obj) => {
  const rating = Object.values(obj.starReviews);
  const sum = rating.reduce((acc, curr) => acc + curr, 0);
  const average = sum / rating.length;
  return average;
};
