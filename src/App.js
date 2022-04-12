import Navigation from "./components/header/Navigation";
import "./index.css";
import { Outlet } from "react-router-dom";

import Hero from "./components/hero/Hero";

function App() {
	return (
		<div>
			<Navigation />
			{/* enables the rendering of the site pages */}
			<Outlet />
			<div className="container_fluid">
				<Hero />
			</div>
		</div>
	);
}

export default App;
