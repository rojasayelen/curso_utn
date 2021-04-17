
import {Schema, model} from 'mongoose';

const ususarioSchema = new Schema({
    nombre: {
        type:String,
        require:[true, "El nombre es necesario"]
    },
    email:{
        type:String,
        unique:[true, "El email es requerido"]
    },
    password:{
        type:String,
        required: [true, "La clave es requerida"]
    },
    avatar:{
        type:String,
        default:'av-1.png'
    }
})

const Usuario = model('Usuario', ususarioSchema);

export default Usuario;