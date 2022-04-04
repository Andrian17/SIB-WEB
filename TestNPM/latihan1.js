import _ from "lodash";

//total nilai menggunkan lodash
const nilaiUlangan = [90, 85, 75, 60, 95, 80];
let total = _.sum(nilaiUlangan);
console.log(total);
total = nilaiUlangan.reduce((acc, curr) => acc + curr);
console.log(total);
total = nilaiUlangan.filter((nilai) => nilai >= 80);

console.log(total);
