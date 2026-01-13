/**
 * Combined role privileges across all role types.
 */
export interface ICombinedRolePrivileges {
  admin: boolean;
  member: boolean;
  child: boolean;
  system: boolean;
}
