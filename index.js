// A visitor receives a 'prompt'
//  upon opening the website to enter a list of comma-separated froyo flavors.
//  They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console,
//  they observe a table listing how many of each flavor they have ordered.
//  In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

// 1. create a propmt where it takes inputs from user's frayo flavors.
const flavorsInput = prompt("Please enter the number of flavors you had today");

//2. parse the user inputs in to an array of froyo flavors
const flavorsList = flavorsInput.split(",");

//3. create an object which tracks the count of each flavor
const flavorsCountObj = {};

//4. loop through the list and check if value already exists in the array, if so increment it by one
// if not then add it to the object
for (let flavor of flavorsList) {
  if (flavorsCountObj[flavor]) {
    // if flavor exists in flavobject
    flavorsCountObj[flavor]++; // then increment by 1.
  } else {
    // if not then initialize the count to 1
    flavorsCountObj[flavor] = 1;
  }
}

//5. Console.table the object printing each flavor with its cound
console.table(flavorsCountObj);

// function flavorsTotal(input) {
//   let flavorList = input.split(",");
//   const flavorsObj = {};
//   for (let flavor of flavorList) {
//     if (flavor in flavorsObj) {
//       flavorsObj[flavor] += 1;
//     } else {
//       flavorsObj[flavor] = 1;
//     }
//   }
//   console.table(flavorsObj);
// }

// flavorsTotal(flavors);
