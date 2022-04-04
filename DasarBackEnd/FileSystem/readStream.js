const fs = require("fs");

const readableStream = fs.createReadStream("./todo2.txt", {
  //Membaca per 20 Karakter pada file todo2.txt
  highWaterMark: 20,
});
readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);
  } catch (error) {
    console.log(error);
  }
});

readableStream.on("end", () => {
  console.log("\nEnd of file");
});
