function FirstReverse(str) { 

  // code goes here  
  var array = [];
  for (var i = str.length-1; i > -1; i--) {
    array.push(str[i]);
  }
  return array.join("");       
}
   
// keep this function call here 
FirstReverse(readline());