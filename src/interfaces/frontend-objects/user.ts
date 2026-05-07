/**
 * User frontend object type.
 * Client-side representation of user data with Date objects and typed enums.
 */
import { AccountStatus } from '../../enumerations/account-status';
import { IUserBase } from '../bases/user';

export type IUserFrontendObject<TDate extends Date | number | string = Date> =
  IUserBase<string, TDate, string, AccountStatus>;
