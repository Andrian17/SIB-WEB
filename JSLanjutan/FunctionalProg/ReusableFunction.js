/**fungsi map akan mengembalikan array baru.  */
const names = ["John", "Jane", "Mark"].map(
  (name) => `${name.toUpperCase()} is a good`
);
console.log(names);

// fungsi ini sangat berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada,
const truthyArray = [1, "", "Hallo", 0, null, "Harry", 14].filter((item) =>
  Boolean(item)
);
console.log(truthyArray);

const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const beasiswa = students.filter((student) => student.score > 80);
console.log(beasiswa);

//fungsi bawaan dari data yang bertipe array yang digunakan untuk mengeksekusi nilai pada setiap elemen dan menampilkan dalam sebuah nilai saja.
const totalNilai = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalNilai);

const nilaiGenap = students.some((student) => student.score % 2 === 0);
console.log(nilaiGenap);

//Find
/**
 * digunakan untuk mencari apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria yang kita definisikan pada callback function.
 */
const findHarry = students.find((student) => student.name === "Harry");
console.log(findHarry);

// fungsi bawaan dari array yang berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai. Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending.
const sortStudents = students.sort((a, b) => a.score - b.score);
console.log(...sortStudents);
