/*importance: 3

Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...

*/

// Had to learn the FIsher-Yates Method to solve this one

document.addEventListener('DOMContentLoaded', () => {
    
function shuffle(arr){

    for (let i = arr.length - 1; i > 0; i--){

        const random = Math.floor(Math.random() * (i+1));

        [arr[i], arr[random]] = [arr[random], arr[i]];

    }
    return arr;

}


let arr = [1,2,3];

let shuffled = shuffle(arr);

//alert(shuffled);
console.log(shuffled);


});