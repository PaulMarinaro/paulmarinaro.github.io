function CorrectPath(str) { 

  // code goes here  
  var array = str.split("");
  console.log(array, 'array');
  
  // in a 5x5 grid, there need to be at least 4 right and 4 down
  var r = 4;
  var d = 4;
  // track the indexes of question marks (?)
  var q = [];
  
  // loop thru array and increment r and d
  for(var i = 0; i < array.length; i++) {
//     console.log(array[i], '[i]')
    if (array[i] === "r") {r -= 1};
    if (array[i] === "l") {r += 1};
    if (array[i] === "d") {d -= 1};
    if (array[i] === "u") {d += 1};
    if (array[i] === "?") {q.push(i)};
  }
  console.log(r, 'r');
  console.log(d, 'd');
  console.log(q, '? index');
  
  // if there are less than 4 r or d, splice them in for ?s
  for (var j = 0; j < q.length; j++) {
    if (d < 0) {
        array.splice(q[j], 1, "u");
        console.log(array, 'spliced array');
        d++;
        console.log(d, 'd');
    }   else if (r < 0) {
        array.splice(q[j], 1, "l");
        console.log(array, 'spliced array');
        r++;
        console.log(r, 'r');
    }   else if (d > 0) {
        array.splice(q[j], 1, "d");
        console.log(array, 'spliced array');
        d--;
        console.log(d, 'd');
    }   else if (r > 0) {
        array.splice(q[j], 1, "r");
        console.log(array, 'spliced array');
        r--;
        console.log(r, 'r');
    }   else {
        array.splice(q[j], 1, "u");
        console.log(array, 'spliced array');
        d++;
        console.log(d, 'd');
    }
  }
  return array.join('');       
}
   
// keep this function call here 
// console.log(CorrectPath("r?d?drdd")); // "rrdrdrdd"
// console.log(CorrectPath("???rrurdr?")); // "dddrrurdrd"
// console.log(CorrectPath("drdr??rrddd?")); // "drdruurrdddd"

// console.log(CorrectPath("rd?u??dld?ddrr")); // "rdrurrdldlddrr"
// console.log(CorrectPath("dddd?uuuurrr????")); // "ddddruuuurrrdddd"