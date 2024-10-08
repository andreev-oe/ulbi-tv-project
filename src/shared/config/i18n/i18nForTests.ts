import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    lng: 'ru',
    fallbackLng: 'ru',
    debug: false,
    ns: ['translations', 'about', 'main'], // Specify the namespaces you are using
    defaultNS: 'translations', // Set the default namespace
    resources: { ru: { translations: {} } },
});

export default i18n;
