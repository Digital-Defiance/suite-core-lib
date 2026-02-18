/**
 * Property-based tests for BrandedSiteConstants validation.
 *
 * Feature: branded-interface-integration, Property 8: BrandedSiteConstants validates email and color fields correctly
 * **Validates: Requirements 4.2, 4.4**
 */

import { resetInterfaceRegistry } from '@digitaldefiance/branded-interface';
import * as fc from 'fast-check';
import {
  BrandedSiteConstants,
  isEmail,
  isHexColor,
} from '../../src/branded-constants';

// =============================================================================
// Generators
// =============================================================================

/** Arbitrary for a valid email address. */
const validEmailArb: fc.Arbitrary<string> = fc
  .tuple(
    fc.stringMatching(/^[a-zA-Z][a-zA-Z0-9]{0,10}$/),
    fc.stringMatching(/^[a-zA-Z][a-zA-Z0-9]{0,10}$/),
    fc.stringMatching(/^[a-zA-Z]{2,4}$/),
  )
  .map(([user, domain, tld]) => `${user}@${domain}.${tld}`);

/** Arbitrary for a valid CSS hex color (#RGB, #RRGGBB, or #RRGGBBAA). */
const validHexColorArb: fc.Arbitrary<string> = fc.oneof(
  fc.stringMatching(/^#[0-9a-fA-F]{3}$/).filter((s) => s.length === 4),
  fc.stringMatching(/^#[0-9a-fA-F]{6}$/).filter((s) => s.length === 7),
  fc.stringMatching(/^#[0-9a-fA-F]{8}$/).filter((s) => s.length === 9),
);

/** Arbitrary for a valid IConstants-specific fields object (Omit<IConstants, keyof ICoreConstants>). */
const validSiteConstantsArb = fc.record({
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
});

/** Arbitrary for an invalid email string. */
const invalidEmailArb: fc.Arbitrary<string> = fc.oneof(
  fc.constant(''),
  fc.constant('notanemail'),
  fc.constant('@missing-user.com'),
  fc.constant('missing-domain@'),
  fc.constant('no-tld@domain'),
  fc.constant('spaces in@email.com'),
);

/** Arbitrary for an invalid hex color string. */
const invalidHexColorArb: fc.Arbitrary<string> = fc.oneof(
  fc.constant(''),
  fc.constant('red'),
  fc.constant('#GG0000'),
  fc.constant('#12'),
  fc.constant('#12345'),
  fc.constant('000000'),
  fc.constant('#1234567890'),
);

// =============================================================================
// Tests
// =============================================================================

describe('Feature: branded-interface-integration, Property 8: BrandedSiteConstants validates email and color fields correctly', () => {
  beforeEach(() => {
    resetInterfaceRegistry();
  });

  afterEach(() => {
    resetInterfaceRegistry();
  });

  /**
   * Property 8: valid site constants objects pass validation.
   * **Validates: Requirements 4.2, 4.4**
   */
  it('Property 8: valid site constants objects pass validation', () => {
    fc.assert(
      fc.property(validSiteConstantsArb, (constants) => {
        expect(BrandedSiteConstants.validate(constants)).toBe(true);
      }),
      { numRuns: 100 },
    );
  });

  /**
   * Property 8: objects with invalid email fields fail validation.
   * **Validates: Requirements 4.2, 4.4**
   */
  it('Property 8: objects with invalid email fields fail validation', () => {
    const emailFields = [
      'AdministratorEmail',
      'MemberEmail',
      'SystemEmail',
    ] as const;

    fc.assert(
      fc.property(
        validSiteConstantsArb,
        fc.constantFrom(...emailFields),
        invalidEmailArb,
        (base, field, badEmail) => {
          const invalid = { ...base, [field]: badEmail };
          expect(BrandedSiteConstants.validate(invalid)).toBe(false);
        },
      ),
      { numRuns: 100 },
    );
  });

  /**
   * Property 8: objects with invalid color fields fail validation.
   * **Validates: Requirements 4.2, 4.4**
   */
  it('Property 8: objects with invalid color fields fail validation', () => {
    const colorFields = [
      'logo_primary_color',
      'logo_primary_text',
      'logo_secondary_text',
      'success_color',
      'warning_color',
      'failure_color',
      'primary_text_light',
      'primary_text_dark',
      'secondary_text_light',
      'secondary_text_dark',
    ] as const;

    fc.assert(
      fc.property(
        validSiteConstantsArb,
        fc.constantFrom(...colorFields),
        invalidHexColorArb,
        (base, field, badColor) => {
          const invalid = { ...base, [field]: badColor };
          expect(BrandedSiteConstants.validate(invalid)).toBe(false);
        },
      ),
      { numRuns: 100 },
    );
  });

  /**
   * Property 8: isEmail helper correctly validates email patterns.
   * **Validates: Requirements 4.4**
   */
  it('Property 8: isEmail returns true for valid emails', () => {
    fc.assert(
      fc.property(validEmailArb, (email) => {
        expect(isEmail(email)).toBe(true);
      }),
      { numRuns: 100 },
    );
  });

  /**
   * Property 8: isHexColor helper correctly validates hex color patterns.
   * **Validates: Requirements 4.4**
   */
  it('Property 8: isHexColor returns true for valid hex colors', () => {
    fc.assert(
      fc.property(validHexColorArb, (color) => {
        expect(isHexColor(color)).toBe(true);
      }),
      { numRuns: 100 },
    );
  });
});
