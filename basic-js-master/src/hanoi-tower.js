module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  let hanoi = {
    turns: 0 ,
    seconds: 0
  }
  hanoi.turns = 2**diskNumber - 1;
  hanoi.seconds = Math.trunc(3600/turnsSpeed * hanoi.turns);
  return hanoi
};
