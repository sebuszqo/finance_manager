import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import { handleError, ValidationError } from "./middleware/error";
import { connectDB } from "./database/connections/mainDatabase";
import { UserModel } from "./database/models/users";

const app = express();
connectDB();

app.use(
	cors({
		origin: "http://localhost:3000",
	})
);

app.use(json());

// app.get("/", async (req, res) => {
//   throw new ValidationError("Sorry");
// });

app.use(handleError);

const user = new UserModel({
	username: "sebuszqo",
	email: "bill@gmail.com",
	password: "user123",
	isVerified: true,
});

user.save().then(() => {
	console.log("User was added!");
});

app.listen(3001, "0.0.0.0", () => {
	console.log("Listening on http://localhost:3001");
});
