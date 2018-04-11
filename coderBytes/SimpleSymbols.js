function SimpleSymbols(str) { 

  // code goes here  
  var array = str.split("");
  for (var i = 0; i < array.length; i++) {
    var code = array[i].charCodeAt();
    if (code >= 65 && code <= 90 || code >= 97 && code <= 122) {
        if (array[i-1] !== "+" || array[i+1] !== "+") {
          return false;
        } 
    }
  }
  return true;      
}
   
// keep this function call here 
// SimpleSymbols("+d+=3=+s+");   // true
// SimpleSymbols("f++d+");   // false
// keep this function call here 
SimpleSymbols(readline());