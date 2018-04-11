function TimeConvert(num) { 

  // code goes here  
  var hours = num / 60;
  hours = Math.floor(hours);
  var minutes = num % 60;

  return hours + ":" + minutes; 
         
}
   
// keep this function call here 
// console.log(TimeConvert(126)); // 2:6 
// console.log(TimeConvert(45)); // 0:45   
// keep this function call here 
TimeConvert(readline());