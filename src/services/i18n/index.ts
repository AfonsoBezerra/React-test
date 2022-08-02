import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { EN, PTBR } from './locales';

const resources: { [key: string]: any } = {
  'pt-BR': { translation: PTBR },
  en: { translation: EN },
};

export const locales = Object.keys(resources);
i18n.use(initReactI18next).use(LanguageDetector).init({
  fallbackLng: 'pt-BR',
  resources,
});

export default i18n;
