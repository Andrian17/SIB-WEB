const dataSaya = document.createElement("p");

const tampilBuku = function () {
  fetch(`http://localhost:5000/`)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      dataSaya.innerHTML = `<p>${data[0].konten}</p>`;
    })
    .catch((e) => {
      console.log(e);
    });
};
tampilBuku();

document.body.appendChild(dataSaya);
