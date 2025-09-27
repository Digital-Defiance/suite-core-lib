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

### Custom Model Extensions

```typescript
import { BaseModelName, ExtendedModelName } from '@digitaldefiance/suite-core-lib';

// Extend the base models for your application
enum CustomModels {
  Organization = 'Organization',
  Subscription = 'Subscription',
  AuditLog = 'AuditLog'
}

type AppModelName = ExtendedModelName<typeof CustomModels>;
// Includes: User, Role, EmailToken, Mnemonic, UserRole, Organization, Subscription, AuditLog
```

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

## v1.0.0: Initial release of user system package

- Sun Oct 12 2025 13:26:37 GMT-0700 (Pacific Daylight Time)
  - Initial release of `@digitaldefiance/suite-core-lib` with core user management primitives, type-safe interfaces, secure backup code system, localized error handling, and multi-language support.
