import { Schema, model, models, Model } from "mongoose";

//Interface representing document in MongoDB
export interface IUser {
  _id?: string;
  email: string;
  password: string;
}

//Schema corresponding to document interface
const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    password: { type: String, required: true, select: false },
  },
  {
    timestamps: true,
    autoIndex: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

//Model
export const User =
  (models.User as Model<IUser>) || model<IUser>("User", userSchema);
