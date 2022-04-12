import Navigation from "./components/header/Navigation";
import "./index.css";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div>
			<Navigation />
			{/* enables the rendering of the site pages */}
			<Outlet />
			
		</div>
	);
}

export default App;
