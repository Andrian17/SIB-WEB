const http = require("http");

const jsonBohong = [
  {
    nama: "Dasar Back End",
    konten: "Ini adalah latihan dasar Back End",
  },
  {
    nama: "Dasar Front End",
    konten: "Ini adalah latihan dasar Front End",
  },
];

const handleMethode = (req, res) => {
  const { method } = req;
  const { url } = req;

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("X-Created-By", "Andrian");
  if (url === "/") {
    if (method === "GET") {
      res.statusCode = 200;
      res.end(JSON.stringify(jsonBohong));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: "Not Found" }));
    }
  } else if (url === "/about") {
    if (method === "GET") {
      res.statusCode = 200;
      res.end(
        JSON.stringify({
          message: `Ini method ${method} pada url ${url}`,
        })
      );
    } else if (method === "POST") {
      res.statusCode = 201;
      res.end(
        JSON.stringify({ message: `Ini method ${method} pada url ${url}` })
      );
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: "Not Found" }));
    }
  } else if (url === "/contact") {
    if (method === "GET") {
      res.statusCode = 200;
      res.end(
        JSON.stringify({ message: `Ini method ${method} ada route ${url}` })
      );
    } else if (method === "POST") {
      res.statusCode = 201;
      res.end(
        JSON.stringify({ message: `Ini method ${method} ada route ${url}` })
      );
    } else if (method === "PUT") {
      res.statusCode = 202;
      res.end(
        JSON.stringify({ message: `Ini method ${method} ada route ${url}` })
      );
    } else if (method === "DELETE") {
      res.statusCode = 203;
      res.end(
        JSON.stringify({ message: `Ini method ${method} ada route ${url}` })
      );
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: "Not Found" }));
    }
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Not Found" }));
  }
};

const server = http.createServer(handleMethode);
const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
