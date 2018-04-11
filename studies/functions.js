// Functions //

// A function is a block of code designed to perform a particular taks.
// A function is executed when "something" invokes it (calls it).

// A list of instructions.

// 1. The two phases to using functions: First we must ___? Next we can execute 
// (or two other words for executing a function?) a function by?

// A. Declaration/definition: creating the Function:

function myFunction(a, b) {
    return a * b; 
}

// B. Invocation/calling/executing/applying: using the Function:

myFunction(2, 3); // returns 6

// 2. What’s the difference between a function’s parameters and arguments PASSED to a function?

// Parameters can be written as variables
// Arguments are specific values to be processed by the function

function myFunction(a, b) { // a and b are the parameters
    return a * b; 
}
myFunction(2, 3); // 2 and 3 are the arguments PASSED to the function, values 
// received by the function when it is invoked.

// 3. What’s the syntax for a NAMED function?

/* function keyword, followed by a name, followed by parentheses ():

function name(paramter1, parameter2) { 
    code to be executed 
}
*/

// 4. How do we assign a function to a variable?

var x = myFunction(2, 5); //Function is called, return value will end up in x


function myFunction(a, b) {
    return a * b;  // Function returns the product of a and b
}
// the result in x will be 10


// 5. Functions can OPTIONALLY take inputs and OPTIONALLY return a single value, 
// how do we specify inputs, and how do we return a value?

function myFunction(a, b) { // function takes two inputs called parameters
    return a * b;  // Function returns the value of the product of a and b
}
myFunction(2,5); // returns 10


// 6. NOTE: Primitive (simple) values are passed to a function BY COPY, 
// complex by reference. Try it!

// Primitive types are copied by value:

var a = 1;
var b = a; // the value stored in a is copied into b

b = 2; // changing the value at b doesn't effect what is stored in a
console.log(a); // prints 1

// Complex types are copied by reference:

var a = {one: 'cat'};
var b = a;
// Here, the value stored in b is a reference to the value stored in a
// They now both point to the same object

b.one = 'dog';
console.log(a.one); // prints 'dog'
// changing the value at b effects all references because the value is a 
// reference to the same object


// 7. Scope: Functions can see and modify variables in parent or global scopes. 
// The inverse is NOT true.

var a = 1;
function doSomething() {
    a = 2;
}
console.log(a); // prints 1
doSomething();
console.log(a); // prints 2 
// a is accesible with the body or scope of doSomething(), and can therefore alter
// the value a contains

function doSomething() {
var c = 3;
console.log(c); // prints 3
}
/*
console.log(c); // would print error, c is not defined
The variable c is created within the scope of the function doSomething(), so it 
is not accessible in the parent scope.
*/

// 8. Closures: Functions form closures around the data they house. If an object 
// returned from the Function and is held in memory somewhere (referenced), 
// that closure stays ALIVE, and data can continue to exist in these closures! 
// (See: our meeting-room app for an example!) 
// (ALSO, see: Understanding JavaScript Closures with Ease)

// Maintaining access to variable by enclosing them in Function bodies
// The invocation of the function has access to variables of its parent scope

// A closure is an inner function that has access to the outer (enclosing) function's
// variables 

function showName(firstName, lastName) {
    var nameIntro = "Your name is ";
        // this inner function has access to the outer function's variables, 
        // inluding the parameter
        function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }
    return makeFullName();
}
showName("John", "Doe"); // returns "Your name is John Doe"

