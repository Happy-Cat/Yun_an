import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import Cookies from 'js-cookie';

import messages from './locales/index';

const currentLocale = Cookies.get('currentLocale');
const defaultLocale = currentLocale || 'en-US';

function findAvailableLocaleItem() {
  const locales = Object.keys(messages);
  const locale = currentLocale ? currentLocale : navigator.language ? navigator.language : navigator.userLanguage;
  return locales.find((item) => (item === locale || item.indexOf(locale.split('-')[0]) === 0));
}

const language = findAvailableLocaleItem();
const i18n = createI18n({
  fallbackLocale: defaultLocale,
  globalInjection:true,
  legacy: false, // you must specify 'legacy: false' option
  locale: language || defaultLocale,
  messages,
});

export default i18n