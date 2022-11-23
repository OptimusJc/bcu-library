import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
import logo from "../../assets/images/bcu_logo_compressed.png";

import ebook from "../../assets/images/stream&download/ebook_icon_light.svg";
import music from "../../assets/images/stream&download/music_icon_light.svg";
import podcast from "../../assets/images/stream&download/podcast_icon_light.svg";
import series from "../../assets/images/stream&download/series_icon_light.svg";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

function Navigation() {
	let activeStyle = {
		color: "var(--color-4)",
	};

	return (
		<div className={classes.backgroundColor}>
			<header>
				<nav className="navbar navbar-expand-lg">
					<div className={["container", classes.nav_container].join(" ")}>
						<NavLink to="/" className={classes.navbar_brand}>
							<img height="80px" width="100px" src={logo} alt="bcu logo" />
						</NavLink>

						<button
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasNavbar"
							aria-controls="offcanvasNavbar"
							className={[classes.navbar_toggler].join(" ")}
						>
							<HiMenuAlt3
								className={[
									"navbar-toggler-icon",
									classes.navbar_toggler_icon,
								].join(" ")}
							/>
						</button>
						<div
							className={[
								classes.backgroundColor,
								classes.offcanvasNavbar,
								"offcanvas",
								"offcanvas-end",
							].join(" ")}
							tab-index="-1"
							id="offcanvasNavbar"
							aria-labelledby="offcanvasNavbarLabel"
						>
							<div className="offcanvas-header">
								{/* <div className={classes.navbar_brand}>
									<img src={logo} alt="bcu logo" />
								</div> */}
								<button
									type="button"
									className={["text-reset", classes.navbar_toggler_close].join(
										" "
									)}
									data-bs-dismiss="offcanvas"
									aria-label="Close"
								>
									<IoCloseSharp className={classes.btn_close} />
								</button>
							</div>
							<div
								className={["offcanvas-body", classes.offcanvas_body].join(" ")}
							>
								<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
									<li className="nav-item">
										<NavLink
											to="/"
											className="nav-link active"
											aria-current="page"
											style={({ isActive }) => {
												return isActive ? activeStyle : undefined;
											}}
										>
											Home
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											to="/news-and-magazines"
											className="nav-link"
											style={({ isActive }) => {
												return isActive ? activeStyle : undefined;
											}}
										>
											News & Magazines
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											to="/kids-and-teens"
											className="nav-link"
											style={({ isActive }) => {
												return isActive ? activeStyle : undefined;
											}}
										>
											Kids & Teens
										</NavLink>
									</li>

									{/* stream and download link  */}
									<li className="nav-item dropdown">
										<NavLink
											className="nav-link 
                                    dropdown-toggle"
											to="#"
											id="offcanvasNavbarDropdown1"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											Stream & Download
										</NavLink>
										<ul
											className={[
												"dropdown-menu",
												classes.dropdown_menu_container,
											].join(" ")}
											aria-labelledby="offcanvasNavbarDropdown1"
										>
											<li>
												<NavLink
													to="/ebooks/spiritual"
													className="dropdown-item"
													style={({ isActive }) => {
														return isActive ? activeStyle : undefined;
													}}
												>
													<img className={classes.icon} src={ebook} alt="" />
													Ebooks
												</NavLink>
											</li>
											<li>
												<NavLink
													to="/songs"
													className="dropdown-item"
													style={({ isActive }) => {
														return isActive ? activeStyle : undefined;
													}}
												>
													<img className={classes.icon} src={music} alt="" />
													Songs
												</NavLink>
											</li>
											<li>
												<NavLink
													to="/podcasts"
													className="dropdown-item"
													style={({ isActive }) => {
														return isActive ? activeStyle : undefined;
													}}
												>
													<img className={classes.icon} src={podcast} alt="" />
													Podcasts
												</NavLink>
											</li>
											<li>
												<NavLink
													to="/series"
													className="dropdown-item"
													style={({ isActive }) => {
														return isActive ? activeStyle : undefined;
													}}
												>
													<img className={classes.icon} src={series} alt="" />
													Series
												</NavLink>
											</li>
										</ul>
									</li>

									<li className="nav-item dropdown">
										<NavLink
											to="#"
											className="nav-link dropdown-toggle"
											id="offcanvasNavbarDropdown2"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											Cool Stuff
										</NavLink>
										<ul
											className={[
												"dropdown-menu",
												classes.dropdown_menu_container,
											].join(" ")}
											aria-labelledby="offcanvasNavbarDropdown2"
										>
											<li>
												<NavLink
													to="/stream-and-download/ebooks"
													className="dropdown-item"
													style={({ isActive }) => {
														return isActive ? activeStyle : undefined;
													}}
												>
													Web Interviews
												</NavLink>
											</li>
											<li>
												<NavLink
													to="/stream-and-download/ebooks"
													className="dropdown-item"
													style={({ isActive }) => {
														return isActive ? activeStyle : undefined;
													}}
												>
													Commentaries
												</NavLink>
											</li>
										</ul>
									</li>
								</ul>

								<ul className="navbar-nav">
									<li className="nav-item">
										<NavLink
											to="/contact"
											className="nav-link"
											style={({ isActive }) => {
												return isActive ? activeStyle : undefined;
											}}
										>
											Contact Us
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											to="/support"
											className="nav-link"
											style={({ isActive }) => {
												return isActive ? activeStyle : undefined;
											}}
										>
											Support Library
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}

export default Navigation;
