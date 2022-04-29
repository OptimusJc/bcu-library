import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import NewsandMagazines from "./pages/news/NewsandMagazines";
import CoolStuff from "./pages/coolstuff/CoolStuff";
import KidsandTeens from "./pages/kids&teens/KidsandTeens";
import StreamandDownload from "./pages/stream&download/StreamandDownload";
import Error from "./pages/error/Error";
import SupportUs from "./pages/support/SupportUs";
import Contact from "./pages/contact/Contact";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/news-and-magazines" element={<NewsandMagazines />} />
        <Route path="/kids-and-teens" element={<KidsandTeens />} />
        <Route path="/stream-and-download" element={<StreamandDownload />} />
        <Route path="/cool-stuff" element={<CoolStuff />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<SupportUs />} />
        <Route element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
