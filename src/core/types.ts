/**
 * Core type exports for suite-core-lib
 */

// Common utility types
export type { IFailableResult } from '../interfaces/failable-result';
export type { DeepPartial } from '../interfaces/deep-partial';

// Base interface types
export type { IHasId } from '../interfaces/has-id';
export type { IHasTimestamps } from '../interfaces/has-timestamps';
export type { IHasCreation } from '../interfaces/has-creation';
export type { IHasUpdates } from '../interfaces/has-updates';
export type { IHasSoftDelete } from '../interfaces/has-soft-delete';
export type { IHasCreator } from '../interfaces/has-creator';
export type { IHasUpdater } from '../interfaces/has-updater';
export type { IHasSoftDeleter } from '../interfaces/has-soft-deleter';
export type { IHasTimestampOwners } from '../interfaces/has-timestamp-owners';

// User and auth types
export type { ITokenUser } from '../interfaces/token-user';
export type { BackupCodeString } from '../backup-code-string';
