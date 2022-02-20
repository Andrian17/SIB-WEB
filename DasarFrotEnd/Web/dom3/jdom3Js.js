const ulDaftar = document.getElementById("daftar");

let listDaftar = document.createElement("li");
listDaftar.innerHTML = "Air yang matang siap dihidangkan";

//memasukkan element diakhir
ulDaftar.appendChild(listDaftar);

const listDaftar2 = document.createElement("li");
listDaftar2.innerHTML = "Nyalakan Kompor";
const elemenAwal = document.getElementById("awal");

//insertBefore() memberikan kemampuan untuk memasukkan elemen sebelum elemen HTML tertentu selama elemen parent-nya masih bisa diakses, sama seperti method appendChild().
ulDaftar.insertBefore(listDaftar2, elemenAwal);
