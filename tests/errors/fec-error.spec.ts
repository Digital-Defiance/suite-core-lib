import { LanguageCodes, PluginI18nEngine } from '@digitaldefiance/i18n-lib';
import { FecErrorType } from '../../src/enumerations/fec-error-type';
import { FecError } from '../../src/errors/fec-error';
import {
  initSuiteCoreI18nEngine,
  resetSuiteCoreI18nEngine,
} from '../../src/i18n-setup';

describe('FecError', () => {
  beforeEach(() => {
    PluginI18nEngine.resetAll();
    resetSuiteCoreI18nEngine();
    initSuiteCoreI18nEngine();
  });

  afterEach(() => {
    PluginI18nEngine.resetAll();
    resetSuiteCoreI18nEngine();
  });

  describe('Error instantiation and translation', () => {
    it('should create error with English message by default', () => {
      const error = new FecError(FecErrorType.DataRequired);
      expect(error.message).toBe('Data is required');
      expect(error.name).toBe('FecError');
    });

    it('should create error with French translation', () => {
      const error = new FecError(FecErrorType.DataRequired, LanguageCodes.FR);
      expect(error.message).toBe('Les données sont requises');
    });

    it('should create error with German translation', () => {
      const error = new FecError(FecErrorType.DataRequired, LanguageCodes.DE);
      expect(error.message).toBe('Daten sind erforderlich für FEC-Operationen');
    });

    it('should create error with Spanish translation', () => {
      const error = new FecError(FecErrorType.DataRequired, LanguageCodes.ES);
      expect(error.message).toBe('Datos requeridos para FEC');
    });
  });

  describe('Template parameter substitution', () => {
    it('should substitute template parameters for InvalidDataLength', () => {
      const error = new FecError(
        FecErrorType.InvalidDataLength,
        LanguageCodes.EN_US,
        { LENGTH: '100', EXPECTED: '256' },
      );
      expect(error.message).toBe('Invalid data length: 100, expected 256');
    });

    it('should substitute template parameters in French', () => {
      const error = new FecError(
        FecErrorType.InvalidDataLength,
        LanguageCodes.FR,
        { LENGTH: '100', EXPECTED: '256' },
      );
      expect(error.message).toBe(
        'Longueur de données invalide : 100, attendu 256',
      );
    });

    it('should substitute template parameters for ShardSizeExceedsMaximum', () => {
      const error = new FecError(
        FecErrorType.ShardSizeExceedsMaximum,
        LanguageCodes.EN_US,
        { SIZE: '2048', MAXIMUM: '1024' },
      );
      expect(error.message).toBe('Shard size 2048 exceeds maximum 1024');
    });

    it('should substitute template parameters for NotEnoughShardsAvailable', () => {
      const error = new FecError(
        FecErrorType.NotEnoughShardsAvailable,
        LanguageCodes.EN_US,
        { AVAILABLE: '3', REQUIRED: '5' },
      );
      expect(error.message).toBe('Not enough shards available: 3, need 5');
    });

    it('should substitute template parameters for FecEncodingFailed', () => {
      const error = new FecError(
        FecErrorType.FecEncodingFailed,
        LanguageCodes.EN_US,
        { ERROR: 'Buffer overflow' },
      );
      expect(error.message).toBe('FEC encoding failed: Buffer overflow');
    });

    it('should substitute template parameters for FecDecodingFailed', () => {
      const error = new FecError(
        FecErrorType.FecDecodingFailed,
        LanguageCodes.EN_US,
        { ERROR: 'Corrupted data' },
      );
      expect(error.message).toBe('FEC decoding failed: Corrupted data');
    });
  });

  describe('All FecErrorType values', () => {
    it('should handle InputDataMustBeUint8Array', () => {
      const error = new FecError(FecErrorType.InputDataMustBeUint8Array);
      expect(error.message).toBe('Input data must be a Uint8Array');
    });

    it('should handle InvalidShardCounts', () => {
      const error = new FecError(FecErrorType.InvalidShardCounts);
      expect(error.message).toBe('Invalid shard counts');
    });

    it('should handle InvalidShardsAvailableArray', () => {
      const error = new FecError(FecErrorType.InvalidShardsAvailableArray);
      expect(error.message).toBe('Invalid shards available array');
    });

    it('should handle ParityDataCountMustBePositive', () => {
      const error = new FecError(FecErrorType.ParityDataCountMustBePositive);
      expect(error.message).toBe('Parity data count must be positive');
    });

    it('should handle ParityDataRequired', () => {
      const error = new FecError(FecErrorType.ParityDataRequired);
      expect(error.message).toBe('Parity data is required for FEC operations');
    });
  });

  describe('Error properties', () => {
    it('should be instanceof Error', () => {
      const error = new FecError(FecErrorType.DataRequired);
      expect(error instanceof Error).toBe(true);
    });

    it('should be instanceof FecError', () => {
      const error = new FecError(FecErrorType.DataRequired);
      expect(error instanceof FecError).toBe(true);
    });

    it('should have proper stack trace', () => {
      const error = new FecError(FecErrorType.DataRequired);
      expect(error.stack).toBeDefined();
      expect(error.stack).toContain('FecError');
    });

    it('should have correct name property', () => {
      const error = new FecError(FecErrorType.DataRequired);
      expect(error.name).toBe('FecError');
    });
  });

  describe('Translation printing', () => {
    it('should print translated message when converted to string', () => {
      const error = new FecError(
        FecErrorType.DataRequired,
        LanguageCodes.EN_US,
      );
      const errorString = String(error);
      expect(errorString).toContain('Data is required');
    });

    it('should print French translation when converted to string', () => {
      const error = new FecError(FecErrorType.DataRequired, LanguageCodes.FR);
      const errorString = error.toString();
      expect(errorString).toContain('Les données sont requises');
    });

    it('should print template-substituted message', () => {
      const error = new FecError(
        FecErrorType.InvalidDataLength,
        LanguageCodes.EN_US,
        { LENGTH: '50', EXPECTED: '100' },
      );
      expect(error.toString()).toContain(
        'Invalid data length: 50, expected 100',
      );
    });
  });
});
