class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateNumberInput(a, b, c) {
  if (typeof a !== "number") {
    throw new ValidationError("Argumen pertama harus number");
  } else if (typeof b !== "number") {
    throw new ValidationError("Argumen kedua harus number");
  } else if (typeof c !== "number") {
    throw new ValidationError("Argumen ketiga harus number");
  }
}

// console.log(validateNumberInput(1, 3, 1));

const detectTriangle = (a, b, c) => {
  // TODO 3
  try {
    validateNumberInput(a, b, c);
  } catch (error) {
    return error.message;
  }
  if (a === b && b === c) {
    return "Segitiga Sama Sisi";
  } else if (a === b || b === c || a === c) {
    return "Segitiga Sama Kaki";
  } else {
    return "Segitiga Sembarang";
  }
};

console.log(detectTriangle(1, 2, 3)); // output = 'segitita sembarang'
console.log(detectTriangle("a", 1, 1)); // output = 'argument pertama harus number';
console.log(detectTriangle(1, "a", 1)); // output = 'argument kedua harus number';
console.log(detectTriangle(1, 1, "a")); // output = 'argument ketiga harus number'

// {"icv_token":"73020e4a5b423e7acc24bf0e76366e1db91aec55","is_passed":false,"messages":["detectTriangle harus mengembalikan \"Segitiga sama kaki\" ketika ada input yang nilainya sama","detectTriangle harus mengembalikan \"Segitiga sama sisi\" ketika semua input bernilai sama","detectTriangle harus mengembalikan \"Segitiga sembarang\" ketika tidak ada input yang nilainya sama","validateNumberInput is not defined"]}
