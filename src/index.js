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
import Songs from "./pages/stream&download/songs/Songs";
import Series from "./pages/stream&download/series/Series";
import Podcasts from "./pages/stream&download/podcasts/Podcasts";
// ? ebooks
import Ebooks from "./pages/stream&download/ebooks/Ebooks";
import CookBooks from "./pages/stream&download/ebooks/CookBooks";
import SpiritualBooks from "./pages/stream&download/ebooks/SpiritualBooks";
import EducationalBooks from "./pages/stream&download/ebooks/EducationalBooks";

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
                <Route path="/ebooks" element={<Ebooks />}>
                    <Route path="spiritual" element={<SpiritualBooks />} />
                    <Route path="cooking" element={<CookBooks />} />
                    <Route path="educational" element={<EducationalBooks />} />
                </Route>
                {/* <Route path="/cookbooks" element={<CookBooks />} /> */}
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
