function CheckNums(num1,num2) { 

  // code goes here  
  if (num2 > num1) {
    return true;
  }  else if (num2 < num1) {
    return false;
  } else {
    return "-1";
  }    
}
   
// keep this function call here 
// console.log(CheckNums(3, num2 = 122)); // "true"
// console.log(CheckNums(67, num2 = 67)); // "-1"
// keep this function call here 
CheckNums(readline());