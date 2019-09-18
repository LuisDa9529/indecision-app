//arguments object - no longer bound with arrow function

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}

//this keyword - no longer bound

const user = {
  name: "Daniel",
  cities: ["Puebla", "Mont", "Maryland"],
  printPlaces() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);

    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
  }
};
// console.log(user.printPlaces());

//challenge

const multiplier = {
  numbers: [5, 10, 8],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number*this.multiplyBy);
  }
}
console.log(multiplier.multiply(2));