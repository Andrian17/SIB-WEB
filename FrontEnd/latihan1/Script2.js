//Spreading Operator
const favorites = ["Makan", "Coding", "Game", "Anime"];

const [a, b, c, d] = favorites;

console.log("ini: " + a);
console.log("ini: " + b);

const mhs = {
  nama: "Andrian",
  nim: 1901050024,
  prodi: "D3 Sistem Informasi",
  nilai: {
    uts: 80,
    uas: 90,
  },
};

const { nama, nim, prodi } = mhs;

console.log("Nama: " + nama);
console.log("Nim: " + nim);

console.log("--------------------------------------------");

console.log(...favorites);

function petakkanArray(...arr) {
  //return arr;
  console.log(...arr);
}

petakkanArray("Andrian", 19, 40, "Cimen");

//console.log(petakkanArray("Andrian", 19, 40, "Cimen"));

//Arrow Function

const sayName = (name) => `Nama Saya ${name}`;

console.log(sayName("Andrian"));

const orang = ["Andrian", "Cimen", "Ali", "Hadi", "Liana"].forEach((nama) =>
  console.log(`Nama: ${nama}`)
);

const user = {
  pekenalan: (name) => `Halo, Nama Saya ${name}`,
};

console.log(user.pekenalan("Ali"));

//this pada arrow Function

function people(name, age, hoby) {
  this.name = name;
  this.age = age;
  this.hoby = hoby;
}

const Mahasiswa = new people("Andrian", 20, ["Catur", "Coding", "Anime"]);

console.log(Mahasiswa.name);
console.log(Mahasiswa.age);
console.log(...Mahasiswa.hoby);

people.prototype.introMyself = function () {
  setTimeout(() => {
    console.log(`Hello Nama Saya ${this.name}, umur saya ${this.age}.`);
    console.log(`Hoby saya ${this.hoby}`);
  }, 300);
};

const SayaSendiri = new people("Andrian", 20, ["Catur", "Bola", "Game"]);
SayaSendiri.introMyself();

//Destrcuturing Function

function dataMhs({ nama, nim, prodi, nilai: { uas, uts } }) {
  return `Hai, Nama Saya ${nama}, Nim saya ${nim}, Prodi saya ${prodi}. Nilai Uts ${uts}, Nilai Uas ${uas}`;
}
const mahsiswa1 = dataMhs(mhs);
console.log(mahsiswa1);

function dataHewan(/*params*/ { nama, habitat, keunikan, info }) {
  return {
    nama: nama,
    habitat: habitat,
    keunikan: keunikan,
    info: info,
  };
}

function ciriHewan(nama, habitat, keunikan) {
  this.nama = nama;
  this.habitat = habitat;
  this.keunikan = keunikan;
  this.info = (keunikan) =>
    `Nama hewan ${this.nama}, habitat ${this.habitat}, keunikan: ${keunikan}`;
}

const singa = new ciriHewan("Singa", "Padang Savana", "Mengaum & Raja Hutan");
console.log(singa);
console.log(singa.info(singa.keunikan));

console.log("----------- Function -----------");
const singa2 = dataHewan(singa);
console.log(singa2.keunikan);
console.log(singa2.info(singa.keunikan));
