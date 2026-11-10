// singleton object
const user = new Object();

user.name = "MSD";
user.profession = "Cricket";
user.id = 7;

console.log(user);

// nested object
const appUser = {
  email: "abc@gmail.com",
  fullname: {
    first_name: "abc",
    last_name: "xyz",
  },
};

console.log(`App user email is: ${appUser.email}`);
console.log(`User first name is: ${appUser.fullname.first_name}`);

// mergeing objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// const obj3 = { obj1, obj2 };

// console.log(obj1, obj2, obj3);

// const obj3 = Object.assign({}, obj1, obj2);

// spread operator
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
