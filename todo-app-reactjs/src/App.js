import React, { useState } from "react";
import Todolist from "./components/Todolist/Todolist";
import LoginForm from "./components/Login/Login";
import Header from "./components/Header/Header";
import RegisterForm from "./components/Register/Register";

import { Routes, Route, Navigate } from "react-router-dom";
import { LOGIN_PAGE, REGISTER_PAGE, TODO_PATH } from "./path/path";

import "bootstrap/dist/css/bootstrap.min.css";
import "./normalize.css";
import "./form.css";
import "./category.css";
import "./App.css";

export const UserInfoContext = React.createContext();

function App() {
	const [userInfo, setUserInfo] = useState(localStorage.getItem("user"));

	return (
		<UserInfoContext.Provider value={[userInfo, setUserInfo]}>
			<div className="App">
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							userInfo ? (
								<Navigate to={TODO_PATH} />
							) : (
								<Navigate to={LOGIN_PAGE} />
							)
						}
					/>
					<Route path={LOGIN_PAGE} element={<LoginForm />} />
					<Route path={TODO_PATH} element={<Todolist />} />
					<Route path={REGISTER_PAGE} element={<RegisterForm />} />
				</Routes>
			</div>
		</UserInfoContext.Provider>
	);
}

export default App;
