import { Schema, model} from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    nombre:{
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
    roles:[{
        ref:"Role",
        type:Schema.Types.ObjectId
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