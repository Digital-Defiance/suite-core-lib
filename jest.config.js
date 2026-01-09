const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('../../tsconfig.base.json');

// Suppress TypeScript ESLint deprecation warnings
const originalWarn = process.emitWarning;
process.emitWarning = function(warning, type, code) {
  if (
    typeof warning === 'string' &&
    warning.includes('The \'argument\' property is deprecated on TSImportType nodes')
  ) {
    return;
  }
  originalWarn.call(process, warning, type, code);
};

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/../../',
    }),
    // Use mock for ecies-lib to avoid circular dependency issues in tests
    '^@digitaldefiance/ecies-lib$':
      '<rootDir>/tests/__mocks__/@digitaldefiance/ecies-lib.ts',
  },
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts'],
  maxWorkers: 1,
};
