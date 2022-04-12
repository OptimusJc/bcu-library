import { Link } from "react-router-dom";
import "../../index.css";
import classes from "./Navigation.module.css";

import logo from "../../assets/images/bcu_logo.png";

function Navigation() {
	return (
		<div className="container_fluid backgroundColor">
			<header>
				<div className={classes.logo}>
					<Link to="/">
						<img src={logo} alt="Bcu logo" />
					</Link>
				</div>

				<nav>
					<ul className={classes.nav_primary}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/news-and-magazines">News & Magazines</Link>
						</li>

						<li>
							<Link to="/kids-and-teens">Kids & Teens</Link>
						</li>

						<li>
							<Link to="/stream-and-download">Stream & Download</Link>
						</li>

						<li>
							<Link to="/cool-stuff">Cool Stuff</Link>
						</li>
					</ul>

					<ul className={classes.nav_secondary}>
						<li>
							<Link to="/contact">Contact Us</Link>
						</li>

						<li>
							<Link to="/support">Support Library</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}

export default Navigation;
