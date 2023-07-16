import mongoose, { Schema, Types, model} from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    nombre:{
        type:String,
        trim:true
    },
    primerApellido:{
        type:String,
        trim:true
    },
    segundoApellido:{
        type:String,
        trim:true
    },
    grado:{
        type:String,
        trim:true
    },
    matricula:{
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
    licAsig:{
        type:String,
        trim:true
    },
    gradoAsig:{
        type:String,
        trim:true
    },
    grupoAsig:{
        type:String,
        trim:true
    },
    turnoAsig:{
        type:String,
        trim:true
    },
    roles:[{
        ref:"Role",
       type:mongoose.Schema.Types.ObjectId
    }],
    licenciatura:[{
        ref:"Licenciatura",
        type:mongoose.Schema.Types.ObjectId
    }]
},{
    timestamps:true,
    versionKey:false,

});
//Metodo para encriptar la contraseña
userSchema.statics.encryptContraseña = async (contraseña) => {
const salt = await bcrypt.genSalt(10)
return await bcrypt.hash(contraseña,salt)
}
//Metodo para comparar la contraseña
userSchema.statics.compareContraseña =  async(contraseña,receivedContraseña) =>{
   return await bcrypt.compare(contraseña,receivedContraseña)
}
export default 
model('User',userSchema);