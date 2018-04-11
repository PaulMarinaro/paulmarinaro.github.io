function FirstFactorial(num) { 

  // code goes here  
  var i = num;
  var total = num;
  while (i > 1) {
     i--;
     total *= i;
  }
  return total; 
         
}
   
// keep this function call here 
FirstFactorial(readline());