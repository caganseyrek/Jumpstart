import mongoose, { Schema } from "mongoose";

const exampleSchema: Schema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("exampleModel", exampleSchema);
