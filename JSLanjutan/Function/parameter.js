const mhs = {
  nama: "Andrian",
  nim: 1901050024,
  prodi: "D3 Sistem Informasi",
};

function dataMahasiswa({ nama, nim, prodi }) {
  return `Nama ${nama}, Nim ${nim}, Prodi ${prodi}`;
}

console.log(dataMahasiswa(mhs));

const totalNilai = (...nilai) => {
  let temp = 0;
  for (const iterator of nilai) {
    temp += iterator;
  }
  return temp;
};

console.log(totalNilai(1, 2, 3));
