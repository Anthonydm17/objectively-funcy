// Your code here.


// * `getFirstName` - returns the value of the firstName property of the given person object

function getFirstName (name){
  return name.firstName
}

// * `getLastName` - returns the value of the lastName property of the given person object

function getLastName(name){
  return name.lastName
}

// * `getFullName` - returns the value of the firstName property plus the lastName property with a space in the middle for the given person object

function getFullName(name){
  let full = name.firstName + " " + name.lastName;
  return full
}

// setFirstName` - changes the value of the firstName property of the given person object to the given value

function setFirstName(person, newName){
  person.firstName = newName
}

// `setAge` - changes the value of the age property of the given person object to the given value


function setAge(person, newAge){
  person.age = newAge
}

// * `giveBirthday` - increments by 1 the age property of the given person object, or gives them an age of 1 if they don't have that property

function giveBirthday(person){

  if (person.age > 0){
    let x = 1;
    x = x + person.age; 
person.age = x
  }else person.age = 1
}

// * `marry` - sets the marital status of both given people to `true` and sets each person's `spouseName` property to be the full name of the other

function marry(person1, person2){
  person1.married = true;
  person2.married = true;
  person1.spouseName = person2.firstName + " " + person2.lastName;
  person2.spouseName = person1.firstName + " " + person1.lastName;
}

// * `divorce` - changes the marital status to `false` and removes the `spouseName` property from both given people


function divorce(person1, person2){
  person1.married = false;
  person2.married = false;
  delete person1.spouseName;
  delete person2.spouseName;
}






// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
