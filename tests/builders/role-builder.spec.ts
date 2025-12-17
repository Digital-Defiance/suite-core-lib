import { RoleBuilder } from '../../src/builders/role-builder';
import { Role } from '../../src/enumerations/role';

describe('RoleBuilder', () => {
  it('should create a role with default values', () => {
    const role = RoleBuilder.create().build();

    expect(role.admin).toBe(false);
    expect(role.member).toBe(false);
    expect(role.child).toBe(false);
    expect(role.system).toBe(false);
  });

  it('should build admin role', () => {
    const role = RoleBuilder.create().withName(Role.Admin).asAdmin().build();

    expect(role.name).toBe(Role.Admin);
    expect(role.admin).toBe(true);
    expect(role.member).toBe(false);
    expect(role.child).toBe(false);
    expect(role.system).toBe(false);
  });

  it('should build member role', () => {
    const role = RoleBuilder.create().withName(Role.Member).asMember().build();

    expect(role.name).toBe(Role.Member);
    expect(role.admin).toBe(false);
    expect(role.member).toBe(true);
    expect(role.child).toBe(false);
    expect(role.system).toBe(false);
  });

  it('should build child role', () => {
    const role = RoleBuilder.create().withName(Role.Member).asChild().build();

    expect(role.name).toBe(Role.Member);
    expect(role.admin).toBe(false);
    expect(role.member).toBe(false);
    expect(role.child).toBe(true);
    expect(role.system).toBe(false);
  });

  it('should build system role', () => {
    const role = RoleBuilder.create().withName(Role.System).asSystem().build();

    expect(role.name).toBe(Role.System);
    expect(role.admin).toBe(false);
    expect(role.member).toBe(false);
    expect(role.child).toBe(false);
    expect(role.system).toBe(true);
  });

  it('should allow chaining methods', () => {
    const builder = RoleBuilder.create();
    const result = builder.withName(Role.Admin).asAdmin();

    expect(result).toBe(builder);
  });

  it('should create independent instances', () => {
    const role1 = RoleBuilder.create().withName(Role.Admin).asAdmin().build();

    const role2 = RoleBuilder.create().withName(Role.Member).asMember().build();

    expect(role1.admin).toBe(true);
    expect(role2.member).toBe(true);
  });
});
