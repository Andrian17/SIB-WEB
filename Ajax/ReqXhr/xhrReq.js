const xhr = new XMLHttpRequest();
xhr.onload = function () {
  console.log(JSON.parse(this.responseText));
};
xhr.onerror = function () {
  console.log("Request gagal");
};

const postXHR = function (idBuku, titleBuku, authorBuku) {
  // Method Post
  xhr.open("POST", "https://books-api.dicoding.dev/add");
  //Menambahkan Properti pada header request
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("X-Auth-Token", "12345");
  const buku = {
    id: idBuku,
    title: titleBuku,
    author: authorBuku,
  };
  xhr.send(JSON.stringify(buku));
};

const getXHR = function () {
  xhr.open("GET", "https://books-api.dicoding.dev/list");
  xhr.send();
};

const deleteXHR = function (id) {
  xhr.open("DELETE", `https://books-api.dicoding.dev/delete/${id}`);
  xhr.setRequestHeader("X-Auth-Token", "12345");
  xhr.send();
};

const putXHR = function (idBuku) {
  xhr.open("PUT", `https://books-api.dicoding.dev/edit/${idBuku}`);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("X-Auth-Token", "12345");

  const buku = {
    id: idBuku,
    title: "Ini saya Ubah",
    author: "Ini Juga",
  };
  xhr.send(JSON.stringify(buku));
};
