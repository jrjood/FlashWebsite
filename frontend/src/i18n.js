// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

const saved = localStorage.getItem('lng') || 'en';

// keep <html dir> and lang in sync
const applyDir = (lng) => {
  const dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', lng);
};

i18n
  .use(HttpBackend) // load JSON from /public/locales
  .use(initReactI18next)
  .init({
    lng: saved,
    fallbackLng: 'en',
    ns: ['common', 'home', 'about', 'projects', 'contact', 'clients'], // add more if needed
    defaultNS: 'common',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: true }, // Suspense while JSON loads
  });

applyDir(saved);

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lng', lng);
  applyDir(lng);
});

export default i18n;
