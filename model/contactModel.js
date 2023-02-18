import mongoose from "mongoose"

const Contact_Schema = new mongoose.Schema({

  name: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: Number, require: true },
  country: { type: String, require: true },
  findus: { type: String, reqire: true },
  traveldate: { type: Date, require: true },
  message: { type: String, require: true }
})

const Contact_Model = mongoose.model('Contact', Contact_Schema)

export default Contact_Model