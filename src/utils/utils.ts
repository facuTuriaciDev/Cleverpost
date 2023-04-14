import { useTranslation } from 'react-i18next';

export const themeFormat = (light: string, night: string, currenTheme: string) =>  {
  return currenTheme === 'light' ? light : `${light} ${night}`;
}

export const translate = (key: string) => {
  const { t } = useTranslation();
  return t(key);
}