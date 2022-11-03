class Proveedor{
    constructor(id,{nombre,img,telefono,descripcion}){
        this.id=id;
        this.nombre=nombre;
        this.img=img;
        this.telefono=telefono;
        this.descripcion=descripcion;
    }
}

module.exports=Proveedor