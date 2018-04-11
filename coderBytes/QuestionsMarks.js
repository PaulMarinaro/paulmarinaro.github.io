function QuestionsMarks(str) { 

  // code goes here  
  
  // find all the pairs of numbers that add up to 10, 
  var array = str.split('');
//   console.log(array, 'array');
  var num1 = null;
  var index = null;
  var count = 0;
  var equalsTen = false;
  for (var i=0;i<array.length;i++) {
      if (!isNaN(array[i])) {
//         console.log(array[i], 'number');
          if (num1 + Number(array[i]) === 10) {
//               console.log('equals 10');
              equalsTen = true;
//               console.log(equalsTen, 'equalsTen');
              count = 0;
              for (var j=i; j>index; j--) {
                  if (array[j] === '?') {count ++;}
              }   
//               console.log(count, 'count');
              index = i;
//               console.log(index, 'index');
              if (count !== 3) {return false;}
          }   
          else {
              num1 = Number(array[i]);
//            console.log(num1, 'num1');
              index = i;
//            console.log(i, 'index');      
          }
      }
  }
  // and then check what's between them.
  if (equalsTen === false) {return false;}
  return true;         
}
 
// console.log(QuestionsMarks("arrb6???4xxbl5???eee5"));  // true
// console.log(QuestionsMarks("aa6?9"));  // false
// console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));  // true
// console.log(QuestionsMarks("9???1???9??1???9"));  // false
// console.log(QuestionsMarks("5??aaaaaaaaaaaaaaaaaaa?5?5"));  // false
// console.log(QuestionsMarks("5??aaaaaaaaaaaaaaaaaaa?5?a??5"));  // true
// keep this function call here 
QuestionsMarks(readline());
