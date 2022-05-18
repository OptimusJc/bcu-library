import { Outlet } from "react-router-dom";
import Navigation from "./components/header/Navigation";
import Footer from "./components/footer/Footer";

import "./index.css";

function App() {
    return (
        <div>
            <Navigation />
            {/* enables the rendering of the site pages */}
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
