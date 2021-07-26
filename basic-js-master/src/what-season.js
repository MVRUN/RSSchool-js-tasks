module.exports = function getSeason(date) {
  let season;
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getTime();
  } catch(err) {
    throw new Error(err);
  }
  if (date.getMonth() >= 0 && date.getMonth() <= 11) {
      if(date.getMonth() === 11 || date.getMonth() === 1 || date.getMonth() === 0) {
        season = "winter";
      }
      else if(date.getMonth() >= 2 && date.getMonth() <= 4) {
        season = "spring";
      }
      else if(date.getMonth() >= 5 && date.getMonth() <= 7) {
        season = "summer";
      }
       else if(date.getMonth() >= 8 && date.getMonth() <= 10) {
        season = "autumn";
      }
      return season;
  }
};

/*at Context.<anonymous> (test\what-season.test.js:97:20)
      at Context.test (extensions\it-optional.js:18:14)
      at processImmediate (internal/timers.js:456:21)*/
