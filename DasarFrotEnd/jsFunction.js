function minimal(a, b) {
  if (a < b) {
    return a;
  } else if (b < a) {
    return b;
  } else if (a == b) {
    return a;
  }
}

function power(a, b) {
  return Math.pow(a, b);
}

console.log(minimal(5, 2));
console.log(power(3, 3));
