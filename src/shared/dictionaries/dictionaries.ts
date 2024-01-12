import 'server-only';
import dictionaries from '.';

export type LocaleType = 'en' | 'ko';

export const getDictionary = (locale: LocaleType) => dictionaries[locale];

export type Dictionary = ReturnType<typeof getDictionary>;
