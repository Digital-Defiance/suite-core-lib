import type { PlatformID } from '@digitaldefiance/ecies-lib';
import { Role } from '../../enumerations/role';
import { IHasId } from '../has-id';
import { IHasSoftDelete } from '../has-soft-delete';
import { IHasSoftDeleter } from '../has-soft-deleter';
import { IHasTimestampOwners } from '../has-timestamp-owners';
import { IHasTimestamps } from '../has-timestamps';

export interface IRoleBase<
  TID extends PlatformID,
  TDate extends Date | string = Date,
  TRole extends Role | string = Role,
>
  extends
    IHasId<TID>,
    IHasTimestamps<TDate>,
    IHasTimestampOwners<TID>,
    IHasSoftDelete<TDate>,
    IHasSoftDeleter<TID> {
  /**
   * The name of the role
   */
  name: TRole;
  /**
   * Whether the role is an admin
   */
  admin: boolean;
  /**
   * Whether the role is a site member
   * Must not specify admin or system
   */
  member: boolean;
  /**
   * Whether the role is a restricted child account
   * This prevents the account from certain actions
   * Must not specify admin, member,
   */
  child: boolean;
  /**
   * Whether the role is a system account
   */
  system: boolean;
}
