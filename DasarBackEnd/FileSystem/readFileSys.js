const fs = require("fs");

const fileReadCallback = (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
};

fs.readFile("./todo1.txt", "UTF-8", fileReadCallback);
