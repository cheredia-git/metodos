fetch("/personas")
  .then(function cogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function cogerDatos(datos) {
    let mostrarPersonas = "";
    for (let i = 0; i < datos.length; i++) {
      mostrarPersonas += `
                <h3>${datos[i].nombre} ${datos[i].apellidos}</h3>
                <p>Edad: ${datos[i].edad}</p>
            `;
    }
    document.getElementById("div1").innerHTML = mostrarPersonas;
    console.log(datos);
  });

// Ejercicio 2

function anyadir() {
  let nombre = document.getElementById("nombre").value;
  let apellidos = document.getElementById("apellidos").value;
  let edad = parseInt(document.getElementById("edad").value);
  let persona = {
    nombre: nombre,
    apellidos: apellidos,
    edad: edad,
  };

  fetch("/personas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(persona),
  })
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (datos) {
      console.log(datos);
    });
}
