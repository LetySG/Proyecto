import { Schema, model} from "mongoose";

const Image = new Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    imageURL:{
        type:String
    },
    public_id:{
        type:String
    }
    
});
    
export default model('Image',Image);


