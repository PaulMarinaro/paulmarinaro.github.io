const SCRIPTS = require('./scripts.js');

const summary = SCRIPTS.reduce((summary, script) => {
    // if key does not exist, 
    if (!summary[script.direction]) {
        // add to summary with value of 1
        summary[script.direction] = 1;
    } else {
        // if it does exist, add one to the value
        summary[script.direction] += 1;
    }
    return summary;
}, {});

const highestDirection = Object.keys(summary).reduce(prevHighest, direction) => {
    // get value at direction
    if (summary[prevHighest] > summary[direction]) {
        return prevHighest;
    } return direction;
    // compare last prevHighest to current direction value
    // return highest of the two

});

console.log(summary);
console.log(highestDirection);