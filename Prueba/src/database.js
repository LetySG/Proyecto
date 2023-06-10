import mongoose, { connect } from "mongoose";
import {MONGODB_URI } from './config';
mongoose.set('strictQuery', false);


(async () => {
  try {
    const db = await connect(
      MONGODB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        //useFindAndModify:true,
        //useCreateIndex:true,
       // strictQuery:true
      }
      );
    console.log("db connected to", db.connection.name);

    
  } catch(error){
    console.error(error);
  }
})();


