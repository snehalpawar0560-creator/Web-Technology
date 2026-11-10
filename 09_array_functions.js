let rollno = [1, 2, 3, 4, 5];
const names = new Array("Karan", "Aniket", "Suraj", "Sejal");

// push method
console.log(rollno.length);
console.log(rollno.push(6));
console.log(rollno);
console.log(names.push("suhani"));
console.log(names);

console.log(rollno.pop());
console.log(rollno);

console.log(rollno.unshift(0));
console.log(rollno);
console.log(rollno.shift());
console.log(rollno);

console.log(rollno.includes(4));
console.log(names.includes("ABC"));

let updated_rollno = rollno.slice(1, 3);
console.log(updated_rollno);
