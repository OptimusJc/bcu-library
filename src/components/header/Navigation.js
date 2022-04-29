import { Link } from "react-router-dom";
import "../../index.css";
import classes from "./Navigation.module.css";
import logo from "../../assets/images/bcu_logo.png";

function Navigation() {
  return (
    <header className={classes.backgroundColor}>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link to="/" className={classes.navbar_brand}>
            <img src={logo} alt="bcu logo" />
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            className={classes.navbar_toggler}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className={[
              classes.backgroundColor,
              "offcanvas",
              "offcanvas-end",
            ].join(" ")}
            // tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <div className={classes.navbar_brand}>
                <img src={logo} alt="bcu logo" />
              </div>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                style={{
                  marginInlineEnd: "calc(1rem / 16)",
                }}
              ></button>
            </div>
            <div className={classes.offcanvas_body}>
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/news-and-magazines" className="nav-link">
                    News & Magazines
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/kids-and-teens" className="nav-link">
                    Kids & Teens
                  </Link>
                </li>

                {/* stream and download link  */}
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Stream & Download
                  </a>
                  <ul
                    className={[
                      "dropdown-menu",
                      classes.dropdown_menu_container,
                    ].join(" ")}
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <Link
                        to="/stream-and-download/ebooks"
                        class="dropdown-item"
                      >
                        Ebooks
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/stream-and-download/ebooks"
                        class="dropdown-item"
                      >
                        Songs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/stream-and-download/ebooks"
                        class="dropdown-item"
                      >
                        Podcasts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/stream-and-download/ebooks"
                        class="dropdown-item"
                      >
                        Series
                      </Link>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Cool Stuff
                  </a>
                  <ul
                    className={[
                      "dropdown-menu",
                      classes.dropdown_menu_container,
                    ].join(" ")}
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <Link
                        to="/stream-and-download/ebooks"
                        className="dropdown-item"
                      >
                        Web Interviews
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/stream-and-download/ebooks"
                        className="dropdown-item"
                      >
                        Commentaries
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/contact" class="nav-link">
                    Contact Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/support" class="nav-link">
                    Support Library
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
