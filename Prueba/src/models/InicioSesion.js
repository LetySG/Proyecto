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

roles: [
    {
    ref: "Role",
    type: Schema.Types.ObjectId
    },
],},
{
    timestamps:true,
    versionKey:false
}
);

inicioSSchema.statics.encryptContraseña=async(contraseña)=>{
    
}


export default  model('InicioSesion',inicioSSchema)