// //1 program to print the even numbers between 1 and 20
// for (let i = 1; i < 21; i++) {
//     if (i % 2 ===0) {
//         console.log(i);
//     }
// }

// //2 program to print the numbers from 1 to 10 using
// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }

// //3 program to print the numbers from 1 to 50. 
// But for multiples of 3, print "Fizz" instead of the number, 
// and for the multiples of 5, print "Buzz". 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz"
// for (let i = 1; i < 51; i++) {
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//         console.log("FizzBuzz")
//         continue;
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//         continue;
//         } else if (i % 5 === 0) {
//             console.log("Buzz")
//             continue;
//         }
// console.log(i);
// }

// // 4 program to calculate the sum of the numbers from 1 to 5 using a while loop.
// let num = 1;
// let sum = 0;
// while (num < 6) {
//     sum = sum + num ;
//     num++;
// }
// console.log(sum)

// //5 program to find the sum of all odd numbers from 1 to 1000.
// let sumOfOddNumbers = 0;
// for (let i = 1; i < 1001; i++) {
//     if (i % 2 != 0) {
//         sumOfOddNumbers = sumOfOddNumbers + i;
//     }
// }
// console.log(sumOfOddNumbers);

// //6 program to display the multiplication table of a number entered by the user. 
// // For example, if the user enters 5, display the multiplication table for 5.
// let numToMultiTable = prompt("Please Type The Number for Multiplication Table")
// for (let i = 1; i < +numToMultiTable + 1; i++) {
//     for (let j = 1; j < +numToMultiTable + 1; j++) {
//         console.log(i + ' X ' + j + ' = ' + i * j);
//     }
// }

// //7 program that iterates through an array of colors (e.g., ['red', 'green', 'blue']) 
// // and logs each color to the console using a for loop.
// let arrayOfColors = ['red' , 'green' , 'blue' , 'yellow']
// for (let i = 0; i < arrayOfColors.length; i++) {
//     console.log(arrayOfColors[i])
// }

// //8 program to find the factorial of a given positive integer. 
// // A factorial is the product of all the positive integers less than or equal to the given number.
// let integer = prompt("Please Type a Positive Integer");
// if (integer < 0) {
//     integer = prompt("Please Type a POSITIVE!! Integer")
// }
// let factorial = 1 ;
// while (integer > 0) {
//     factorial = factorial * integer;
//     integer--;
// }
// console.log(factorial)

// //9 program to create an array with the first n elements of the Fibonacci sequence
// let n = prompt("Please Type a number of elements of the Fibonacci Sequence");
// let arr = [0 , 1];
// for (let i = 2; i < n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2])
// }
// console.log(arr)

// //10 program to reverse a given string
// let str = prompt("Please Type a word to Reverse")
// var splitString = str.split('');
// var reverseString = splitString.reverse();
// var joinArray = reverseString.join('');
// console.log(joinArray);

// //11 program to find the smallest common multiple (SCM) of two numbers
// let num1 = prompt('PLease Type First Number')
// let num2 = prompt('PLease Type Second Number')
// for (let i = 1; i <= (num1 * num2); i++) {
//     if ((i % num1 === 0) && (i % num2 === 0)) {
//         console.log(i)
//         break;
//     }
// }

//12 program to generate the first given amount of prime numbers
//prime number is a number greater than 1 that has no positive divisors other than 1 and itself
    function generatePrimes(n) {
        const primes = []; // Create an empty array to store the prime numbers
        // Generate numbers until we have found n prime numbers
        for (let num = 2; primes.length < n; num++) {
          let isPrime = true; // Assume the number is prime until proven otherwise
          // Check if the number is divisible by any number other than 1 and itself
          for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor === 0) {
              isPrime = false; // If it is divisible, mark it as not prime
              break; // No need to check any more divisors for this number
            }
          }
          if (isPrime) {
            primes.push(num); // If the number is prime, add it to the primes array
        }
        }
      
        return primes;
      }
  
  console.log(generatePrimes(8));


// //13 program to calculate the product of the numbers from 1 to 5 using a for loop
// var product = 1;
// for (let i = 1; i < 6; i++) {
//     product = product * i;
// }
// console.log(product);

// //14 program to print a pyramid of asterisks (*) with the given height.
// var height = prompt("Please provide the height of the Pyramid");
// var asterisks = '*'
// if (height == 1) {
//     console.log(' ' + asterisks)
// } else { 
//     console.log(' ' + asterisks)
//     for (let i = 2; i <= height; i++) {
//         asterisks = '*' + '*' + asterisks 
//         console.log(asterisks)
//     }   
// }

// //15 program to calculate the sum of the elements in an array of numbers
// var numArr = [1 , 2 , 3 , 4 , 5];
// var sum = 0;
// for (let i = 0; i < numArr.length; i++) {
//     if (typeof numArr[i] != "number") {
//         alert("One of the Elemnts is not a number");
//         break;
//     } else {
//         sum = sum + numArr[i];
//     }
// }
// console.log(sum);