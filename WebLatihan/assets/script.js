let imgSert = document.querySelector("#img-sert");

let imgThumbs = document.querySelectorAll(".img-thumb");

let i = 0;

for (const iterator of imgThumbs) {
  iterator.addEventListener("click", function (e) {
    //iterator.classList.remove("selectThumb");

    let srcImg = iterator.src;
    imgSert.setAttribute("src", srcImg);
    iterator.classList.toggle("selectThumb");
  });
}
