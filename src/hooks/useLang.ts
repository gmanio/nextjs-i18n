import { usePathname } from 'next/navigation';
import { i18n } from '../app/shared/dictionaries';

export default function useLang() {
  const pathName = usePathname() || '';
  const parts = pathName.split('/').filter(p => p);
  const lang = parts.shift();

  if (!lang) {
    return i18n.defaultLocale;
  }

  return lang;
}
