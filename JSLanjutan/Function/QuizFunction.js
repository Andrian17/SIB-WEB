// function minimal(a, b) {
//   if (a > b) {
//     return b;
//   } else if (a < b) {
//     return a;
//   } else if (a === b) {
//     return a;
//   }
// }

// function power(a, b) {
//   let temp = a;
//   //   for (let i = 1; i < b; i++) {
//   //     a = temp * a;
//   //   }
//   return a ** b;
// }

// console.log(power(5, 3));

// function minMax(arrayOfNumbers) {
//   let currentMin = arrayOfNumbers[0];
//   let currentMax = arrayOfNumbers[0];
//   for (value of arrayOfNumbers) {
//     if (value < currentMin) {
//       currentMin = value;
//     } else if (value > currentMax) {
//       currentMax = value;
//     }
//   }

//   console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
// }

// minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);

function calculateDaysBetweenDates(date1, date2) {
  let date1_ms = date1.getTime();
  let date2_ms = date2.getTime();
  let difference_ms = date2_ms - date1_ms;
  let days = Math.round(difference_ms / 86400000);
  return days;
}
console.log(
  calculateDaysBetweenDates(new Date(2001, 5, 4), new Date(2022, 3, 23))
);

function sayHello(name) {
  console.log(`Hello ${name}`);
}
sayHello("ANdrian");

function calculateAge(birthYear) {
  return 2022 - birthYear;
}

console.log(calculateAge(2001));

function triangleArea(base, height) {
  return (base * height) / 2;
}

console.log(triangleArea(5, 6));
