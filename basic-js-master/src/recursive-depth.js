module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    arr.forEach(element => {
      if(Array.isArray(element)) {
        let counter = 1;
        counter+= this.calculateDepth(element, counter);
        depth = Math.max(depth, counter);
      }
    });
    return depth;
};
};
