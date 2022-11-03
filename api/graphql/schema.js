const {buildSchema}=require('graphql')

const schema=buildSchema(`
    type Proveedor {
        id: ID!
        nombre: String,
        img: String,
        telefono:String,
        descripcion:String
    }
    input ProveedorInput {
        nombre: String,
        img: String,
        telefono:String,
        descripcion:String
    }
    type Query{
        getProveedor(id: ID!): Proveedor,
        getProveedores(campo: String, valor:String): [Proveedor],
    }
    type Mutation{
        createProveedor(datos: ProveedorInput): Proveedor
        updateProveedor(id: ID!, datos: ProveedorInput): Proveedor,
        deleteProveedor(id: ID!): Proveedor,
    }
`)

module.exports = schema