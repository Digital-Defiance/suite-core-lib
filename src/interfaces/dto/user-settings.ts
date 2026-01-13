/**
 * User settings Data Transfer Object (DTO).
 * Plain string-based representation of user settings for serialization and API transfer.
 */
export interface IUserSettingsDTO {
  email: string;
  timezone: string;
  currency: string;
  siteLanguage: string;
  darkMode: boolean;
  directChallenge: boolean;
}
