/**
 * Property-based tests for serialization round-trip of branded constants.
 *
 * Feature: branded-interface-integration, Property 10: Serialization round-trip for branded constants
 * **Validates: Requirements 5.2, 5.3, 5.5**
 *
 * NOTE: RegExp and IIdProviderBase fields are type: 'object' — the serializer
 * serializes their JSON representation. For the round-trip test, we focus on
 * the JSON-serializable subset of fields by using plain-object stand-ins for
 * non-serializable types, and verify that all JSON-serializable fields survive
 * the round-trip intact.
 */
/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument */

import { resetInterfaceRegistry } from '@digitaldefiance/branded-interface';
import * as fc from 'fast-check';
import {
  BrandedCoreConstants,
  coreConstantsSerializer,
} from '../../src/branded-constants';

// =============================================================================
// Generators
// =============================================================================

const positiveIntArb = fc.integer({ min: 1, max: 1_000_000 });
const nonEmptyStringArb = fc
  .stringMatching(/^[a-zA-Z][a-zA-Z0-9]{0,20}$/)
  .filter((s) => s.length > 0);

/**
 * For round-trip testing, we use JSON-serializable stand-ins for object fields.
 * RegExp serializes to `{}` via JSON.stringify, so we use plain objects instead.
 * IIdProviderBase has methods that don't survive JSON, so we use a plain object.
 */
const jsonSafeObjectArb = fc.constant({});
const jsonSafeBackupCodesArb = fc.constant({ Count: 10 });

/** Arbitrary for a JSON-serializable ICoreConstants-like object. */
const jsonSerializableCoreConstantsArb = fc.record({
  idProvider: jsonSafeObjectArb,
  BACKUP_CODES: jsonSafeBackupCodesArb,
  LoginChallengeExpiration: positiveIntArb,
  DefaultExpireMemoryMnemonicSeconds: positiveIntArb,
  DefaultExpireMemoryWalletSeconds: positiveIntArb,
  DirectLoginChallengeLength: positiveIntArb,
  EmailTokenExpiration: positiveIntArb,
  EmailTokenLength: positiveIntArb,
  BcryptRounds: positiveIntArb,
  AdministratorUser: nonEmptyStringArb,
  AdministratorRole: nonEmptyStringArb,
  MemberRole: nonEmptyStringArb,
  MemberUser: nonEmptyStringArb,
  SystemRole: nonEmptyStringArb,
  SystemUser: nonEmptyStringArb,
  UsernameMinLength: positiveIntArb,
  UsernameMaxLength: positiveIntArb,
  UsernameRegex: jsonSafeObjectArb,
  PasswordMinLength: positiveIntArb,
  PasswordRegex: jsonSafeObjectArb,
  JwtSecretRegex: jsonSafeObjectArb,
  MnemonicRegex: jsonSafeObjectArb,
  MnemonicHmacRegex: jsonSafeObjectArb,
  MnemonicEncryptionKeyRegex: jsonSafeObjectArb,
  EmailTokenResendInterval: positiveIntArb,
  EmailTokenResendIntervalMinutes: positiveIntArb,
  Site: nonEmptyStringArb,
  SiteTagline: fc.string(),
  SiteDescription: fc.string(),
  SiteEmailDomain: nonEmptyStringArb,
  SiteHostname: nonEmptyStringArb,
});

/** JSON-serializable numeric and string field keys for comparison. */
const numericFields = [
  'LoginChallengeExpiration',
  'DefaultExpireMemoryMnemonicSeconds',
  'DefaultExpireMemoryWalletSeconds',
  'DirectLoginChallengeLength',
  'EmailTokenExpiration',
  'EmailTokenLength',
  'BcryptRounds',
  'UsernameMinLength',
  'UsernameMaxLength',
  'PasswordMinLength',
  'EmailTokenResendInterval',
  'EmailTokenResendIntervalMinutes',
] as const;

const stringFields = [
  'AdministratorUser',
  'AdministratorRole',
  'MemberRole',
  'MemberUser',
  'SystemRole',
  'SystemUser',
  'Site',
  'SiteTagline',
  'SiteDescription',
  'SiteEmailDomain',
  'SiteHostname',
] as const;

// =============================================================================
// Tests
// =============================================================================

describe('Feature: branded-interface-integration, Property 10: Serialization round-trip for branded constants', () => {
  beforeEach(() => {
    resetInterfaceRegistry();
  });

  afterEach(() => {
    resetInterfaceRegistry();
  });

  /**
   * Property 10: serialize then deserialize produces a success result with equivalent data.
   * **Validates: Requirements 5.2, 5.3, 5.5**
   */
  it('Property 10: round-trip preserves all JSON-serializable fields', () => {
    fc.assert(
      fc.property(jsonSerializableCoreConstantsArb, (constants) => {
        // Create a branded instance
        const branded = BrandedCoreConstants.create(constants);

        // Serialize
        const json = coreConstantsSerializer.serialize(branded);
        expect(typeof json).toBe('string');

        // Deserialize
        const result = coreConstantsSerializer.deserialize(json);
        expect(result.success).toBe(true);

        if (result.success) {
          // Verify all numeric fields are preserved
          for (const field of numericFields) {
            expect(result.value[field]).toBe(constants[field]);
          }
          // Verify all string fields are preserved
          for (const field of stringFields) {
            expect(result.value[field]).toBe(constants[field]);
          }
        }
      }),
      { numRuns: 100 },
    );
  });

  /**
   * Property 10: serialized output is valid JSON without Symbol metadata.
   * **Validates: Requirements 5.2**
   */
  it('Property 10: serialized output is valid JSON and contains no Symbol keys', () => {
    fc.assert(
      fc.property(jsonSerializableCoreConstantsArb, (constants) => {
        const branded = BrandedCoreConstants.create(constants);
        const json = coreConstantsSerializer.serialize(branded);

        // Should be valid JSON
        const parsed = JSON.parse(json);
        expect(typeof parsed).toBe('object');
        expect(parsed).not.toBeNull();

        // Should not contain Symbol metadata keys as string keys
        const keys = Object.keys(parsed);
        expect(keys.every((k) => !k.includes('Symbol'))).toBe(true);
      }),
      { numRuns: 100 },
    );
  });

  /**
   * Property 10: deserialization of invalid JSON returns failure.
   * **Validates: Requirements 5.3**
   */
  it('Property 10: deserialization of invalid JSON returns failure result', () => {
    const result = coreConstantsSerializer.deserialize('not valid json{{{');
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.code).toBe('INVALID_JSON');
    }
  });

  /**
   * Property 10: deserialization of valid JSON that fails schema validation returns failure.
   * **Validates: Requirements 5.3**
   */
  it('Property 10: deserialization of schema-invalid JSON returns failure result', () => {
    const result = coreConstantsSerializer.deserialize(
      JSON.stringify({ invalid: true }),
    );
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.code).toBe('VALIDATION_FAILED');
    }
  });
});
