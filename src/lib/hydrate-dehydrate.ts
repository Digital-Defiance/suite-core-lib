/**
 * Hydration and dehydration utilities for converting between DTOs and domain objects.
 * Provides functions to transform plain data objects into rich domain objects with validation.
 */
import { EmailString } from '@digitaldefiance/ecies-lib';
import { CurrencyCode, Timezone } from '@digitaldefiance/i18n-lib';
import { IUserSettings, IUserSettingsDTO } from '../interfaces';

/**
 * Hydrate user settings DTO into domain object with validated types.
 * Converts plain string values into typed domain objects (EmailString, Timezone, CurrencyCode).
 * @param dto - Plain user settings data transfer object
 * @returns Hydrated user settings with validated domain types
 */
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

/**
 * Dehydrate user settings domain object into plain DTO.
 * Converts typed domain objects back into plain string values for serialization.
 * @param settings - User settings domain object with typed values
 * @returns Plain user settings DTO suitable for JSON serialization
 */
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
