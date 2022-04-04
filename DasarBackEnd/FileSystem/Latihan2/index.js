const path = require("path");
const fs = require("fs");

const readFile = fs.createReadStream(path.resolve(__dirname, "forRead.txt"), {
  highWaterMark: 30,
});
readFile.on("readable", () => {
  try {
    const text = readFile.read();
    process.stdout.write(`${text}`);
    writeFile.write(`${text} \n`);
  } catch (error) {
    console.log(error);
  }
});

const writeFile = fs.createWriteStream(path.resolve(__dirname, "forWrite.txt"));
writeFile.on("finish", () => {
  writeFile.write("finish");
});
