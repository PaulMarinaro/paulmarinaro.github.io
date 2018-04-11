function ClosestEnemyII(strArr) { 

  // code goes here  
  console.log(strArr);
  // filter 1s and 2s into arrays with x (row) and y (columns) coordinates
  var oneCoord = [];
  var twoCoord = [];
  
  strArr.forEach(function(block, row){
    //   console.log(block, 'block');
    var splitBlock = block.split('');
    // console.log(splitBlock);
    splitBlock.forEach(function(element, index){
        if (element === '1') {
            var x = strArr.length - row;
            // console.log(x, '1x');
            var y = index + 1;
            // console.log(y, '1y');
            // save coordinates (x,y) for 1
            oneCoord.push(x, y);
            console.log(oneCoord, '1 coordinates');
        }
        // find all 2s
        if (element === '2') {
            var y = index + 1;
        //   console.log(y, 'y');
            var x = strArr.length - row;
        //   console.log(x, 'x');
            // save all 2s coordinates
            twoCoord.push([x, y]);
            console.log(twoCoord, '2 coordinates');
        }
      });
  });
  // calculate distance between 1 coord and each 2
  // (1x - 2x) + (1y - 2y)
  var x1 = oneCoord[0];
  var y1 = oneCoord[1];
  var shortest = Infinity;
  twoCoord.forEach(function(coord){
      var distance = Math.abs(x1-coord[0]) + Math.abs(y1-coord[1]);
    //   console.log(distance, 'distance');
      if (distance < shortest) {
          shortest = distance;
      }
    //   console.log(shortest, 'shortest');
  });
  // return the closest distance
   return shortest; 
}
   
// keep this function call here 
// console.log(ClosestEnemyII(["0000", "1000", "0002", "0002"]));  // 2
/*
0 0 0 0
1 0 0 0     (3,1)
0 0 0 2     (2,4)    
0 0 0 2     (1,4)
*/
// console.log(ClosestEnemyII(["000", "100", "200"]));  // 1
console.log(ClosestEnemyII(["0000", "2010", "0000", "2002"]));  // 2
