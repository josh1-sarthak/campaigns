import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import sv from './locales/sv.json';

let language = localStorage.getItem('language');

if (language === undefined) {
  language = 'en';
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translations: en },
    sv: { translations: sv },
  },
  fallbackLng: 'en',
  lng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    wait: true, 
    useSuspense: false,
  },
});

export default i18n;