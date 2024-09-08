import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
const getResources = () => ({
  en: {
    translation: {
      welcome: 'Welcome',
      // other translations
    },
  },
  // other languages
});

i18n.use(initReactI18next).init({
  resources: getResources(),
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
