const newP = document.createElement("p");
newP.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";

document.body.append(newP);

let ul = document.createElement("ul");
let li = document.createElement("li");
li.innerHTML = "Ini adalah list";

ul.appendChild(li);

document.body.append(ul);

let img = document.createElement("img");
img.setAttribute(
  "src",
  "https://d17ivq9b7rppb3.cloudfront.net/original/academy/belajar_front_end_web_pemula_logo_270421095055.jpg"
);

document.body.append(img);
