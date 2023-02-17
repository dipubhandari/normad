import BookingModel from '../model/bookingModel.js'
import uservalidator from 'email-validator'
import Suscribe_Model from '../model/suscriber.js'
class BookingController {
    // suscribe..
    static Suscribe = async (req, res) => {
        //    getting email
        const { email } = req.body
        console.log(email)
        // validating the email
        if (!(email)) {
            res.send({ error_msg: "Enter the email" })
        }
        else {
            // console.log(email)
            const validateEmail = uservalidator.validate(email)
            if (validateEmail) {
                const suscriber = await Suscribe_Model.create({ email })
                if (suscriber) {
                    res.send({ success_msg: "Booking is Successful..." })
                }
                else { res.send({ error_msg: "Something went wrong" }) }

            }
            else {
                res.send({ error_msg: "Enter valid Email" })
            }

        }
    }

    static AllSuscriber = async (req, res) => {
        try {
            const allSuscriber = await Suscribe_Model.find()
            res.send(allSuscriber)
        } catch (error) {
            res.send({ error_msg: "Something went wrong" })
        }
    }
    // suscrible......................

    // BOOKING API
    static Booking = async (req, res) => {
        try {
            // getting data from user
            const { fullName, email, alternativeemail, phoneNumber, currentCity, country, tripName, numberOfTravellers, estimatedDay, tripDate, message } = req.body
            // validating the input
            if (!(fullName && email && phoneNumber && currentCity && country && tripName && numberOfTravellers && estimatedDay && message)) {
                res.send({ error_msg: "Please Enter the details" })
            }
            else {
                const save = await BookingModel.create({message})
                if (save) {
                    console.log('this works')
                    res.send({ success_msg: "Booking is Successful..." })
                }
                else {
                    res.send({ error_msg: "Unable to book" })
                }
            }

        } catch (error) {
            res.send({ error_msg: "Something went wrong" })
        }
    }

    // booking api.....................

}

export default BookingController