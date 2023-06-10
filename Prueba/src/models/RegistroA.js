import { Schema, model} from "mongoose";

const registroASchema= new Schema(
    {
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
        Matricula:{
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

   
},{
    timestamps:true,
    versionKey:false
},
);


export default  model('RegistroA',registroASchema)