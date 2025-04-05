/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const favRest = {
  name: "Tazikis",
  cuisines: "Greek",
  numberOfStars: 4,
  favorited: true,
};

favRest.address = "somewhere in Tennessee";
favRest.zipcode = 37076;
favRest.acceptsReservations = false;

favRest.numberOfStarstars = "****";
favRest.favorited = false;
favRest.cuisines = ["Greek", "American"];

console.log(favRest);

function retrieveProperty(obj, key) {
  if (key in obj) {
    return obj[key];
  } else {
    return "The information you requested does not exist.";
  }
}

console.log(retrieveProperty(favRest, "cuisines"));
console.log(retrieveProperty(favRest, "favorited"));
console.log(retrieveProperty(favRest, "name"));
console.log(retrieveProperty(favRest, "nickName"));
console.log(retrieveProperty(favRest, "state"));
