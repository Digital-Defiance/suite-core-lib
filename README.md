# @digitaldefiance/suite-core-lib

[![npm version](https://badge.fury.io/js/%40digitaldefiance%2Fsuite-core-lib.svg)](https://badge.fury.io/js/%40digitaldefiance%2Fsuite-core-lib)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

A library that provides higher-level primitives for the cornerstone of a comprehensive, cryptographically-secure user management system and node express server with service framework built with **@digitaldefiance/ecies-lib** and **@digitaldefiance/node-ecies-lib** encryption. This library serves as the foundational building blocks for the **node-ecies** project and **node-express-suite** packages, which together form a complete full-stack framework ecosystem.

## 🚀 Framework Ecosystem

`@digitaldefiance/suiite-core-lib` provides the **core primitives and abstractions** that power:

- user accounts and authentication
- user to user and user to server encryption
- zero-knowledge proof authentication
- role-based access control (RBAC)
- multi-language internationalization (i18n)

## 📦 Installation

```bash
npm install @digitaldefiance/suiite-core-lib
# or
yarn add @digitaldefiance/suiite-core-lib
```

## 🌍 Internationalization

Built-in support for **5 languages** with the new plugin-based i18n architecture:

- **English** (US/UK)
- **French**
- **Spanish**
- **Mandarin Chinese**
- **Ukrainian**

All error messages, validation text, and user-facing strings are fully localized and extensible.

## 🏗️ Architecture Overview

### Type-Safe Interfaces

```typescript
import { 
  IFrontendUser, 
  IBackendUser, 
  AccountStatus, 
  Role,
  CoreLanguage 
} from '@digitaldefiance/suiite-core-lib';

// Frontend-optimized user interface (string IDs)
interface AppUser extends IFrontendUser<'en'> {
  _id: string;
  siteLanguage: 'en';
  accountStatus: AccountStatus;
}

// Backend database interface (ObjectId support)  
interface DatabaseUser extends IBackendUser<'en'> {
  _id: Types.ObjectId;
  createdBy: Types.ObjectId;
  updatedBy: Types.ObjectId;
}
```

### Secure Backup Code System

```typescript
import { BackupCodeString, Constants } from '@digitaldefiance/suiite-core-lib';

// Generate cryptographically secure backup codes
const backupCodes = BackupCodeString.generateBackupCodes();
console.log(backupCodes.length); // 10 (configurable via Constants.BACKUP_CODES.Count)

// Each code is formatted for user display
const code = new BackupCodeString('deadbeefcafebabefeedface01234567');
console.log(code.value); // "dead-beef-cafe-babe-feed-face-0123-4567"

// Multiple secure encoding formats
console.log(code.valueAsHexString);    // Hex-encoded UTF-8 bytes
console.log(code.valueAsBase64String); // Base64-encoded 
console.log(code.valueAsUint8Array);   // Raw byte array
```

### Localized Error Handling

```typescript
import { 
  UserNotFoundError, 
  UsernameInUseError, 
  AccountLockedError,
  CoreLanguage 
} from '@digitaldefiance/suiite-core-lib';

// Errors with automatic localization
throw new UserNotFoundError(CoreLanguage.French);
// "Compte utilisateur introuvable"

throw new UsernameInUseError(CoreLanguage.Spanish); 
// "El nombre de usuario ya está en uso"

throw new AccountLockedError(CoreLanguage.German);
// "Konto ist von einem Administrator gesperrt"
```

## 🎯 How Frameworks Use These Primitives

The **@digitaldefiance/node-express-suite** package builds upon these primitives to create full framework components:

### Express.js Framework Usage

```typescript
// node-express-suite uses these primitives internally
import { 
  IFrontendUser, 
  AccountStatus, 
  BackupCodeString,
  UserNotFoundError,
  CoreLanguage 
} from '@digitaldefiance/suiite-core-lib';

// Framework middleware validates using our primitives
function validateBackupCode(userInput: string, storedCodes: IBackupCode[]) {
  try {
    const inputCode = new BackupCodeString(userInput);
    return storedCodes.some(stored => 
      BackupCodeString.normalizeCode(inputCode.value) === stored.encrypted
    );
  } catch (error) {
    if (error instanceof InvalidBackupCodeError) {
      // Framework handles localized error response
      return false;
    }
    throw error;
  }
}
```

### Frontend Framework Integration

```typescript
// Frontend frameworks consume our type-safe interfaces
import { IFrontendUser, AccountStatus } from '@digitaldefiance/suiite-core-lib';

// React/Vue/Angular components use our interfaces
interface UserProfileProps {
  user: IFrontendUser<'en' | 'fr' | 'es'>;
  onStatusChange: (status: AccountStatus) => void;
}

// Type safety ensures consistent data flow
function updateUserStatus(user: IFrontendUser<string>, status: AccountStatus) {
  return {
    ...user,
    accountStatus: status,
    updatedAt: new Date().toISOString()
  };
}
```

### Database Layer Integration

```typescript
// node-express-suite database layers use our models
import { IBackendUser, IUserRoleBase } from '@digitaldefiance/suiite-core-lib';
import { Types } from 'mongoose';

// Framework database schemas implement our interfaces
const userSchema = new mongoose.Schema<IBackendUser<'en'>>({
  _id: { type: Types.ObjectId, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  accountStatus: { 
    type: String, 
    enum: Object.values(AccountStatus),
    default: AccountStatus.PendingEmailVerification 
  },
  // ... rest of the schema matches our interface
});
```

## 🔧 Advanced Configuration

### Custom Model Extensions & Dynamic Registration

> **Note:** The static `ModelName` and `BaseModelName` enums are deprecated. For extensibility, use dynamic model registration (see `ModelRegistry` in `node-express-suite`).

You can now register and extend models dynamically:

```typescript
import { ModelRegistry } from '@digitaldefiance/node-express-suite';

// Register a custom model (e.g., Organization)
ModelRegistry.instance.register({
  modelName: 'Organization',
  schema: organizationSchema,
  model: OrganizationModel,
  collection: 'organizations',
});

// Retrieve a model anywhere in your app
const orgModel = ModelRegistry.instance.get('Organization')?.model;
```

This approach allows other libraries and apps to extend or override models at runtime, supporting advanced use cases like multi-tenancy and plugin architectures.

### Email Token Types

```typescript
import { EmailTokenType } from '@digitaldefiance/suiite-core-lib';

// Built-in token types for common workflows
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
import { AccountStatus } from '@digitaldefiance/suiite-core-lib';

// Granular account state control
switch (user.accountStatus) {
  case AccountStatus.PendingEmailVerification:
    // Send verification email
    break;
  case AccountStatus.Active:
    // Full access granted
    break;
  case AccountStatus.AdminLock:
    // Requires admin intervention
    break;
}
```

### Framework Integration (Built by Other Projects)

The **@digitaldefiance/node-ecies** and **@digitaldefiance/node-express-suite** packages use these primitives to build:

- **Complete Express.js framework** with middleware, routes, and database integration
- **Frontend framework adapters** for React, Vue, Angular, and Svelte
- **Mobile and desktop SDKs** for React Native, Flutter, Electron, and Tauri
- **DevOps and deployment tools** with Docker, Kubernetes, and CI/CD integration

## 🧪 Testing & Quality

## 🛠️ Runtime Configuration Registry

This package uses a runtime configuration registry for all constants and cryptographic parameters. You can override defaults at runtime for advanced use cases:

```typescript
import {
  getSuiteCoreRuntimeConfiguration,
  registerSuiteCoreRuntimeConfiguration,
} from '@digitaldefiance/suite-core-lib';

// Get current config
const config = getSuiteCoreRuntimeConfiguration();

// Register a custom config
const customKey = Symbol('custom-suite-core-config');
registerSuiteCoreRuntimeConfiguration(customKey, 'example.com', { BcryptRounds: 12 });
const customConfig = getSuiteCoreRuntimeConfiguration(customKey);
```

All constants are immutable and accessible via the registry/config API. See `src/constants.ts` and `src/defaults.ts` for details.

## 🏛️ Architectural Conventions

- Centralized constants file
- Immutability via Object.freeze
- Registry/config pattern for runtime overrides
- Type-safe interfaces for all config objects

## 🧪 Testing & Quality

```bash
# Run the comprehensive test suite
yarn test

# 104 tests covering:
# ✅ Type safety and interface validation
# ✅ Cryptographic security functions  
# ✅ Multi-language localization
# ✅ Error handling and edge cases
# ✅ Integration scenarios
# ✅ Performance benchmarks
```

## 🤝 Contributing

We welcome contributions to help build the future of secure user management! Areas where we need help:

- **Frontend component libraries** for popular frameworks
- **Additional language translations** and localization
- **Performance optimizations** and benchmarking
- **Documentation** and example applications
- **Security auditing** and penetration testing

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

## ChangeLog

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
