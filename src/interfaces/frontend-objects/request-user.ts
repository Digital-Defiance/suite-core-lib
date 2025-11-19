import { ICombinedRolePrivileges } from '../combined-role-privileges';
import { IRoleFrontendObject } from './role';

export interface IRequestUserFrontendObject {
  id: string;
  roles: Array<IRoleFrontendObject>;
  rolePrivileges: ICombinedRolePrivileges;
  username: string;
  email: string;
  timezone: string;
  currency: string;
  directChallenge: boolean;
  siteLanguage: string;
  lastLogin?: Date;
  emailVerified: boolean;
  darkMode: boolean;
}
