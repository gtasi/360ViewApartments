import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-text">
            <div className="row">
              {/*<div className="col-lg-4">
                 <div className="ft-about">
                  <div className="logo">
                    <a href="#">
                       <img src="img/footer-logo.png" alt="" /> 
                      <p>Test</p>
                    </a>
                  </div>
                  <p>
                    We inspire and reach millions of travelers
                    <br />
                    across 90 local websites
                  </p>
                  <div className="fa-social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-tripadvisor"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube-play"></i>
                    </a>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-3">
                <div className="ft-contact">
                  <h6>{t("CONTACT US")}</h6>
                  <ul>
                    <li>(12) 345 67890</li>
                    <li>360viewappartments@gmail.com</li>
                    <li>Vlore,Albania</li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-lg-3 offset-lg-1">
                <div className="ft-newslatter">
                  <h6>New latest</h6>
                  <p>Get the latest updates and offers.</p>
                  <form action="#" className="fn-form">
                    <input type="text" placeholder="Email" />
                    <button type="submit">
                      <i className="fa fa-send"></i>
                    </button>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className="copyright-option">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <ul>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Terms of use</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Environmental Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5">
                <div className="co-text">
                  <p>
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>
                    All rights reserved | This template is made with
                    <i className="fa fa-heart" aria-hidden="true"></i> by
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </footer>
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">
            <i className="icon_close"></i>
          </div>
          <form className="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
