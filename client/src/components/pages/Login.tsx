import React, { useState } from "react";
import "../../assets/pages/Login.css";
import Logo from "../../assets/images/Logo.png";
import UsernameLogo from "../../assets/images/UsernameLogo.png";
import PasswordLogo from "../../assets/images/PasswordLogo.png";

export const Login: React.FC = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log(password);
	};

	return (
		<main className="LoginForm">
			<img
				src={Logo}
				alt="Logo of the Application"
				width="70px"
				height="70px"
			/>
			<h1 className="WelcomeString">Welcome!</h1>
			<h3 className="SignInString">Sign in to your account</h3>
			<form className="LoginFormData">
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
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
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
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
				<div className="ElementsUnderPassword">
					<label htmlFor="rememberMe">
						<input
							type="checkbox"
							id="rememberMe"
							checked={rememberMe}
							onChange={() => setRememberMe(!rememberMe)}
						/>
						Remember Me
					</label>
					<h4>Forgot password?</h4>
				</div>
				{error && <p>{error}</p>}
				{loading ? (
					<p>Loading...</p>
				) : (
					<button className="LoginButton" type="submit" onClick={onSubmit}>
						Login
					</button>
				)}
			</form>
		</main>
	);
};
