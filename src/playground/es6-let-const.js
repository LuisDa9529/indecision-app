var nameVar = "Luis";
var nameVar = "Daniel";
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Jon";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

//BLOCK SCOPING
const fullName = "Luis Daniel";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
