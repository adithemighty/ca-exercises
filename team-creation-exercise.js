const team = {
  _players: [
    { firstName: "Jose", lastName: "Gonzalez", age: 23 },
    { firstName: "Pablo", lastName: "Sanchez", age: 19 },
    { firstName: "Cat", lastName: "Catchins", age: 21 }
  ],
  _games: [
    { opponent: "Broncos", teamPoints: 42, opponentPoints: 27 },
    { opponent: "Broncos", teamPoints: 42, opponentPoints: 27 },
    { opponent: "Broncos", teamPoints: 42, opponentPoints: 27 }
  ],
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game);
  },
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Blahblahs", 34, 56);
console.log(team.players);
console.log(team.games);
