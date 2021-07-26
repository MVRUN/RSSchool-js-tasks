/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n).split('');
  const min = String(Math.min(...str));
  const index = str.indexOf(min);
  str.splice(index, 1);
  return +str.join('');
}

module.exports = deleteDigit;
