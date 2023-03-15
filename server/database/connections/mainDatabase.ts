const mongoose = require("mongoose");

export const connectDB = async (): Promise<void> => {
	try {
		await mongoose.connect(
			"mongodb+srv://Admin:zANehcu6ZuvuOq3i@maincluster.0uwb7eu.mongodb.net/?retryWrites=true&w=majority",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				dbName: "MainDatabase",
			}
		);
		console.log("Connected to MongoDB Atlas - MainDatabase");
	} catch (err) {
		console.error("Error connecting to MongoDB Atlas - MainDatabase", err);
	}
};
