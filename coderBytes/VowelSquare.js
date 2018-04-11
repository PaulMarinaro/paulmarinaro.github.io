function VowelSquare(strArr) { 

  // make an array for each row
  var r1String = strArr[0];
  var row1 = r1String.split("");
  
  var r2String = strArr[1];
  var row2 = r2String.split("");
  
  // check if there are more than 2 arguments
  // if so add another row array
  if (strArr.length > 2) {
      var r3String = strArr[2];
      var row3 = r3String.split("");
  }
  if (strArr.length > 3) {
      var r4String = strArr[3];
      var row4 = r4String.split("");
  }
  var index = null;
  
  // search 1st row for vowel
  for (var i=0;i<row1.length;i++) {
    // if (row[i] === 'aeiou'.includes())
    if (row1[i] === "a" || row1[i] === "e" || row1[i] === "i" || row1[i] === "o" || row1[i] === "u") {
      if (row1[i+1] === "a" || row1[i+1] === "e" || row1[i+1] === "i" || row1[i+1] === "o" || row1[i+1] === "u") {
          console.log(row1[i], 'vowel');
          // if found, save the vowel's index
          index = i;
          if (row2[i] === "a" || row2[i] === "e" || row2[i] === "i" || row2[i] === "o" || row2[i] === "u") {
            if (row2[i+1] === "a" || row2[i+1] === "e" || row2[i+1] === "i" || row2[i+1] === "o" || row2[i+1] === "u") {
              return "0-" + index;
            }
          }
      }
    }
  }
  for (var i=0;i<row2.length;i++) {
    if (row2[i] === "a" || row2[i] === "e" || row2[i] === "i" || row2[i] === "o" || row2[i] === "u") {
      if (row2[i+1] === "a" || row2[i+1] === "e" || row2[i+1] === "i" || row2[i+1] === "o" || row2[i+1] === "u") {
          // if found, save the vowel's index
          index = i;
          if (row3[i] === "a" || row3[i] === "e" || row3[i] === "i" || row3[i] === "o" || row3[i] === "u") {
            if (row3[i+1] === "a" || row3[i+1] === "e" || row3[i+1] === "i" || row3[i+1] === "o" || row3[i+1] === "u") {
              return "1-" + index;
            }
          }
      }
    }
  }
  if (strArr.length > 3) {
    for (var i=0;i<row3.length;i++) {
    if (row3[i] === "a" || row3[i] === "e" || row3[i] === "i" || row3[i] === "o" || row3[i] === "u") {
      if (row3[i+1] === "a" || row3[i+1] === "e" || row3[i+1] === "i" || row3[i+1] === "o" || row3[i+1] === "u") {
          // if found, save the vowel's index
          index = i;
          if (row4[i] === "a" || row4[i] === "e" || row4[i] === "i" || row4[i] === "o" || row4[i] === "u") {
            if (row4[i+1] === "a" || row4[i+1] === "e" || row4[i+1] === "i" || row4[i+1] === "o" || row4[i+1] === "u") {
              return "2-" + index;              
            }
          }
      }
    }
  }
  }
  // If no 2x2 square of vowels exists, then return the string "not found"
  return "not found";
}



console.log(VowelSquare(["abcd", "eikr", "oufj"])); // "1-0" "row-column" (zero indexed)

// /*
// a b c d
// e i k r
// o u f j 
// */

console.log(VowelSquare(["aqrst", "ukaei", "ffooo"])); // "1-2"
// /*
// a q r s t
// u k a e i 
// f f o o o 
// */

console.log(VowelSquare(["gg", "ff"])); // "not found"

