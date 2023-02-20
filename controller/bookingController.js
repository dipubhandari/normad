import InquiryModel from '../model/inquiryModel.js'
import nodemailer from 'nodemailer'
import BookingModel from '../model/bookingModel.js'
import uservalidator from 'email-validator'
import Suscribe_Model from '../model/suscriber.js'
import Contact_Model from '../model/contactModel.js'
class BookingController {
    // suscribe..
    static Suscribe = async (req, res) => {
        try {
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
                        res.send({ success_msg: "Booking is Successful...", suscriber })
                    }
                    else { res.send({ error_msg: "Something went wrong" }) }
                }
                else {
                    res.send({ error_msg: "Enter valid Email" })
                }
            }
        } catch (error) {
            res.send({ error_msg: "Something went wrong" })
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
            const { fullname, email, phone, city, country, tripname, travellers, day, tripdate, message } = req.body
            const secondemail = req.body.secondemail || null
            // validating the input
            if (!(fullname && email && phone && city && country && tripname && travellers && day && tripdate && message)) {
                res.send({ error_msg: "Please Enter the details" })
            }
            else if (phone.toString().length != 10 || typeof phone != 'number') {
                res.send({ error_msg: "phone number is not valid" })
            }
            else {

                const validateEmail = uservalidator.validate(email)
                let validateEmailII
                if (secondemail != null) {
                    validateEmailII = uservalidator.validate(secondemail)
                }
                else {
                    validateEmailII = true
                }
                if ((validateEmail == false || validateEmailII == false)) {
                    res.send({ error_msg: "Please send correct Email" })
                }
                else {
                    // send email
                    let transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'realdipubhandari@gmail.com',
                            pass: 'vrbosdgmhoolidon'
                        }
                    });
                    let mailOptions = {
                        from: '<Nomad Server>',
                        to: '<thenomad.data@gmail.com>',
                        subject: 'Booking...',
                        html: `
                    <b>Hello Someone wants to book trip Here is the details....</b>
                     <br />
                     <br />
                     <br />
                  <b>Name :</b> <p>${fullname}</p>  <br />
                  <b>email :</b> <p>${email}</p>  <br />
                  <b>Secondary Email :</b> <p>${secondemail || 'Not Available'}</p>  <br />
                  <b>phone :</b> <p>${phone}</p>  <br />
                  <b>Address-Ciry :</b> <p>${city}</p>  <br />
                  <b>Country :</b> <p>${country}</p>  <br />
                  <b>Trip Date :</b> <p>${tripdate.split(['T'][0])}</p>  <br />
                  <b>Trip Name :</b> <p>${tripname}</p>  <br />
                  <b>Total Travellers :</b> <p>${travellers}</p>  <br />
                  <b>Total Days : </b><p>${day}</p>  <br />
                  <b>Message :</b> <p>${message}</p>  <br />
                    `
                    };
                    transporter.sendMail(mailOptions, function (error, info) {
                    });
                    // 
                    const save = await BookingModel.create({ fullname, email, secondemail, phone, city, country, tripname, travellers, day, tripdate, message })
                    if (save) {
                        res.send({ success_msg: "Booking is Successful..." })
                    }
                    else {
                        res.send({ error_msg: "Unable to book" })
                    }
                }
            }
        } catch (error) {
            res.send({ error_msg: "Something went wrong" })
        }
    }

    // booking api.....................

    // inquiry

    static Inquiry = async (req, res) => {

        try {
            // getting the inpu
            const { tripname, fullname, email, phone, message } = req.body
            // validting the input
            if (!(tripname && fullname && email && phone && message)) {
                console.log(tripname, fullname, email, phone, message)
                res.send({ error_msg: "Please enter all fields" })
            }
            else if (typeof phone != 'number' || phone.toString().length != 10) {
                res.send({ error_msg: "phone number is not valid" })
            }
            else {
                // try {
                const validateEmail = uservalidator.validate(email)
                if (!validateEmail) {
                    res.send({ error_msg: " Email is not valid" })
                }
                else {
                    let transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'realdipubhandari@gmail.com',
                            pass: 'vrbosdgmhoolidon'
                        }
                    });
                    let mailOptions = {
                        from: '<Nomad Server>',
                        to: '<thenomad.data@gmail.com>',
                        subject: 'Booking...',
                        html: `
                        <b>Hello Someone wants to inquiry on Nomad....</b> <br />
                        Here is the details
                         <br />
                        <b>Trip name:</b>  ${tripname}  <br />
                        <b> Name:</b> ${fullname}  <br />
                        <b>Email:</b>${email} <br />
                        <b>phone:</b>${phone}<br/>
                        <b>Message:</b>${message}
                                             
                        `
                    };
                    transporter.sendMail(mailOptions, function (error, info) {
                    })
                    const newInquiry = await InquiryModel.create({ tripname, fullname, email, phone, message })
                    if (newInquiry) {
                        res.send({ success_msg: "We will Contact you Soon..." })
                    }
                }
            }
        }
        catch (err) {
            res.send({ error_msg: "Something Went Wrong" })
        }
    }

    // inquiry

    // contact us

    static Contact = async (req, res) => {
        try {
            // getting input
            let { name, email, phone, country, findus, traveldate, message } = req.body
            if (!(name && email && phone && country && findus && traveldate && message)) {
                res.send({ error_msg: "Please fill all the details" })
            }
            else if (typeof phone != 'number' || phone.toString().length != 10) {
                res.status(200).send({ error_msg: "phone number is not valid" })
            }
            else {
                const validateEmail = uservalidator.validate(email)
                if (!(validateEmail)) {
                    res.send({ error_msg: "Please send correct Email" })
                }
                else {
                    const contact = await Contact_Model.create({
                        name, email, phone, country, findus, traveldate, message
                    })
                    if (contact) {
                        res.send({ success_msg: "We will contact soon!" })
                        // send email
                        let transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: 'realdipubhandari@gmail.com',
                                pass: 'vrbosdgmhoolidon'
                            }
                        })
                        let mailOptions = {
                            from: '<Nomad Server>',
                            to: '<thenomad.data@gmail.com>',
                            subject: 'Booking...',
                            html: `
                        Hello, ${name} wants to contact on Nomad.... <br />
                        Here is the details <br /> <br />
                       <b>Email:</b>  ${email} <br /> <br />
                        <b> phone:</b> ${phone}  <br /> <br />
                        <b>Country:</b>${country} <br /> <br />
                        <b>Find You By:</b>${findus} <br /> <br />
                        <b>Travel Date:</b>${traveldate.split(['T'][0])} <br /> <br />
                        <b>Message:</b>${message}
                        `
                        };
                        transporter.sendMail(mailOptions, function (error, info) {

                        })

                    }
                }
            }

            // validating input
        } catch (error) {
            res.send({ error_msg: "Something Went Wrong" })
        }
    }

    // contactus

}

export default BookingController