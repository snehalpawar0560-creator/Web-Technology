// student object
const student = {
  name: "ABC",
  age: 22,
  city: "CSN",
  percentage: 75.87,
};

// Object.freeze(student);
// console.log(student);
// console.log(student.name, student["city"]);
// console.log(`Student name is ${student.name}, Age: ${student["age"]}`);

// object method
student.information = function () {
  console.log(`Student name:${student.name}`);
  console.log(`Student Age: ${student.age}`);
  console.log(`City: ${this.city}, Percentage: ${this.percentage}`);
};

// console.log(student.information());

// literal object
const user = {};
console.log(typeof user);
