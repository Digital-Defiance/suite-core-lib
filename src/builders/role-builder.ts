/**
 * Fluent builder for creating role objects
 */

import { Role } from '../enumerations/role';
import { IRoleBase } from '../interfaces/bases/role';

/**
 * Builder for creating role objects with fluent API
 */
export class RoleBuilder<I = string, D extends Date | string = Date> {
  private data: Partial<IRoleBase<I, D, Role>> = {
    admin: false,
    member: false,
    child: false,
    system: false,
  };

  static create<I = string, D extends Date | string = Date>(): RoleBuilder<I, D> {
    return new RoleBuilder<I, D>();
  }

  withName(name: Role): this {
    this.data.name = name;
    return this;
  }

  asAdmin(): this {
    this.data.admin = true;
    this.data.member = false;
    this.data.child = false;
    this.data.system = false;
    return this;
  }

  asMember(): this {
    this.data.admin = false;
    this.data.member = true;
    this.data.child = false;
    this.data.system = false;
    return this;
  }

  asChild(): this {
    this.data.admin = false;
    this.data.member = false;
    this.data.child = true;
    this.data.system = false;
    return this;
  }

  asSystem(): this {
    this.data.admin = false;
    this.data.member = false;
    this.data.child = false;
    this.data.system = true;
    return this;
  }

  build(): Partial<IRoleBase<I, D, Role>> {
    return { ...this.data };
  }
}
