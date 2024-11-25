// Write your code here
// Quizz
// 1: I will use push(); method for adding element to the end of an array
// 2:For me the best way is to use shift(); method.
// 3:So we can use both of them when we have job in an array. Splice: With this method we can add new element in specific position, we can also add item insead of allready been element, or add as a new element.
// Here is an example: Splice(5-Position, Where we want or delete smth, 2- Number of elements we want to delete, 5, 6, 7 - Theese are elements we want to add)
// Slice() is also array method, which can make specified copy of the allready created array. SO, lets imagine that we have five element array allready created. but we want only first three elements. Easily with slice, we will create new araay and make an copy of three elements. Example: firstArray = [1, 2, 3, 4, 5];
//       newArray = firstArray.slice(0- starting position from where we want to start copy, 2- end position, where code will stops coping.); i hope you will get it what i have written <3

// 4:
// Easily, we can use length. It will make the ouput of array length : firstArray.length;

// 5
//So, in my mind, we can use method called includes();
// This method checks, if elements is in concretic array. also we can specify from where to search. i mean index. Here is examples:
// firstArray = [1, 2, 3, 4, 5];
// console.log(firstArray.inclurdes(3)it will say yes)
// Second example:
// firstArray = [1, 2, 3, 4, 5];
// console.log(firstArray.includes(3, 3- This is from where to search element. it will say false, cause index of element(3) is less than index(3))

// 6
// To use sort method without compare, array will be sorted by its ASCII values.

// 7
// So there is several ways to make copy of an allready crreated array. first one, we can easily make another array and give it allready created array as an vallue:
// let firstArray = [1, 2, 3, 4, 5];
// let newArray = firstArray;
// Second way is slice. As i say above slice method is used for copying conretic elements from an array. But we also can copy whole array as an new aray.
// let firstArray = [1, 2, 3, 4, 5];
// let newArray = firstArray.slice()
// console.log(firstArray);
// console.log(newArray);-- Output will be same as firstAray

// 8
// So, in JS is allready created element, which can reverse an array and it called reverse();Example:
// firstArray = [1, 2, 3, 4, 5];
// console.log(firstArray.reverse()); -- Output:5,4,3,2,1

// 9
// We can use method called concat() Which combines two arrays as an one array Example:
// firstArray = [1, 2, 3, 4, 5];
// secondArray = [6, 7, 8, 9, 10];
// console.log(firstArray.concat(secondArray)); -- Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// 10 if we have 2D array and want to access a conretic element we should do next steps. First we need two indexes, first one is row index, second is column idex. Like an matrixes in Calculus. Then we will get the specific element: Example
// let firstArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(firstArray[1][2]); -- Output: 6
// With 2D arrays we can create lots of great things, Such as Tic, Tac, Toe game.

// Assignments

// Assignment 1: Basic Array Operations

let arrayOfTenElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayOfTenElements[3]);
arrayOfTenElements[5] = 15;
arrayOfTenElements.push(100);
arrayOfTenElements.shift();
console.log(arrayOfTenElements);

// Assignment 2: Array Methods - push, pop, shift, unshift
let fruitArray = ["Apple", "Grape", "Cherry", "Pear", "WaterMelon"];
fruitArray.push("Orange");
let lastElement = fruitArray[fruitArray.length - 1];
console.log(lastElement);
fruitArray.pop();
fruitArray.unshift("Strawberry");
let firstElment = fruitArray[0];
console.log(firstElment);
fruitArray.shift();
console.log(fruitArray);

// Assignment 3: Iterating Over an Array
let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
// Assignment 4: Array Methods - splice and slice
let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
numbers.splice(2, 2);
console.log(numbers);
numbers.splice(2, 0, 7, 8);
console.log(numbers);
let newNumbers = numbers.slice(numbers.length - 3);
console.log(newNumbers);

// Assignment 5: Array Sorting
let names = ["John", "Alice", "Bob", "Eve", "Charlie"];
console.log(names);
console.log(names.sort());
console.log(names.sort().reverse());

// Assignment 6: Finding Elements in an Array
let numbersArray = [1, 2, 3, 4, 5,];
console.log(numbersArray.indexOf(3));
console.log(numbersArray.includes(10));
console.log(numbersArray.findIndex(Number => Number > 4 ));

for (let i = 0; i < numbersArray.length; i++){
    if (numbersArray[i] > 4) {
        console.log(`The number which is greater than 4 is ${numbersArray[i]} and its index is ${i}`);
    }
}

// Assignment 7: Multi-dimensional Arrays
let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11 , 12]
];
console.log(grid[3][0]);
grid[3][0] = 100;
console.log(grid);

// Assignment 8: Array Destructuring
let arrayEight = [1, 2, 3, 4];
let firstVariable = arrayEight[0];
let secondVariable = arrayEight[1];
arrayEight[0] = secondVariable;
arrayEight[1] = firstVariable;

// Assignment 9: Combining Arrays
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let numbers3 = numbers1.concat(numbers2);
console.log(numbers3);
let numbers4 = [...numbers1, ...numbers2];
console.log(numbers4);


// Assignment 10: Reversing and Sorting Arrays
let arrayTen = [1, 2, 3, 4, 5];
console.log(arrayTen.reverse());
console.log(arrayTen.sort((min, max) => max - min));





