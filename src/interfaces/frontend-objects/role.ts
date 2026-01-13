/**
 * Role frontend object type.
 * Client-side representation of role data with Date objects and typed enums.
 */
import { Role } from '../../enumerations/role';
import { IRoleBase } from '../bases/role';

export type IRoleFrontendObject = IRoleBase<string, Date, Role>;
