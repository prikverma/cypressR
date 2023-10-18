

// map(): It creates a new array by applying a certain function on first array.
const array1 = [34, 23, 54, 90, 89]
const array2 = array1.map((x) => x * 2)
console.log(array2);


// reduce(): this method call a reducer function for all arrray element and reduce its value by one value. It does not change initial array value
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
    return result + item;
}, 0);// initializing item value to 0;
console.log(sum); //10:- this methods return a single value.
console.log(numbers);

// filter(): this methods apply conditional statement on elements if it true element push to the output array only.
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
const even = number.filter(number => number % 2 === 0)

console.log(even);//[2,4,6,8,10,12]
