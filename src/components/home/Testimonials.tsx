import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import bookingLogo from "../../assets/img/booking.png";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    fade: true,
    autoplay: true,

    autoplaySpeed: 2250,
  };

  const { t, i18n } = useTranslation();

  return (
    <section className="testimonial-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>{t("Testimonials")}</span>
              <h2>{t("What Customers Say?")}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            {/* Move Slider outside of ts-item divs */}
            <Slider {...settings}>
              <div className="ts-item">
                <p>
                  The room is spacious, comfortable, clean and bright, with
                  brand new furniture and comfortable color matching. The
                  refrigerator and air conditioner are also new. The kitchenette
                  is very convenient to use. We made breakfast and enjoyed it on
                  the balcony. The location is located in Radhime, the best
                  place on the mountain The best viewing point, the large
                  platform of the villa can have a panoramic view of the sea and
                  the town of Orikum. Very spectacular sight! Don't miss it for
                  travelers with cars, we will be back next year!
                </p>
                <div
                  className="ti-author"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <div className="rating">
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star-half_alt"></i>
                  </div>
                  <h5>- Zhou</h5>
                  <img
                    src={bookingLogo}
                    alt=""
                    style={{ backgroundColor: "transparent", width: "30%" }}
                  />
                </div>
              </div>
              <div className="ts-item">
                <p>
                  Beautiful view!! Host who does not speak English very well but
                  super nice!
                </p>
                <div
                  className="ti-author"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <div className="rating">
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star-half_alt"></i>
                  </div>
                  <h5>- Martigne</h5>
                  <img
                    src={bookingLogo}
                    alt=""
                    style={{ backgroundColor: "transparent", width: "30%" }}
                  />
                </div>
              </div>
              <div className="ts-item">
                <p>
                  “Beautiful views. On one side, the sea, on the other,
                  mountains. Nearby there is a great viewpoint with a panorama
                  of the entire bay, a view of Vlore and Orikum. Peace and
                  quiet. Very nice service. Very clean and spacious apartments.”
                </p>
                <div
                  className="ti-author"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <div className="rating">
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star"></i>
                    <i className="icon_star-half_alt"></i>
                  </div>
                  <h5>- Nosal</h5>
                  <img
                    src={bookingLogo}
                    alt=""
                    style={{ backgroundColor: "transparent", width: "30%" }}
                  />
                </div>
              </div>
            </Slider>
            {/* End of Slider */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
