import Todolist from "./components/Todolist/Todolist";

import "bootstrap/dist/css/bootstrap.min.css";
import "./normalize.css";
import "./form.css";
import "./App.css";

export const UserInfoContext = React.createContext();

function App() {
	return (
		<div className="App">
			<Todolist />
		</div>
	);
}

export default App;
