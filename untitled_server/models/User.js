import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required."],
      unique: [true, "name must be unique."],
      minLength: [3, "name minimum length is 3."],
      maxLength: [20, "name maximum length is 20"],
      match: [/^[a-zA-Z\\s]+$/, "name should not contain special characters"],
    },
    email: {
      type: String,
      required: [true, "email is required."],
      unique: [true, "email must be unique"],
      match: [
        /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
        "Invalid email",
      ],
    },
    role: {
      type: String,
      enum: ["reader", "admin", "creator", "verified creator"],
      default: "reader",
    },
    account_type: {
      type: String,
      enum: ["normal", "google", "microsoft", "github"],
      required: true,
    },
    dob:{
      type:Date,
      required:true,
    },
    country:{
      type:String,
      required:true,
    },
    preferred_language:{
      type:[String],
      required:true,
      default:["english"],
    },
    last_login_time: {
      type: Date,
      required: false,
    },
    last_login_device: {
      type: String,
      required: false,
    },
    last_login_ip: {
      type: String,
      required: false,
    },
    color_theme: {
      type: String,
      enum: ["light", "dark", "system"],
      default: "light",
    },
    password_reset_token: {
      type: String,
      required: false,
    },
    last_password_reset_time: {
      type: Date,
      required: false,
    },
    subscription_status: {
      type: Boolean,
      default: false,
    },
    is_blocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
