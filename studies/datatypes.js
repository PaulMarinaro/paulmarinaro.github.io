// Datatypes //

// The types of values.


// 1. Number  (Simple/ Primative Data Type)

// Numeric data 

var a = 1;
console.log(a); // prints 1

// 2. String  (Simple/ Primative Data Type)

// Character data 

var b = "dog";
console.log(b); // prints 'dog'

// 3. Boolean  (Simple/ Primative Data Type)

// true or false 

var x = 1;
var y = 1;
var z = 2;
console.log(x == y) // prints true
console.log(x == z) // prints false

// 4. Array  (Complex Data Type)

// stores multiple values in a single variable 
// zero-indexed, i.e. first item is [0], second is [1], and so on.
// written with square brackets [ ]
// items separated by commas

var stuff = ['Nintendo Switch', 'Bass Guitar', 'Computer'];
console.log(stuff[0]); //prints 'Nintendo Switch'
console.log(stuff[1]); //prints 'Bass Guitar'
console.log(stuff[2]); //prints 'Computer'

// 5. Object  (Complex Data Type)

// stores multiple values in a single variable in key: value pairs, separated by commas. 
// written with curly braces { }

var myObject = {
    firstName: 'Paul',
    favoriteSport: 'Soccer',
    eyeColor: 'blue'
}
console.log(myObject.firstName); // prints 'Paul'

// 6. Function (Complex Data Type)

// a block of code designed to perform a particular task.  Executed when "something"
// invokes it (calls it).

function myFunction(n1, n2) { //n1 and n2 are called parameters
    return n1 + n2;   // The function returns the sum of n1 and n2.
    //the return statement stops the function
}
myFunction(1, 2); //calls the function and returns 3.  1 and 2 are called arguments

// 7. undefined  (Simple/ Primative Data Type)

// no-value, unititialized 

var c;  // c is undefined.  The variable has not been assigned a value.

// 8. null (Simple/ Primative Data Type)

// no-value, nullified by a programmer 

var d = null;  //var d is defined as null, no-value

// 9. NaN  (Simple/ Primative Data Type)

// Not a Number value 

function notNumber(e) {
    if (isNaN(e)) {  // isNaN() is a built in NaN test function
        return true;
    } else {
        return false;
    }
}
console.log(notNumber('hello')); //prints true, because 'hello' is not a number
console.log(notNumber('3'));   //prints false, because 3 is a number

// 10. Infinity and -Infinity 

// Infinity is a numeric value that represents positive infinity.  
// Infinity is displayed when a number exceeds the upper limit of the 
// floating point numbers, which is 1.797693134862315E+308.

console.log(Infinity); // prints Infinity
console.log(Infinity + 1); // prints Infinity
console.log(Math.pow(10, 1000)); // prints Infinity

// -Infinity is a numeric value that represents negative infinity.
// -Infinity is displayed when a number exceeds the lower limit of the 
// floating point numbers, which is -1.797693134862316E+308.

console.log(Math.log(0)); // prints -Infinity

// 11. What is the difference between simple and complex data types?

// Simple/ Primative Data Types

// a single simple data value with no additional properties and methods.
// examples include:
// string
// number
// boolean
// undefined

// Atomic, immutable: they do not hold, collect or aggregate other values, and operations
// on simple values return new simple values, they do not alter the original value.

// Copy by value - when assigning or passing, simple data-types are copied from one
// variable to the next.

// Complex Data Types

// examples include:
// function
// object
// array

// Complex values aggregate other values and therefore are of indefinite size.

// Copy by reference - when assigning or passing, complex data-types are passed by 
// reference.