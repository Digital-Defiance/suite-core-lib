import { ICombinedRolePrivileges } from '../combined-role-privileges';
import { IRoleDTO } from '../dto/role';

export interface IRequestUserDTO  {
  // IUserDTO
  id: string;
  roles: Array<IRoleDTO>;
  rolePrivileges: ICombinedRolePrivileges;
  username: string;
  email: string;
  emailVerified: boolean;
  lastLogin?: string;
  // IUserSettingsDTO
  timezone: string;
  siteLanguage: string;
  darkMode: boolean;
  currency: string;
  directChallenge: boolean;
}
