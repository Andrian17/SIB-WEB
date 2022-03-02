const element = document.querySelector("image-figure");

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    element.setAttribute("caption", "Captionnya sudah saya ubah");
    element.setAttribute(
      "src",
      "https://www.freecodecamp.org/news/content/images/size/w1000/2021/08/Screen-Shot-2021-08-06-at-4.07.33-AM.png"
    );
  }, 5000);
});
