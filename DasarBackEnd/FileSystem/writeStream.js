const fs = require("fs");
const path = require("path");

const createWriteFile = fs.createWriteStream("output.txt");
createWriteFile.write("Hello World");
createWriteFile.write("Nama Saya Andrian");
createWriteFile.write("Nim saya: 17.01.53.0012");
createWriteFile.write("Umur saya: 17 tahun");

const readFileOutput = fs.createReadStream(path.join(__dirname, "output.txt"), {
  highWaterMark: 10,
});
readFileOutput.on("readable", () => {
  try {
    process.stdout.write(`${readFileOutput.read()}`);
    //console.log(readFileOutput.read());
  } catch (error) {
    console.log(error);
  }
});

readFileOutput.on("end", () => {
  console.log("\nEnd of file");
});
