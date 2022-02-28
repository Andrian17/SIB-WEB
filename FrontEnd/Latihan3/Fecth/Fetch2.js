const form = document.getElementById("form");
const input = document.getElementById("cariMovie");
const apikey = "e853e2cb";
let movieContainer = document.getElementById("movieContainer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${input.value}`)
    .then((response) => response.json())
    .then((e) => {
      let dataMovies = e.Search;
      movieContainer.innerHTML = "";
      dataMovies.forEach((el) => {
        //console.log(el);
        movieContainer.innerHTML += `<div class="card float-start my-4 me-4" style="width: 18rem">
          <img src="${el.Poster}" class="card-img-top" height="340px" />
          <div class="card-body">
            <h5 class="card-title">Judul : ${el.Title}</h5>
            <p>Year : ${el.Year}</p>
            <p>Type : ${el.Type}</p>
            <button type="button" id="${el.imdbID}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Detail
            </button>
          </div>
        </div>`;
      });
    });
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-primary")) {
    // console.log(e);
    //let id = e.target.classList.contains("btn-primary");
    getDataApi();
  }
});

function getDataApi() {
  let btnModal = document.querySelectorAll(".btn-primary");
  for (const btn of btnModal) {
    btn.addEventListener("click", async function (e) {
      await fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${btn.id}`)
        .then((response) => response.json())
        .then((el) => {
          modalBody.innerHTML = "";
          renderEl(el);
          //console.log(el);
        });
    });
  }
}

let modalBody = document.querySelector(".modal-body");
function renderEl(el) {
  let judul = document.createElement("h1");
  judul.innerHTML = "";
  judul.innerText = `Judul : ${el.Title}`;
  modalBody.appendChild(judul);
}
