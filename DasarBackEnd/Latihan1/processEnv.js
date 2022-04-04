const cpuInformation = process.memoryUsage();
console.log(cpuInformation);

Object.getOwnPropertyNames(process);

//Menggunakan argumen node
const fName = process.argv[2];
const lName = process.argv[3];

console.log(`Hello ${fName} ${lName}`);

const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;
for (let i = 0; i < 10000000; i++) {
  let x = i + i + i + i + i;
}
const finalMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(
  `Penggunaan memori dari ${initialMemoryUsage} naik ke ${finalMemoryUsage}`
);
