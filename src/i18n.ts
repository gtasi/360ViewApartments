import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import al from "./locales/al.json";
import ch from "./locales/ch.json";
import gr from "./locales/gr.json";
import hol from "./locales/hol.json";
import it from "./locales/it.json";
import kos from "./locales/kos.json";
import pl from "./locales/pl.json";
import sp from "./locales/sp.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      al: {
        translation: al,
      },
      ch: {
        translation: ch,
      },
      gr: {
        translation: gr,
      },
      hol: {
        translation: hol,
      },
      it: {
        translation: it,
      },
      kos: {
        translation: kos,
      },
      pl: {
        translation: pl,
      },
      sp: {
        translation: sp,
      },
    },
    fallbackLng: "en",
    detection: {
      order: ["navigator"],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
