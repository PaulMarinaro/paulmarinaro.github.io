// Control Flow & Conditional Statements //

// Controlling the flow of an application

// We can make decisions in our code by asking true or false questions.  Based
// on the answer, we can decide what code runs if the answer to the question is true, 
// and what code runs if the answer to the question is false.

// 1.  If
// executes a block of code if a condition is true

if (2 > 1) {
    console.log(true);  // prints true
}

// 2.  Else-if
// specifies a new condition if the first condition is false

if (2 < 1) {
    console.log("less than");
}   else if (2 > 1) {
    console.log("greater than") // prints "greater than"
}

// 3.  Else
// executes a block of code if the condition is false

if (2 < 1) {
    console.log(true);  
}   else {
    console.log(false); // prints false
}

// 4.  Switch
// used to perform different actions based on different conditions
// used to select one of many blocks of code to be executed

var color = "red";

switch(color) {
    case 'blue': console.log("The color was blue");
    break;
    case 'red': console.log("The color was red"); // prints "The color was red"
    break;  // breaks out of the switch block
    default: console.log("I don't recognize that color");
}

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.

// When the break keyword is reached, it breaks out of the switch block.
// This will stop the execution of more code and case testing inside the block.
// When a match is found, and the job is done, it's time for a break.  There is no 
// need for more testing.
// It is not neccesary to break the last case in a switch block.  The block 
// breaks (ends) there anyway.

// The default keyword specifies the code to run if there is no case match.