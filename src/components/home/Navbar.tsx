import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const handleLanguageChange = (selectedValue: string) => {
    i18n.changeLanguage(selectedValue);
    localStorage.setItem("language", selectedValue);
    setSelectedLanguage(selectedValue);
  };

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [i18n, selectedLanguage]);

  return (
    <>
      {/* <div id="preloder">
        <div className="loader"></div>
      </div> */}
      <div className="offcanvas-menu-overlay"></div>
      <div className="canvas-open">
        <i className="icon_menu"></i>
      </div>
      <div className="offcanvas-menu-wrapper">
        <div className="canvas-close">
          <i className="icon_close"></i>
        </div>
        <div className="search-icon search-switch">
          <i className="icon_search"></i>
        </div>
        <div className="header-configure-area">
          <div className="language-option">
            <span>
              {t("EN")} <i className="fa fa-angle-down"></i>
            </span>
            <div className="flag-dropdown">
              <ul>
                <li>
                  <a href="#" onClick={() => handleLanguageChange("en")}>
                    EN
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handleLanguageChange("al")}>
                    AL
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handleLanguageChange("hol")}>
                    HOL
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handleLanguageChange("kos")}>
                    KOS
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handleLanguageChange("pl")}>
                    PL
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => handleLanguageChange("SP")}>
                    SP
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a href="#" className="bk-btn">
            {t("BOOKING NOW")}
          </a>
        </div>
        <nav className="mainmenu mobile-menu">
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/rooms" ? "active" : ""}>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li className={location.pathname === "/book" ? "active" : ""}>
              <Link to="/book">Book</Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="top-social">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          {/* <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-tripadvisor"></i>
          </a> */}
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <ul className="top-widget">
          <li>
            <i className="fa fa-phone"></i> (12) 345 67890
          </li>
          <li>
            <i className="fa fa-envelope"></i> 360viewappartments@gmail.com
          </li>
        </ul>
      </div>
      <header className="header-section">
        <div className="top-nav">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="tn-left">
                  <li>
                    <i className="fa fa-phone"></i> (12) 345 67890
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>{" "}
                    360viewapartments@gmail.com
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="tn-right">
                  <div className="top-social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    {/*  <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-tripadvisor"></i>
                    </a> */}
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                  <a href="#" className="bk-btn">
                    {t("BOOKING NOW")}
                  </a>
                  <div className="language-option">
                    <span>
                      {t(selectedLanguage)} <i className="fa fa-angle-down"></i>
                    </span>
                    <div className="flag-dropdown">
                      <ul>
                        <li>
                          <a
                            href="#"
                            onClick={() => handleLanguageChange("en")}
                          >
                            EN
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={() => handleLanguageChange("al")}
                          >
                            AL
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={() => handleLanguageChange("hol")}
                          >
                            HOL
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={() => handleLanguageChange("kos")}
                          >
                            KOS
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={() => handleLanguageChange("pl")}
                          >
                            PL
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={() => handleLanguageChange("sp")}
                          >
                            SP
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="logo">
                  <a href="./index.html">
                    {/* <img src="img/logo.png" alt="" /> */}
                    {/* <p>TEST LOGO</p> */}
                  </a>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="nav-menu">
                  <nav className="mainmenu">
                    <ul>
                      <li className={location.pathname === "/" ? "active" : ""}>
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className={
                          location.pathname === "/rooms" ? "active" : ""
                        }
                      >
                        <Link to="/rooms">Rooms</Link>
                      </li>
                      <li
                        className={
                          location.pathname === "/book" ? "active" : ""
                        }
                      >
                        <Link to="/book">Book</Link>
                      </li>
                      <li
                        className={
                          location.pathname === "/contact" ? "active" : ""
                        }
                      >
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="nav-right search-switch">
                    <i className="icon_search"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
