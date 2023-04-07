import { Schema, model } from "mongoose";
import { IUser } from "../../types/index";

const userSchema = new Schema<IUser>({
	username: { type: String, required: true, unique: true },
	email: {
		type: String,
		required: true,
		unique: true,
		match: /^\S+@\S+\.\S+$/,
	},
	password: { type: String, required: true },
	avatar: { type: String, default: "string" },
	isVerified: { type: Boolean, default: true },
});

export const UserModel = model<IUser>("users", userSchema);
