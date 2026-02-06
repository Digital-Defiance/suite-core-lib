/**
 * Internationalization (i18n) setup and configuration for suite-core library.
 * Manages i18n engine initialization, component registration, and translation string loading
 * across 8 supported languages (en-US, en-GB, fr, de, es, zh-CN, ja, uk).
 */
import {
  ComponentConfig,
  ComponentDefinition,
  CoreLanguageCode,
  createCoreComponentRegistration,
  createDefaultLanguages,
  EngineConfig,
  I18nEngine,
  LanguageCodes,
  type BrandedMasterStringsCollection,
} from '@digitaldefiance/i18n-lib';
import { Role } from './enumerations/role';
import {
  SuiteCoreComponentId,
  SuiteCoreStringKey,
  type SuiteCoreStringKeyValue,
} from './enumerations/suite-core-string-key';
import { germanStrings } from './strings/de';
import { britishEnglishStrings } from './strings/en-GB';
import { americanEnglishStrings } from './strings/en-US';
import { spanishStrings } from './strings/es';
import { frenchStrings } from './strings/fr';
import { japaneseStrings } from './strings/ja';
import { ukrainianStrings } from './strings/uk';
import { mandarinStrings } from './strings/zh-CN';

export const SuiteCoreI18nEngineKey = 'default' as const;
export { SuiteCoreComponentId };
export const SuiteCoreComponent: ComponentDefinition<
  typeof SuiteCoreStringKey
> = {
  id: SuiteCoreComponentId,
  name: 'Suite Core Library Component',
  stringKeys: SuiteCoreStringKey,
};
/**
 * Master strings collection for the Suite Core component.
 * Uses BrandedMasterStringsCollection for type-safe branded enum support.
 */
export const SuiteCoreComponentStrings: BrandedMasterStringsCollection<
  typeof SuiteCoreStringKey,
  CoreLanguageCode
> = {
  [LanguageCodes.EN_US]: americanEnglishStrings,
  [LanguageCodes.EN_GB]: britishEnglishStrings,
  [LanguageCodes.FR]: frenchStrings,
  [LanguageCodes.DE]: germanStrings,
  [LanguageCodes.ES]: spanishStrings,
  [LanguageCodes.ZH_CN]: mandarinStrings,
  [LanguageCodes.JA]: japaneseStrings,
  [LanguageCodes.UK]: ukrainianStrings,
};

const roleTranslations: Record<CoreLanguageCode, Record<Role, string>> = {
  [LanguageCodes.EN_US]: {
    [Role.Admin]: 'Administrator',
    [Role.Member]: 'Member',
    [Role.System]: 'System',
  },
  [LanguageCodes.EN_GB]: {
    [Role.Admin]: 'Administrator',
    [Role.Member]: 'Member',
    [Role.System]: 'System',
  },
  [LanguageCodes.FR]: {
    [Role.Admin]: 'Administrateur',
    [Role.Member]: 'Membre',
    [Role.System]: 'Système',
  },
  [LanguageCodes.ES]: {
    [Role.Admin]: 'Administrador',
    [Role.Member]: 'Miembro',
    [Role.System]: 'Sistema',
  },
  [LanguageCodes.DE]: {
    [Role.Admin]: 'Administrator',
    [Role.Member]: 'Mitglied',
    [Role.System]: 'System',
  },
  [LanguageCodes.ZH_CN]: {
    [Role.Admin]: '管理员',
    [Role.Member]: '成员',
    [Role.System]: '系统',
  },
  [LanguageCodes.JA]: {
    [Role.Admin]: '管理者',
    [Role.Member]: 'メンバー',
    [Role.System]: 'システム',
  },
  [LanguageCodes.UK]: {
    [Role.Admin]: 'Адміністратор',
    [Role.Member]: 'Учасник',
    [Role.System]: 'Система',
  },
};

// Suite Core component config
export function createSuiteCoreComponentConfig(): ComponentConfig {
  const SuiteCoreComponentConfig: ComponentConfig = {
    id: SuiteCoreComponentId,
    strings: SuiteCoreComponentStrings,
    aliases: ['SuiteCoreStringKey'],
  };
  return SuiteCoreComponentConfig;
}

let _engine: I18nEngine | undefined;

export function getSuiteCoreI18nEngine(config?: EngineConfig): I18nEngine {
  if (!_engine || !I18nEngine.hasInstance(SuiteCoreI18nEngineKey)) {
    _engine = I18nEngine.registerIfNotExists(
      SuiteCoreI18nEngineKey,
      createDefaultLanguages(),
      { defaultLanguage: LanguageCodes.EN_US, ...config },
    );

    // Register core component first (required for error messages)
    const coreReg = createCoreComponentRegistration();
    _engine.registerIfNotExists({
      id: coreReg.component.id,
      strings: coreReg.strings as Record<string, Record<string, string>>,
    });

    _engine.registerIfNotExists(createSuiteCoreComponentConfig());
    _engine.registerEnum(Role, roleTranslations, 'Role');

    // Register the branded string key enum for direct translation support
    _engine.registerStringKeyEnum(SuiteCoreStringKey);
  }
  return _engine;
}

export function getSuiteCoreTranslation(
  key: SuiteCoreStringKeyValue,
  variables?: Record<string, unknown>,
  language?: string,
  config?: EngineConfig,
): string {
  return getSuiteCoreI18nEngine(config).translateStringKey(
    key,
    variables,
    language,
  );
}

export function resetSuiteCoreI18nEngine(): void {
  I18nEngine.removeInstance(SuiteCoreI18nEngineKey);
  _engine = undefined;
}

export function initSuiteCoreI18nEngine(config?: EngineConfig): I18nEngine {
  return getSuiteCoreI18nEngine(config);
}

export function safeGetSuiteCoreTranslation(
  key: SuiteCoreStringKeyValue,
  variables?: Record<string, unknown>,
  language?: string,
  config?: EngineConfig,
): string {
  return getSuiteCoreI18nEngine(config).safeTranslateStringKey(
    key,
    variables,
    language,
  );
}
