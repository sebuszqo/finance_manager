import express from "express";
import cors from "cors";
import "express-async-errors";
import { connectDB } from "./database/connections/mainDatabase";
import { UserModel } from "./database/models/users";
import bodyParser from "body-parser";
import { log } from "console";

const app = express();
app.use(
	cors({
		origin: "http://localhost:3000",
	})
);
app.use(bodyParser.json());
connectDB();

app.post("/api/register", async (req, res) => {
	try {
		const newUser = new UserModel(req.body);
		console.log(newUser);
		await newUser.save();
		res.status(201).json({ message: "User registered succefully" });
	} catch (err) {
		res.status(500).json({ err: err.message });
	}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("Listening on http://localhost:5000");
});
