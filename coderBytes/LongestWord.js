function LongestWord(sen) { 

  // code goes here  
  var longest = [];
  var removePunc = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var array = removePunc.split(" ");
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;     
}
   
// keep this function call here 
LongestWord(readline());