//  Number Methods:

// .toString() method:
// - converts a numeric value into a string.
// - is used to return a string representing the specified Number object.
// - This method accepts a single optional parameter base. This parameter specifies the base in which the integer is represented in the string. (between 2 and 36 )

let ten = 213;
console.log(ten.toString()); // Output: '213'
console.log(ten.toString(2)); // Output: '11010101'
console.log(ten.toString(10)); // Output: '213'

// .toFixed() method:
//  - rounds up a number to the nearest highest or lowest fixed-point notation.
// It takes in a parameter which signifies the number of digits should be displayed after the decimal point.

let ourNum = 4.56789;
console.log(ourNum.toFixed()); // Output: "5"
console.log(ourNum.toFixed(2)); // Output: "4.56"

//  .toExponential() method:
// -   is used to convert a number to its exponential form.
// It returns a string representing the Number object in exponential notation.
// syntax: var_name.toexponential(y) => "y" is an integer between 0 and 100 representing the number of digits in the notation after the decimal point.

let num = 15.199;
console.log(num.toExponential()); // 1.5199e+1
console.log(num.toExponential(0)); // 2e+1
console.log(num.toExponential(7)); // 1.5199000e+1

// .toPrecision() method:
// returns a string with a number written with a specified length.

let x = 9.656;
console.log(x.toPrecision());
console.log(x.toPrecision(2));
console.log(x.toPrecision(4));
console.log(x.toPrecision(6));

// .valuOf() method:
// returns a number as a number.
// In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).
// The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.
// There is no reason to use it in your code.

let a = 123;
console.log(a.valueOf()); // you can pass variable
console.log((123).valueOf()); // pass numbers
console.log((100 + 23).valueOf()); // pass expressions

// CONVERTING VARIABLES TO NUMBERS:
//There are 3 JavaScript methods that can be used to convert variables to numbers:
// 1. The Number() method:
// a. Number() can be used to convert JavaScript variables to numbers: Returns a number, converted from its argument.

console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("10")); // 10
console.log(Number("  10")); // 10
console.log(Number("10.33")); // 10.33
console.log(Number("10,33")); // If the number cannot be converted, NaN (Not a Number) is returned.
console.log(Number("10 33")); //NaN
console.log(Number("John")); // NaN
console.log(Number("10", "10")); // 10

// b. Number() can also convert a date to a number:
// The Number() method returns the number of milliseconds since 1.1.1970.
// The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:

console.log(Number(new Date("1970-01-01"))); // 0
console.log(Number(new Date("1970-01-02"))); // 86400000
console.log(Number(new Date("2017-09-30"))); // 1506729600000

// The parseInt() method:
// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
// Parses its argument and returns an integer

console.log(parseInt("-10")); // -10
console.log(parseInt("-10.33")); // -10
console.log(parseInt("10")); // 10
console.log(parseInt("10.33")); // 10
console.log(parseInt("10 20 30")); // 10
console.log(parseInt("10 years")); // 10
console.log(parseInt("years 10")); // NaN... If the number cannot be converted, NaN (Not a Number) is returned.

// The parseFloat() method:
// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
// Parses its argument and returns a floating point number

console.log(parseFloat("10")); // 10
console.log(parseFloat("10.33")); // 10.33
console.log(parseFloat("10 20 30")); // 10
console.log(parseFloat("10 years")); // 10
console.log(parseFloat("years 10")); // NaN
// These methods are not number methods, but global JavaScript methods.
