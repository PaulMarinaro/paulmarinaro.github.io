function EightQueens(strArr) { 

  // code goes here  
  
  for (var i=0;i<strArr.length;i++) {
    //   console.log(strArr[i], 'element');
      var x = strArr[i].slice(1,2);
      var y = strArr[i].slice(3,4);
    //   console.log(x, 'x');
    //   console.log(y, 'y');

    for (var j=0;j<strArr.length;j++) {
        if (strArr[i] !== strArr[j]) {
            var x1 = strArr[j].slice(1,2);
            var y1 = strArr[j].slice(3,4); 
            // console.log(x1, 'x1');
            // console.log(y1, 'y1');
            // horizontal & verticle
            if (x === x1 || y === y1) return strArr[i];
            // diagonal
            if (x > x1) var xCompare = x - x1;
            if (x < x1) var xCompare = x1- x;
            if (y > y1) var yCompare = y - y1;
            if (y < y1) var yCompare = y1 - y;
            if (xCompare === yCompare) return strArr[i];
        }
    }
  }
  return true; 
}

console.log(EightQueens(["(2,1)", "(4,2)", "(6,3)", "(8,4)", "(3,5)", "(1,6)", "(7,7)", "(5,8)"])); // true
// console.log(EightQueens(["(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)"])); //"(2,1)"
// console.log(EightQueens(["(2,1)", "(5,3)", "(6,3)", "(8,4)", "(3,4)", "(1,8)", "(7,7)", "(5,8)"])); // "(5,3)"
