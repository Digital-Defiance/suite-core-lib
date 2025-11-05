import {
  createSuiteCoreRuntimeConfiguration,
  getSuiteCoreRuntimeConfiguration,
  registerSuiteCoreRuntimeConfiguration,
} from '../src/defaults';
import { IConstants } from '../src/interfaces/constants';

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
    registerSuiteCoreRuntimeConfiguration(customKey, 'example.com', { BcryptRounds: 12 });
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
    const overrides = { AdministratorEmail: 'root@custom.org', BcryptRounds: 20 };
    const config = createSuiteCoreRuntimeConfiguration('custom.org', overrides);
    expect(config.AdministratorEmail).toBe('root@custom.org');
    expect(config.BcryptRounds).toBe(20);
  });

  it('should handle undefined overrides', () => {
    const config = createSuiteCoreRuntimeConfiguration('test.com', undefined);
    expect(config.AdministratorEmail).toBe('admin@test.com');
  });

  it('should clone RegExp correctly', () => {
    const config = createSuiteCoreRuntimeConfiguration('test.com');
    expect(config.UsernameRegex).toBeInstanceOf(RegExp);
    expect(config.UsernameRegex.source).toBe(/^[A-Za-z0-9]{3,30}$/.source);
  });

  it('should register with default key when no key provided', () => {
    const config = registerSuiteCoreRuntimeConfiguration();
    expect(config).toBeDefined();
    expect(config.AdministratorEmail).toBe('admin@localhost');
  });
});
