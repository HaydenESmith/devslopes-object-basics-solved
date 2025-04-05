/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT //

const papaJohns = {
  name: "Papa John's",
  slogan: "Mild ingredients. Greasy Pizza. Papa Johns.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "1384 Gross St",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT //

// YOUR WORK GOES HERE //
const grabCategories = function (obj) {
  console.log(Object.keys(obj));
  return Object.keys(obj);
};

grabCategories(papaJohns);
grabCategories(papaJohns.pizzaToppings);

verifyValues = (obj, num) => {
  const vals = Object.values(obj);
  if (vals.length == num) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

verifyValues(papaJohns, 3);
verifyValues(papaJohns, 9);

getToppingsInfo = (obj) => {
  if (obj["pizzaToppings"]) {
    console.log(Object.entries(obj["pizzaToppings"]));
    return Object.entries(obj["pizzaToppings"]);
  } else {
    console.log("No Pizza Toppings");
    return "No Pizza Toppings";
  }
};

getToppingsInfo(papaJohns);

papaJohns.printAd = function printAd(topping) {
  if (this.pizzaToppings[topping]) {
    console.log(
      `"Welcome to ${this["name"]}! We are located at ${this["address"]}. This week, we are having a sale on ${topping} for $${this.pizzaToppings[topping]}. ${this["slogan"]}"`
    );
  } else {
    console.log("Topping not available");
  }
};

console.log(papaJohns.printAd("bacon"));
console.log(papaJohns);
