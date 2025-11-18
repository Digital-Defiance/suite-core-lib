import { EmailString } from '@digitaldefiance/ecies-lib';
import { IUserSettings, IUserSettingsDTO } from '../interfaces';
import { CurrencyCode, Timezone } from '@digitaldefiance/i18n-lib';

export function hydrateUserSettings(dto: IUserSettingsDTO): IUserSettings {
  return {
    email: new EmailString(dto.email),
    timezone: new Timezone(dto.timezone),
    currency: new CurrencyCode(dto.currency),
    siteLanguage: dto.siteLanguage,
    darkMode: dto.darkMode,
    directChallenge: dto.directChallenge,
  };
}

export function dehydrateUserSettings(
  settings: IUserSettings,
): IUserSettingsDTO {
  return {
    email: settings.email.email,
    timezone: settings.timezone.value,
    currency: settings.currency.value,
    siteLanguage: settings.siteLanguage,
    darkMode: settings.darkMode,
    directChallenge: settings.directChallenge,
  };
}
