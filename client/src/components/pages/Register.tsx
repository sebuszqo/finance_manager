import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../assets/pages/Register.css";
import Logo from "../../assets/images/Logo.png";
import UsernameLogo from "../../assets/images/UsernameLogo.png";
import EmailLogo from "../../assets/images/EmailLogo.png";
import PasswordLogo from "../../assets/images/PasswordLogo.png";
import { log } from "console";

interface FormValues {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export const Register: React.FC = () => {
	const [formValues, setFormValues] = useState<FormValues>({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (formValues.password === formValues.confirmPassword) {
			try {
				// remove confirmPassword property
				const { confirmPassword, ...correctValues } = formValues;
				const response = await axios.post(
					"http://localhost:5000/api/register",
					correctValues
				);
				console.log(response.data.message);
			} catch (err: any) {
				console.error("Error during registering user:", err.message);
			}
		} else {
			console.log("Passwords do not match!");
		}
	};

	return (
		<main className="LoginForm">
			<img
				src={Logo}
				alt="Logo of the Application"
				width="70px"
				height="70px"
			/>
			<h1 className="SignUpString">Create Account</h1>
			<form className="LoginFormData" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Username"
					name="username"
					value={formValues.username}
					onChange={handleChange}
					required
				/>
				<img
					src={UsernameLogo}
					className="UsernameLogoImg"
					alt="Username Logo"
					width="20px"
					height="20px"
				/>
				<hr className="FirstHrLine" />
				<input
					type="email"
					placeholder="Email"
					pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
					name="email"
					value={formValues.email}
					onChange={handleChange}
					required
				/>
				<img
					src={EmailLogo}
					className="EmailLogoImg"
					alt="Email Logo"
					width="20px"
					height="15px"
				/>
				<hr className="FirstHrLine" />
				<input
					type="password"
					placeholder="Password"
					name="password"
					value={formValues.password}
					onChange={handleChange}
					required
				/>
				<img
					src={PasswordLogo}
					className="PasswordLogoImg"
					alt="Password Logo"
					width="15px"
					height="20px"
				/>
				<hr className="FirstHrLine" />
				<input
					type="password"
					placeholder="Confirm Password"
					name="confirmPassword"
					value={formValues.confirmPassword}
					onChange={handleChange}
					required
				/>
				<img
					src={PasswordLogo}
					className="PasswordLogoImg"
					alt="Password Logo"
					width="15px"
					height="20px"
				/>
				<hr />
				<h4 className="ChangeToSignInString">
					Already have an account?{" "}
					<Link className="SignInLink" to="/login">
						Sign in
					</Link>
				</h4>
				{error && <p>{error}</p>}
				{loading ? (
					<p>Loading...</p>
				) : (
					<button className="LoginButton" type="submit">
						Get Started
					</button>
				)}
			</form>{" "}
		</main>
	);
};
