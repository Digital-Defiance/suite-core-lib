# @digitaldefiance/suite-core-lib Documentation

## Overview

Suite-core-lib provides shared types, errors, constants, and utilities for building user management systems.

## Quick Links

- [Migration Guide](./MIGRATION_V2.md) - Upgrading to v2.1
- [Complete Feature List](./V2_IMPROVEMENTS_COMPLETE.md) - All v2.1 features
- [Final Summary](./V2_FINAL_SUMMARY.md) - Coverage and metrics

## Key Features

### Builders
Fluent APIs for creating objects:
- `UserBuilder` - Build user objects
- `RoleBuilder` - Build role objects

### Core
Central types and patterns:
- `Result<T,E>` - Type-safe success/failure pattern
- Type exports - Common interfaces
- Error exports - Base error classes

### Lib
Utilities and helpers:
- Validators - Email, username, password validation
- Custom constants support
- Formatters - Backup code formatting

### Errors
Comprehensive error classes with i18n support:
- `TranslatableSuiteError` - Base translatable error
- `TranslatableSuiteHandleableError` - With status codes
- Specific errors for validation, authentication, etc.

### Interfaces
Type definitions for:
- Users, roles, tokens
- Base interfaces (IHasId, IHasTimestamps, etc.)
- DTOs and frontend objects

## Installation

```bash
npm install @digitaldefiance/suite-core-lib
# or
yarn add @digitaldefiance/suite-core-lib
```

## Usage Examples

See [V2_IMPROVEMENTS_COMPLETE.md](./V2_IMPROVEMENTS_COMPLETE.md) for comprehensive examples.

## Version History

- **v2.1.3** - New builders, core, and lib modules. 94.56% branch coverage.
- **v2.0.0** - Initial v2 release with updated dependencies

## License

MIT
