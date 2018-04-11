function AlphabetSoup(str) { 

  // code goes here  
  var array = str.split("");
  var sorted = array.sort();
  return sorted.join("");    
}
   
// keep this function call here 
// console.log(AlphabetSoup("coderbyte")); // "bcdeeorty"
// console.log(AlphabetSoup("hooplah")); // ahhloop"
// keep this function call here 
AlphabetSoup(readline());