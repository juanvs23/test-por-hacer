const DB=require('./dataBase');
let listadoActividad=DB.dataBase;


let crearActividad=(act)=>{
    let actividad={
        act,
        completado:false
    }
    listadoActividad.push(actividad);
    DB.dbGuadar();

},
actualizarAct=(act,completado)=>{

}
module.exports={
    crearActividad,actualizarAct
}