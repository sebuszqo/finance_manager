const mongoose = require("mongoose");
require("dotenv").config();

export const connectDB = async (): Promise<void> => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			dbName: "MainDatabase",
		});
		console.log("Connected to MongoDB Atlas - MainDatabase");
	} catch (err) {
		console.error("Error connecting to MongoDB Atlas - MainDatabase", err);
	}
};
