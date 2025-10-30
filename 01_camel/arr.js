// Write a function that changes dash separeted words like "my-short-string"
// into camel-cased "myShortString".
// use split to split the string into an array transform it and "join" back

// Examples
// camelize ("background-color") == "backgroundColor";
// camelize ("list-style-image") == "listStyleImage";
// camelize ("-webkit-transition") == 'WebkitTransition';

/*
  ####TASKS-Array Methods####

  1# [X] Translate border-left-width to borderLeftWidth
  2# [X] Filter range
  3# [ ] Filter range "in place"
  4# [ ] Sort in decreasing order
  5# [ ] Copy and sort array
  6# [ ] Shuffle an array
  7$ [ ] Filter unique array members

*/



//1# Camelize

console.log("1# Function that Turns phrases into camelCase");
console.log("====================");

function camelize(str) {
  const arr = str.split('-');

  function capitalize(word, index) {
    if (index === 0) return word.toLowerCase(); // mantém o primeiro
    const lower = word.toLowerCase();
    const camel = lower.charAt(0).toUpperCase() + lower.slice(1);
    return camel;
  }

  const mappedArr = arr.map(capitalize);
  const result = mappedArr.join('');

  return result;
}

console.log(camelize('background-color')); // backgroundColor
console.log(camelize('list-style-image')); // listStyleImage
console.log(camelize('-webkit-transition')); // webkitTransition



