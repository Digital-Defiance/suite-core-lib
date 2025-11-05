/**
 * Validators that accept custom constants
 * Allows consumers to pass their own IConstants implementation
 */

import { IConstants } from '../interfaces/constants';
import { ICoreConstants } from '../interfaces/core-consts';
import { CORE } from '../constants';

/**
 * Create validators bound to specific constants
 */
export function createValidators(constants: ICoreConstants | IConstants = CORE) {
  return {
    /**
     * Validate username format using provided constants
     */
    isValidUsername(username: string): boolean {
      return constants.UsernameRegex.test(username);
    },

    /**
     * Validate password format using provided constants
     */
    isValidPassword(password: string): boolean {
      return constants.PasswordRegex.test(password);
    },

    /**
     * Validate mnemonic format using provided constants
     */
    isValidMnemonic(mnemonic: string): boolean {
      return constants.MnemonicRegex.test(mnemonic);
    },

    /**
     * Validate backup code normalized format using provided constants
     */
    isValidBackupCodeNormalized(code: string): boolean {
      return constants.BACKUP_CODES.NormalizedHexRegex.test(code);
    },

    /**
     * Validate backup code display format using provided constants
     */
    isValidBackupCodeDisplay(code: string): boolean {
      return constants.BACKUP_CODES.DisplayRegex.test(code);
    },

    /**
     * Validate username length using provided constants
     */
    isValidUsernameLength(username: string): boolean {
      return (
        username.length >= constants.UsernameMinLength &&
        username.length <= constants.UsernameMaxLength
      );
    },

    /**
     * Validate password length using provided constants
     */
    isValidPasswordLength(password: string): boolean {
      return password.length >= constants.PasswordMinLength;
    },
  };
}

/**
 * Default validators using CORE constants
 */
export const defaultValidators = createValidators();
