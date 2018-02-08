class School {
  constructor(name, level) {
    this._name = name;
    this._level = level;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  set numberOfStudents(studentsNumber) {
    // const number = studentsNumber;
    // if (typeOf(number) === "number") {
    this._numberOfStudents = studentsNumber;
    // } else {
    //   return "Invalid input: numberOfStudents must be set to a Number.";
    // }
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  quickFacts() {
    return `${this.name} educates ${
      this.numberOfStudents
    } students, typically between the ages of ${this.level}.`;
  }
  static pickSubstituteTeacher(parameter) {
    let substituteTeachers = parameter;
    const randomNumber = Math.floor(Math.random() * (substituteTeachers.length));
    return substituteTeachers[randomNumber];
  }
}

class Primary extends School {
  constructor(name, pickupPolicy) {
    super(name, 'Primary');
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name) {
    super(name, 'Middle');
  }
}

class High extends School {
  constructor(name, sportsTeam) {
    super(name, "High");
    this._sportsTeams = sportsTeam;
  }
  get sportsTeams(){
    return this._sportsTeams;
  }
}

const lorraineHansbury = new Primary('Lorraine Hansbury', 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.numberOfStudents = 514
console.log(Primary.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new High('Al E. Smith', ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
alSmith.numberOfStudents = 415;
console.log(alSmith.sportsTeams)
