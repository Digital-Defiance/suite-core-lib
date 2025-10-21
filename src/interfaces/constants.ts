import { IBackupCodeConstants } from './backup-code-consts';
import { ICoreConstants } from './core-consts';

export interface IConstants extends ICoreConstants {
  /**
   * The email of the administrator user/admin contact
   */
  AdministratorEmail: string;
  /**
   * The email of the test user.
   */
  MemberEmail: string;
  /**
   * The email of the system user.
   */
  SystemEmail: string;
}
