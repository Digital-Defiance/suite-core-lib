/**
 * Property-based tests for validateConstants composition.
 *
 * Feature: branded-interface-integration, Property 9: validateConstants composes both definitions
 * **Validates: Requirements 4.5**
 */

import {
  resetInterfaceRegistry,
  safeParseInterface,
} from '@digitaldefiance/branded-interface';
import * as fc from 'fast-check';
import {
  BrandedCoreConstants,
  BrandedSiteConstants,
  validateConstants,
} from '../../src/branded-constants';
import type { IConstants } from '../../src/interfaces/constants';

// =============================================================================
// Generators
// =============================================================================

const positiveIntArb = fc.integer({ min: 1, max: 1_000_000 });
const nonEmptyStringArb = fc
  .stringMatching(/^[a-zA-Z][a-zA-Z0-9]{0,10}$/)
  .filter((s) => s.length > 0);
const regexpArb = fc.constant(/^test$/);
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
const backupCodesArb = fc.constant({
  Count: 10,
  NormalizedHexRegex: /^[a-z0-9]{32}$/,
  DisplayRegex: /^([a-z0-9]{4}-){7}[a-z0-9]{4}$/,
});
const validEmailArb = fc
  .tuple(
    fc.stringMatching(/^[a-zA-Z][a-zA-Z0-9]{0,10}$/),
    fc.stringMatching(/^[a-zA-Z][a-zA-Z0-9]{0,10}$/),
    fc.stringMatching(/^[a-zA-Z]{2,4}$/),
  )
  .map(([user, domain, tld]) => `${user}@${domain}.${tld}`);
const validHexColorArb = fc.oneof(
  fc.stringMatching(/^#[0-9a-fA-F]{3}$/).filter((s) => s.length === 4),
  fc.stringMatching(/^#[0-9a-fA-F]{6}$/).filter((s) => s.length === 7),
  fc.stringMatching(/^#[0-9a-fA-F]{8}$/).filter((s) => s.length === 9),
);

/** Arbitrary for a valid full IConstants object. */
const validFullConstantsArb: fc.Arbitrary<IConstants> = fc.record({
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
  AdministratorEmail: validEmailArb,
  MemberEmail: validEmailArb,
  SystemEmail: validEmailArb,
  logo_primary_color: validHexColorArb,
  logo_primary_text: validHexColorArb,
  logo_secondary_text: validHexColorArb,
  success_color: validHexColorArb,
  warning_color: validHexColorArb,
  failure_color: validHexColorArb,
  primary_text_light: validHexColorArb,
  primary_text_dark: validHexColorArb,
  secondary_text_light: validHexColorArb,
  secondary_text_dark: validHexColorArb,
}) as fc.Arbitrary<IConstants>;

// =============================================================================
// Tests
// =============================================================================

describe('Feature: branded-interface-integration, Property 9: validateConstants composes both definitions', () => {
  beforeEach(() => {
    resetInterfaceRegistry();
  });

  afterEach(() => {
    resetInterfaceRegistry();
  });

  /**
   * Property 9: valid IConstants objects pass validateConstants.
   * **Validates: Requirements 4.5**
   */
  it('Property 9: valid IConstants objects pass validateConstants and both individual validations', () => {
    fc.assert(
      fc.property(validFullConstantsArb, (constants) => {
        const composedResult = validateConstants(constants);
        const coreResult = safeParseInterface(constants, BrandedCoreConstants);
        const siteResult = safeParseInterface(constants, BrandedSiteConstants);

        expect(composedResult.success).toBe(true);
        expect(coreResult.success).toBe(true);
        expect(siteResult.success).toBe(true);
      }),
      { numRuns: 100 },
    );
  });

  /**
   * Property 9: if core validation fails, validateConstants fails.
   * **Validates: Requirements 4.5**
   */
  it('Property 9: if BrandedCoreConstants validation fails, validateConstants also fails', () => {
    fc.assert(
      fc.property(validFullConstantsArb, (base) => {
        // Break a core numeric field
        const invalid = { ...base, BcryptRounds: -1 };
        const composedResult = validateConstants(invalid as IConstants);
        const coreResult = safeParseInterface(invalid, BrandedCoreConstants);

        expect(composedResult.success).toBe(false);
        expect(coreResult.success).toBe(false);
      }),
      { numRuns: 100 },
    );
  });

  /**
   * Property 9: if site validation fails, validateConstants fails.
   * **Validates: Requirements 4.5**
   */
  it('Property 9: if BrandedSiteConstants validation fails, validateConstants also fails', () => {
    fc.assert(
      fc.property(validFullConstantsArb, (base) => {
        // Break a site email field
        const invalid = { ...base, AdministratorEmail: 'not-an-email' };
        const composedResult = validateConstants(invalid as IConstants);
        const siteResult = safeParseInterface(invalid, BrandedSiteConstants);

        expect(composedResult.success).toBe(false);
        expect(siteResult.success).toBe(false);
      }),
      { numRuns: 100 },
    );
  });

  /**
   * Property 9: validateConstants success iff both individual validations succeed.
   * **Validates: Requirements 4.5**
   */
  it('Property 9: validateConstants returns success iff both core and site pass independently', () => {
    fc.assert(
      fc.property(validFullConstantsArb, fc.boolean(), (base, breakCore) => {
        let testObj: Record<string, unknown> = { ...base };
        if (breakCore) {
          testObj = { ...testObj, LoginChallengeExpiration: 0 };
        } else {
          testObj = { ...testObj, logo_primary_color: 'invalid' };
        }

        const composedResult = validateConstants(testObj as IConstants);
        const coreResult = safeParseInterface(testObj, BrandedCoreConstants);
        const siteResult = safeParseInterface(testObj, BrandedSiteConstants);

        const bothPass = coreResult.success && siteResult.success;
        expect(composedResult.success).toBe(bothPass);
      }),
      { numRuns: 100 },
    );
  });
});
