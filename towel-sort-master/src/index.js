
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
   let newArr = [];
   for(let i = 0; i < matrix.length; i++) {
     if(i%2 === 0) {
     for(let g = 0; g < matrix[i].length; g++) {
       newArr.push(matrix[i][g])
     }
    }
    else {
      matrix[i].reverse();
      for(let g = 0; g < matrix[i].length; g++) {
        newArr.push(matrix[i][g])
      }
    }
   }
   return newArr
}




