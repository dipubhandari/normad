import mongoose from "mongoose";

const Booking_Schema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
    },
    alternativeemail: {
      type: String,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
    },
    phoneNumber: {
      type: Number,
      required: [true, "CurrentCity is required"],
    },
    currentCity: {
      type: String,
      required: [true, "CurrentCity is required"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
    tripName: {
      type: String,
      required: [true, "TripName is required"],
    },
    numberOfTravellers: {
      type: Number,
      required: [true, "Number of travellers is required"],
    },
    estimatedDay: {
      type: Number,
      required: [true, "EstimatedDay is required"],
    },
    tripDate: {
      type: Date,
      required: [false, "TripDate is required"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

const BookingModel = mongoose.model("booking", Booking_Schema);

export default BookingModel;
