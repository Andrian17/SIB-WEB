const form = document.getElementById("form");
const apikey = "e853e2cb";

let dataApi = [];
let input = document.getElementById("inputTitle");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getDataOMDB(
    `http://www.omdbapi.com/?apikey=${apikey}&s=${input.value}`,
    function (result) {
      dataApi.push(JSON.parse(result));
      document.dispatchEvent(new Event("RENDER_EL"));
    },
    function (e) {
      console.log(e);
    }
  );
});

function getDataOMDB(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (
        xhr.status === 404 ||
        xhr.status === 401 ||
        xhr.status === 402 ||
        xhr.status === 403
      ) {
        error(xhr.responseText);
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

let container = document.getElementById("container");
document.addEventListener("RENDER_EL", () => {
  container.innerHTML = "";
  let data = dataApi[0].Search;
  data.forEach(({ Title, Year, imdbID, Poster }) => {
    container.innerHTML += `<div class="list-movies" id="${imdbID}">
                  <h2>Judul : ${Title}</h2>
                  <h4>Rilis : ${Year}</h4>
                  <img src="${Poster}" width="320px" height="280px">
                  <button type="submit" id="${imdbID}" class="btn-detail">Detail</button>
                  </div>`;
  });
  dataApi = [];
  document.dispatchEvent(new Event("DETAIL_EL"));
});

document.addEventListener("DETAIL_EL", () => {
  const btnDetail = document.querySelectorAll(".btn-detail");
  for (const btn of btnDetail) {
    btn.addEventListener("click", function () {
      getDataOMDB(
        `http://www.omdbapi.com/?apikey=${apikey}&i=${this.id}
      `,
        (data) => {
          dataApi.push(JSON.parse(data));
          document.dispatchEvent(new Event("RENDER_DETAIL_EL"));
        },
        (e) => {
          console.log(e);
        }
      );
    });
  }
});

document.addEventListener("RENDER_DETAIL_EL", () => {
  let dataDetail = [];
  dataDetail = dataApi[0];
  console.log(dataDetail);
  container.innerHTML = "";
  container.innerHTML = `<h2>Judul : ${dataDetail.Title}</h2>
    <h4>Rilis : ${dataDetail.Year}</h4>
    <img src="${dataDetail.Poster}" width="320px" height="280px">
    <p>Genre : ${dataDetail.Genre}</p>
    <p>Penulis : ${dataDetail.Writer}</p>
    <p>OMDB Ratings : ${dataDetail.imdbRating}</p>
    <p>Ratings : ${dataDetail.Ratings[0].Source} Value : ${dataDetail.Ratings[0].Value}</p>`;
});
