import 'server-only';
import dictionaries from '../shared/dictionaries';
export type LocaleType = 'en' | 'ko';

// const dictionaries =
export const getDictionary = async (locale: LocaleType) => dictionaries[locale];
