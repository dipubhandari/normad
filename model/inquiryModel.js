import mongoose from "mongoose";

const Inquiry_Schema = new mongoose.Schema(
  {
    tripname: {
      type: String,
      required: [true, "Trip name  is required"],
    },
    fullname: {
      type: String,
      required: [true, "Full name  is required"],
    },
    phone: {
      type: Number,
      required: [true, "CurrentCity is required"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
  },
  {
    timestamps: true,
  }
);

const InquiryModel = mongoose.model("inquiry", Inquiry_Schema);

export default InquiryModel;
