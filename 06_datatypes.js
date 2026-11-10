// Single line comment

/* Multi
Line 
Comment */

const roll_no = 15;

console.log("Hello JS ");
console.log("This is first JS Practical");

// roll_no = 20;  // will give you error it is const
const student_name = "ABC";

let marks = 40;
console.log(roll_no);
console.log(marks);

marks = 45;
console.log(marks);

console.table([roll_no, marks, student_name]);

// datatypes in js
let is_present = true; // boolean
let percentage = 89.56; // float
let grade = "A"; // char
let address = "XYZ street, City"; // string
let middle_name = null; // null
let pin_code; // undefined
let student = { name: "ABC", roll_no: 15, is_present: true }; // object
let fruits = ["apple", "banana", "mango"]; // array
console.log(typeof is_present);
console.log(typeof percentage);
console.log(typeof grade);
console.log(typeof address);
console.log(typeof middle_name);
console.log(typeof pin_code);
console.log(typeof student);
console.log(typeof fruits);
console.table(student);
console.table(fruits);
console.log(fruits[1]); // access banana
