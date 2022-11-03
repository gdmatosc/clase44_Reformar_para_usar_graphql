/* #region. 1.Parámetros y recursos generales*/

/* #region. Plantilla*/

/* #endregion */ 

const formEnvioDatos = document.getElementById('formSendDB');

obtenerDatos()

/* #endregion */ 

/* #region. 2.Key.function..objeto.Formulario:formSendDB */

formEnvioDatos.addEventListener('submit', function(e) {
    e.preventDefault();
    const payload = new FormData(formSendDB);
    let object = {};
    payload.forEach((value, key) => object[key] = value);
    object.descripcion="generico"
    object.promocion="generico"
    let newPayload = JSON.stringify(object);
    console.log("newPayload.formEvioDatos",newPayload)
    enviarDatos(newPayload)
    setTimeout( function() { obtenerDatos(); }, 1000);

})

/* #endregion */ 

/* #region. 3.function...enviar.datos->any BD*/
function enviarDatos(newPayload){
    fetch('/apiClientes/proveedores', {method: 'POST',headers:{'content-type':'application/json'},body: newPayload})
     .then(res => {
        res
            
        })
        
     .then(data => {
        console.log("dataPostEnviarDatos",data)
        console.log("newPayloadFetchEnviarDatos",newPayload)
        
    })
    
}
/* #endregion */ 

/* #region. 4.function...lectura.BD:obtenerDatos.anyBD*/
function obtenerDatos(){

    fetch('/graphql',{method: 'POST',headers:{'content-type':'application/json'},body: JSON.stringify({query: "{getProveedores{nombre img telefono descripcion}}"})})
    .then(response=>response.json())
    .then(proveedoresDatos=>{
        console.log("proveedoresDBGetNow: ",proveedoresDatos.data.getProveedores)
        console.log("proveedoresDBGetSize: ",proveedoresDatos.data.getProveedores.length)

        imprimirTablaCompleta(proveedoresDatos.data.getProveedores)

    })
    .catch(error=>{
        console.log(error)
    });
}

/* #endregion */ 

/* #region. 5.Function...imprimir->Tabla...any DB*/
function imprimirTablaCompleta(proveedoresDatos){
    let html=`<table class='table' id='lista-compra'>
    <thead>
        <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Telefono</th>
            <th scope="col">imagen</th>
            <th scope="col">Eliminar</th>
        </tr>
    </thead>
    <tbody >`
    for (const proveedores of proveedoresDatos){
        if (proveedores["_id"]){
            let proveedores_id=proveedores["_id"]
            html+=`
            <tr id='itemFila${proveedores_id}'>
                <td>${proveedores.nombre}</td>
                <td>${proveedores.telefono}</td>
                <td><img src=${proveedores.img} style='width:40px; height:30px;'></td>
                <td>
                    <a href="#" id='itemRegistro' ><i class='fa fa-times-circle' style='color: rgb(221, 215, 215)' onclick='eliminarPorID("${proveedores_id}")'></i></a>
                </td>
            </tr>      
            `
        }
        else{
            html+=`
            <tr id='itemFila${proveedores.id}'>
                <td>${proveedores.nombre}</td>
                <td>${proveedores.telefono}</td>
                <td><img src=${proveedores.img} style='width:40px; height:30px;'></td>
                <td>
                    <a href="#" id='itemRegistro' ><i class='fa fa-times-circle' style='color: rgb(221, 215, 215)' onclick='eliminarPorID("${Number(proveedores.id)}")'></i></a>
                </td>
            </tr>      
            `
        }
       
    }
    html+=`
    </tbody>
    </table>
    `
    document.getElementById('tablaBD').innerHTML=html
}
/* #endregion */ 

/* #region. 6.function...eliminaciónxID...any DB*/
function eliminarPorID(idproveedores){
    console.log("idproveedores.círculo de delete 0",idproveedores)
    fetch(`/apiClientes/proveedores/${idproveedores}`,{method: 'DELETE',headers:{'content-type':'application/json'}})
    .then(response=>response)
    .then(proveedoresDatos=>{
        console.log("proveedoresDBGetSizeEliminado: ",proveedoresDatos.length)
        console.log("dbElegidoLecturaInFetchEliminado",idproveedores)
    })
    .catch(error=>{
        console.log(error)
    });
    document.getElementById(`itemFila${idproveedores}`).remove();
    setTimeout( function() { obtenerDatos(); }, 1000);
}
/* #endregion */ 

