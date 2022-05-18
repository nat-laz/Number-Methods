//  Number Methods:

// 1. toString()
// - converts a numeric value into a string.
// - Adding the number 2 as a parameter to .toString() method, returns the binary value of the number.

let ten = 10;
console.log(ten.toString()); // Output: '10'

// 2.toFixed()
//  - rounds up a number to the nearest highest or lowest fixed-point notation.
// It takes in a parameter which signifies the number of digits should be displayed after the decimal point.

let ourNum = 4.56789;
console.log(ourNum.toFixed()); // Output: "5"
console.log(ourNum.toFixed(2)); // Output: "4.56"

// 3. toExponential()
// -   is used to convert a number to its exponential form.
// It returns a string representing the Number object in exponential notation.
// syntax: var_name.toexponential(y) => "y" is an integer between 0 and 100 representing the number of digits in the notation after the decimal point.

let num = 15.199;

console.log(num.toExponential());
console.log(num.toExponential(0));
console.log(num.toExponential(7));
