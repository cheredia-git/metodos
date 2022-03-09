const express = require("express");
const app = express();

app.use(express.static("public"));
//EJ2
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//FIN EJ2

let personas = [
  {
    nombre: "Elena",
    apellidos: "Bestilleiro García",
    edad: 37,
  },
  {
    nombre: "Óscar",
    apellidos: "Núñez Bermejo",
    edad: 37,
  },
  {
    nombre: "Haizea",
    apellidos: "Núñez Bestilleiro",
    edad: 2,
  },
];

app.get("/personas", function (request, response) {
  response.send(personas);
});

// añadido EJERCICIO 2

app.post("/personas", function (request, response) {
  let persona = {
    nombre: request.body.nombre,
    apellidos: request.body.apellidos,
    edad: request.body.edad,
  };
  personas.push(persona);
  response.send(personas);
});

// FIN AÑADIDO EJERCICIO 2

app.listen(3000);
