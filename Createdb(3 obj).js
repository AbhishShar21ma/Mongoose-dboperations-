import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;

mongoose
  .connect("mongodb://localhost:27017/Sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Your Db is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const student = new mongoose.Schema({
  name: { type: String, required: true },
  workout: { type: Boolean },
  height: { type: Number },
});

const Student = new mongoose.model("Student", student);

const Stu = new mongoose.model("Stu", student);
const createDoc = async () => {
  try {
    const stuDoc = new Student({
      name: "Abhishek",
      workout: true,
      height: "7",
    });
    const re = await stuDoc.save();
    console.log(re);
  } catch (error) {
    console.log(error);
  }
};
createDoc();
const createStu = async () => {
  try {
    const me = new Stu({
      name: "shek",
      workout: false,
      height: "5",
    });
    const je = await me.save();
    console.log(je);
  } catch (error) {
    console.log(error);
  }
};
createStu();
app.get("/", (req, res) => {
  res.send("This is first hello world program");
});
app.listen(port, () => {
  console.log(`Your server is running at the port http://localhost:${port}`);
});
