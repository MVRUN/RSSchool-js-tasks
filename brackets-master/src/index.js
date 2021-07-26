module.exports = function check(str, bracketsConfig) {
  let marker = true;
  while (marker) {
      let currStrLength = str.length;
      for(let i = 0; i < bracketsConfig.length; i++) {
         str = str.replace(bracketsConfig[i][0]+bracketsConfig[i][1], "")
      }
      if (currStrLength > str.length) {
          marker = true;
      }
      else {
          marker = false
      } 
  }
  if (str.length > 0) {
      return false
  }
  else {
      return true
  }
}