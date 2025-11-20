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
  /**
   * The color used to indicate success states.
   */
  success_color: string;
  /**
   * The color used to indicate warning states.
   */
  warning_color: string;
  /**
   * The color used to indicate failure states.
   */
  failure_color: string;
  /**
   * The light variant of the primary text color.
   */
  primary_text_light: string;
  /**
   * The dark variant of the primary text color.
   */
  primary_text_dark: string;
  /**
   * The light variant of the secondary text color.
   */
  secondary_text_light: string;
  /**
   * The dark variant of the secondary text color.
   */
  secondary_text_dark: string;
}
