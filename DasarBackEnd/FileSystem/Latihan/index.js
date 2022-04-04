const fs = require("fs");
const path = require("path");

const readFileInput = fs.createReadStream(
  path.resolve(__dirname, "input.txt"),
  {
    highWaterMark: 10,
  }
);

readFileInput.on("readable", () => {
  try {
    // console.log(`${readFileInput.read()}`);
    // process.stdout.write(`${readFileInput.read()}`);
    const text = readFileInput.read();
    process.stdout.write(`${text}`);
    writeFileOutput.write(`${text} \n`);
  } catch (error) {
    console.log(error);
  }
});

const writeFileOutput = fs.createWriteStream(
  path.resolve(__dirname, "output.txt")
);
