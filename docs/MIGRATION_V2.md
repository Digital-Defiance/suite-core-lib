# Migration Guide: @digitaldefiance/suite-core-lib v2.1

## Overview

Version 2.1 brings updated dependencies, improved architecture, and new features while maintaining 100% backwards compatibility.

## Breaking Changes

**None** - All existing code remains fully compatible.

## What's New in v2.1

### New Modules

#### Builders
Fluent API for creating objects:
```typescript
import { UserBuilder, RoleBuilder } from '@digitaldefiance/suite-core-lib';

const user = UserBuilder.create()
  .withUsername('admin')
  .withEmail('admin@example.com')
  .withEmailVerified(true)
  .build();
```

#### Core
Central exports and Result pattern:
```typescript
import { Result, success, failure, isSuccess } from '@digitaldefiance/suite-core-lib';

function processUser(id: string): Result<User, Error> {
  const user = findUser(id);
  return user ? success(user) : failure(new Error('Not found'));
}
```

#### Lib
Validators and formatters:
```typescript
import { isValidUsername, isValidEmail, createValidators } from '@digitaldefiance/suite-core-lib';

// Use default validators
if (!isValidUsername('test123')) {
  throw new Error('Invalid username');
}

// Use custom constants
const myConstants = createConstants('myapp.com', {
  UsernameRegex: /^[a-z0-9_]{4,20}$/,
});
const validators = createValidators(myConstants);
```

### Improved Architecture

- **TranslatableSuiteHandleableError** now extends i18n-lib base classes (70% code reduction)
- Organized structure: `builders/`, `core/`, `lib/` folders
- Custom constants support for validators

## Migration Steps

### 1. Update package.json

```bash
npm install @digitaldefiance/suite-core-lib@2.1.3
# or
yarn add @digitaldefiance/suite-core-lib@2.1.3
```

### 2. Update Related Packages

```bash
npm install @digitaldefiance/ecies-lib@2.1.3 \
            @digitaldefiance/i18n-lib@2.1.1
```

### 3. Optional: Use New Features

No code changes required, but you can optionally adopt new features:

- Use builders for cleaner object creation
- Use Result pattern for better error handling
- Use validators with custom constants

## Compatibility

- Node.js 18+
- TypeScript 5.0+
- All v2.1 @digitaldefiance packages
- 100% backwards compatible with v2.0

## Support

For issues or questions, visit: https://github.com/digitaldefiance
