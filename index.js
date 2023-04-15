const students = [
  {
    firstName: 'Darren',
    lastName: 'Chen',
    age: 30,
  },
  {
    firstName: 'Gordon',
    lastName: 'Chen',
    age: 28,
  },
  {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 18,
  },
];

// Question 1
function getnumstudent(students) {
  return students.length;
}
console.log(getnumstudent(students))
// Question 2
function getAverageAge(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum += students[i].age;
  }
  return sum / students.length;
};
console.log(getAverageAge(students))
// Question 3
function getoldeststudent(students) {
  return students.sort().shift()
}
console.log(getoldeststudent(students))
// Question 4
function getYoungestStudent(students) {
  return students.sort().reverse().shift()
}
console.log(getYoungestStudent(students))
// Question 5
function getFullName(students) {
return students.map(student => `${student.firstName} ${student.lastName}`);
}
console.log(getFullName(students))