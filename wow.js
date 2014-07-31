invalid = [
  1,1,1,1,1,1,1,1,1,
  1,1,1,1,1,1,1,1,1,
  1,1,1,1,1,1,1,1,1,
  1,1,1,1,1,1,1,1,1,
  1,1,1,1,1,1,1,1,1,
  1,1,1,1,1,1,1,1,1,
  1,1,1,1,1,1,1,1,1,
  1,1,1,1,1,1,1,1,1,
  1,1,1,1,1,1,1,1,1
]


valid = [
  5,3,4,6,7,8,9,1,2,
  6,7,2,1,9,5,3,4,8,
  1,9,8,3,4,2,5,6,7,
  8,5,9,7,6,1,4,2,3,
  4,2,6,8,5,3,7,9,1,
  7,1,3,9,2,4,8,5,6,
  9,6,1,5,3,7,2,8,4,
  2,8,7,4,1,9,6,3,5,
  3,4,5,2,8,6,1,7,9
]

function validatePuzzle(arr) {
  var width = 9;
  var max   = 45;

  // check each row
  for(var y = 0; y < width; y++) {
    if (arr.slice(width*y, width*y+width).reduce(function(p,n){return p+n}) != max) {
      return 0;
    }
  }

  // each column
  for(var x = 0; x < width; x++) {
    var column = 0;

    for(var y = 0; y < width; y++) {
      column+= arr[width*y+x]
    }

    if (column != max) {
      return 0;
    }
  }

  // each 3x3 grid
  for(var gColumn = 0; gColumn < width/3; gColumn++) {
    for(var gRow = 0; gRow < width/3; gRow++) {
      var gridSum = 0;
      for(var y = 0; y < width/3; y++) {
        for (var x = 0; x < width/3; x++) {
          var p = y * width + x + gRow * width/3 + gColumn * width*3;
          gridSum += arr[p];
        }
      }

      if (gridSum!= max) {
        return 0;
      }
    }
  }

  return 1;
}

console.log(!!validatePuzzle(invalid), !!validatePuzzle(valid));