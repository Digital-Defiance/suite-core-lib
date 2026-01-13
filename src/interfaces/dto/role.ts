/**
 * Role Data Transfer Object (DTO) type.
 * Plain string-based representation of role data for serialization and API transfer.
 */
import { IRoleBase } from '../bases/role';

export type IRoleDTO = IRoleBase<string, string, string>;
