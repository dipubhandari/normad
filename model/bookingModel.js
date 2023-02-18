import mongoose from "mongoose"

const Booking_Schema = new mongoose.Schema({

  fullname: { type: String, require: true },
  email: { type: String, require: true },
  secondemail: { type: String },
  phone: { type: Number, require: true },
  city: { type: String, require: true },
  country: { type: String, require: true },
  tripname: { type: String, require: true },
  travellers: { type: Number, require: true },
  day: { type: Number, require: true },
  tripdate: { type: Date, require: true },
  message: { type: String, require: true },

})

const Booking_Model = mongoose.model('Booking', Booking_Schema)

export default Booking_Model