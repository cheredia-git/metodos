fetch("/almacen").then(function(respuesta){
    return respuesta.json();
}).then(function(datos){
    let armarios="";
    let sillas="";
    let mesas="";

    for(let i=0; i<datos.armarios.length; i++){
        armarios+=`
            <h1>${datos.armarios[i].nombre}</h1>
            <p>Descripción: ${datos.armarios[i].descripcion}</p>
            <img src="${datos.armarios[i].img}" alt=""/>
            <p>Precio: ${datos.armarios[i].precio}</p>
        `;
    }

    for(let i=0; i<datos.sillas.length; i++){
        sillas+=`
            <h1>${datos.sillas[i].nombre}</h1>
            <p>Descripción: ${datos.sillas[i].descripcion}</p>
            <img src="${datos.sillas[i].img}" alt=""/>
            <p>Precio: ${datos.sillas[i].precio}</p>
        `;
    }

    for(let i=0; i<datos.mesas.length; i++){
        mesas+=`
            <h1>${datos.mesas[i].nombre}</h1>
            <p>Descripción: ${datos.mesas[i].descripcion}</p>
            <img src="${datos.mesas[i].img}" alt=""/>
            <p>Precio: ${datos.mesas[i].precio}</p>
        `;
    }

    document.getElementById("div1").innerHTML=armarios + sillas + mesas;
});




function buscar(){
    let seccion=document.getElementById("seccion").value;
    fetch(`/almacen/${seccion}`).then(function(respuesta){
        return respuesta.json();
    }).then(function(datos){
        if(datos.error){
            window.alert(datos.mensaje);
        }else{
            let productos="";
            for(let i=0; i<datos.length; i++){
                productos+=`
                    <h1>${datos[i].nombre}</h1>
                    <p>Descripción: ${datos[i].descripcion}</p>
                    <img src="${datos[i].img}" alt=""/>
                    <p>Precio: ${datos[i].precio}</p>
                `;
            }
        document.getElementById("div1").innerHTML=productos;
        }
    });
};




function anyadir(){
    let nombre=document.getElementById("nombreAnyadir").value;
    let descripcion=document.getElementById("descripcion").value;
    let img=document.getElementById("img").value;
    let precio=document.getElementById("precio").value;
    let seccion=document.getElementById("seccionAnyadir").value;

    let producto={
        nombre,
        descripcion,
        img,
        precio,
        seccion,
    };

    fetch("almacen",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(producto)
    }).then(function(respuesta){
        return respuesta.json();
    }).then(function(datos){
        console.log(datos);
    })
};




