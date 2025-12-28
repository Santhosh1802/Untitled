import mongoose, { Schema } from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    blog_title: {
      type: String,
      minLength: [5, "blog_title should have at-least 5 characters."],
      maxLength: [30, "blog_title cannot exceed 30 characters."],
      required: true,
    },
    blog_description: {
      type: String,
      required: true,
      minLength: [
        10,
        "blog_description should contain at-least 10 characters.",
      ],
      maxLength: [100, "blog_description cannot exceed 100 characters."],
    },
    blog_content: {
      type: String,
      required: true,
      minLength: [20, "blog_content should contain at-least 20 characters."],
      maxLength: [1000000, "blog_content cannot exceed 1000000 characters."],
    },
    blog_status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    blog_category_tags: {
      type: [
        {
          type: String,
          minLength: 2,
          maxLength: 30,
        },
      ],
      required: true,
      validate: {
        validator: function (arr) {
          return arr.length >= 1 && arr.length <= 20;
        },
        message: "blog_category_tags must contain between 1 and 20 tags.",
      },
    },
    blog_created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    read_count: {
      type: Number,
      default: 0,
    },
    visibility_rule: {
      type: String,
      enum: ["free", "silver", "gold"]
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", BlogSchema);
export default Blog;
