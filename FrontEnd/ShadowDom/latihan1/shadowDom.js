//shadow Host
const divElement = document.createElement("div");

// element yang berada di dalam Shadow DOM
const headingElement = document.createElement("h1");
headingElement.innerText = "Ini adalah konten dalam Shadow Dom";

// Melampirkan shadow root pada shadow host
// Mengatur mode shadow dengan nilai open
const shadowRoot = divElement.attachShadow({ mode: "open" });

//staying Sahdow Dom
shadowRoot.innerHTML += `
            <style>
            p{
                color: red
            }
            </style>
`;

// Memasukkan element heading ke dalam shadow root
shadowRoot.append(headingElement);

// Memasukkan elemen shadow host ke regular DOM
document.body.append(divElement);

console.log(shadowRoot);

const parafElements = document.createElement("p");
parafElements.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed reprehenderit aperiam ut sapiente provident dolor eos, necessitatibus numquam minus.`;

shadowRoot.append(parafElements);

const imageUnsplash = document.createElement("img");
imageUnsplash.src =
  "https://images.unsplash.com/photo-1633887998584-721fe3eae41a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
imageUnsplash.width = 320;
imageUnsplash.height = 320;

shadowRoot.append(imageUnsplash);

// const ul = document.createElement("div");
// const li = document.createElement("p");
// li.innerText = "LI 1";

// const shadowRoot = ul.attachShadow({ mode: "closed" });
// shadowRoot.append(li);

// document.body.append(ul);

//cara 2
const mainElement = document.createElement("main");

const pElement = document.createElement("p");
pElement.innerText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae tempore excepturi ducimus explicabo esse distinctio maxime, odit ad consequuntur nulla eius mollitia fugiat nostrum quae error nam aspernatur veniam reiciendis.`;

const styleMain = document.createElement("style");
styleMain.innerHTML = `
                    p{
                        color: green;
                    }
                   `;
mainElement.attachShadow({ mode: "closed" }).append(pElement, styleMain);

document.body.append(mainElement);

class okCalss {}

console.log(typeof okCalss);

const user = {
  name: "Adr",
  musuh: "OK",
};

let { name } = user;
name = "Ciment";
console.log(name);

console.log(user.name);

console.log(user);
