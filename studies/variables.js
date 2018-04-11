/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use 
 * variables.  Variables are named identifiers that can point to values of a 
 * particular type, like a Number, String, Boolean, Array, Object or another 
 * data-type.  Variables are called so because once created, we can CHANGE 
 * the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our 
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. Declaration and Assignment //

// declaration //
var myName; 

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized 
 * it to anything 
 */ 
console.log(myName); // prints => undefined

// initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";
console.log(myVariable); // prints => "someString"

// 2. var, let, const //

// Types of variables

// var //

// The basic variable.  Can be unnassigned and re-assigned to any value.  
// Containers for storing data values

var a = 1;
var b = 2;
var c = a + b;

// let //

// declares block scoped local variable.

let x = 1;

if (x === 1) {
    let x = 2;
console.log(x);  // prints => 2
}
console.log(x);  // prints => 1
  
// const //

// Constant variable.  Must be assigned at declaration.  Cannot be re-assigned.

const number = 3;

// number = 4; => this will throw an error

// 3. Hoisting

// Moving declarations to the top.  
// A variable can be declared after it has been used.
// In other words, a variable can be used before it has been declared.

// Both of these examples work:
d = 1; // assign 1 to d
var d; // declare d

var e; // declare e
e = 2; // assign 2 to e

// 4. Closure

// Variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.

// A function can access all variables defined inside the function, like this:
function myFunction() {
    var f = 1;
    return f + f;
}

// But a function can also access variables defined outside the function, like this:
var f = 1;
function myNewFunction() {
    return f + f;
}
// In the last example, f is a global variable.
// In the first example, f is a local variable.  A local variable can only be used inside
// the function where it is defined.  It is hidden from other functions.
