import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: [true, "name is required."],
      unique: true,
      minLength: [3, "name minimum length is 3."],
      maxLength: [20, "name maximum length is 20"],
      match: [/^[a-zA-Z\\s]+$/, "name should not contain special characters"],
    },
    display_name: {
      type: String,
      required: [true, "name is required."],
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
    password: {
      type: String,
      required: true,
      minLength: [8, "Password must contain at-least 8 characters"],
      maxLength: [20, "Password cannot exceed 20 characters."],
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
    profile_photo: {
      type: String,
      maxLength: [500, "Profile photo cannot exceed 500 characters."],
      default: "",
    },
    dob: {
      type: Date,
      required: true,
    },
    country: {
      type: String,
      maxLength: [25, "Country cannot exceed 25 characters."],
      required: true,
    },
    preferred_language: {
      type: [String],
      default: ["english"],
    },
    last_login_time: {
      type: Date,
      required: false,
    },
    last_login_device: {
      type: String,
      maxLength: [20, "last login device cannot exceed 20 characters."],
      required: false,
    },
    last_login_ip: {
      type: String,
      maxLength: [45, "last login ip cannot exceed 45 characters."],
      required: false,
      default: "localhost",
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
