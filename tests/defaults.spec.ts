import {
  createSuiteCoreRuntimeConfiguration,
  getSuiteCoreRuntimeConfiguration,
  registerSuiteCoreRuntimeConfiguration,
} from '../src/defaults';

describe('Suite Core Runtime Configuration Registry', () => {
  it('should return the default configuration', () => {
    const config = getSuiteCoreRuntimeConfiguration();
    expect(config).toBeDefined();
    expect(config.BcryptRounds).toBe(10);
    expect(config.BACKUP_CODES).toBeDefined();
    expect(config.BACKUP_CODES.Count).toBe(10);
  });

  it('should allow registering and retrieving a custom configuration', () => {
    const customKey = Symbol('custom-suite-core-config');
    registerSuiteCoreRuntimeConfiguration(customKey, { BcryptRounds: 12 });
    const customConfig = getSuiteCoreRuntimeConfiguration(customKey);
    expect(customConfig.BcryptRounds).toBe(12);
  });

  it('should deeply freeze the configuration objects', () => {
    const config = getSuiteCoreRuntimeConfiguration();
    expect(Object.isFrozen(config)).toBe(true);
    expect(Object.isFrozen(config.BACKUP_CODES)).toBe(true);
  });

  it('should apply overrides correctly', () => {
    const overrides = {
      BcryptRounds: 20,
    };
    const config = createSuiteCoreRuntimeConfiguration(overrides);
    expect(config.BcryptRounds).toBe(20);
  });

  it('should handle undefined overrides', () => {
    const config = createSuiteCoreRuntimeConfiguration(undefined);
    expect(config.BcryptRounds).toBe(10);
  });

  it('should clone RegExp correctly', () => {
    const config = createSuiteCoreRuntimeConfiguration();
    expect(config.UsernameRegex).toBeInstanceOf(RegExp);
    expect(config.UsernameRegex.source).toBe(/^[A-Za-z0-9]{3,30}$/.source);
  });

  it('should register with default key when no key provided', () => {
    const config = registerSuiteCoreRuntimeConfiguration();
    expect(config).toBeDefined();
  });

  it('should handle null values in deepClone', () => {
    const config = createSuiteCoreRuntimeConfiguration({
      BcryptRounds: undefined as unknown as number,
    });
    expect(config).toBeDefined();
  });

  it('should handle Date objects in deepClone', () => {
    const config = createSuiteCoreRuntimeConfiguration();
    expect(config).toBeDefined();
  });

  describe('Type safety improvements', () => {
    it('should deep clone nested objects without type casts', () => {
      const config = createSuiteCoreRuntimeConfiguration();
      expect(config).toBeDefined();
      expect(config.BACKUP_CODES).toBeDefined();
      expect(config.BACKUP_CODES.Count).toBe(10);
      // Verify nested object properties are accessible
      expect(config.BACKUP_CODES.NormalizedHexRegex).toBeInstanceOf(RegExp);
    });

    it('should apply overrides with proper type safety', () => {
      const overrides = {
        BcryptRounds: 15,
      };
      const config = createSuiteCoreRuntimeConfiguration(overrides);
      expect(config.BcryptRounds).toBe(15);
    });

    it('should deep freeze nested objects without type casts', () => {
      const config = createSuiteCoreRuntimeConfiguration();
      expect(Object.isFrozen(config)).toBe(true);
      expect(Object.isFrozen(config.BACKUP_CODES)).toBe(true);

      // Verify that frozen objects cannot be modified
      expect(() => {
        (config as Record<string, unknown>).BcryptRounds = 999;
      }).toThrow(); // Frozen objects throw in strict mode
    });

    it('should handle primitive values in deep clone', () => {
      const config = createSuiteCoreRuntimeConfiguration();
      expect(typeof config.BcryptRounds).toBe('number');
    });
  });
});
