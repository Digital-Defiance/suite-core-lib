import { EmailString } from '@digitaldefiance/ecies-lib';
import { CurrencyCode, Timezone } from '@digitaldefiance/i18n-lib';

export interface IUserSettings {
  email: EmailString;
  timezone: Timezone;
  currency: CurrencyCode;
  siteLanguage: string;
  darkMode: boolean;
  directChallenge: boolean;
}
