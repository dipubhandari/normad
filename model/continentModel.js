import mongoose from "mongoose";

const continent_Schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const continentModel = mongoose.model("continent", continent_Schema);

export default continentModel