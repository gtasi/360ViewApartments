import { useTranslation } from "react-i18next";
import about1 from "../../assets/img/about/about-1.jpg";
import about2 from "../../assets/img/about/about-2.jpg";

export const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div style={{ paddingTop: "5%" }}>
        <section className="aboutus-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-text">
                  <div className="section-title">
                    <span>{t("ABOUT US")}</span>
                    <h2>
                      360° View <br />
                      Apartments
                    </h2>
                  </div>
                  <p className="f-para">
                    {t(
                      "Welcome to our slice of paradise in Vlore, Albania. At 360° View Apartments, we're not just a place to stay, we're the essence of coastal luxury and tranquility."
                    )}
                  </p>
                  <p className="s-para">
                    {t(
                      "Nestled along the sun-kissed Albanian coastline, our rental rooms offer a haven for travelers seeking more than just accommodation. We're passionate about crafting memorable experiences, inspiring journeys that resonate with the heart of every guest."
                    )}
                  </p>

                  {/* <a href="#" className="primary-btn about-btn">
                    Read More
                  </a> */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-pic">
                  <div className="row">
                    <div className="col-sm-6">
                      <img src={about1} alt="" />
                    </div>
                    <div className="col-sm-6">
                      <img src={about2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
