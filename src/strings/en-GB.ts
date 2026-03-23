/**
 * English (GB) translation strings for suite-core library.
 * Spreads American English strings and overrides only values that differ in British English.
 */
import { SuiteCoreStringKey } from '../enumerations';
import type { SuiteCoreStringKeyValue } from '../enumerations';
import { americanEnglishStrings } from './en-US';

export const britishEnglishStrings: Record<SuiteCoreStringKeyValue, string> = {
  ...americanEnglishStrings,

  // "Unauthorized" → "Unauthorised"
  [SuiteCoreStringKey.Common_Unauthorized]: 'Unauthorised',
  [SuiteCoreStringKey.RemoveAdmin_Unauthorized]:
    'Unauthorised to remove an admin',
  [SuiteCoreStringKey.RemoveMember_Unauthorized]:
    'Unauthorised to remove a member',

  // "initialization" → "initialisation", "initialized" → "initialised"
  [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]:
    'Starting database initialisation',
  [SuiteCoreStringKey.Admin_DatabaseInitializedWithOptionsHashTemplate]:
    'Database initialised with options hash: {hash}',
  [SuiteCoreStringKey.Admin_DatabaseAlreadyInitialized]:
    'Database already initialised',
  [SuiteCoreStringKey.Admin_Error_EnvironmentAlreadyInitialized]:
    'Environment already initialised',
  [SuiteCoreStringKey.Admin_Error_EnvironmentNotInitialized]:
    'Environment not initialised',
  [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabase]:
    'Failed to initialise user database',
  [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]:
    'Failed to initialise user database (timeout after {timeMs}ms)',
  [SuiteCoreStringKey.Admin_UserDatabaseInitialized]:
    'User database initialised',
  [SuiteCoreStringKey.Admin_ProceedingToDbInitialization]:
    'Proceeding to database initialisation...',
  [SuiteCoreStringKey.Admin_StartingDbInitialization]:
    'Starting database initialisation...',
};
