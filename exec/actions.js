const DB=require('./dataBase');



const crearActividad=(act)=>{
    //filtrar y encontrar act
    let dataActual=DB.dbLeer().filter(datos=>datos.act===act);
    
    //console.log(dataActual);
    //Si esta actividad existe No existe
    if(dataActual.length===0 ){
        let actividad={
            act,
            completado:false
        };

        DB.dbGuadar(actividad);
        console.log('Actividad guardada');
    }else{
        //de los contrario
        console.log('La actividad indicada ya existe');
    }
    
    
},
actualizarAct=(act,completado)=>{

};
module.exports={
    crearActividad,actualizarAct
}