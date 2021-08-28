//Refactor to use rest operator & arrow function

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function (num) {
//         return num % 2 === 0
//     });
// }
const filterOutOdds = (...arguments) => arguments.filter(num => num % 2 === 0);

//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
//Make sure to do this using the rest and spread operator.
const findMin = (...args) => Math.min(...args);

//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)]


//For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
//Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */
//function removeRandom(items) {}
const removeRandom = arr => {
    let i = Math.floor(Math.random() * arr.length);
    return [...arr.slice(0, i), ...arr.slice(i + 1)];
}

/** Return a new array with every item in array1 and array2. */
//function extend(array1, array2) {}
const extend = (arr1, arr2) => { return [...arr1, ...arr2] };

/** Return a new object with all the keys and values
from obj and a new key/value pair */
//function addKeyVal(obj, key, val) {}
const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}

/** Return a new object with a key removed. */
//function removeKey(obj, key) {}
const removeKey = (obj, key) => {
    let newObj = { ...obj };
    delete obj[key];
    return newObj;
}

/** Combine two objects and return a new object. */
//function combine(obj1, obj2) {}
const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}

/** Return a new object with a modified key and value. */
//function update(obj, key, val) {}
const update = (obj, key, val){
    let newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}