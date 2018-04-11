// String Manipulation //

// 1.  With operators

// Stings can be manipulated with operators

// The + operator can also be used to add (concatenate) strings.

var text1 = "Hello";
var text2 = "World";
var text3 = text1 + " " + text2;  // returns "Hello World"

// The += assignment operator can also be used to add (concatenate) strings.

var text3 = text1 += " World" // returns "Hello World"

// _____________________________________________________________________________

// 2.  With string methods

// String methods help you to work with strings.
// All string methods return a new string.  They don't modify the original string.
// Strings are immutable: Strings cannot be changed, only replaced.


// String Length
// The length property returns the length of a string:

var myString = 'Paul';
console.log(myString.length); // prints 4

// Converting to Upper and Lower Case

console.log(myString.toUpperCase()); // prints 'PAUL'
console.log(myString.toLowerCase()); // prints 'paul'

// The concat() Method joins two or more strings

var text1 = "Hello";
var text2 = "World";
console.log(text1.concat(' ', text2)); // prints "Hello World"

// The charAt() Method returns the character at a specific index (position) in a string

var str = "Hello World";
str.charAt(0); // returns H
