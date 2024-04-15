import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <section className="contact-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-text">
                <h2>{t("Contact Info")}</h2>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p> */}
                <table>
                  <tbody>
                    <tr>
                      <td className="c-o">{t("Address")}:</td>
                      <td>856 Cordia Extension Apt. 356, Lake, US</td>
                    </tr>
                    <tr>
                      <td className="c-o">{t("Phone")}:</td>
                      <td>(12) 345 67890</td>
                    </tr>
                    <tr>
                      <td className="c-o">{t("Email")}:</td>
                      <td>360viewappartments@gmail.com</td>
                    </tr>
                    <tr>
                      <td className="c-o">{t("Fax")}:</td>
                      <td>+(12) 345 67890</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <form action="#" className="contact-form">
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" placeholder="Your Email" />
                  </div>
                  <div className="col-lg-12">
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit">{t("Submit Now")}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d8837.952322744934!2d19.475616268681403!3d40.45902172961772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s360%20View%20Apartments%20Vlore!5e0!3m2!1sel!2sgr!4v1706627993628!5m2!1sel!2sgr"
              width="600"
              height="450"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
