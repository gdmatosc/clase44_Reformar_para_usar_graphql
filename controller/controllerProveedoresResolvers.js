const ApiProveedores=require('../api/apiProveedoresResolvers.js')
const logd = require('../logging.js')
const modname='[controllerProveedoresResolvers.js]'
const logr=logd.child({modulo:`${modname}`})

const apiProveedores=new ApiProveedores()

getProveedores=async () => {
    try{
        let ProveedoresTodos=await apiProveedores.getProveedores() 
        logr.debug(ProveedoresTodos,{recurso:'[obtenerProveedoresTodos()][ProveedoresTodos]'})
        //console.log("contenedorVar.ProveedoresFile.RouterGet",contenedorVar)//debug
        return ProveedoresTodos
    }
    catch(error){
        logr.warn(error,{recurso:'[obtenerProveedoresTodos()][error]'})
    }
    
}

createProveedor=async (args)=>{
    try {
        //let dataBody=req.body;
        let ProveedoresGuardados=await apiProveedores.createProveedor(args)
        //console.log("req.bodyPost.ProveedoresFile.RouterPost",req.body) //debug
        //return "Guardado.routerProveedoresPostFile"
        logr.debug(args,{recurso:'[createProveedor][args]'})
        logr.debug(ProveedoresGuardados,{recurso:'[createProveedor][ProveedoresGuardados]'})
        return ProveedoresGuardados
    }
    catch(error){
        logr.warn(error,{recurso:'[createProveedor()][error]'})
    }
    
}




module.exports = {
    getProveedores,
    createProveedor
}
