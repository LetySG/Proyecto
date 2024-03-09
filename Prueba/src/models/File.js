import { Schema, model } from "mongoose";


const File = new Schema({
  titulo: {
    type: String,
  },
  descripcion: {
    type: String,
  },
  filename: {
    type: String,
  },
  path: {
    type: String,
  },
  mimetype: {
    type: String,
  },
  created_at: {
    type: Date,
		default: Date.now
  },
  asignado:{
    type:String,
    
  },
  EvidenciaOrientador:{
    type:String,
  },
  status:{
   type:String,
  },
  users: [
    {
      ref: "User",
      type: Schema.Types.ObjectId,
    },
  ],
});
export default model("File", File);
