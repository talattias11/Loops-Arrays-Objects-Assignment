// //1 function to create an object named person with properties firstName, lastName, age, 
// // and a method called getFullName that returns the full name
// function createPerson(person) {
//     person = {firstName: prompt("First Name:"), 
//     lastName: prompt("Last Name:"), 
//     age: prompt("Age:") ,
//     getFullName: function() {
//         return this.firstName + " " + this.lastName;
//     }}
//     return person;
// }

// var obj = createPerson(obj)
// console.log(obj.getFullName())

// //2 !!!!function to count the number of occurrences of each character in a given string. 
// // Return the result as an object with properties for each character and their corresponding counts
// function timesOfOccurrences(str) {
//     let obj = {}
//     for (let i = 0; i < str.length; i++) {
//         var num = 1;
//         let j = i + 1
//             while (str.charAt(i) === str.charAt(j)) {
//                 num = num + 1;
//                 j++;
//                 obj = {[str.charAt(i)]: num}
//             }
//         }  
//         return obj;
//     }

// console.log(timesOfOccurrences(prompt("please type a word")));

// //3 function that accepts an object and a key as arguments, 
// // and returns the value associated with the key. 
// // If the key is not found in the object, return null
// function valueOfKey(obj, key) {
//     if (obj.hasOwnProperty(key) == undefined) {
//         return null;
//     }
//     return obj[key];
// }
// const exampleObj = {name: 'Fiat', model: 500, weight: 850+'kg', color: 'white'}
// console.log(exampleObj.model)
// console.log(valueOfKey(exampleObj , 'name'))

// //4 program to create an object named counter with a property count initialized to 0,
// //  and methods increment and reset. The increment method should increase the count by 1, 
// //  and the reset method should set the count back to 0.
// var counter = {count: 0,
//                 increment: function(){
//                     return this.count++;
//                 },
//                 reset: function(){
//                     return this.count = 0;
//                 }}
                
// console.log(counter.count)
// counter.increment()
// console.log(counter.count)
// counter.increment()
// console.log(counter.count)
// counter.reset()
// console.log(counter.count)

// //5 function that accepts an array of objects, each with a property called price. 
// //  Calculate the average price of all objects in the array and return the result
// function averagePrice(arr, key) {
//     var sumResult = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sumResult = sumResult + arr[i][key]
//     }
//     var avg = sumResult / arr.length;
//     return avg;
// }

// const productsArray = [{name: 'Table' , price: 300}, {name: 'Chair', price: 100}, {name: 'plant', price: 20}, {name: 'decorations', price: 20}];
// console.log(averagePrice(productsArray, 'price'));

// //6 program to create an object named rectangle with properties width and height, 
// // and a method called area that returns the area of the rectangle (width * height).
// const rectangle = { width: prompt("type the Width of the rectangle"),
//                     height: prompt("type the Height of the rectangle"),
//                     area: function(){return this.width * this.height}
//                 }
// console.log(rectangle);
// console.log(rectangle.area());

// //7 program to create an object named book with properties title, author, and year, 
// // and a method called getInfo that returns a string 
// // containing the book's title, author, and year, formatted as: "Title by Author (Year)"
// const book = {title: prompt("Type the Title of the Book"),
//               author: prompt("Who's the Author"),
//               year: prompt("What year was it formated"),
//               getInfo: function(){
//                 return `The book: ${this.title}, By: ${this.author}, (${this.year})`
//               }
// }
// console.log(book.getInfo())

// //8 Function to merge two objects. 
// // If both objects have the same property, the values should be combined into an array
// function mergeIt(obj1 , obj2) {
//     var merged = {};
//     for (const key in obj1) {
//         if (obj2.hasOwnProperty(key)) {
//             merged[key] = [obj1[key], obj2[key]];
//         }
//         else 
//             merged[key] = obj1[key]
//     }
//     for (let key in obj2) {
//         if (!merged.hasOwnProperty(key)) {
//             merged[key] = obj2[key]

//         }
//     }
//     return merged;
// }


// var firstObj = { a: 1, b: 2 };
// var seconedObj = { b: 3, c: 4 };
// console.log(mergeIt(firstObj, seconedObj))

// //9 function that accepts an array of objects with properties name and score. 
// //Sort the array by the score property in descending order, 
// //and return the sorted array.
// var arrOfObj = [{name: 'Tal', score: 95}, {name: 'Gal', score:87}, {name: 'Eden', score: 98}, {name: 'Daniel', score: 60}, {name: 'Ella', score: 78}]
// arrOfObj.sort(function(a, b) {
//     var keyA = a.score,
//     keyB = b.score;
//     if (keyA < keyB) return 1;
//     if (keyA > keyB) return -1;
//     return 0;
// });

// console.log(arrOfObj);

// //10 program to create a function that accepts an object 
// //and returns a new object with the keys and values swapped.
// function swapIt(obj) {
//     var newObj = {}
//     for (let key in obj) {
//         newObj[obj[key]] = key
//     }
//     return newObj;
// }

// var obj = { a: 1, b: 2, c: 3, d: 4, E: 5}
// console.log(swapIt(obj))

// //11 program to create an object named circle with a property radius 
// // and a method called circumference 
// // that returns the circumference of the circle (2 * π * radius).
// const circle = {
//     radius: prompt("please type the circle radius"),
//     circumference: function circumferenceCalc() {
//         return (2 * 3.14 * this.radius)
//     }
// }
// console.log(circle.circumference())

//12 Write a JavaScript program to create a function that accepts an object 
//with properties firstName and lastName 
//and returns a new object with the properties swapped.
// const nameObj = {
//     firstName: 'John',
//     lastName: 'Doe'
// }
// function swapFirstnLastName(obj) {
//     const fName = obj.firstName;
//     obj.firstName = obj.lastName;
//     obj.lastName = fName;
//     return obj;
// }
// console.log(swapFirstnLastName(nameObj));

// //13 program to create a function that takes an object and a key-value pair, 
// //and returns a new object with the key-value pair added to it. 
// //If the key already exists in the object, update its value.
// function keyvalueAdding(obj , keyValue) {
//     for (const key in obj) {
//         if(key == keyValue)
//             obj[key] = keyValue ;
//         else 
//             obj[keyValue] = 'pair' ;
//         }
//         return obj;
//     }

// const exampleObj = {
//     fNumber: 12,
//     sNumber: 14,
//     tNumber: 20,
//     pPair: 22
// }
// console.log(keyvalueAdding(exampleObj , 'pair'));

// //14 program to create a function that accepts an object 
// //and returns an array of its keys
// function keysArray(obj) {
//     const keysInObjArr = []
//     for (const key in obj) {
//         keysInObjArr.push(key);
//     }
//     return keysInObjArr;
// }

// const exampleObj = {
//         fNumber: 12,
//         sNumber: 14,
//         tNumber: 20,
//         pPair: 22
// }
// console.log(keysArray(exampleObj));

// //15 program to create a function that accepts an object 
// //and returns an array of its values
// function valuesArray(obj) {
//         const valuesInObjArr = []
//         for (const key in obj) {
//             valuesInObjArr.push(obj[key]);
//         }
//         return valuesInObjArr;
//     }

//     const exampleObj = {
//                 fNumber: 12,
//                 sNumber: 14,
//                 tNumber: 20,
//                 pPair: 22
//         }
//         console.log(valuesArray(exampleObj));