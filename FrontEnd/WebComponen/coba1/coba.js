let imageFigureElement = document.querySelector("image-figure");

// Jika tidak tersedia pada DOM maka dibuat secara sintaksis.
if (!imageFigureElement) {
  imageFigureElement = document.createElement("image-figure");
  document.body.appendChild(imageFigureElement);
}

//mengubah/manambahkan nilai attribute caption.
setTimeout(() => {
  imageFigureElement.setAttribute("caption", "gambar 1");
}, 1000);

setTimeout(() => {
  imageFigureElement.remove();
}, 8000);

imageFigureElement.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
);

imageFigureElement.setAttribute("alt", "foto dari unsplash");
imageFigureElement.setAttribute(
  "captions",
  "Foto yang saya ambil dari unsplash"
);

// document.body.append(imageFigureElement);
