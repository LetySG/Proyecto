import { Schema, model} from "mongoose";

export const ROLES = ["alumno","orientador","coordinador","tutor"]

const roleSchema= new Schema({
    name:String
},
{
    versionKey:false
});



export default  model('Role',roleSchema)