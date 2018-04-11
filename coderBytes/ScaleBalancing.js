function ScaleBalancing(strArr) { 

  // code goes here  
  var array = [];
  for (var i=0;i<arguments.length;i++) {
      array.push(arguments[i]);
  } 
  
  var s = array[0];
  var sSlice = s.slice(1, s.length-1);
  var sArray = sSlice.split(", ").map(Number);

  var l = sArray[0];
  var r = sArray[1];
  
  var w = array[1];
  var wSlice = w.slice(1, w.length-1);
  var wArray = wSlice.split(", ").map(Number);

// make an array of all the possible combinations
  var lArray = []; // all combinations of l + weights
  var rArray = [];
  for (var i = 0; i < wArray.length; i++) {
    lArray.push(l + wArray[i]);
    rArray.push(r + wArray[i]);
       if (l + wArray[i] === r) {return wArray[i].toString();}
       if (r + wArray[i] === l) {return wArray[i].toString();}

  }   
  
// then compare them, if two are equal, then return the two weights
// that were added
  // loop thru lArray
  for (var j = 0; j < lArray.length; j++) {
    for (var k = 0; k < rArray.length; k++) {
      if (lArray[j] === rArray[k]) {
        var bal = [wArray[j], wArray[k]];
        var sorted = bal.sort();
        return sorted.toString();
      }
    }
  }
// It is also possible to add two weights to only one side of 
// the scale to balance it. 
  for (var m = 0; m < wArray.length; m++) {
      for (var n = 0; n < wArray.length; n++) {
          if (wArray[m] + wArray[n] + l === r || wArray[m] + wArray[n] + r === l) {
              var double = [wArray[m], wArray[n]];
              var doubleSort = double.sort();
              return doubleSort.toString();
          }    
      }
  }   
// If it is not possible to balance the scale then your 
//program should return the string not possible. 
    return "not possible";
}
   
// console.log(ScaleBalancing("[3, 4]", "[1, 2, 7, 7]")); // "1"
// console.log(ScaleBalancing("[13, 4]", "[1, 2, 3, 6, 14]")); // "3,6"
// console.log(ScaleBalancing("[5, 9]", "[1, 2, 6, 7]")); // "2,6"