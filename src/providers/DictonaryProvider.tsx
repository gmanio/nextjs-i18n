'use client';

import { Dictionary } from '@/shared/dictionaries/dictionaries';
import { createContext } from 'react';

export const i18nContext = createContext({} as Dictionary);

const DictonaryProvider = ({ children, dictionary }: { children: React.ReactNode; dictionary: Dictionary }) => {
  return <i18nContext.Provider value={dictionary}>{children}</i18nContext.Provider>;
};

export default DictonaryProvider;
