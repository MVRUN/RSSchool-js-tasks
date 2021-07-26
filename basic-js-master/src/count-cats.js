
module.exports = function countCats(backyard) {
  let catsNumber = 0;
  for(let i = 0; i < backyard.length; i++) {
    for(let g = 0; g < backyard[i].length; g++) {
      if(backyard[i][g] === '^^') {
        catsNumber++;
      }
    }
  }
    return catsNumber
};
