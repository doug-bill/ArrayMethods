document.addEventListener('DOMContentLoaded', () => {

let arr = [5, 2, 1, -10, 8];

arr.sort(function(a,b) {
    return b - a; 
});

alert( arr ); // 8, 5, 2, 1, -10
console.log(arr);

});