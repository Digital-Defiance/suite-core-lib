/**
 * Token role base interface.
 * Extended role interface with translated name for JWT token payloads.
 */
import type { PlatformID } from '@digitaldefiance/ecies-lib';
import { IRoleBase } from './role';

export interface ITokenRole<
  TID extends PlatformID,
  TDate extends Date | string = Date,
> extends IRoleBase<TID, TDate> {
  /**
   * The translated name of the role
   */
  translatedName: string;
}
