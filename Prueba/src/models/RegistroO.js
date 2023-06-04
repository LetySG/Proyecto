import { Schema, model} from "mongoose";

const registroOSchema= new Schema({

    nombre:{
        type:String,
        trim:true
    },
    Primer_Apellido:{
        type:String,
        trim:true
    },
    Segundo_Apellido:{
        type:String,
        trim:true
    },
    licenciatura:{
        type:String,
        trim:true
    },
    grado:{
        type:String,
        trim:true
    },
    grupo:{
        type:String,
        trim:true
    },
    turno:{
        type:String,
        trim:true
    },
    licenciatura_Asignada:{
        type:String,
        trim:true
    },
    Turno_Asignado:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    },
    contraseña:{
        type:String,
        trim:true
    },
    confirmar_contraseña:{
        type:String,
        
        trim:true
    },
    done:{
        type:Boolean,
        default:true,
    },
},
{
    timestamps:true,
    versionKey:false
}
);


export default  model('RegistroO',registroOSchema)