//problem 1

const me = {
  name: "Zach",
  age: 19,
};
console.log(me);

//problem 2

const dog = {
  name: "Rex",
  color: "Black",
  age: 5,
  goodBoy: true,
  color2: "White",
};
console.log(dog);

//problem 3

console.log(dog.name);

//problem 4

console.log(dog["color"]);

//problem 5

const favoriteThings = {
  band: "Rush",
  food: "Burgers",
  person: "Dad",
  book: "What's a Book?",
  holiday: "Christmas",
};
console.log(favoriteThings);

favoriteThings.car = "GTR";
favoriteThings.show = "Breaking Bad";
console.log(favoriteThings)((favoriteThings.food = "Chicken Nuggets")),
  (favoriteThings.book = "Harry Potter");
console.log(favoriteThings);

//problem 6

let carDetails = {
  color: "red",
  make: "toyota",
  model: "tacoma",
  year: 1994,
};

let { color, make, model, year } = carDetails;
console.log(color, make, model, year);

//////////////////////////// PROBLEM 7 ////////////////////////////

function greeting(obj) {
  //Code Here
  let { title, firstName, lastName } = obj;
  // Do not edit the code below.
  return "Hello, " + title + " " + firstName + " " + lastName + "!";
  // Do not edit the code above.
}
console.log(greeting({ title: "Mr.", firstName: "Zach", lastName: "Cooper" }));

//////////////////////////// PROBLEM 8 ////////////////////////////

//Code Here
function totalPopulation(obj) {
  let { utah, cali, texas, arizona } = obj;

  return utah + cali + texas + arizona;
}
console.log(totalPopulation({ utah: 1, cali: 2, texas: 3, arizona: 4 }));
//////////////////////////// PROBLEM 9 ////////////////////////////

function ingredients(obj) {
  let { carb, fat, protein } = obj;

  let arr = [];
  arr.push(carb);
  arr.push(fat);
  arr.push(protein);
  return arr;
}
console.log(ingredients({ carb: "fries", fat: "people", protein: "chicken" }));

//////////////////////////// PROBLEM 10 ////////////////////////////

var user = {
  name: "Bryan",
  age: 24,
  pwHash: "U+Ldlngx2BYQk",
  email: "BryanSmith33@gmail.com",
  birthday: "05/02/1990",
  username: "bryansmith33",
};

user.name = "Bryan G. Smith";
user.email = "bryan.smith@devmounta.in";

//////////////////////////// PROBLEM 11 ////////////////////////////

delete user.age;

//////////////////////////// PROBLEM 12 ////////////////////////////

class Cat {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}
let myCat = new Cat("zach", 3, "Black");
console.log(myCat.name);

//////////////////////////// PROBLEM 13 ////////////////////////////

class Wizard {
  constructor(name, age, favoriteSpell) {
    this.name = name;
    this.age = age;
    this.favoriteSpell = favoriteSpell;
  }
  castSpell() {
    console.log(`${this.name} has cast ${this.favoriteSpell}`);
  }
}
let myWizard = new Wizard("zach", 5, "splash");
myWizard.castSpell();

//////////////////////////// PROBLEM 14 ////////////////////////////

class Phone {
  constructor(brand, model, storage, color, price) {
    this.brand = brand;
    this.model = model;
    this.storage = storage;
    this.color = color;
    this.price = price;
    this.sold = false;
  }
  sell() {
    this.sold = true;
    console.log(`${this.brand} ${this.model} has been sold.`);
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }
}

let phone1 = new Phone("apple", "3", 5, "red", 100);
let phone2 = new Phone("nokia", "4", 6, "blue", 90);
let phone3 = new Phone("android", "5", 7, "green", 80);

phone1.changePrice(50);
console.log(phone1);

phone2.sell();
console.log(phone2.sold);
