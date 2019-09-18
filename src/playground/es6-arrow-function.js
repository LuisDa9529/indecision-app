// const square = function(x) {
//   return x * x;
// };

// console.log(square(9));

// // const squareArrow = x => {
// //   return x * x;
// // };

// const squareArrow = x => x * x;

// console.log(squareArrow(4));

const fullName = "Luis Daniel";

const firstName = name => {
  return name.split(" ")[0];
};

const firstNameArrow = (name) => name.split(" ")[0];

console.log(firstName(fullName));
console.log(firstNameArrow(fullName));
