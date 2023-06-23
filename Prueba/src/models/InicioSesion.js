import { Schema, model} from "mongoose";

const inicioSSchema= new Schema({
    email:{
        type:String,
        trim:true
    },
    contraseña:{
        type:String,
        trim:true
    },
    done:{
        type:Boolean,
        default:true,
    },

});



export default  model('InicioSesion',inicioSSchema)