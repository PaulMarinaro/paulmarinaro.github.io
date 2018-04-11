function LetterChanges(str) { 
  // code goes here  
  var split = str.split("");
  var newString = [];
  for (var i = 0; i < split.length; i++) {
     var code = split[i].charCodeAt();
    console.log(code);
    if (code >= 65 && code <= 90 || code >= 97 && code <= 122) {
      if (code === 90) {
          code -= 25;
      } else {
        code += 1;
      }
    }
    newString.push(String.fromCharCode(code)); 
  }
  var join = newString.join(""); 
  
  var string = join.replace(/a/g, 'A');
  var stringA = string.replace(/e/g, 'E');
  var stringB = stringA.replace(/i/g, 'I');
  var stringC = stringB.replace(/o/g, 'O');
  var stringD = stringC.replace(/u/g, 'U');
  
  return stringD;
}
// keep this function call here 
LetterChanges(readline());
