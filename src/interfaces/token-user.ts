import { ITokenRoleDTO } from './dto/token-role';

/**
 * Interface for the user object stored in the JWT token
 */
export interface ITokenUser {
  userId: string;
  roles: ITokenRoleDTO[];
}
