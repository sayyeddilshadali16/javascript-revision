// const facebookUser = new Object() // singleton object
const facebookUser = {}; // non-singleton object

facebookUser.id = "123abc";
facebookUser.name = "Ryan";
facebookUser.isLoggedIn = false;

// console.log(facebookUser);

// nested object

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullname: {
      firstname: "Sayyed",
      lastname: "Dilshad",
    },
  },
};

// console.log(regularUser.fullName.userFullname.firstname)
// console.log(regularUser.fullName?.userFullname.firstname) // chaining applies condition mostly used in api response syntax

// merge objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2, obj4); // copies and returns a modified target object, here empty object is a target and rest is source

const obj3 = { ...obj1, ...obj2 }; // mosted used syntax using spread operators

// console.log(obj3);

const user = [
  {
    id: 1,
    email: "sayyed@gmail.com",
  },
  {
    id: 2,
    email: "sayyed@gmail.com",
  },
  {
    id: 3,
    email: "sayyed@gmail.com",
  },
];

// console.log(user[1].email)

// console.log(facebookUser)
// console.log(Object.keys(facebookUser)); // database usage - takes keys from object
// console.log(Object.values(facebookUser)); // database usage - takes values from object
// console.log(Object.entries(facebookUser));

// console.log(facebookUser.hasOwnProperty("isLoggedIn"));

// Destructuring

const course = {
  coursename: "mern stack",
  price: "35000",
  trainer: "John Wick",
};

// course.trainer;

const { trainer } = course;
console.log(trainer);

const { trainer: teacher } = course;
console.log(teacher);

// React usage of destructuring

// const navbar = ({company}) => {
// }
// navbar(company = "abcdef")

// JSON

// {
//     "name":"sayyed",
//     "domain":"MERN Stack",
//     "ctc": "4LPA"
// }

[
    {},
    {},
    {},
]

