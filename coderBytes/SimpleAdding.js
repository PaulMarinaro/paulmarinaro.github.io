function SimpleAdding(num) { 

  // code goes here  
  var current = 1;
  var total = 0;
  while (current <= num) {
    total += current;
    current ++;
  }
  console.log(total);
  return total; 
         
}

SimpleAdding(4);
   
// keep this function call here 
SimpleAdding(readline());