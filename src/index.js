import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NewsandMagazines from "./components/pages/news/NewsandMagazines";
import CoolStuff from "./components/pages/coolstuff/CoolStuff";
import KidsandTeens from "./components/pages/kids&teens/KidsandTeens";
import StreamandDownload from "./components/pages/stream&download/StreamandDownload";
import Error from "./components/pages/error/Error";
import SupportUs from "./components/pages/support/SupportUs";
import Contact from "./components/pages/contact/Contact";

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="/news-and-magazines" element={<NewsandMagazines />} />
				<Route path="/kids-and-teens" element={<KidsandTeens />} />
				<Route path="/stream-and-download" element={<StreamandDownload />} />
				<Route path="/cool-stuff" element={<CoolStuff />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/support" element={<SupportUs />} />
				<Route element={<Error />} />
			</Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);
