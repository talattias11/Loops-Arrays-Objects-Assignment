// //1 function that accepts an array of words 
// // and returns a new array with the words 
// // sorted in reverse alphabetical order using the sort() method
// function reverseSort(arr) {
//     let sortedArr = arr.sort();
//     let reverseArr = sortedArr.reverse();
//     return reverseArr;
// }
// var wordsArray = ['elephant', 'table', 'astronaut', 'balloon', 'door']
// console.log(reverseSort(wordsArray));

// //2 function that accepts an array of numbers
// //  and returns a new array containing only the even numbers. 
// // Use the filter() method to achieve this
// function onlyEven(arr) {
//     var newArr = arr.filter(function evenCheck(value){
//         if (value % 2 ===0) {
//             return value;
//         }
//     });
//     return newArr;
// }

// var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(onlyEven(numbersArray));

// //3 function that takes an array of strings 
// // and returns a new array with each string's length. 
// // Use the map() method to achieve this.
// function stringsLength(arr) {
//     var lengthArray = arr.map(function length(value) {
//         return value.length;
//     })
//     return lengthArray;
// }

// var wordsArray = ['elephant', 'table', 'astronaut', 'balloon', 'door']
// console.log(stringsLength(wordsArray));

// //4 function that takes an array of numbers 
// // and returns a new array with each number multiplied by 2 
// // using the map() method
// function doubleIt(arr) {
//     var result = arr.map(function multipul(value) {
//         return value * 2;      
//     })
//     return result;
// }

// var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(doubleIt(numbersArray));

// //5 function to find the sum of all numbers in an array. 
// // Use the reduce() method to achieve this
// function sumIt(arr) {
//     var sum = arr.reduce(function numbersSum(total, num) {
//         return total + num;
//     })
//     return sum;
// }

// var numbersArray = [1, 2, 3, 4, 5];
// console.log(sumIt(numbersArray));

// //6 function that accepts an array of words 
// // and returns a new array with the words sorted alphabetically. 
// // Use the sort() method to achieve this
// function sortIt(arr) {
//     return arr.sort()
// }

// var wordsArray = ['elephant', 'table', 'astronaut', 'balloon', 'door']
// console.log(sortIt(wordsArray));

// //7 function to remove duplicate values from an array. 
// // Use the forEach() method to achieve this
// function removeDuplicate(arr) {
//     var arr1 = []
//     arr.forEach((elemento)=> {
//         if(!arr1.includes(elemento)){
//             arr1.push(elemento);
//         }
//      })
//         return arr1;
//     };


// var numbersArray = [1, 2, 2, 3, 3, 6, 6, 8, 8, 8];
// console.log(removeDuplicate(numbersArray));

// //8 function that accepts an array of numbers 
// // and returns the product of all numbers in the array. 
// // Use the reduce() method to achieve this
// function numProduct(arr) {
//     var productResult = arr.reduce(function numsProduct(value , num) {
//         return value * num;
//     })
//     return productResult;
// }

// var numbersArray = [1, 2, 3, 4];
// console.log(numProduct(numbersArray));

// //9 Write a JavaScript function that accepts an array of numbers 
// // and returns a new array with only the odd numbers 
// // using the filter() method
// function oddNumber(arr) {
// var oddsArray = arr.filter(function isOdd(value) {
//     if(value % 2 != 0)
//         return value;
// })    
// return oddsArray;
// }

// var numbersArray = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log(oddNumber(numbersArray));

// //10 function to find the minimum value in an array of numbers 
// // using the reduce() method
// function findMinimun(arr) {
//     var minValue;
//     arr.reduce(function isMin(num1, num2){
//         return minValue = num1 < num2 ? num1 : num2
//     })
//     return minValue;
// }
// var numbersArray = [6, 2, 5, 4, 8, 1, 7];
// console.log(findMinimun(numbersArray));

// //11 function that accepts an array of strings 
// // and returns a new array with the strings sorted by length. 
// // Use the sort() method to achieve this
// function lengthSorting(arr) {
//     arr.sort(function(a, b){
//     return a.length - b.length;
//   });
//   return arr;
// }

// var wordsArray = ['elephant', 'table', 'astronaut', 'balloon', 'door']
// console.log(lengthSorting(wordsArray));

// //12 function that accepts an array of numbers 
// // and returns the total count of even numbers in the array 
// // using the forEach() method
// function howManyEven(arr) {
//     var counter = 0;
//     arr.forEach(element => {
//         if (element % 2 === 0) {
//             counter++;
//         }
//     });
//     return counter;
// }

// var numbersArray = [6, 2, 5, 4, 8, 1, 7, 10];
// console.log(howManyEven(numbersArray));

// //13 function that accepts an array of objects with properties name and age 
// // and returns a new array containing only the objects with an age greater than or equal to 18. 
// // Use the filter() method to achieve this.
// function adultsFinder(arr) {
//     var adultsArray = [];
//     arr.filter(function isAdult(value) {
//         if (value.age >= 18) {
//             adultsArray.push(value)
//         }
//     })
//     return adultsArray;
// }

// var agesObjArray = [{name: 'Tal' , age: 27}, {name: 'George' , age: 15} ,{name: 'Gal' , age:22}, {name: 'Shlomi', age:18}];
// console.log(adultsFinder(agesObjArray));

// //14 function that accepts an array of numbers 
// // and returns a new array with each number squared. 
// // Use the map() method to achieve this
// function numberSquarer(arr) {
//     var squaredNums = arr.map(function square(value) {
//         return value*value;
//     })
//     return squaredNums;
// }

// var numbersArray = [1, 2, 3, 4, 5, 9];
// console.log(numberSquarer(numbersArray));

// //15 function that accepts an array of words 
// // and returns a new array containing only the words that start with the letter 'a' (case-insensitive). 
// // Use the filter() method to achieve this
// function startsWithA(arr) {
//     var sortedArr = []
//     arr.filter(function sorting(value) {
//         if (value.charAt(0) === 'a') {
//             sortedArr.push(value)
//         }
//     })
//     return sortedArr;
// }

// var wordsArray = ['apple', 'juice', 'orange', 'astronaut', 'ambulance', 'gameboy', 'adventure']
// console.log(startsWithA(wordsArray));