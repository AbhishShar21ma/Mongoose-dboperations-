import mongoose from "mongoose";

const connectdb = async (db_url) => {
  try {
    const db_opt = {
      dbName: "schooldb",
    };
    await mongoose.connect(db_url, db_opt);
    console.log("db success");
  } catch (err) {
    console.log(err);
  }
};
export default connectdb;
