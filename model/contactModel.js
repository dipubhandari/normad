import mongoose from "mongoose";

const Contact_Schema = mongoose.Schema(
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

    phoneNumber: {
      type: Number,
      required: [true, "CurrentCity is required"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
    findus: {
      type: String,
      required: [true, "Country is required"],
    },
    expectedDateOfTravel: {
      type: Number,
      required: [true, "Expected Date Of Travel is required"],
    },
    triptDate: {
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

const ContactModel = mongoose.model("contact", Contact_Schema);

export default ContactModel;
