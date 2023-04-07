import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";

export const App: React.FC = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
	);
};
