/**
 * User-role relationship Data Transfer Object (DTO) type.
 * Plain string-based representation of user-role associations for serialization and API transfer.
 */
import { IUserRoleBase } from '../bases/user-role';

export type IUserRoleDTO = IUserRoleBase<string, string>;
