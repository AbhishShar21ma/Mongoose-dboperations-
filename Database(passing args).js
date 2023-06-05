import mongoose from "mongoose";
import express from "express";

const app = express();
const port = 3000;
//connecting to a database and creating
mongoose
  .connect("mongodb://localhost:27017/Newdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Your Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

//Defining a schema using the given operation
const Student = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 30 },
  fees: {
    type: mongoose.Decimal128,
    reuired: true,
    validate: (v) => v >= 5500.5,
  },
  hobbies: { type: Array },
  isactive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});
//Definig a model in for this schema in which it will create a collection with name "Students"
const stu = new mongoose.model("Student", Student);
//Creating a function
const stufunc = async (nm, ag, fe, hob, isact, cmt) => {
  try {
    const newdoc = new stu({
      name: nm,
      age: ag,
      fees: fe,

      hobbies: hob,
      isactive: isact,
      comments: cmt,
    });
    const s = await newdoc.save();
    console.log(s);
  } catch (eroor) {
    console.log(error);
  }
};
stufunc("Sumit", 19, 6006.6, ["Gaming", "coding"], false, [
  { value: "This is a new Student" },
]);

app.listen(port, () => {
  console.log(`Your server is running at the port http://localhost:${port}`);
});
