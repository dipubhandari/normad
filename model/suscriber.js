import mongoose from "mongoose"

const Suscribe_Schema = new mongoose.Schema({
    email: { type: String, require: true },
    createdAt: { type: Date, default: Date.now() }
})

const Suscribe_Model = mongoose.model('Suscribe', Suscribe_Schema)

export default Suscribe_Model