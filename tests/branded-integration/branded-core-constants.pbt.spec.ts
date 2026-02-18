/**
 * Property-based tests for BrandedCoreConstants validation.
 *
 * Feature: branded-interface-integration, Property 7: BrandedCoreConstants validates field types correctly
 * **Validates: Requirements 4.1, 4.3**
 */

import { resetInterfaceRegistry } from '@digitaldefiance/branded-interface';
import * as fc from 'fast-check';
import {
  BrandedCoreConstants,
  isPositiveInt,
  isNonEmpty,
} from '../../src/branded-constants';

// =============================================================================
// Generators
// =============================================================================

/** Arbitrary for a positive integer. */
const positiveIntArb: fc.Arbitrary<number> = fc.integer({
  min: 1,
  max: 1_000_000,
});

/** Arbitrary for a non-empty string. */
const nonEmptyStringArb: fc.Arbitrary<string> = fc
  .stringMatching(/^[a-zA-Z][a-zA-Z0-9]{0,20}$/)
  .filter((s) => s.length > 0);

/** Arbitrary for a simple RegExp (used for object-type fields). */
const regexpArb: fc.Arbitrary<RegExp> = fc.constant(/^test$/);

/** Arbitrary for a mock IIdProviderBase-like object. */
const idProviderArb = fc.constant({
  byteLength: 12,
  name: 'MockProvider',
  generate: () => new Uint8Array(12),
  validate: () => true,
  serialize: () => '',
  deserialize: () => new Uint8Array(12),
  toBytes: () => new Uint8Array(12),
  fromBytes: () => new Uint8Array(12),
});

/** Arbitrary for a mock IBackupCodeConstants-like object. */
const backupCodesArb = fc.constant({
  Count: 10,
  NormalizedHexRegex: /^[a-z0-9]{32}$/,
  DisplayRegex: /^([a-z0-9]{4}-){7}[a-z0-9]{4}$/,
});

/** Arbitrary for a valid ICoreConstants object. */
const validCoreConstantsArb = fc.record({
  idProvider: idProviderArb,
  BACKUP_CODES: backupCodesArb,
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
  UsernameRegex: regexpArb,
  PasswordMinLength: positiveIntArb,
  PasswordRegex: regexpArb,
  JwtSecretRegex: regexpArb,
  MnemonicRegex: regexpArb,
  MnemonicHmacRegex: regexpArb,
  MnemonicEncryptionKeyRegex: regexpArb,
  EmailTokenResendInterval: positiveIntArb,
  EmailTokenResendIntervalMinutes: positiveIntArb,
  Site: nonEmptyStringArb,
  SiteTagline: fc.string(),
  SiteDescription: fc.string(),
  SiteEmailDomain: nonEmptyStringArb,
  SiteHostname: nonEmptyStringArb,
});

/** Arbitrary for an invalid numeric value (not a positive integer). */
const invalidNumericArb: fc.Arbitrary<number> = fc.oneof(
  fc.constant(0),
  fc.constant(-1),
  fc.constant(1.5),
  fc.constant(NaN),
  fc.constant(Infinity),
  fc.constant(-Infinity),
);

// =============================================================================
// Tests
// =============================================================================

describe('Feature: branded-interface-integration, Property 7: BrandedCoreConstants validates field types correctly', () => {
  beforeEach(() => {
    resetInterfaceRegistry();
  });

  afterEach(() => {
    resetInterfaceRegistry();
  });

  /**
   * Property 7: valid ICoreConstants objects pass validation.
   * **Validates: Requirements 4.1, 4.3**
   */
  it('Property 7: valid ICoreConstants objects pass validation', () => {
    fc.assert(
      fc.property(validCoreConstantsArb, (constants) => {
        expect(BrandedCoreConstants.validate(constants)).toBe(true);
      }),
      { numRuns: 100 },
    );
  });

  /**
   * Property 7: objects with invalid numeric fields fail validation.
   * **Validates: Requirements 4.1, 4.3**
   */
  it('Property 7: objects with invalid numeric fields fail validation', () => {
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

    fc.assert(
      fc.property(
        validCoreConstantsArb,
        fc.constantFrom(...numericFields),
        invalidNumericArb,
        (base, field, badValue) => {
          const invalid = { ...base, [field]: badValue };
          expect(BrandedCoreConstants.validate(invalid)).toBe(false);
        },
      ),
      { numRuns: 100 },
    );
  });

  /**
   * Property 7: objects with empty string role/user fields fail validation.
   * **Validates: Requirements 4.1, 4.3**
   */
  it('Property 7: objects with empty string role/user fields fail validation', () => {
    const stringFields = [
      'AdministratorUser',
      'AdministratorRole',
      'MemberRole',
      'MemberUser',
      'SystemRole',
      'SystemUser',
      'Site',
      'SiteEmailDomain',
      'SiteHostname',
    ] as const;

    fc.assert(
      fc.property(
        validCoreConstantsArb,
        fc.constantFrom(...stringFields),
        (base, field) => {
          const invalid = { ...base, [field]: '' };
          expect(BrandedCoreConstants.validate(invalid)).toBe(false);
        },
      ),
      { numRuns: 100 },
    );
  });

  /**
   * Property 7: isPositiveInt helper correctly identifies positive integers.
   * **Validates: Requirements 4.3**
   */
  it('Property 7: isPositiveInt returns true for positive integers', () => {
    fc.assert(
      fc.property(positiveIntArb, (n) => {
        expect(isPositiveInt(n)).toBe(true);
      }),
      { numRuns: 100 },
    );
  });

  /**
   * Property 7: isNonEmpty helper correctly identifies non-empty strings.
   * **Validates: Requirements 4.1**
   */
  it('Property 7: isNonEmpty returns true for non-empty strings and false for empty', () => {
    fc.assert(
      fc.property(nonEmptyStringArb, (s) => {
        expect(isNonEmpty(s)).toBe(true);
      }),
      { numRuns: 100 },
    );
    expect(isNonEmpty('')).toBe(false);
  });
});
