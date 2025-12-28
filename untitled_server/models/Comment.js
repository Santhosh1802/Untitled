import mongoose from "mongoose";

const CommentsSchema=new mongoose.Schema({
    blog_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog",
        required:true,
    },
    commented_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    content:{
        type:String,
        minLength:[1,"comment content should contain at-least 1 character."],
        maxLength:[1000,"comment content cannot exceed 1000 characters."],
        required:true,
    },
    reply:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Comment",
        default:[],
    },
    likes:{
        type:Number,
        minLength:[0,"likes cannot be negative."],
        default:0,
    }

},{timestamps:true});

const Comment=mongoose.model("Comment",CommentsSchema);

export default Comment;