import { CoreLanguageCode } from '@digitaldefiance/i18n-lib';

export type LanguageFlagCollection = { [key in CoreLanguageCode]: string };

export const LanguageFlags: LanguageFlagCollection = {
  ['en-US']: 'us',
  ['en-GB']: 'gb',
  ['fr']: 'fr',
  ['zh-CN']: 'cn',
  ['es']: 'es',
  ['uk']: 'ua',
  ['de']: 'de',
  ['ja']: 'jp',
};
