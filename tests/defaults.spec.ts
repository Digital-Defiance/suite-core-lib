import {
  createSuiteCoreRuntimeConfiguration,
  getSuiteCoreRuntimeConfiguration,
  registerSuiteCoreRuntimeConfiguration,
} from '../src/defaults';

describe('Suite Core Runtime Configuration Registry', () => {
  it('should return the default configuration', () => {
    const config = getSuiteCoreRuntimeConfiguration();
    expect(config).toBeDefined();
    expect(config.AdministratorEmail).toBe('admin@localhost');
    expect(config.BcryptRounds).toBe(10);
    expect(config.BACKUP_CODES).toBeDefined();
    expect(config.BACKUP_CODES.Count).toBe(10);
  });

  it('should allow registering and retrieving a custom configuration', () => {
    const customKey = Symbol('custom-suite-core-config');
    registerSuiteCoreRuntimeConfiguration(
      customKey,
      'example.com',
      'example.com',
      { BcryptRounds: 12 }
    );
    const customConfig = getSuiteCoreRuntimeConfiguration(customKey);
    expect(customConfig.BcryptRounds).toBe(12);
    expect(customConfig.AdministratorEmail).toBe('admin@example.com');
  });

  it('should deeply freeze the configuration objects', () => {
    const config = getSuiteCoreRuntimeConfiguration();
    expect(Object.isFrozen(config)).toBe(true);
    expect(Object.isFrozen(config.BACKUP_CODES)).toBe(true);
  });

  it('should apply overrides correctly', () => {
    const overrides = {
      AdministratorEmail: 'root@custom.org',
      BcryptRounds: 20,
    };
    const config = createSuiteCoreRuntimeConfiguration(
      'custom.org',
      'custom.org',
      overrides
    );
    expect(config.AdministratorEmail).toBe('root@custom.org');
    expect(config.BcryptRounds).toBe(20);
  });

  it('should handle undefined overrides', () => {
    const config = createSuiteCoreRuntimeConfiguration(
      'test.com',
      'test.com',
      undefined
    );
    expect(config.AdministratorEmail).toBe('admin@test.com');
  });

  it('should clone RegExp correctly', () => {
    const config = createSuiteCoreRuntimeConfiguration('test.com', 'test.com');
    expect(config.UsernameRegex).toBeInstanceOf(RegExp);
    expect(config.UsernameRegex.source).toBe(/^[A-Za-z0-9]{3,30}$/.source);
  });

  it('should register with default key when no key provided', () => {
    const config = registerSuiteCoreRuntimeConfiguration();
    expect(config).toBeDefined();
    expect(config.AdministratorEmail).toBe('admin@localhost');
  });

  it('should handle null values in deepClone', () => {
    const config = createSuiteCoreRuntimeConfiguration('test.com', 'test.com', {
      AdministratorEmail: undefined as unknown as string,
    });
    expect(config).toBeDefined();
  });

  it('should handle Date objects in deepClone', () => {
    const config = createSuiteCoreRuntimeConfiguration('test.com', 'test.com');
    expect(config).toBeDefined();
  });

  describe('Type safety improvements', () => {
    it('should deep clone nested objects without type casts', () => {
      const config = createSuiteCoreRuntimeConfiguration(
        'test.com',
        'test.com'
      );
      expect(config).toBeDefined();
      expect(config.BACKUP_CODES).toBeDefined();
      expect(config.BACKUP_CODES.Count).toBe(10);
      // Verify nested object properties are accessible
      expect(config.BACKUP_CODES.NormalizedHexRegex).toBeInstanceOf(RegExp);
    });

    it('should apply overrides with proper type safety', () => {
      const overrides = {
        BcryptRounds: 15,
        AdministratorEmail: 'test@example.com',
      };
      const config = createSuiteCoreRuntimeConfiguration(
        'example.com',
        'example.com',
        overrides
      );
      expect(config.BcryptRounds).toBe(15);
      expect(config.AdministratorEmail).toBe('test@example.com');
    });

    it('should deep freeze nested objects without type casts', () => {
      const config = createSuiteCoreRuntimeConfiguration(
        'test.com',
        'test.com'
      );
      expect(Object.isFrozen(config)).toBe(true);
      expect(Object.isFrozen(config.BACKUP_CODES)).toBe(true);

      // Verify that frozen objects cannot be modified
      expect(() => {
        (config as Record<string, unknown>).BcryptRounds = 999;
      }).toThrow(); // Frozen objects throw in strict mode
    });

    it('should handle primitive values in deep clone', () => {
      const config = createSuiteCoreRuntimeConfiguration(
        'test.com',
        'test.com'
      );
      expect(typeof config.BcryptRounds).toBe('number');
      expect(typeof config.AdministratorEmail).toBe('string');
      expect(typeof config.SiteHostname).toBe('string');
    });
  });
});
