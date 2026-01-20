import type { PlatformID } from '@digitaldefiance/ecies-lib';
import { IHasId } from '../has-id';
import { IHasSoftDelete } from '../has-soft-delete';
import { IHasSoftDeleter } from '../has-soft-deleter';
import { IHasTimestampOwners } from '../has-timestamp-owners';
import { IHasTimestamps } from '../has-timestamps';

export interface IUserRoleBase<TID extends PlatformID, TDate extends Date | string>
  extends
    IHasId<TID>,
    IHasTimestamps<TDate>,
    IHasTimestampOwners<TID>,
    IHasSoftDelete<TDate>,
    IHasSoftDeleter<TID> {
  /**
   * The user ID
   */
  userId: TID;
  /**
   * The role ID
   */
  roleId: TID;
}
