import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required."],
        unique:[true,"name must be unique."],
        minLength:[3,"name minimum length is 3."],
        maxlength:[20,"name maximum length is 20"],
        match:[/^[a-zA-Z\\s]+$/,"name should not contain special characters"]
    },
    email:{
        type:String,
        required:[true,"email is required."],
        unique:[true,"email must be unique"],
        match:[/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,"Invalid email"],
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user",
    },

    
},{timestamps:true});