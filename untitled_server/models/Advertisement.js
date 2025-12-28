import mongoose from "mongoose";

const AdvertisementSchema = new mongoose.Schema(
  {
    target_audience_base_age: {
      type: Number,
      required: true,
    },
    target_audience_till_age: {
      type: Number,
      required: true,
    },
    countries:{
        type:[String],
        required:true,
    },
    preferred_language:{
        type:[String],
        required:true,
        default:["english"]
    },
    clicks: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
    pricing: {
      type: Number,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Advertisement = mongoose.model("Advertisement", AdvertisementSchema);
export default Advertisement;
