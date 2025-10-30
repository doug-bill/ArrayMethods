/*
mportance: 5

We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.
*/
document.addEventListener('DOMContentLoaded', () => {

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){
    let a = Array.from(arr);
    a.sort();
    return a;
}

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

console.log("The original Array is " + arr);
console.log("The sorted Array is " +sorted);


});