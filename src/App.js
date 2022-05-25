// bootstrap styles
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap";

// core navigation import
import { Outlet } from "react-router-dom";

// component imports
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
