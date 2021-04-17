import {Router, Response, Request} from "express";
import Usuario from "../models/usuarios.model";
import bcrypt from 'bcrypt';

const userRouters = Router();

userRouters.get('/prueba',(req:Request, res:Response)=>{
    
    res.json({
        estado: "success",
        mensaje: "ok"
    })


})

userRouters.post('/login', (req:Request, res:Response)=>{
    Usuario.findOne({email: req.body.email} , null, null, (error, result)=>{
        if(error){
            throw error 
        }
        if(!result){
            return res.json({
                estado: "success",
                mensaje: "usuario no encontrado en base de datos"
            })
        }
        if(result){
            return res.json({
                estado: "success",
                mensaje: "usuario encontrado",
                data: result
            })
        }
        } 
    )

})

userRouters.post('/create', (req:Request, res:Response)=>{
    const user = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.body.avatar
    }

    Usuario.create(user)
        .then(result=>{
                res.json({
                    estado:"success",
                    mensaje: result

                })
            })
            .catch(error=>{
                res.json({
                    estado:"error",
                    mensaje: error 
                })
            })
    })

export default userRouters;
