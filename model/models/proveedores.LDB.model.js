const mongoose=require('mongoose');
const mongodb = require('../mongodb.js')
const logd = require('../../logging.js')
const modname='[proveedores.LDB.model.js]'
const logr=logd.child({modulo:`${modname}`})

let connproveedoresLDB=mongoose.createConnection(mongodb.connection.urlC,mongodb.options)
//logr.debug(connproveedoresLDB,{recurso:'connproveedoresLDB'})
const proveedoresCollection='proveedoresGeneral'

const proveedoresSchema=new mongoose.Schema({
    nombre:{type:String, require:true,max:100},
    img:{type:String, require:true,max:100},
    descripcion:{type:String, require:true,max:100},
    telefono:{type:String, require:true,max:100},
})

const proveedoresLDBModel=connproveedoresLDB.model(proveedoresCollection,proveedoresSchema)
logr.debug(JSON.stringify(proveedoresLDBModel),{recurso:'proveedoresLDBModel'})
module.exports=proveedoresLDBModel;

/*
const MONGO_OPTIONS={
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    maxPoolSize: 50,
    autoIndex: false,
    retryWrites: false
  }
  
  const MONGO_USERNAME=process.env.MONGO_USERNAME;
  const MONGO_PASSWORD=process.env.MONGO_PASSWORD;
  const MONGO_HOST=process.env.MONGO_URL;
  
  const MONGO={
    host: MONGO_HOST,
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    options: MONGO_OPTIONS,
    urlC: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`,
    urlL: 'mongodb://localhost:27017/dbCoderTest'
  }
  */