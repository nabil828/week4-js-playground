// objects

// create a car object
car1 = {
  "make": "Honda",
  model: "Civic",
  year: 2014,
  color: {
    interior: "gray",
    exterior: "black"
  },
  mileage: 3000,
  mileage: 5000,
  arr: [1, "6236", 3],
  drive: let_go =>{
    console.log("I am driving");
  }
}
console.log(car1["make"]);
console.log(car1.make);

console.log(car1["model"]);
console.log(car1.model);

console.log(car1["mileage"]);
console.log(car1.color.interior);

console.log(car1.arr[2]);
car1.drive();

car2 = {
  make: "Toyota",
  model: "Camry",
  year: 2016,
  color: "red",
  mileage: 5000
}