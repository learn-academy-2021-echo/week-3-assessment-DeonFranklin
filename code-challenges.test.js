// ASSESSMENT 3: Coding Practical Questions with Jest

const { expect } = require("@jest/globals");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
// a) Create a test with expect statements for each of the variables provided.
// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]
// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// create test 
// create function that takes in a number 2 < 
// return array of fibonacci sequence
describe("fibonacci", () => {
    it("takes in a number and creates a fibonacci sequence", () => {
        expect(fibonacci(6)).toEqual(0);
        expect(fibonacci(10)).toEqual(0, 1,  1,  2,  3, 5, 8, 13, 21, 34, 55);
    })
})
// b) Create the function that makes the test pass.
const fibonacci = function (n) 
    {if (n===1) 
        {return [0,1];
    }else {
        var s = fibonacci(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
   }
};
console.log(fibonacci(6));
console.log(fibonacci(10));

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
// a) Create a test with expect statements for each of the variables provided.
var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]
describe('orderedOdds', () => {
    it('takes in an array and returns the odd numbers in order from least to greatest.', () => {
        expect(4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola").toBeDefined(-9, 7, 9, 199);
        expect("hello", 7, 23, -823, false, 78, null, "67", 6, "number").toBeDefined(-823, 7, 23)   
    }
    )
});
//Figured out the 
// b) Create the function that makes the test pass.
var oddNumbers = function(array) {
    var oddsArray = [];
    var sortedArray = oddsArray.sort();
    for (var i = 0; i < array.length; i++) {
        if ((array[i] % 2) != 1) {
            odds.push(array[i]);
                return(odds);
        }
    }
};


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
// a) Create a test with expect statements for each of the variables provided.
var numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []
describe('sumArray', () => {
    it('takes an array and adds the number by order of the index', () => {
        expect(numbersToAdd1).toBeDefined(2, 6, 51, 60);
        expect(numbersToAdd2).toEqual(0, 7, -8, 12);
        expect(numbersToAdd3).toEqual([])
    });     
});
// create function that takes in array and returns an array with a sum of the digits 
// engineer the function to take a number and add it to the next number in the array
// b) Create the function that makes the test pass.
function sumArray(a){
    var total= (array);
    for(i = 0; i < array.length; i++) { 
        total += a[i];
    }
    return total;
}