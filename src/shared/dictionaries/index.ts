import en from './en';
import ko from './ko';

const locales = {
  en,
  ko,
};

export const DEFAULT_LOCALE = 'ko';

export const i18n = {
  defaultLocale: 'en',
  locales: [
    { locale: 'en', label: 'English' },
    { locale: 'ko', label: 'Korean' },
  ],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export default locales;
