function rotateMatrix (matrix) {
  
  let res = [];  
  let size = matrix.length;

  for(let i=size-1; i>=0; i--) {
    res[i] = [];
    for(let j=0; j<size; j++) {
      res[i][j] = matrix[size-1-j][i];
    }
  }

  return res;

}

console.log(rotateMatrix([ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, "A", "B", "C" ], [ "D", "E", "F", "G" ] ]));
