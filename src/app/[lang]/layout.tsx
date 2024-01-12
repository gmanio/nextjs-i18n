import { ReactNode } from 'react';
import DictonaryProvider from '@/providers/DictonaryProvider';
import { LocaleType, getDictionary } from '@/shared/dictionaries/dictionaries';

export default function RootLayout({ children, params: { lang } }: { children: ReactNode; params: { lang: LocaleType } }) {
  const dictionary = getDictionary(lang);

  return <DictonaryProvider dictionary={dictionary}>{children}</DictonaryProvider>;
}
