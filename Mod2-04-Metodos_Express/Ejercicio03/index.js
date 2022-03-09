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


app.put("/personas", function(request, response){
    let nombre=request.body.nombre;
    let apellidos=request.body.apellidos;
    let edad=request.body.edad;
    for(let i=0; i<personas.length; i++){
        if(nombre===personas[i].nombre){
            personas[i].apellidos=apellidos;
            personas[i].edad=edad;
        }
    }
    response.send({mensaje:"Se ha editado correctamente"});
});


app.listen(3000);