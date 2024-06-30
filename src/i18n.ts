import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import en from '@/assets/locales/en.json';
import es from '@/assets/locales/es.json';

i18n.use(initReactI18next).init({
  resources: {
    es: { ...es },
    en: { ...en },
  },
  fallbackLng: () => {
    const langString = localStorage.getItem('lang');
    if (langString !== null) {
      const lang: { state: { lang: string } } = JSON.parse(langString);
      return lang.state.lang;
    }
    return 'en';
  },
});
