console.log("Map Collection");

let myMap = new Map();
console.log(myMap);
//add entries in map
myMap.set("1", "Satya");
myMap.set(2, 50);
myMap.set(true, "trainer");
console.log(myMap);
//access values from map
console.log(myMap.get("1"));
console.log(myMap.get(2));
console.log(myMap.get(true));
//to check the size
console.log("Map Size:", myMap.size);

let favPlaces = new Map([
  ["Vizag", "Beach"],
  ["Vizanagaram", "Fort"],
  ["Tirupathi", "Balaji temple"],
]);
console.log(favPlaces);

for (let [key, value] of favPlaces) {
  //console.log(key, value);
  console.log(`In ${key} city like to visit ${value}`);
}

//to access keys in map
for (let currItem of favPlaces.keys()) {
  console.log(currItem);
}
//to access values in map
for (let currItem of favPlaces.values()) {
  console.log(currItem);
}
