const express=require("express");
const almacen=require("./almacen.js");
const app=express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get("/almacen", function(request, response){
    response.send(almacen);
});



app.get("/almacen/:seccion", function(request, response){
    let tipo=request.params.seccion;

    if(almacen[tipo]!==undefined){
        response.send(almacen[tipo]);
    }else{
        let respuesta={
            error:true,
            mensaje:"Esa sección no existe",
        };
        response.send(respuesta);
    }
});



app.post("/almacen", function(request, response){
    let seccion=request.body.seccion;
    let nombre=request.body.nombre;
    let descripcion=request.body.descripcion;
    let img=request.body.img;
    let precio=request.body.precio;

    let producto={
        nombre: nombre,
        descripcion: descripcion,
        img: img,
        precio: precio,
    };

    if(almacen[seccion]!==undefined){
        almacen[seccion].push(producto);
        response.send(almacen);
    }else{
        response.send("La sección introducida no existe");
    };
});



app.put("/almacen", function(request,response){
    let seccion=request.body.seccion;
    let nombre=request.body.nombre;
    let referencia=request.body.referencia;
    let descripcion=request.body.descripcion;
    let imagen=request.body.img;
    let precio=request.body.precio;

    let boolean=false;

    if(almacen[seccion]!==undefined){
        for(let i=0; i<almacen[seccion].length; i++){
            if(referencia===almacen[seccion][i].nombre){
                almacen[seccion][i].nombre=nombre;
                almacen[seccion][i].descripcion=descripcion;
                almacen[seccion][i].img=imagen;
                almacen[seccion][i].precio=precio;
                boolean=true;
            }
        }
    }
    if(boolean){
        response.send(almacen);
    }else{
        response.send({mensaje:"El producto introducido no existe"});
    }
});



app.delete("/almacen", function(request, response){
    let seccion=request.body.seccion;
    let nombre=request.body.nombre;

    let boolean=false;

    for(let i=0; i<almacen[seccion].length; i++){
        if(almacen[seccion][i].nombre===nombre){
            almacen[seccion].splice(i,1);
            boolean=true;
        }
    }
    boolean ? response.send(almacen) : response.send({mensaje:"El producto introducido no existe"});
});

app.listen(3000);