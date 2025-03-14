console.log("Looping in JS");

let myFavCars = ["Audi", "BMW", "Volvo", "TATA", "Hyundai"];

//for traditional for(initialization, condition, increment/decrement)
console.log("Traditional For Loop");
console.time();
for (let i = 0; i < myFavCars.length; i++) {
  console.log(`${i + 1}. ${myFavCars[i]}`);
}
console.timeEnd();

//while  while(condition)
let currentIndex = 0;
console.log("While Loop");
console.time();
while (currentIndex < myFavCars.length) {
  console.log(`${currentIndex + 1}. ${myFavCars[currentIndex]}`);
  currentIndex = currentIndex + 1;
}
console.timeEnd();

//do while -> Do while loop will execute at least once irrespective of condition
do {
  console.log("Do while loop");
} while (1 === 2);

//for of loop -> for(let CurrItem of collection to iterate)
console.log("for of loop");
console.time();
//here we will get item
for (let currItem of myFavCars) {
  console.log("currItem", currItem);
}
console.timeEnd();

console.time();
//here we will get item and index
console.log("for of loop with entries");
for (let [index, car] of myFavCars.entries()) {
  console.log(`${index + 1}. ${car}`);
}
console.timeEnd();

//Object with for of loop
let myObject = {
  fname: "Satya",
  lname: "Buddharaju",
  age: 35,
};

//to make object iterable we have 3 methods
//1. Objects.keys
//2. Object.values
//3. Object.entries
console.log("Objects.keys");
console.time();
for (let currItem of Object.keys(myObject)) {
  console.log(`${currItem}: ${myObject[currItem]}`);
}
console.timeEnd();

console.log("Objects.values");
console.time();
for (let value of Object.values(myObject)) {
  console.log(`${value}`);
}
console.timeEnd();

console.log("Objects.entries");
console.time();
for (let [key, value] of Object.entries(myObject)) {
  console.log(key, value);
}
console.timeEnd();

//for in loop for(let variableName in collection)
//Array for in loop
for (let car in myFavCars) {
  console.log(car); // index
  console.log(car, myFavCars[car]); //value
}

//Object for in loop

for (let currItem in myObject) {
  console.log(currItem);
  console.log(currItem, myObject[currItem]);
}

let openingHours = {
  Friday: { open: "10 AM", close: "11 PM" },
  Saturday: { open: "09 AM", close: "10 PM" },
  Sunday: { open: "08 AM", close: "09 PM" },
};

for (let currItem in openingHours) {
  //console.log(openingHours[currItem]);
  let { open, close } = openingHours[currItem];
  //console.log(open, close);
  console.log(`On ${currItem} Store Opens at ${open} and Closes at ${close}`);
}

for (let [day, { open, close }] of Object.entries(openingHours)) {
  console.log(`On ${day} Store Opens at ${open} and Closes at ${close}`);
}
