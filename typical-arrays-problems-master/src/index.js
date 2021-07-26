
exports.min = function min (array) {
  if (array && array.length > 0) {
    return Math.min.apply( Math, array );
  }
  else {
    return 0;
  }
}

exports.max = function max (array) {
  if (array && array.length > 0) {
    return Math.max.apply( Math, array );
  }
  else  {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (array && array.length > 0) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
      sum += array[i];
      console.log(sum)
    }
    return sum/array.length;
  }
  else  {
    return 0;
  }
}