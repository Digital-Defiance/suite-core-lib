/**
 * Request user frontend object interface.
 * Client-side representation of authenticated user data with roles, privileges, and settings.
 */
import { ICombinedRolePrivileges } from '../combined-role-privileges';
import { IRoleFrontendObject } from './role';

export interface IRequestUserFrontendObject<
  TDate extends Date | number = Date,
> {
  id: string;
  roles: Array<IRoleFrontendObject>;
  rolePrivileges: ICombinedRolePrivileges;
  username: string;
  email: string;
  timezone: string;
  currency: string;
  directChallenge: boolean;
  siteLanguage: string;
  lastLogin?: TDate;
  emailVerified: boolean;
  darkMode: boolean;
}
