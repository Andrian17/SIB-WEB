let books = [];

const checkComplete = document.getElementById("inputBookIsComplete");
const searchBookTitle = document.getElementById("searchBookTitle");

const RENDER_BOOKS = "render-buku";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("inputBook").addEventListener("submit", (e) => {
    e.preventDefault();
    //alert("Buku Berhasil disimpan!");
    tambahBuku();
  });

  if (storageTersedia()) {
    muatDataStorage();
  }
});

checkComplete.addEventListener("click", () => {
  if (checkComplete.value == "false") {
    checkComplete.setAttribute("value", true);
  } else {
    checkComplete.setAttribute("value", false);
  }
});

function objectBuku(id, title, author, year, isComplete) {
  return {
    id,
    title,
    author,
    year,
    isComplete,
  };
}

function tambahBuku() {
  const title = document.getElementById("inputBookTitle").value;
  const author = document.getElementById("inputBookAuthor").value;
  const year = document.getElementById("inputBookYear").value;

  const id = +new Date();
  const isComplete = checkComplete.value === "true";
  const inputBuku = objectBuku(id, title, author, year, isComplete);
  books.push(inputBuku);
  console.log(books.length);
  simpanData();
}

document.addEventListener(RENDER_BOOKS, () => {
  const completeBookshelfList = document.getElementById(
    "completeBookshelfList"
  );
  completeBookshelfList.innerHTML = "";
  const incompleteBookshelfList = document.getElementById(
    "incompleteBookshelfList"
  );
  incompleteBookshelfList.innerHTML = "";

  for (const itemBuku of books) {
    const elementBuku = tambahElemenBuku(itemBuku);
    if (itemBuku.isComplete == false) {
      incompleteBookshelfList.append(elementBuku);
    } else {
      completeBookshelfList.append(elementBuku);
    }
  }
});

function tambahElemenBuku(itemBuku) {
  const titleBook = document.createElement("h3");
  titleBook.innerText = itemBuku.title;

  const author = document.createElement("p");
  author.innerText = `Penulis: ${itemBuku.author}`;

  const year = document.createElement("p");
  year.innerText = `Tahun: ${itemBuku.year}`;

  const action = document.createElement("div");
  action.classList.add("action");
  const btnGreen = document.createElement("button");

  const btnRed = document.createElement("button");
  btnRed.classList.add("red");
  btnRed.innerText = "Hapus Buku";
  action.append(btnGreen, btnRed);

  const bookItem = document.createElement("article");
  bookItem.setAttribute("id", `buku-${itemBuku.id}`);
  bookItem.classList.add("book_item");
  bookItem.append(titleBook, author, year, action);

  if (itemBuku.isComplete == false) {
    btnGreen.classList.add("green");
    btnGreen.innerText = "Selesai dibaca";
    btnGreen.addEventListener("click", () => {
      bukuSelesaiDibaca(itemBuku.id);
    });
  } else {
    btnGreen.innerText = "Belum Selesai dibaca";
    btnGreen.classList.add("warning");
    btnGreen.addEventListener("click", () => {
      bukuBelumDibaca(itemBuku.id);
    });
  }
  btnRed.addEventListener("click", () => {
    let msg = confirm("Apakah anda yakin menghapus Buku ini?");
    msg ? hapusDataBuku(itemBuku.id) : "";
  });

  return bookItem;
}

function cariBuku(idBuku) {
  for (const item of books) {
    if (item.id == idBuku) {
      return item;
    }
  }
  return null;
}

function bukuSelesaiDibaca(idBuku) {
  const bukuTarget = cariBuku(idBuku);
  if (bukuTarget == null) {
    return;
  }
  bukuTarget.isComplete = true;
  simpanData();
}

function bukuBelumDibaca(idBuku) {
  const bukuTarget = cariBuku(idBuku);
  if (bukuTarget == null) {
    return;
  }
  bukuTarget.isComplete = false;
  simpanData();
}

function hapusDataBuku(idBuku) {
  const bukuTarget = () => {
    for (let index = 0; index < books.length; index++) {
      if (books[index].id === idBuku) {
        return index;
      }
    }
    return -1;
  };
  books.splice(bukuTarget(), 1);
  simpanData();
}

//localStorage
function storageTersedia() {
  if (typeof Storage === "undefined") {
    alert("Browse tidak mendukung Web Storage");
    return false;
  }
  return true;
}

const SAVE_EVENT_STORAGE = "save_storage";
const StorageKey = "storage_key";

document.addEventListener(SAVE_EVENT_STORAGE, () => {
  console.log(localStorage.getItem(StorageKey));
  document.dispatchEvent(new Event(RENDER_BOOKS));
});

function simpanData() {
  if (storageTersedia()) {
    const dataBooks = JSON.stringify(books);
    localStorage.setItem(StorageKey, dataBooks);
    document.dispatchEvent(new Event(SAVE_EVENT_STORAGE));
  }
}

function muatDataStorage() {
  const dataBooks = localStorage.getItem(StorageKey);
  let data = JSON.parse(dataBooks);
  console.log(data);
  if (data !== null) {
    for (const book of data) {
      books.push(book);
    }
  }
  document.dispatchEvent(new Event(RENDER_BOOKS));
}

//Pencarian
let tempBooks = [];

document.getElementById("searchBook").addEventListener("submit", (e) => {
  e.preventDefault();
  cariBukuSementara(searchBookTitle.value);
});

searchBookTitle.addEventListener("input", () => {
  cariBukuSementara(searchBookTitle.value);
});

const CARI_BUKU = "cari_buku";
document.addEventListener(CARI_BUKU, () => {
  const completeBookshelfList = document.getElementById(
    "completeBookshelfList"
  );
  completeBookshelfList.innerHTML = "";
  const incompleteBookshelfList = document.getElementById(
    "incompleteBookshelfList"
  );
  incompleteBookshelfList.innerHTML = "";

  for (const itemBuku of tempBooks) {
    const elementBuku = tambahElemenBuku(itemBuku);
    if (itemBuku.isComplete == false) {
      incompleteBookshelfList.append(elementBuku);
    } else {
      completeBookshelfList.append(elementBuku);
    }
  }
});

function cariBukuSementara(value) {
  tempBooks = books.filter((e) => {
    return e.title.toLowerCase().includes(value.toLowerCase());
  });

  if (tempBooks.length > 0) {
    document.dispatchEvent(new Event(CARI_BUKU));
    const h3 = document.querySelector("#notFound");
    h3.innerText = `${tempBooks.length} Buku ditemukan`;
    h3.style.color = "green";
  } else {
    const h3 = document.querySelector("#notFound");
    h3.innerText = `Buku tidak ditemukan!`;
    h3.style.color = "red";
    document.dispatchEvent(new Event(CARI_BUKU));
  }
}

searchBookTitle.addEventListener("blur", () => {
  if (!searchBookTitle.value) {
    const h3 = document.querySelector("#notFound");
    h3.innerText = "";
  }
});
