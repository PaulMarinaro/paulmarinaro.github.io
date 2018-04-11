function KaprekarsConstant(num) { 

  // code goes here  
  var count = 1;
  while (newNum !== 6174) {

  var string = num.toString();
// adding zeroes to fit it to a 4-digit number),
  while (string.length < 4) {
    string = "0" + string;
  }    
  var array = string.split("");
  
  // arrange the digits in  ascending order 
  var ascend = array.sort();
  var ascJoin = ascend.join('');
  var ascNum = Number(ascJoin);
  
  // Arrange the digits in descending order 
  var decend = ascend.reverse();
  var decJoin = decend.join('');
  var decNum = Number(decJoin);
  
//  subtract the smaller number from the bigger number
  var newNum = decNum - ascNum;
  
// repeat the previous steps until you reach a fixed number: 6174.
// return the number of times this routine must be performed until 6174 is reached.

    if (newNum === 6174) {
    return count; 
    }  else {
    count++;
    num = newNum;
  }
  }  
         
}
   
// keep this function call here 
// console.log(KaprekarsConstant(2111)); // 5
// console.log(KaprekarsConstant(9831)); // 7
// console.log(KaprekarsConstant(3524)); // 3
// console.log(KaprekarsConstant(3020)); // 
// keep this function call here 
KaprekarsConstant(readline());