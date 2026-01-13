/**
 * Default configuration management for suite-core library.
 * Provides runtime configuration creation, registration, and retrieval with deep cloning and freezing.
 */
import { createConstants } from './constants';
import { IConstants } from './interfaces/constants';
import { DeepPartial } from './interfaces/deep-partial';

export type ConfigurationKey = string | symbol;

const DEFAULT_CONFIGURATION_KEY: ConfigurationKey = Symbol.for(
  'digitaldefiance.suite-core.defaults.default',
);

const registry: Map<ConfigurationKey, IConstants> = new Map();

// Define cloneable types to improve type safety
type Cloneable =
  | string
  | number
  | boolean
  | null
  | undefined
  | Date
  | RegExp
  | Cloneable[]
  | { [key: string]: Cloneable };

function deepClone<T extends Cloneable>(input: T): T {
  if (input === null || typeof input !== 'object') {
    return input;
  }

  if (Array.isArray(input)) {
    return input.map((item) => deepClone(item)) as T;
  }

  if (input instanceof RegExp) {
    return new RegExp(input.source, input.flags) as T;
  }

  if (input instanceof Date) {
    return new Date(input.getTime()) as T;
  }

  const result: Record<string, Cloneable> = {};
  for (const [key, value] of Object.entries(input)) {
    result[key] = deepClone(value as Cloneable);
  }
  return result as T;
}

function deepFreeze<T>(obj: T): T {
  Object.freeze(obj);
  if (obj && typeof obj === 'object') {
    Object.getOwnPropertyNames(obj).forEach((prop) => {
      const value = (obj as Record<string, unknown>)[prop];
      if (value && typeof value === 'object' && !Object.isFrozen(value)) {
        deepFreeze(value);
      }
    });
  }
  return obj;
}

function applyOverrides<T extends object>(
  target: T,
  overrides?: DeepPartial<T>,
): T {
  if (!overrides) return target;
  const result = deepClone(target as Cloneable) as unknown as T;
  for (const [key, value] of Object.entries(overrides)) {
    if (value !== undefined && key in result) {
      (result as Record<string, unknown>)[key] = value;
    }
  }
  return result;
}

export function createSuiteCoreRuntimeConfiguration(
  siteDomain: string = 'localhost',
  siteHostname: string = 'localhost',
  overrides?: DeepPartial<IConstants>,
): IConstants {
  const config = applyOverrides(
    createConstants(siteDomain, siteHostname),
    overrides,
  );
  return deepFreeze(config);
}

export function registerSuiteCoreRuntimeConfiguration(
  key: ConfigurationKey = DEFAULT_CONFIGURATION_KEY,
  siteDomain: string = 'localhost',
  siteHostname: string = 'localhost',
  overrides?: DeepPartial<IConstants>,
): IConstants {
  const config = createSuiteCoreRuntimeConfiguration(
    siteDomain,
    siteHostname,
    overrides,
  );
  registry.set(key, config);
  return config;
}

export function getSuiteCoreRuntimeConfiguration(
  key: ConfigurationKey = DEFAULT_CONFIGURATION_KEY,
): IConstants {
  if (!registry.has(key)) {
    registry.set(key, createSuiteCoreRuntimeConfiguration());
  }
  return registry.get(key)!;
}
