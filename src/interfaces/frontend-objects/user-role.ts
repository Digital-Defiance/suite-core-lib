/**
 * User-role relationship frontend object type.
 * Client-side representation of user-role associations with Date objects.
 */
import { IUserRoleBase } from '../bases/user-role';

export type IUserRoleFrontendObject<TDate extends Date | number = Date> =
  IUserRoleBase<string, TDate>;
