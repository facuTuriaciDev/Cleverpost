import { useTranslation } from 'react-i18next';

export const themeFormat = (light: string, night: string, currenTheme: string) =>  {
  return currenTheme === 'light' ? light : `${light} ${night}`;
}

export const translate = (key: string) => {
  const { t } = useTranslation();
  return t(key);
}

export const generateRandomNumber = (limitNumber: number) => {
  return Math.floor(Math.random() * limitNumber) + 1;
}