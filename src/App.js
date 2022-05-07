import { Outlet } from "react-router-dom";
import Navigation from "./components/header/Navigation";
import "./index.css";

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
