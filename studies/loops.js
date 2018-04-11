// Loops //

// Loops can execute a block of code a number of times.

// Loops are handy when you want to run the same code over and over again, each 
// time with a different value.

// 1. for, for-in, and while loops

// The For Loop
// loops through a block of code a number of times

/*
for (statement 1; statement 2; statement 3) {
    code block to be executed
}
statement 1 defines the starting point of the loop
statement 2 defines the condition to stop looping
statement 3 increments the index after each loop
*/

var myArray = [1, 2, 3, 4, 5];

for (var i=0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
/* prints:
1
2
3
4
5
*/

// The For-In Loop
// loops through the properties of an object
// pulls out all the keys of an Object, one by one.  This allows you to use the
// key to get the value in the Object:

var person = {firstName: "John", lastName: "Doe", age: 25}; // creates the object

for (var key in person) {
    console.log(person[key]); 
}

/* prints:
"John"
"Doe"
25
*/

// The While Loop 
// loops through a block of code while a specified condition is true
var count = 1;
while (count <= 3) {
    console.log(count);
    count++;
}
/* prints
1
2
3
*/

// 2. More examples

// loop any number of times:

for (var i = 0; i <= 3; i++) {
  console.log(i)
} for (var j = 0; j <=3; j++) {
  console.log(j)
}

// forward counting to some limit:

var count = 1;
while (count <= 3) {
    console.log(count);
    count++;
}
/* prints
1
2
3
*/

// backward counting down to 0:

var count = 3;
while (count >= 0) {
    console.log(count);
    count--;
}
/* prints
3
2
1
0
*/

// 3. Looping over Arrays, forwards and backwards

// Loop over an Array forwards:

var myArray = ['a', 'b', 'c'];

for (var i=0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
/* prints:
'a'
'b'
'c'
*/

// Loop over an Array backwards:

var myArray = ['a', 'b', 'c'];

for (var i = myArray.length -1; i > -1; i--) {
    console.log(myArray[i]);
}
/* prints:
'c'
'b'
'a'
*/

// 4. Loop over an Object, forwards and backwards ( hint: keys = Object.keys(myObject); )

// Loop over an Object forwards:

var letters = {first: "a", second: "b", third: "c"}; 

var keys = Object.keys(letters);

for (var i=0; i<keys.length; i++) {
    console.log(letters[keys[i]]);
}

// Loop over an Object backwards:

var letters = {first: "a", second: "b", third: "c"}; 

var keys = Object.keys(letters);

for (var i=keys.length -1; i>-1; i--) {
    console.log(letters[keys[i]]);
}