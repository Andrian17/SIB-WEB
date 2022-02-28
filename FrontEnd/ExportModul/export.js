const mhs = {
  nama: "Andrian",
  nim: 1901050024,
  prodi: "D3 Sistem Informasi",
  info: () => {
    return `Nama Saya ${mhs.nama}`;
  },
};

const keluarga = {
  k1: "Andrian",
  k2: "Ali",
  k3: "Hadi",
};

//Export 1 object
//module.exports = mhs;

//Export banyak object
module.exports = { mhs, keluarga };
