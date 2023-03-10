import express from "express";
import ContinentController from "../controller/continentController.js";
import BookingController from '../controller/bookingController.js'
const userRoute = express.Router();

// continent Routes
userRoute.get('/continents', ContinentController.Continents)
userRoute.post('/new-continent', ContinentController.PostContinents)


// booking routes
userRoute.post('/booking', BookingController.Booking)

// suscribe route

userRoute.post('/suscribe', BookingController.Suscribe)
userRoute.get('/allsuscriber', BookingController.AllSuscriber)

// inquiry
userRoute.post('/user-inquiry', BookingController.Inquiry)
// contact us
userRoute.post('/contact-us', BookingController.Contact)
// exporting the routes
export default userRoute;
