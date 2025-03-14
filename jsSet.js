console.log("Set Collection");

let mySet = new Set();
console.log(mySet);

//add entries in Set
mySet.add("Burger");
mySet.add("Pizza");
mySet.add("Sandwich");
mySet.add("Ghar ka Khana");
mySet.add("Pizza");
console.log(mySet);

//check if sandwich is present in set
console.log(mySet.has("Sandwich")); //true
console.log(mySet.has("burger")); //false JS is case sensitive

//to delete from a set
mySet.delete("Sandwich");
console.log(mySet);

let myFavCities = new Set(["Vizag", "Vizianagaram", "Kakinada"]);
console.log(myFavCities);

for (let city of myFavCities) {
  console.log(city);
}
