/**
 * Unit tests for createSuiteCoreComponentPackage.
 *
 * Verifies the returned package has the correct config and stringKeyEnum,
 * and that the existing createSuiteCoreComponentConfig remains unchanged.
 */

import { isBrandedEnum } from '@digitaldefiance/i18n-lib';
import type { II18nConstants } from '@digitaldefiance/i18n-lib';
import { SuiteCoreComponentId } from '../src/enumerations/suite-core-string-key';
import {
  createSuiteCoreComponentConfig,
  createSuiteCoreComponentPackage,
} from '../src/i18n-setup';
import type { ISuiteCoreI18nConstants } from '../src/interfaces/i18n-constants';

describe('createSuiteCoreComponentPackage', () => {
  it('should return an object with config and stringKeyEnum', () => {
    const pkg = createSuiteCoreComponentPackage();
    expect(pkg.config).toBeDefined();
    expect(pkg.stringKeyEnum).toBeDefined();
  });

  it('should have config with correct component id', () => {
    const pkg = createSuiteCoreComponentPackage();
    expect(pkg.config.id).toBe(SuiteCoreComponentId);
  });

  it('should have config with strings for en-US', () => {
    const pkg = createSuiteCoreComponentPackage();
    expect(pkg.config.strings['en-US']).toBeDefined();
    expect(Object.keys(pkg.config.strings['en-US']).length).toBeGreaterThan(0);
  });

  it('should have a branded enum as stringKeyEnum', () => {
    const pkg = createSuiteCoreComponentPackage();
    expect(isBrandedEnum(pkg.stringKeyEnum)).toBe(true);
  });

  it('should return the same config as createSuiteCoreComponentConfig', () => {
    const pkg = createSuiteCoreComponentPackage();
    const directConfig = createSuiteCoreComponentConfig();
    expect(pkg.config.id).toBe(directConfig.id);
    expect(pkg.config.strings).toEqual(directConfig.strings);
  });
});

describe('createSuiteCoreComponentConfig backward compatibility', () => {
  it('should still return a valid ComponentConfig', () => {
    const config = createSuiteCoreComponentConfig();
    expect(config.id).toBe(SuiteCoreComponentId);
    expect(config.strings).toBeDefined();
    expect(config.aliases).toContain('SuiteCoreStringKey');
  });
});

describe('ISuiteCoreI18nConstants type safety', () => {
  it('should have constants that satisfy ISuiteCoreI18nConstants', () => {
    const pkg = createSuiteCoreComponentPackage();
    // Compile-time: constants must satisfy ISuiteCoreI18nConstants
    const constants = pkg.constants as ISuiteCoreI18nConstants;
    expect(constants.Site).toBeDefined();
    expect(typeof constants.Site).toBe('string');
    expect(constants.SiteTagline).toBeDefined();
    expect(typeof constants.SiteTagline).toBe('string');
    expect(constants.SiteDescription).toBeDefined();
    expect(typeof constants.SiteDescription).toBe('string');
    expect(constants.SiteEmailDomain).toBeDefined();
    expect(typeof constants.SiteEmailDomain).toBe('string');
    expect(constants.SiteHostname).toBeDefined();
    expect(typeof constants.SiteHostname).toBe('string');
    expect(constants.EmailTokenResendIntervalMinutes).toBeDefined();
    expect(typeof constants.EmailTokenResendIntervalMinutes).toBe('number');
  });

  it('should satisfy II18nConstants base interface', () => {
    const pkg = createSuiteCoreComponentPackage();
    // ISuiteCoreI18nConstants extends II18nConstants, so this must compile
    const baseConstants: II18nConstants =
      pkg.constants as ISuiteCoreI18nConstants;
    expect(baseConstants).toBeDefined();
    expect(Object.keys(baseConstants).length).toBeGreaterThan(0);
  });

  it('should have all required ISuiteCoreI18nConstants keys', () => {
    const pkg = createSuiteCoreComponentPackage();
    const constants = pkg.constants as ISuiteCoreI18nConstants;
    const requiredKeys: Array<keyof ISuiteCoreI18nConstants> = [
      'Site',
      'SiteTagline',
      'SiteDescription',
      'SiteEmailDomain',
      'SiteHostname',
      'EmailTokenResendIntervalMinutes',
    ];
    for (const key of requiredKeys) {
      expect(constants[key]).toBeDefined();
    }
  });
});
