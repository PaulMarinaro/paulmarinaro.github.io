// Operators //

// Act on our data

// assign values, compare values, perform arithmetic operations, and more.

// Operands are the values that operators act on:
// Unary only work with one value
// Binary with two
// Ternary with three

//______________________________________________________________________________

// 1.  Assignment Operators

// Used to assign values to variables

x = 10;
y = 5;

x = y; // result x = 5;
x += y; // same as x = x + y; result x = 15
x -= y; // same as x = x - y; result x = 5
x *= y; // same as x = x * y; result x = 50
x /= y; // same as x = x / y; result x = 2
x %= y; // same as x = x % y; result x = 0

//______________________________________________________________________________

// 2.  Arithmetic Operators

// Used to perform arithmetic between variables and/or values.

// Addition, +

var y = 5;
var x = y + 2; // result x = 7

// Subtraction, -

x = y - 2; // result x = 3

// Multiplication, *

x = y * 2; // result x = 10

// Division, /

x = y / 2; // result x = 2.5

// Modulus (division remainder), %

x = y % 2; // result x = 1

// Increment, ++ 

x = ++y; // result x = 6
x = y++ // result x = 7

// Decrement, -- 

x = --y; // result 4
x = y--; // result 3

//______________________________________________________________________________

// 3.  Comparison Operators

// Used in logical statements to determine equality or difference between variables or values.

x = 5;

// equal to, == 
x == 8; // returns false
x == 5; // returns true

// equal value and equal type, === 
x === "5"; // returns false
x === 5; // returns true

// not equal, != 
x != 8; // returns true

// not equal value or not equal type, !==
x !== "5"; // returns true
x !== 5; // returns false

// greater than, > 
x > 8; // returns false

// less than, < 
x < 8; // returns true

// greater than or equal to, >= 
x >= 8; // returns false

// less than or equal to, <=  
x <= 8; // returns true

//______________________________________________________________________________

// 4.  Logical Operators

// Used to determine the logic between variables or values.

x = 6;
y = 3;

// and, &&
(x < 10 && y > 1); // is true

// or, || 
(x === 5 || y === 5); // is false



//______________________________________________________________________________

// 5.  Binary Operators (!, typeOf, -)

// not, ! 
x = 6;
y = 3;
!(x === y); // is true

// Unary negation, -
// Returns the negation of its operand.

x = 3;
console.log(-x); // prints -3

// typeof returns the type of a variable, object, function or expression:

typeof "Paul" // returns string
typeof 3 // returns number
typeof NaN // returns number, the data type of NaN is number
typeof false // returns boolean
typeof [1, 2, 3] // returns object, the data type of an array is object
typeof {name: 'Paul', age: 100} // returns object
typeof new Date() // returns object, the data type of a date is object
typeof function() {} // returns function
typeof myCar // returns undefined (if myCar is not declared)
typeof null // returns object, the data type of null is object

// You cannot use typeof to define if an object is an array or a date

//______________________________________________________________________________

// 6.  Conditional (Ternary) Operators (a ? b : c)

// The conditional (ternary) operator assigns a value to a variable based on a condition.

// Syntax
// variablename = (condition) ?
// value1: value2

var age = 10;
var testAge = (age < 18) ? "Too young": "Old enough";
console.log(testAge); // returns "Too young"

// Since the variable "age" is below 18, the value of the variable "voteable" will
// be "Too young", otherwise the value of voteable will be "Old enough".

