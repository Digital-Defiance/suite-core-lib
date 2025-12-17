/**
 * Core type exports for suite-core-lib
 */

// Common utility types
export type { DeepPartial } from '../interfaces/deep-partial';
export type { IFailableResult } from '../interfaces/failable-result';

// Base interface types
export type { IHasCreation } from '../interfaces/has-creation';
export type { IHasCreator } from '../interfaces/has-creator';
export type { IHasId } from '../interfaces/has-id';
export type { IHasSoftDelete } from '../interfaces/has-soft-delete';
export type { IHasSoftDeleter } from '../interfaces/has-soft-deleter';
export type { IHasTimestampOwners } from '../interfaces/has-timestamp-owners';
export type { IHasTimestamps } from '../interfaces/has-timestamps';
export type { IHasUpdater } from '../interfaces/has-updater';
export type { IHasUpdates } from '../interfaces/has-updates';

// User and auth types
export type { BackupCodeString } from '../backup-code-string';
export type { ITokenUser } from '../interfaces/token-user';
