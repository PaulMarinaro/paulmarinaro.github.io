function LetterCapitalize(str) { 

  // code goes here  
  var array = str.split(" ");
  var fL = [];
  var rW = [];
  var newArray = [];
  for (var i=0;i<array.length;i++){
    fL = array[i].slice(0,1).toUpperCase();
    rW = array[i].slice(1);
    newArray.push(fL + rW); 
  }
  return newArray.join(" ");
}

LetterCapitalize("hello world");