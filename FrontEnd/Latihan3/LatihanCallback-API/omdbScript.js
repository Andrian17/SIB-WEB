console.log("Mulai");

function getOmdbApi(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error(xhr.responseText);
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

console.log("Selesai");

const form = document.getElementById("form");
const apikey = "e853e2cb";
let data = [];
form.addEventListener("submit", (e) => {
  let input = document.querySelector(".input").value;
  getOmdbApi(
    `http://www.omdbapi.com/?apikey=${apikey}&s=${input}`,
    (res) => {
      data.push(JSON.parse(res));
      //data = JSON.parse(res);
      console.log(data);
      document.dispatchEvent(new Event("RENDER_EL"));
    },
    (e) => {
      // console.log("ini e");
      // console.log(e);
    }
  );
  e.preventDefault();
});
//console.log(data);

let movies = document.querySelector(".movies");
document.addEventListener("RENDER_EL", () => {
  movies.innerHTML = "";
  let elData = data[0].Search;
  elData.forEach(({ Title, Year, Poster }) => {
    //console.log(e.Title);
    movies.innerHTML += `<h3>Judul : ${Title}</h3>
                        <p>Tahun${Year}</p>
                        <img src="${Poster}" width="320px" height="250px">`;
  });
  data = [];
  //movies.append(title);
});
