/**
 * Unit tests for createSuiteCoreComponentPackage.
 *
 * Verifies the returned package has the correct config and stringKeyEnum,
 * and that the existing createSuiteCoreComponentConfig remains unchanged.
 */

import { isBrandedEnum } from '@digitaldefiance/i18n-lib';
import { SuiteCoreComponentId } from '../src/enumerations/suite-core-string-key';
import {
  createSuiteCoreComponentConfig,
  createSuiteCoreComponentPackage,
} from '../src/i18n-setup';

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
