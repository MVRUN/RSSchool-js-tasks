module.exports = function repeater(str, options) {
  let newOption = {
    repeatTimes: 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '|'
  }
  
  if (options.repeatTimes) {
    newOption.repeatTimes = options.repeatTimes;
  }
  if (options.separator) {
    options.separator = String(options.separator);
    newOption.separator = options.separator;
  }
  if (options.additionRepeatTimes) {
    newOption.additionRepeatTimes = options.additionRepeatTimes;
  }
  if (options.additionSeparator) {
    options.additionSeparator = String(options.additionSeparator);
    newOption.additionSeparator = options.additionSeparator;
  }
  if (typeof(str) != "string") {
    str = String(str);
  }
  if(options.hasOwnProperty("addition")) {
    newOption.addition = String(options.addition);
  }
  newOption.addition = newOption.addition + newOption.additionSeparator;
  newOption.addition = newOption.addition.repeat(newOption.additionRepeatTimes).slice(0, - newOption.additionSeparator.length);
  str = str + newOption.addition;
  str = str + newOption.separator;
  str = str.repeat(newOption.repeatTimes).slice(0, - newOption.separator.length);
  return str;
};
  