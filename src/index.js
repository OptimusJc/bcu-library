import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "animate.css";

import Home from "./pages/home/Home";
import NewsandMagazines from "./pages/news/NewsandMagazines";
import CoolStuff from "./pages/coolstuff/CoolStuff";
import KidsandTeens from "./pages/kids&teens/KidsandTeens";
import Error from "./pages/error/Error";
import SupportUs from "./pages/support/SupportUs";
import Contact from "./pages/contact/Contact";
import Admin from "./pages/admin/Admin";
import Download from "./pages/download/Download";
import Ebooks from "./pages/stream&download/Ebooks";
import Songs from "./pages/stream&download/Songs";
import Series from "./pages/stream&download/Series";
import Podcasts from "./pages/stream&download/Podcasts";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="" element={<App />}>
                <Route path="/admin" element={<Admin />} />
                <Route path="/" element={<Home />} />
                <Route path="/download/:id" element={<Download />} />

                <Route
                    path="/news-and-magazines"
                    element={<NewsandMagazines />}
                />
                <Route path="/kids-and-teens" element={<KidsandTeens />} />
                <Route path="/ebooks" element={<Ebooks />} />
                <Route path="/songs" element={<Songs />} />
                <Route path="/podcasts" element={<Podcasts />} />
                <Route path="/series" element={<Series />} />
                <Route path="/cool-stuff" element={<CoolStuff />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/support" element={<SupportUs />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
