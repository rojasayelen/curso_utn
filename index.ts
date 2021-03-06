import Server from './class/server';
import userRoutes from './routes/usuarios';
import connection from './bin/conectionMySql';
import mongoose from 'mongoose';
import bodyPaser from   'body-parser';


//Creando servidor web
const server = new Server();

server.start(()=>{
    console.log(`Servidor corriendo en puerto ${server.puerto} y en host ${server.host}`);
});

//body parser
server.app.use(bodyPaser.urlencoded({extended:true}));
server.app.use(bodyPaser.json());

//Rutas aplicacion
server.app.use('/users', userRoutes);

//Conexión dataBase MySQL
connection.connect((error)=>{
    if(error){
        throw error
    }
    else{
        console.log("Aplicacion conectada a base de datos MySql")
    }
})

// Conexion moongosee

mongoose.connect('mongodb://localhost:27017/appCurso_mar_vie',
                    {useNewUrlParser:true, useCreateIndex:true},
                    (error)=>{
                        if(error){
                            throw error
                        }
                        else{
                            console.log("Aplicación conectada a base de datos Mongo")
                        }
                    }

)