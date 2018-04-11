function PentagonalNumber(num) { 
  // code goes here  
  var total = 1;
  var n = 1;
  while (n <= num) {
      total += 5*(n-1);
      n++;
  }
  return total;       
}
   
// // keep this function call here
// console.log(PentagonalNumber(1)); // 1
// // n
// console.log(PentagonalNumber(2)); // 6 
// // // n + 5
// console.log(PentagonalNumber(3)); // 16
// // // n + 5 + 5
// console.log(PentagonalNumber(4)); // 31 
// // // n + 5 + 5 + 5
// console.log(PentagonalNumber(5)); // 51 
// // n + 5 + 5 + 5 + 5
   
// keep this function call here 
PentagonalNumber(readline());