/*
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
  /* your code 
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O


*/

// So is like a random with 

document.addEventListener('DOMContentLoaded', () => {

let string = ["Hare", "Krishna","Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"];

function unique(arr){
  let result = [];

  for (i = 0; i < arr.length ; i++){
    let element = arr[i];
      if (!result.includes(element)){
        result.push(element);
      }      
  }
  return result;

}

alert(unique(string));
console.log("The Original Array is: " + string);
console.log(unique(string));


});