import { Schema, model} from "mongoose";

const taskShema= new Schema({
    nombre:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    correo:{
        type:String,
        required:true
    },

    contraseña:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default:false,
    },
},
{
    timestamps:true,
    versionKey:false
}
);


export default  model('Task',taskShema)