import { Role } from '../../enumerations/role';
import { IRoleBase } from '../bases/role';

export type IRoleFrontendObject = IRoleBase<string, Date, Role>;
