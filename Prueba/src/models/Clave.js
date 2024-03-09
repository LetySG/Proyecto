import { Schema, Types, model } from "mongoose";
import bcrypt from "bcryptjs";
import { SchemaTypes } from "mongoose";

const claveSchema = new Schema({
  claveA: {
    type: String,
    trim: true,
  },
  claveT: {
    type: String,
    trim: true,
  },
  claveO: {
    type: String,
    trim: true,
  },
  confirm_claveA: {
    type: String,
    trim: true,
  },
  confirm_claveT: {
    type: String,
    trim: true,
  },
  confirm_claveO: {
    type: String,
    trim: true,
  },
});

claveSchema.statics.compareClaveA = async (claveA, receivedClaveA) => {
  return await bcrypt.compare(claveA, receivedClaveA);
};

claveSchema.statics.compareClaveO = async (claveO, receivedClaveO) => {
  return await bcrypt.compare(claveO, receivedClaveO);
};

claveSchema.statics.compareClaveT = async (claveT, receivedClaveT) => {
  return await bcrypt.compare(claveT, receivedClaveT);
};

export default model("Clave", claveSchema);
