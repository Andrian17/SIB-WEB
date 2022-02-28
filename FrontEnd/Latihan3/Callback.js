//callback

//sychcronous Callback
// function halo(nama) {
//   alert(`Halo ${nama}`);
// }

// function halo2(callback) {
//   const nama = prompt("Masukkan Nama:");
//   callback(nama);
// }

//cara1
//parameter halo adalah function halo ==> sebagai Callback
//halo2(halo);

//cara2
// halo2((nama) => {
//   alert(`Halo ${nama}`);
// });

const mhs = [
  {
    nama: "Andrian",
    nim: 1901050024,
    prodi: "D3 Sistem Informasi",
  },
  {
    nama: "Cimen",
    nim: 1901050019,
    prodi: "S1 Ilkom",
  },
  {
    nama: "Ali",
    nim: 1901050017,
    prodi: "S1 Hukum",
  },
];

// mhs.map(({ nama, nim, prodi }) => {
//   console.log(`Nama Saya ${nama}, Nim ${nim}, Prodi ${prodi}`);
// });

// console.log("Mulai");
// //mhs.forEach((e) => console.log(e.nama));
// console.log("Selesai");

//Asyncrounus JS

function getMhs(url, success, error) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  xhr.open("get", url);
  xhr.send();
}

console.log("Mulai");
getMhs(
  "JSON/mahasiswa.json",
  (res) => {
    console.log(JSON.parse(res));
    //document.write(JSON.parse(res));
    let data = JSON.parse(res);
    data.map(({ nama }) => console.log(nama));
  },
  () => {
    console.log("gagal");
  }
);
console.log("Selesai");
