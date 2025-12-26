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
      enum: ["user", "admin"],
      default: "user",
    },
    account_type:{
        type:String,
        enum:["normal","google","microsoft","github"],
        required:true,
    },
    last_login_time:{
        type:Date,
        required:false,
    },
    last_login_device:{
        type:String,
        required:false,
    },
    last_login_ip:{
        type:String,
        required:false,
    },
    color_theme:{
        type:String,
        enum:["light","dark","system"],
        default:"light",
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
