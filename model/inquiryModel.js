import mongoose from "mongoose";

const Inquiry_Schema = mongoose.Schema(
  {
    tripName: {
      type: String,
      required: [true, "Trip name  is required"],
    },
    fullName: {
      type: String,
      required: [true, "Full name  is required"],
    },
    phoneNumber: {
      type: Number,
      required: [true, "CurrentCity is required"],
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

const InquiryModel = mongoose.model("inquiry", Inquiry_Schema);

export default InquiryModel;
