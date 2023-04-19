import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

// the translations
import translationIT from './it.json';
import translationEN from './en.json';
import moment from 'moment';

const translations = {  
  en: { translation: translationEN },
  it: { translation: translationIT }
};


i18n
  .use(initReactI18next)
  .init(
    {
      interpolation: {
        escapeValue: false, // not needed for react!!
        format: function(value, format, lng) {
          if (format === 'uppercase') return value.toUpperCase();
          if(value instanceof Date) return moment(value).format(format);
          return value;
        }
      },
      lng: "it",
      resources: translations,
      // resources: {
      //   it: {
      //     translation: {
      //       "title": "Benvenuti",
      //       "content": "Benvenuti nel meraviglioso mondo di React!",
      //       "alt": "Un bellissimo faro in Puglia (Capo Pippo)",
      //       "mycomponentlabel": "Ecco il mio bel component!"
      //     }
      //   },
      //   en: {
      //     translation: {
      //       "title": "Welcome",
      //       "content": "Welcome in the wonderful world of React!",
      //       "alt": "A great lighthouse in Puglia (Pippo Cape)",
      //       "mycomponentlabel": "Here is my super component!"
      //     }
      //   }
      // },
      fallbackLng: 'en',
      debug: true
    }
  );

export default i18n;