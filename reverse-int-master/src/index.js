module.exports = function reverse (n) {
    if (n >= 0) {
  n = n.toString().split("").reverse().join("");
  return +n;
    }
    else {
        n = Math.abs(n);
        n = n.toString().split("").reverse().join("");
        return +n;
    }
}
