const baseUrl = "https://books-api.dicoding.dev";

const tampilBuku = function () {
  fetch(`${baseUrl}/list`)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
};

const tampilBuku2 = async function () {
  try {
    const res = await fetch(`${baseUrl}/list`);
    const resJson = await res.json();
    console.log(resJson);
  } catch (e) {
    console.log(e);
  }
};

const tambahBuku = async function (idBuku, titleBuku, authorBuku) {
  try {
    const hasil = await fetch(`${baseUrl}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "12345",
      },
      body: JSON.stringify({
        id: idBuku,
        title: titleBuku,
        author: authorBuku,
      }),
    });
    const hasiJSON = await hasil.json();
    console.log(hasiJSON);
  } catch (e) {
    console.log(e);
  }
};
