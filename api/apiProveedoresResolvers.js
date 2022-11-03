const crypto=require('crypto')
const logd = require('../logging.js')
const modname='[apiProveedoresResolvers.js]'
const logr=logd.child({modulo:`${modname}`})
const comunicacionesFn=require('./funciones_adicionales/comunicaciones.js')
const FactoryDAO=require('../model/daos/indexDAO.js')
const Proveedor=require('./model.temporal.js')
const Productos=require('../model/models/productos.model.validar.js')
const DAO=FactoryDAO()



const ProveedoresMap={};

class ApiProveedores{
    constructor(){
        this.coms=comunicacionesFn
    }
    
    async getProveedores(){
        //logr.debug('obtenerComentariosTodos()',{recurso:'[na]'})
        const Proveedores=await DAO.proveedoresGeneral.getAll()
        //const Proveedores=Object.values(ProveedoresMap)
        return Proveedores
    }

    async createProveedor(datos){
        // const id=crypto.randomBytes(10).toString('hex');
        // const nuevoProveedor=new Proveedor(id,dataBody)
        // ProveedoresMap[id]=nuevoProveedor
       
        // let dataBody = {}
        let argsPre=JSON.parse(JSON.stringify(datos));
        let args=argsPre.datos
        // logr.debug(args,{recurso:'[createProveedor][args]'})
        // dataBody.nombre=args.nombre
        // dataBody.img=args.img
        // dataBody.telefono=args.telefono
        // dataBody.descripcion=args.descripcion
        // logr.debug(dataBody,{recurso:'[createProveedor][dataBody]'})
        let proveedorCreado=await DAO.proveedoresGeneral.save(args)
        return proveedorCreado
        //return nuevoProveedor
    }

}

module.exports=ApiProveedores

// function getProveedores(){
//     const Proveedores=Object.values(ProveedoresMap)
//     return Proveedores
//     // {campo,valor}
//     // if(campo&&valor){
//     //     return Proveedores.filter(p=>p[campo]==valor)
//     // }else{
//     //     return Proveedores
//     // }
// }

// function createProveedor({datos}){
//     const id=crypto.randomBytes(10).toString('hex');
//     const nuevoProveedor=new Proveedor(id,datos)
//     ProveedoresMap[id]=nuevoProveedor
//     return nuevoProveedor
// }

// function getProveedor({id}){
//     if(!ProveedoresMap[id]){
//         throw new Error('Persona not found.')
//     }
//     return ProveedoresMap[id]
// }