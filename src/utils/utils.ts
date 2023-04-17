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

export const getRandomName = (names: string[]) => {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}