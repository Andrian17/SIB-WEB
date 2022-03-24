const names = ["John", "Paul", "George", "Ringo"];
// const newNames = [];
// names.forEach((e) => {
//   newNames.push(e);
// });
const newNames = names.map((e) => e);

// console.log(newNames.join("-"));
//console.log(...newNames);

/**
 * Pure Function
 * Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
 * Hanya bergantung pada argumen yang diberikan.
 * Tidak menimbulkan efek samping.
 */

const person = {
  name: "John",
};

const createPersonwithAge = (age, person) => {
  //   person.age = age;
  //   return person;
  return { ...person, age };
};
const newPerson = createPersonwithAge(21, person);
// console.log({
//   person,
//   newPerson,
// });

/**Immutability **/
const user = {
  firstName: "Andrian",
  lastName: "Saputra",
};

const createUserWithNewLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName };
};

const newUser = createUserWithNewLastName("Potter", user);

// console.log(newUser);
// console.log(user);

//Recursive
const countDown = (num) => {
  if (num === 0) {
    return;
  }
  console.log(num);
  countDown(num - 1);
};
countDown(7);
