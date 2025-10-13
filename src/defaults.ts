import { DeepPartial } from './interfaces/deep-partial';
import { IConstants } from './interfaces/constants';
import { createConstants } from './constants';

export type ConfigurationKey = string | symbol;

const DEFAULT_CONFIGURATION_KEY: ConfigurationKey = Symbol.for('digitaldefiance.suite-core.defaults.default');

const registry: Map<ConfigurationKey, IConstants> = new Map();

function deepClone<T>(input: T): T {
  if (input === null || typeof input !== 'object') return input;
  if (Array.isArray(input)) return input.map(deepClone) as unknown as T;
  if (input instanceof RegExp) return new RegExp(input.source, input.flags) as unknown as T;
  if (input instanceof Date) return new Date(input.getTime()) as unknown as T;
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(input)) {
    result[key] = deepClone(value);
  }
  return result as T;
}

function deepFreeze<T>(obj: T): T {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach((prop) => {
    const value = (obj as any)[prop];
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  });
  return obj;
}

function applyOverrides<T>(target: T, overrides?: DeepPartial<T>): T {
  if (!overrides) return target;
  const result = deepClone(target);
  for (const [key, value] of Object.entries(overrides)) {
    if (value !== undefined) {
      (result as any)[key] = value;
    }
  }
  return result;
}

export function createSuiteCoreRuntimeConfiguration(
  siteDomain: string = 'localhost',
  overrides?: DeepPartial<IConstants>,
): IConstants {
  const config = applyOverrides(createConstants(siteDomain), overrides);
  return deepFreeze(config);
}

export function registerSuiteCoreRuntimeConfiguration(
  key: ConfigurationKey = DEFAULT_CONFIGURATION_KEY,
  siteDomain: string = 'localhost',
  overrides?: DeepPartial<IConstants>,
): IConstants {
  const config = createSuiteCoreRuntimeConfiguration(siteDomain, overrides);
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
