import http from "http";

//Criando o servidor para inicializar

let products = [];
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Servidor funcionado" }));
  }

  if (req.method === "POST" && req.url === "/products") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const data = JSON.parse(body);
      console.log(data)
      products.push(data);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });

    req.on("error", () => {
      res.writeHead(400);
      res.end();
    });
  }
});

server.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
