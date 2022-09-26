import React from "react";
import RegisterForm from "./components/Register/Register";
import Header from "./components/Header/Header";
import LoginForm from "./components/Login/Login";
import EditProfileForm from "./components/EditProfile/EditProfileForm";
import TodosPages from "./components/Todos/TodosPages";
import NotFound from "./components/NotFound/NotFound";

import { Routes, Route, Navigate } from "react-router-dom";

import "./normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
	EDIT_PROFILE_PAGE,
	LOGIN_PAGE,
	REGISTER_PAGE,
	TODO_PATH,
} from "./path/path";

export const UserInfoContext = React.createContext();
function userInfo() {
  return localStorage.getItem("user")
}

function App() {
;
return (
		<UserInfoContext.Provider value={userInfo}>
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
					<Route path={REGISTER_PAGE} element={<RegisterForm />} />
					<Route path={EDIT_PROFILE_PAGE} element={<EditProfileForm />} />
					<Route path={TODO_PATH} element={<TodosPages />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</UserInfoContext.Provider>
	);
}

export default App;
