import { IRoleFrontendObject } from './role';

export interface IRequestUserFrontendObject {
  id: string;
  roles: Array<IRoleFrontendObject>;
  username: string;
  email: string;
  timezone: string;
  siteLanguage: string;
  lastLogin?: Date;
  emailVerified: boolean;
}
