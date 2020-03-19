const fs=require('fs');
let archivo=fs.readFileSync('./db/data.json','utf-8');
let dataBase=JSON.parse(archivo);

//estado de la base de datos
const checkdb=()=>{
    fs.readFile('./db/data.json',(err)=>{
       if(err){
        fs.mkdir('./db/', { recursive: true }, (err) => {
            if (err) throw err;
          });
        fs.appendFile('./db/data.json', '', function (err) {
            console.log('base de datos creada');
          });
          
       }else{
console.log('la base de datos ya ha sido creada');
       }

       
    });
};
//Guardar
const dbGuadar=(act)=>{  
  dataBase.push(act);
   let data=JSON.stringify(dataBase);
   //console.log(data);

        fs.writeFile('./db/data.json',data, function(err) {
            if(err) {
                console.log('Hubo un error');
            }
           
          });  
};

//leer
const dbLeer=()=>{
    let datos=dataBase;
    return datos;
}

module.exports={
    dbGuadar,dbLeer,checkdb,dataBase
}