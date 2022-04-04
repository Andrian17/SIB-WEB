const EventEmitter = require("events");

const kopiKita = new EventEmitter();

function buatKopi({ nama, jenisKopi }) {
  console.log(`${nama} sedang membuat kopi ${jenisKopi}`);
}

function daftarKopi({ namaKopi, harga }) {
  console.log(`${namaKopi} dengan harga ${harga}`);
}

//set Event
kopiKita.on("buat-kopi", buatKopi);
kopiKita.on("daftar-kopi", daftarKopi);

//Trigger Event
kopiKita.emit("buat-kopi", { nama: "Liana", jenisKopi: "Kopi Hitam" });
kopiKita.emit("daftar-kopi", { namaKopi: "Kopi Enak", harga: "Rp. 10.000" });
