/**
 * User Data Transfer Object (DTO) type.
 * Plain string-based representation of user data for serialization and API transfer.
 */
import { IUserBase } from '../bases/user';

export type IUserDTO = IUserBase<string, string, string, string>;
