/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const newArr = matrix[0].map((val, index) => matrix.map((row) => row[index])
    .reverse()).map((elem) => elem.reverse());
  let result = 0;
  for (let i = 0; i < newArr.length; i++) {
    for (let g = 0; g < newArr[i].length; g++) {
      if (newArr[i][g] !== 0 && newArr[i][g - 1] !== 0) {
        result += newArr[i][g];
      }
    }
  }
  return result;
}

module.exports = getMatrixElementsSum;
