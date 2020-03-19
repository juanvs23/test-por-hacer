
const argv =require('yargs')
            .command('listar', 'imprime las actividades por realizar',{

            })
            .command('crear','te permite ingresar una actividad',{
                act:{
                    demand:true,
                    alias:'a'
                },

            })
            .command('actualizar','permite actualizar una actividad',{
                act:{
                    demand:true,
                    alias:'a'
                },
                completado:{
                    default:true,
                    alias:'c'
                }
            })
            .command('checkDB','Permite crear un achivo para realizar los resguardos')
            .command('borrar','permite borrar una actividad',{

            })            
            .help()
            .argv; 
module.exports = { argv };