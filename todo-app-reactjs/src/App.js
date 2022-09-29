import Todolist from "./components/Todolist/Todolist";
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./normalize.css";
import "./form.css";
import "./App.css";

export const UserInfoContext = React.createContext();

function App() {
	const [userInfo, setUserInfo] = useState(localStorage.getItem("user"));

	return (
		<div className="App">
			<Todolist />
		</div>
	);
}

export default App;
