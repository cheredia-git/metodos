const express=require("express");
const app=express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

let personas=[
    {
        nombre:"Elena",
        apellidos: "Bestilleiro García",
        edad: 37
    },
    {
        nombre:"Óscar",
        apellidos: "Núñez Bermejo",
        edad: 37
    },
    {
        nombre:"Haizea",
        apellidos: "Núñez Bestilleiro",
        edad: 2
    }
];


app.get("/personas", function(request, response){
    response.send(personas);
});

app.post("/personas", function(request, response){
    let persona={
        nombre:request.body.nombre,
        apellidos:request.body.apellidos,
        edad:request.body.edad,
    };
    personas.push(persona);
    response.send(personas);
});

app.listen(3000);