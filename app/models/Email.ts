import { timeStamp } from "console";
import mongoose, { Schema, model } from "mongoose";

export interface EmailDocument {
  _id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const emailSchema = new Schema<EmailDocument>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
  },
  {
    timestamps: true,
  }
);


const Email = mongoose.models?.Email || model<EmailDocument>('Email',emailSchema);

export default Email;