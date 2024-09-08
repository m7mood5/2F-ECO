import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en';
import fr from './fr';
import ar from './ar';
import de from './de';
import es from './es';
import it from './it';

const resources = {
  en: {translation: en},
  fr: {translation: fr},
  ar: {translation: ar},
  de: {translation: de},
  es: {translation: es},
  it: {translation: it},
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
