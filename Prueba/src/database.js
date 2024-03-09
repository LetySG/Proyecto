import mongoose, { connect } from "mongoose";
import { MONGODB_URI } from "./config";
mongoose.set("strictQuery", false);

(async () => {
  try {
    const db = await connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
