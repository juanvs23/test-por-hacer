const argv=require('./config/yargs').argv,
      {crearActividad,actualizarAct}=require('./exec/actions'),
      {checkdb}=require('./exec/dataBase'),
      {colors}=require('./config/colors'),
        comando=argv._[0];



switch (comando) {
    case 'checkDB':
        checkdb();
        
        break;
    case 'crear':
       
        crearActividad(argv.act);
        break;
    case 'actualizar':
        actualizarAct(argv.act, argv.completado);
        break;
    case 'listar':
        
        break;
    case 'borrar':
        
        break;     

    default:
        console.log(`comando "${colors.error(comando)}" no reconocido`);
        console.log(colors.warn('Por favor ejecutar "node app --help para mayor informacion"'));
        
        break;
}