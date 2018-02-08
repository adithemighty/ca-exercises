// School class. Our parent and three child classes have the following properties, getters, setters, and methods:
//
// SCHOOL
// Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
// Getters: all properties have getters
// Setters: the numberOfStudents property has a setter
// Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
// PRIMARY
// Includes everything in the School class, plus one additional property
// Properties: pickupPolicy (string)
// MIDDLE
// Does not include any additional properties or methods
// HIGH
// Includes everything in the School class, plus one additional property
// Properties: sportsTeams (array of strings)

class School = {
  constructor(name, level){
    this._name = name

  }
  get name(){
    return this._name
  }
  get level(){
    return this._level
  }

}
