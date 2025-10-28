import { AccountStatus } from '../../enumerations/account-status';
import { IUserBase } from '../bases/user';

export type IUserFrontendObject = IUserBase<
  string,
  Date,
  string,
  AccountStatus
>;
