# @digitaldefiance/suite-core-lib

[![npm version](https://badge.fury.io/js/%40digitaldefiance%2Fsuite-core-lib.svg)](https://badge.fury.io/js/%40digitaldefiance%2Fsuite-core-lib)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

A comprehensive library providing higher-level primitives and foundational building blocks for creating a cryptographically-secure user management system and Node.js Express server framework. Built on top of **@digitaldefiance/ecies-lib** and **@digitaldefiance/node-ecies-lib**, this package serves as the core foundation for the **node-ecies** and **node-express-suite** projects, which together form a complete full-stack security and user management ecosystem.

Part of [Express Suite](https://github.com/Digital-Defiance/express-suite)

## What's New in v3.10.0 - 3.10.25

✨ **String Key Enum Registration & translateStringKey Support** - Translation functions now use `translateStringKey()` for automatic component ID resolution.

**Changes:**
- `getSuiteCoreTranslation()` now uses `translateStringKey()` internally
- `safeGetSuiteCoreTranslation()` now uses `safeTranslateStringKey()` internally
- `SuiteCoreStringKey` branded enum is automatically registered during engine initialization
- `SuiteCoreComponentStrings` now uses `BrandedMasterStringsCollection` for type-safe branded enum support
- Upgraded to `@digitaldefiance/ecies-lib` v4.16.20
- Upgraded to `@digitaldefiance/i18n-lib` v4.3.0

## 🚀 Framework Ecosystem

`@digitaldefiance/suite-core-lib` offers the essential **core primitives and abstractions** that power:

- Secure user accounts and authentication mechanisms
- End-to-end encryption between users and servers
- Zero-knowledge proof based authentication flows
- Role-based access control (RBAC) with fine-grained permissions
- Multi-language internationalization (i18n) with plugin-based architecture

## 📦 Installation

```bash
npm install @digitaldefiance/suite-core-lib
# or
yarn add @digitaldefiance/suite-core-lib
```

## 🌍 Internationalization

This library includes built-in support for **five major languages** using a modern plugin-based i18n architecture:

- **English** (US and UK variants)
- **French**
- **Spanish**
- **Mandarin Chinese**
- **Ukrainian**

All error messages, validation texts, and user-facing strings are fully localized and designed to be extensible for additional languages.

### Translation Functions

The library provides convenient translation functions that leverage branded string key enums for automatic component routing:

```typescript
import { 
  getSuiteCoreTranslation, 
  safeGetSuiteCoreTranslation,
  SuiteCoreStringKey 
} from '@digitaldefiance/suite-core-lib';

// Direct translation using branded string keys (v3.10.0+)
// Component ID is automatically resolved from the branded enum
const message = getSuiteCoreTranslation(SuiteCoreStringKey.Common_Yes);
// Output: "Yes" (or localized equivalent)

// With variables
const greeting = getSuiteCoreTranslation(
  SuiteCoreStringKey.Welcome_Template, 
  { name: 'Alice' }
);

// With specific language
const french = getSuiteCoreTranslation(
  SuiteCoreStringKey.Common_Yes,
  {},
  CoreLanguage.French
);

// Safe version returns placeholder on failure instead of throwing
const safe = safeGetSuiteCoreTranslation(SuiteCoreStringKey.Common_Yes);
```

## 🏗️ Architecture Overview

### Type-Safe Base Interfaces

```typescript
import { 
  IUserBase,
  IRoleBase,
  IUserRoleBase,
  AccountStatus, 
  Role,
  CoreLanguage 
} from '@digitaldefiance/suite-core-lib';

// Create a user interface with string IDs for frontend applications
interface FrontendUser extends IUserBase<string, Date, 'en', AccountStatus> {
  // Additional app-specific fields
}

// Create a user interface with ObjectId for MongoDB backend
import { Types } from 'mongoose';
interface BackendUser extends IUserBase<Types.ObjectId, Date, 'en', AccountStatus> {
  // Additional app-specific fields
}

// Create a user interface with UUID strings for SQL databases
interface SqlUser extends IUserBase<string, Date, 'en', AccountStatus> {
  // Additional app-specific fields
}

// Create custom role interfaces
interface AppRole extends IRoleBase<string, Date, Role> {
  // Additional app-specific fields
}
```

### Secure Backup Code System

```typescript
import { BackupCodeString, Constants } from '@digitaldefiance/suite-core-lib';

// Generate cryptographically secure backup codes
const backupCodes = BackupCodeString.generateBackupCodes();
console.log(backupCodes.length); // Default is 10, configurable via Constants.BACKUP_CODES.Count

// Format a backup code for user display
const code = new BackupCodeString('deadbeefcafebabefeedface01234567');
console.log(code.value); // Outputs: "dead-beef-cafe-babe-feed-face-0123-4567"

// Access multiple secure encoding formats
console.log(code.valueAsHexString);    // Hex-encoded UTF-8 bytes
console.log(code.valueAsBase64String); // Base64-encoded string
console.log(code.valueAsUint8Array);   // Raw Uint8Array byte array
```

### Localized Error Handling

```typescript
import { 
  UserNotFoundError, 
  UsernameInUseError, 
  AccountLockedError,
  CoreLanguage 
} from '@digitaldefiance/suite-core-lib';

// Throw errors with automatic localization support
throw new UserNotFoundError(CoreLanguage.French);
// Output: "Compte utilisateur introuvable"

throw new UsernameInUseError(CoreLanguage.Spanish); 
// Output: "El nombre de usuario ya está en uso"

throw new AccountLockedError(CoreLanguage.German);
// Output: "Konto ist von einem Administrator gesperrt"
```

## 🎯 How Frameworks Use These Primitives

The **@digitaldefiance/node-express-suite** package builds upon these primitives to create full-featured framework components:

### Express.js Framework Usage

```typescript
// Usage of suite-core-lib primitives in Express applications
import { 
  IUserBase,
  AccountStatus, 
  BackupCodeString,
  UserNotFoundError,
  InvalidBackupCodeError,
  CoreLanguage 
} from '@digitaldefiance/suite-core-lib';

interface BackupCode {
  encrypted: string;
  used: boolean;
}

// Middleware example: validate backup code input
function validateBackupCode(userInput: string, storedCodes: BackupCode[]): boolean {
  try {
    const inputCode = new BackupCodeString(userInput);
    return storedCodes.some(stored => 
      BackupCodeString.normalizeCode(inputCode.value) === stored.encrypted
    );
  } catch (error) {
    if (error instanceof InvalidBackupCodeError) {
      // Handle localized error response gracefully
      return false;
    }
    throw error;
  }
}
```

### Frontend Framework Integration

```typescript
// Frontend frameworks consume type-safe base interfaces
import { IUserBase, AccountStatus } from '@digitaldefiance/suite-core-lib';

// Define a frontend user type with string IDs and Date objects
type FrontendUser = IUserBase<string, Date, 'en' | 'fr' | 'es', AccountStatus>;

// React/Vue/Angular component props example
interface UserProfileProps {
  user: FrontendUser;
  onStatusChange: (status: AccountStatus) => void;
}

// Function to update user status with type safety
function updateUserStatus(user: FrontendUser, status: AccountStatus): FrontendUser {
  return {
    ...user,
    accountStatus: status,
    updatedAt: new Date()
  };
}
```

### Database Layer Integration

```typescript
// Database schemas implementing suite-core-lib base interfaces
import { IUserBase, IUserRoleBase, AccountStatus } from '@digitaldefiance/suite-core-lib';
import { Types } from 'mongoose';

// Define a MongoDB user type using ObjectId
type MongoUser = IUserBase<Types.ObjectId, Date, 'en', AccountStatus>;

const userSchema = new mongoose.Schema<MongoUser>({
  _id: { type: Types.ObjectId, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  accountStatus: { 
    type: String, 
    enum: Object.values(AccountStatus),
    default: AccountStatus.PendingEmailVerification 
  },
  // Additional schema fields matching the interface
});

// SQL database example with UUID strings
type SqlUser = IUserBase<string, Date, 'en', AccountStatus> & {
  customField: string;
};
```

## 🔧 Advanced Configuration

### Custom Model Extensions & Dynamic Registration

> **Note:** The static `ModelName` and `BaseModelName` enums are deprecated. For extensibility, use dynamic model registration available in `ModelRegistry` from `node-express-suite`.

You can register and extend models dynamically at runtime:

```typescript
import { ModelRegistry } from '@digitaldefiance/node-express-suite';

// Register a custom model, e.g., Organization
ModelRegistry.instance.register({
  modelName: 'Organization',
  schema: organizationSchema,
  model: OrganizationModel,
  collection: 'organizations',
});

// Retrieve the model anywhere in your application
const orgModel = ModelRegistry.instance.get('Organization')?.model;
```

This dynamic approach supports advanced use cases such as multi-tenancy and plugin-based architectures.

### Email Token Types

```typescript
import { EmailTokenType } from '@digitaldefiance/suite-core-lib';

// Common built-in email token types
const tokenTypes = [
  EmailTokenType.AccountVerification,    // Email confirmation
  EmailTokenType.PasswordReset,          // Password reset flow  
  EmailTokenType.LoginRequest,           // Passwordless login
  EmailTokenType.PrivateKeyRequest,      // Key recovery
  EmailTokenType.MnemonicRecoveryRequest // Mnemonic recovery
];
```

### Account Status Management

```typescript
import { AccountStatus } from '@digitaldefiance/suite-core-lib';

// Manage user account states with fine granularity
switch (user.accountStatus) {
  case AccountStatus.PendingEmailVerification:
    // Trigger email verification workflow
    break;
  case AccountStatus.Active:
    // Grant full access
    break;
  case AccountStatus.AdminLock:
    // Restrict access pending admin intervention
    break;
}
```

### Framework Integration (Built by Other Projects)

The **@digitaldefiance/node-ecies** and **@digitaldefiance/node-express-suite** packages leverage these primitives to build:

- A complete Express.js framework with middleware, routing, and database integration
- Frontend adapters for React, Vue, Angular, and Svelte
- Mobile and desktop SDKs for React Native, Flutter, Electron, and Tauri
- DevOps and deployment tooling including Docker, Kubernetes, and CI/CD pipelines

## 🆕 What's New in v3.0

### Generic ID Support
Core base interfaces (`IUserBase`, `IRoleBase`, `IUserRoleBase`, etc.) now support generic ID types. This enables seamless integration with any database system using the **Pluggable ID Providers** (ObjectId, UUID, GUID) introduced in `@digitaldefiance/ecies-lib` v4.1.0.

```typescript
import { IUserBase, AccountStatus } from '@digitaldefiance/suite-core-lib';
import { Types } from 'mongoose';

// MongoDB with ObjectId
type MongoUser = IUserBase<Types.ObjectId, Date, 'en', AccountStatus>;

// SQL database with UUID strings
type SqlUser = IUserBase<string, Date, 'en', AccountStatus>;

// PostgreSQL with numeric IDs
type PostgresUser = IUserBase<number, Date, 'en', AccountStatus>;

// Frontend with string IDs and ISO date strings
type FrontendUser = IUserBase<string, string, 'en', AccountStatus>;
```

## ✨ Key Features (v2.1+)

### New Modules

#### Builders - Fluent APIs
```typescript
import { UserBuilder, RoleBuilder } from '@digitaldefiance/suite-core-lib';

const user = UserBuilder.create()
  .withUsername('admin')
  .withEmail('admin@example.com')
  .withEmailVerified(true)
  .build();

const role = RoleBuilder.create()
  .withName(Role.Admin)
  .asAdmin()
  .build();
```

#### Core - Result Pattern & Type Exports
```typescript
import { Result, success, failure, isSuccess } from '@digitaldefiance/suite-core-lib';

function processUser(id: string): Result<User, UserNotFoundError> {
  const user = findUser(id);
  return user ? success(user) : failure(new UserNotFoundError(id));
}

if (isSuccess(result)) {
  console.log('User:', result.data);
} else {
  console.error('Error:', result.error);
}
```

#### Lib - Validators & Formatters
```typescript
import { 
  isValidUsername, 
  isValidEmail, 
  isValidPassword,
  createValidators,
  createConstants 
} from '@digitaldefiance/suite-core-lib';

// Use default validators with built-in constants
if (!isValidUsername('test123')) {
  throw new InvalidUsernameError('test123');
}

// Create validators with custom constants
const myConstants = createConstants('myapp.com', {
  UsernameRegex: /^[a-z0-9_]{4,20}$/,
  UsernameMinLength: 4,
  UsernameMaxLength: 20,
});

const validators = createValidators(myConstants);
if (!validators.isValidUsername('user_name')) {
  throw new Error('Invalid username');
}
```

### Improved Architecture

- **70% Code Reduction**: `TranslatableSuiteHandleableError` now extends i18n-lib base classes
- **Organized Structure**: New `builders/`, `core/`, `lib/` folders
- **Custom Constants**: Validators accept custom `IConstants` for flexibility
- **Better Type Safety**: Enhanced TypeScript types throughout

## 🛠️ Runtime Configuration Registry

This package uses a runtime configuration registry for all constants and cryptographic parameters. You can override defaults at runtime for advanced use cases:

```typescript
import {
  getSuiteCoreRuntimeConfiguration,
  registerSuiteCoreRuntimeConfiguration,
} from '@digitaldefiance/suite-core-lib';

// Retrieve current configuration
const config = getSuiteCoreRuntimeConfiguration();

// Register a custom configuration with overrides
const customKey = Symbol('custom-suite-core-config');
registerSuiteCoreRuntimeConfiguration(customKey, 'example.com', { BcryptRounds: 12 });
const customConfig = getSuiteCoreRuntimeConfiguration(customKey);
```

All constants are immutable and accessible via the registry/config API. See `src/constants.ts` and `src/defaults.ts` for more information.

## 🏛️ Architectural Conventions

- Centralized constants file for configuration
- Immutability enforced via Object.freeze
- Registry/config pattern for runtime overrides
- Type-safe interfaces for all configuration objects

## 🧪 Testing & Quality

```bash
# Run the comprehensive test suite
yarn test

# 409 tests covering:
# ✅ Type safety and interface validation
# ✅ Cryptographic security functions  
# ✅ Multi-language localization
# ✅ Error handling and edge cases
# ✅ Integration scenarios
# ✅ Builders and fluent APIs
# ✅ Result pattern and core utilities
# ✅ Validators with custom constants
```

### Coverage Metrics

- **Statements**: 98.47%
- **Branches**: 94.56%
- **Functions**: 88.09%
- **Lines**: 98.63%

## 🤝 Contributing

We welcome contributions to help build the future of secure user management! Areas where contributions are especially appreciated:

- Frontend component libraries for popular frameworks
- Additional language translations and localization
- Performance optimizations and benchmarking
- Documentation and example applications
- Security auditing and penetration testing

## 📄 License

MIT © [Digital Defiance](https://github.com/digitaldefiance)

## 🔗 Ecosystem Projects

### Foundation Libraries (This Package Uses)

- [`@digitaldefiance/ecies-lib`](https://www.npmjs.com/package/@digitaldefiance/ecies-lib) - ECIES encryption foundation
- [`@digitaldefiance/i18n-lib`](https://www.npmjs.com/package/@digitaldefiance/i18n-lib) - Plugin-based internationalization
- [`@digitaldefiance/node-ecies-lib`](https://www.npmjs.com/package/@digitaldefiance/node-ecies-lib) - Node.js crypto utilities

### Framework Projects (That Use This Package)

- **i18n-lib** - Internationalization framework with plugin support
- **node-ecies** - Cryptographic framework and security protocols
- **node-express-suite** - Complete Express.js framework with authentication, database integration, and API generation

---

**Building user management primitives?** Start with `@digitaldefiance/suite-core-lib` for type-safe, secure, and internationalized user system foundations. For complete frameworks, check out the **node-ecies** and **node-express-suite** projects! 🚀

## Testing

### Testing Approach

The suite-core-lib package uses comprehensive testing with 409 tests covering all user management primitives, validation logic, and error handling.

**Test Framework**: Jest with TypeScript support  
**Property-Based Testing**: fast-check for validation properties  
**Coverage**: 98.47% statements, 94.56% branches, 88.09% functions

### Running Tests

```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Run specific test suite
npm test -- user-builder.spec.ts
```

### Test Patterns

#### Testing Builders

```typescript
import { UserBuilder, RoleBuilder, Role } from '@digitaldefiance/suite-core-lib';

describe('User Builder', () => {
  it('should build user with fluent API', () => {
    const user = UserBuilder.create()
      .withUsername('alice')
      .withEmail('alice@example.com')
      .withEmailVerified(true)
      .build();
    
    expect(user.username).toBe('alice');
    expect(user.emailVerified).toBe(true);
  });
});
```

#### Testing Validators

```typescript
import { isValidUsername, isValidEmail, isValidPassword } from '@digitaldefiance/suite-core-lib';

describe('Validators', () => {
  it('should validate usernames', () => {
    expect(isValidUsername('alice123')).toBe(true);
    expect(isValidUsername('ab')).toBe(false); // too short
  });

  it('should validate emails', () => {
    expect(isValidEmail('alice@example.com')).toBe(true);
    expect(isValidEmail('invalid')).toBe(false);
  });
});
```

#### Testing Error Handling

```typescript
import { UserNotFoundError, UsernameInUseError, CoreLanguage } from '@digitaldefiance/suite-core-lib';

describe('Error Handling', () => {
  it('should throw localized errors', () => {
    const error = new UserNotFoundError(CoreLanguage.French);
    expect(error.message).toContain('utilisateur');
  });
});
```

### Cross-Package Testing

Testing with base interfaces:

```typescript
import { IUserBase, AccountStatus } from '@digitaldefiance/suite-core-lib';
import { Types } from 'mongoose';

// Define your user type
type TestUser = IUserBase<Types.ObjectId, Date, 'en', AccountStatus>;

describe('User Management', () => {
  it('should create user with correct status', () => {
    const user: TestUser = {
      _id: new Types.ObjectId(),
      username: 'alice',
      email: 'alice@example.com',
      accountStatus: AccountStatus.Active,
      emailVerified: true,
      siteLanguage: 'en',
      createdAt: new Date(),
      updatedAt: new Date(),
      // ... other required fields
    };
    
    expect(user.accountStatus).toBe(AccountStatus.Active);
    expect(user.emailVerified).toBe(true);
  });
});
```

## ChangeLog

### v3.10.x (v3.10.0 - v3.10.20)

**String Key Enum Registration & translateStringKey Support**

- Added `registerStringKeyEnum(SuiteCoreStringKey)` during engine initialization
- Updated `getSuiteCoreTranslation()` to use `translateStringKey()` for automatic component ID resolution
- Updated `safeGetSuiteCoreTranslation()` to use `safeTranslateStringKey()`
- Changed `SuiteCoreComponentStrings` to use `BrandedMasterStringsCollection<typeof SuiteCoreStringKey, CoreLanguageCode>` for type-safe branded enum support
- Upgraded `@digitaldefiance/ecies-lib` from 4.15.6 to 4.16.20
- Upgraded `@digitaldefiance/i18n-lib` from 4.0.5 to 4.2.20

### v3.9.0

**Showcase Application**

- Added interactive showcase application for demonstrating suite-core-lib features
- Deployed to GitHub Pages

### v3.8.0

**I18n Improvements**

- Upgraded i18n-lib with branded enum support
- Improved type safety in translation functions

### v3.7.0

**ECIES Integration Updates**

- Upgraded ecies-lib to latest version
- Improved ID provider integration
- Enhanced type safety for generic ID types

## v3.6.6

- **Breaking Change**: Move `IFrontend*` and `IBackend*` type aliases to `@digitaldefiance/node-express-suite`
  - Base interfaces (`IUserBase`, `IRoleBase`, `IUserRoleBase`, etc.) remain in `suite-core-lib` as the core primitives
  - Framework-specific type aliases moved to `node-express-suite` for better separation of concerns
  - Migration: Use base interfaces directly (e.g., `IUserBase<string, Date, 'en', AccountStatus>`) or import pre-configured types from `@digitaldefiance/node-express-suite`
- Update testing
- Update ecies

## v3.6.5

- Update testing

## v3.6.0

- Upgrade ecies to 4.4.0

## v.3.5.8

- Upgrade ECIES to 4.3.0

## v.3.5.7

- Bump versions to 4.2.7 ECIES

## v.3.5.5

- Bump versions to 4.2.6 ECIES / i18n 3.7.5

## v3.5.0

### Type Safety Improvements

This release focuses on improving type safety by removing unsafe type casts and implementing proper type constraints.

### Changes

1. **Deep Clone Improvements**
   - Added `Cloneable` type union to constrain deep clone operations
   - Removed `as unknown as T` casts from array and object cloning
   - Improved type safety for RegExp and Date cloning

2. **Dynamic Property Access**
   - Removed `(obj as any)[prop]` cast from `deepFreeze` function
   - Added proper type handling for object property access
   - Removed `(result as any)[key]` cast from `applyOverrides` function

3. **Translation Error Handling**
   - Removed unnecessary `language as any` cast in `TranslatableSuiteError`
   - The i18n engine's `translate` method already accepts `language?: string`

### Type Safety Metrics

- **Before**: 5 instances of unsafe type casts
- **After**: 2 controlled type conversions in well-defined functions
- **Improvement**: 60% reduction in type safety escape hatches

### Breaking Changes

None. This is a backward-compatible release focused on internal type safety improvements.

## v3.0.2

- Update ECIES to 4.2.0

## v3.0.1

- Update ECIES to 4.1.1

## v3.0.0

- Upgrade ECIES to 4.1.0
- Update base interfaces (`IUserBase`, `IUserRoleBase`, `ITokenRole`, etc.) to support generic ID types. This enables support for pluggable ID providers (e.g. ObjectId, UUID, GUID, numbers) introduced in `@digitaldefiance/ecies-lib` v4.1.0.

## v2.2.26

- Add CSS warning logo constants

## v2.2.25

- Add CSS warning color constant

## v2.2.24

- Add CSS constants

## v2.2.23

- Add new role interface

## v2.2.22

- Update libs

## v2.2.21

- Add strings
- Add IUserSettings/IUserSettingsDTO and hydrate/dehydrate methods

## v2.2.20

- Update i18n/ecies

## v2.2.19

- Update i18n/ecies

## v2.2.18

- Add strings

## v2.2.17

- Add string

## v2.2.16

- Add string

## v2.2.15

- Add string

## v2.2.14

- Update ecies, i18n

## v2.2.13

- Add currency,directChallenge to IRequestUserDTO

## v2.2.12

- Add strings

## v2.2.11

- Add strings

## v2.2.10

- Update string
- Reorganize strings

## v2.2.9

- Add strings

## v2.2.8

- Add string

## v2.2.7

- Add this.name to errors

## v2.2.6

- Add DirectChallengeNotEnabled error

## v2.2.5

- Add user DarkMode preference

## v2.2.4

- Add strings

## v2.2.3

- Fix BackupCodeString

## v2.2.2

- Fix InvalidEmailError
- Update ecies

## v2.2.1

- Update ecies

## v2.2.0

- Update ecies

## V2.1.54: Add UserID string

## V2.1.53: Add SiteHostname to constants

## V2.1.52: Remove =='s

## V2.1.51: Add string

## V2.1.50: Add string

## V2.1.47: Expose SiteEmailDomain

## V2.1.46: Export ISuccessMessage

## V2.1.45: Extend flags list

## V2.1.44: Export flags

## V2.1.43: Add string

## V2.1.42: Upgrade ecies

## V2.1.41: Improve environment

## V2.1.40: Alignment

## V2.1.35: Register role enum

## V2.1.34: Expose config on getSuiteCoreTranslation

## V2.1.33: Add config to i18n setup

## V2.1.30: Alignment bump. add strings.

## V2.1.25: update i18n, fix bug with i18n alias, add tests

## V2.1.23: update ecies

## V2.1.22: add strings

## V2.1.16: upgrade i18n

## V2.1.15: upgrade i18n

## V2.1.12: minor i18n upgrade

## V2.1.11 rename getSuiteCoreComponentConfig() to createSuiteCoreComponentConfig() for homogeneity

## V2.1.10 Convergence bump

## V2.1.7: export getSuiteCoreComponentConfig()

## V2.1.6: Minor version bump from i18n/ecies

## V2.1.5: Minor version bump from i18n/ecies

## V2.1.4: Minor version bump from i18n/ecies

## V2.1.3: New Modules & Architecture Improvements

### New Features
 - **Builders Module**: UserBuilder, RoleBuilder with fluent APIs
 - **Core Module**: Result<T,E> pattern, type exports, error exports
 - **Lib Module**: Validators, formatters, custom constants support
 - **Custom Constants**: `createValidators(constants)` for flexible validation rules

### Architecture Improvements
 - TranslatableSuiteHandleableError extends i18n-lib base (70% code reduction)
 - Organized folder structure: builders/, core/, lib/
 - Enhanced type safety throughout

### Quality Improvements
 - 409 tests (was 313)
 - 94.56% branch coverage (was 59.3%)
 - 98.47% statement coverage (was 92.86%)
 - 88.09% function coverage (was 67.53%)

### Documentation
 - Complete migration guide in [MIGRATION_V2.md](./docs/MIGRATION_V2.md)
 - Comprehensive examples in [V2_IMPROVEMENTS_COMPLETE.md](./docs/V2_IMPROVEMENTS_COMPLETE.md)
 - Final metrics in [V2_FINAL_SUMMARY.md](./docs/V2_FINAL_SUMMARY.md)

### Breaking Changes
 - **None** - 100% backwards compatible

## V2.0.0: Major Version - Dependency Upgrades

 - Upgraded all @digitaldefiance dependencies to v2.0
   - @digitaldefiance/ecies-lib: 2.0.1
   - @digitaldefiance/i18n-lib: 2.0.0
   - @digitaldefiance/node-ecies-lib: 2.0.0
 - No breaking API changes
 - See [MIGRATION_V2.md](./docs/MIGRATION_V2.md) for upgrade guide

## V1.3.27: Upgrade i18n, ecies, version bump

 - Upgrade i18n, ecies, version bump

## V1.3.20: Add strings, version bump

  - Add a few strings, but mainly version bump/alignment

## V1.3.17: Upgrade i18n

  - Skip 1.3.16 for homogenization
  - Upgrade i18n with aliases for t() function

## V1.3.15: Homogenize versions

  - Homogenize versions

## V1.1.44: Update i18n/ecies

  - Update i18n/ecies

## V1.1.43: Re-release with js

  - Re-release with js

## V1.1.42: Upgrade to es2022/nx monorepo

  - Upgrade to es2022/nx monorepo

## V1.1.41: Upgrade libs

  - Upgrade libs

## v1.1.40: Add strings

  - Add strings

## v1.1.38: Bugfixes on i18n registration

  - Bugfixes on i18n registration

## v.1.1.37: Improve i18n registration

  - Improve i18n plugin registration

## v1.1.36: Update i18n/ecies

  - Update i18n/ecies

## v1.1.35: Add string

  - Add string

## v1.1.34: Export LocalStorageManager

  - Export LocalStorageManager

## v1.1.33: Use typed/handleable from i18n

  - Use typed/handleable from i18n

## v1.1.32: Update ecies

  - Update ecies

## v1.1.31: Update ecies

  - Update ecies

## v1.1.29: Add numerous error classes

  - Add numerous error classes

## v1.1.28: Add local storage manager

  - Add local storage manager

## v1.1.27: Update libs

  - Update ecies libs

## v1.1.26: Add npmignore

  - Add npmignore

## v1.1.25: Add strings

  - Add strings

## v1.1.24: Add strings

  - Add strings

## v1.1.23: Add strings

  - Add strings

## v1.1.22: Add string

  - Add string

## v1.1.21: Add string

  - Add string

## v1.1.20: Update libs/CommonJS

  - CommonJS

## v1.1.19: Update libs

  - Update libs

## v1.1.18: Update libs

  - Update libs

## v1.1.17: Add frontend-objects

  - Add frontend-objects

## v1.1.16: Update libs

  - Update libs

## v1.1.15: Update libs

  - Update libs

## v1.1.14: Update libs

  - Update libs

## v1.1.13: Add string

- Mon Oct 27 2025 15:15:00 GMT-0700 (Pacific Daylight Time)
  - Add string

## v1.1.12: Update readme

- Sun Oct 26 2025 22:31:00 GMT-0700 (Pacific Daylight Time)
  - Update readme

## v1.1.11: Update libs

- Sun Oct 26 2025 20:33:00 GMT-0700 (Pacific Daylight Time)
  - Update libraries
  - Update error classes to not use CoreLanguageCode (use string instead)

## v1.1.10: Add string keys

- Sun Oct 26 2025 13:46:00 GMT-0700 (Pacific Daylight Time)
  - Add some string keys

## v1.1.9: version bump of libs

- Sat Oct 25 2025 16:19:00 GMT-0700 (Pacific Daylight Time)
  - Bump versions of libs

## v1.1.8: add string key for Admin_DatabaseInitializedWithOptionsHashTemplate

- Fri Oct 24 2025 17:27:00 GMT-0700 (Pacific Daylight Time)
  - Add string key

## v1.1.7: version bump

- Fri Oct 24 2025 13:40:00 GMT-0700 (Pacific Daylight Time)
  - Version bump

## v1.1.5: add InvalidChallengeResponseError/LoginChallengeExpiredError

- Thu Oct 23 2025 20:34:00 GMT-0700 (Pacific Daylight Time)
- add InvalidChallengeResponseError/LoginChallengeExpiredError

## v1.1.4: export PrivateKeyRequiredError

- Thu Oct 23 2025 20:20:00 GMT-0700 (Pacific Daylight Time)
  - export PrivateKeyRequiredError

## v1.1.3: Add PrivateKeyRequiredError

- Thu Oct 23 2025 20:19:00 GMT-0700 (Pacific Daylight Time)
  - Add PrivateKeyRequiredError

## v1.1.2: Add EmailTokenFailedToSendError and supporting strings

- Thu Oct 23 2025 17:58:00 GMT-0700 (Pacific Daylight Time)
  - Add EmailTokenFailedToSendError and supporting strings

## v1.1.1: Add string key for EmailService

- Thu Oct 23 2025 16:12:00 GMT-0700 (Pacific Daylight Time)
  - Add string key/string for EmailService

## v1.1.0: Update i18n and ecies

- Thu Oct 23 2025 14:53:00 GMT-0700 (Pacific Daylight Time)
  - Update for i18n and ecies libs

## v1.0.17: SuiteCoreStringKey.Validation_MissingValidatedDataForFieldTemplate

- Wed Oct 22 2025 16:40:00 GMT-0700 (Pacific Daylight Time)
  - Renamed SuiteCoreStringKey.Validation_MissingValidatedDataForField to SuiteCoreStringKey.Validation_MissingValidatedDataForFieldTemplate so that it would be processed as a template

## v1.0.16: coreLanguageToDefaultLanguage & DefaultLanguage

- Wed Oct 22 2025 15:06:00 GMT-0700 (Pacific Daylight Time)
  - coreLanguageToDefaultLanguage and DefaultLanguage helpers

## v1.0.15: Big enhancements

- Tue Oct 21 2025 16:07:00 GMT-0700 (Pacific Daylight Time)

### Dependency Updates

- Updated

  ```plaintext
  @digitaldefiance/ecies-lib
  ```

  from 1.0.31 to 1.0.32

- Updated

  ```plaintext
  @digitaldefiance/node-ecies-lib
  ```

  from 1.0.12 to 1.0.13

### New Features

- Added site configuration constants:

  ```plaintext
  Site
  ```

  ```plaintext
  SiteTagline
  ```

  ```plaintext
  SiteDescription
  ```

  to core constants

- Added new error type enumerations:

    ```plaintext
    FecErrorType
    ```

    \- Forward Error Correction error types (13 error cases)

    ```plaintext
    Pbkdf2ErrorType
    ```

    \- PBKDF2 validation error types (2 error cases)

### String Key Refactoring

- Removed unused common string keys (UnexpectedError, Ready, Connecting, Disconnected, MongoDB, Unauthorized, NoActiveRequest, NoUserOnRequest, NoActiveResponse)
- Removed unused validation string keys (UsernameInUse, EmailInUse, InvalidEmail, InvalidCredentials, UsernameOrEmailRequired, TokenExpired, InvalidToken, ValidationError, MissingValidatedData, MissingValidatedDataForField, MnemonicRegex)
- Removed unused error string keys (LengthExceedsMaximum, LengthIsInvalidType, FailedToCreateRoleTemplate)
- Added extensive admin/system string keys (30+ new keys for database initialization, environment setup, error handling, and system operations)

### Module Exports

- Updated enumeration index to export new

  ```plaintext
  FecErrorType
  ```

  and

  ```plaintext
  Pbkdf2ErrorType
  ```

  enumerations

## v1.0.13: Add string

- Fri Oct 17 2025 14:18:00 GMT-0700 (Pacific Daylight Time)
  - Add string keys

## v1.0.12: Version bump of ecies/i18n libs

- Wed Oct 15 2025 16:53:00 GMT-0700 (Pacific Daylight Time)
  - Version bump of ecies/i18n libs

## v1.0.11: Version bump of ecies/i18n libs, add translatable suite error

- Wed Oct 15 2025 16:30:00 GMT-0700 (Pacific Daylight Time)
  - Version bump ecies/i18n libs
  - Add TranslatableSuiteError

## v1.0.10: Extended strings HotFix

- Wed Oct 15 2025 15:34:00 GMT-0700 (Pacific Daylight Time)
  - Add missing Validation_InvalidToken

## v1.0.9: Extended strings

- Wed Oct 15 2025 15:23:00 GMT-0700 (Pacific Daylight Time)
  - Include additional suite internationalization strings from express suite

## v1.0.8: ITokenUser HotFix

- Wed Oct 15 2025 14:26:00 GMT-0700 (Pacific Daylight Time)
  - Export ITokenUser

## v1.0.7: ITokenUser

- Wed Oct 15 2025 14:22:00 GMT-0700 (Pacific Daylight Time)
  - Add missing ITokenUser

## v1.0.6: Version bump/hotfix

- Sun Oct 12 2025 17:52:00 GMT-0700 (Pacific Daylight Time)
  - Actually include failable result
  - Version bump of libraries

## v1.0.3: Add failable-result

- Sun Oct 12 2025 15:48:00 GMT-0700 (Pacific Daylight Time)
  - Added IFailableResult class

## v1.0.2: Missing export (IConstants)

- Sun Oct 12 2025 14:13:00 GMT-0700 (Pacific Daylight Time)
  - Added missing export for IConstants in src/interfaces/index.ts

## v1.0.1: Add constants/function

- Sun Oct 12 2025 13:34:00 GMT-0700 (Pacific Daylight Time)
  - Added more constants and changed to a function to create the constants object

## v1.0.0: Initial release of user system package

- Sun Oct 12 2025 13:26:37 GMT-0700 (Pacific Daylight Time)
  - Initial release of `@digitaldefiance/suite-core-lib` with core user management primitives, type-safe interfaces, secure backup code system, localized error handling, and multi-language support.
