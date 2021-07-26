module.exports = function createDreamTeam(team) {
  if (team != null) {
  let teamName = [];
  for(let i = 0; i < team.length; i++) {
    if (typeof team[i] === "string") {
      while(team[i][0] === " ") {
      team[i] = team[i].replace(" ", "");
      }
      teamName.push(team[i][0].toUpperCase());
    }
    else {
      continue
    }
  }
  return teamName = teamName.sort().join("");
  }
  else {
    return false
  }
};
