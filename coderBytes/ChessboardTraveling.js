function ChessboardTraveling(str) {
  var x = str[1];
  var y = str[3];
  var a = str[6]; 
  var b = str[8];
  
  var xDiff = a - x;
  var yDiff = b - y;
  
  return recur(xDiff, yDiff);
  
  function recur(xDiff, yDiff) {
    if (yDiff === 0) { return 1; }
    if (xDiff === 0) { return 1; }
    
    return recur(xDiff - 1, yDiff) + recur(xDiff, yDiff - 1)
  }
}   
// keep this function call here 
ChessboardTraveling(readline());