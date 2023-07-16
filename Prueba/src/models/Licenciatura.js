import { Schema, model, version} from "mongoose";


const licenciaturaSchema = new Schema({
    
    name:
        String
},
{
versionKey:false
});


export default  model('Licenciatura',licenciaturaSchema)