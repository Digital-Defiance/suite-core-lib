import {
  CoreComponentDefinition,
  CoreStringKey,
  I18nEngine,
  createCoreComponentStrings,
  createDefaultLanguages,
} from '@digitaldefiance/i18n-lib';
import { CoreTypedHandleableError } from '../../src/errors/core-typed-handleable';

enum TestErrorType {
  TypeA = 'TYPE_A',
  TypeB = 'TYPE_B',
}

describe('CoreTypedHandleableError', () => {
  beforeAll(() => {
    try {
      I18nEngine.getInstance('default');
    } catch {
      const engine = I18nEngine.createInstance(
        'default',
        createDefaultLanguages()
      );
      engine.register({
        id: CoreComponentDefinition.id,
        strings: createCoreComponentStrings(),
      });
    }
  });

  const reasonMap = {
    [TestErrorType.TypeA]: CoreStringKey.Error_InvalidInput,
    [TestErrorType.TypeB]: CoreStringKey.Error_ValidationFailed,
  };

  it('should create error with default options', () => {
    const source = new Error('Source error');
    const error = new CoreTypedHandleableError(
      TestErrorType.TypeA,
      reasonMap,
      source
    );

    expect(error).toBeInstanceOf(Error);
    expect(error.statusCode).toBe(500);
    expect(error.handled).toBe(false);
    expect(error.cause).toBe(source);
  });

  it('should create error with custom options', () => {
    const source = new Error('Source error');
    const error = new CoreTypedHandleableError(
      TestErrorType.TypeB,
      reasonMap,
      source,
      { statusCode: 422, handled: true, sourceData: { foo: 'bar' } }
    );

    expect(error.statusCode).toBe(422);
    expect(error.handled).toBe(true);
    expect(error.sourceData).toEqual({ foo: 'bar' });
  });

  it('should allow setting handled flag', () => {
    const source = new Error('Source error');
    const error = new CoreTypedHandleableError(
      TestErrorType.TypeA,
      reasonMap,
      source
    );

    expect(error.handled).toBe(false);
    error.handled = true;
    expect(error.handled).toBe(true);
  });

  it('should serialize to JSON', () => {
    const source = new Error('Source error');
    const error = new CoreTypedHandleableError(
      TestErrorType.TypeA,
      reasonMap,
      source,
      { statusCode: 400, sourceData: { test: 123 } }
    );

    const json = error.toJSON();
    expect(json.statusCode).toBe(400);
    expect(json.handled).toBe(false);
    expect(json.sourceData).toEqual({ test: 123 });
    expect(json.cause).toBe('Source error');
  });

  it('should handle source without stack', () => {
    const source = new Error('No stack');
    delete source.stack;
    const error = new CoreTypedHandleableError(
      TestErrorType.TypeA,
      reasonMap,
      source
    );

    expect(error.stack).toBeDefined();
  });

  it('should serialize nested handleable errors', () => {
    const innerSource = new Error('Inner error');
    const innerError = new CoreTypedHandleableError(
      TestErrorType.TypeA,
      reasonMap,
      innerSource
    );
    const outerError = new CoreTypedHandleableError(
      TestErrorType.TypeB,
      reasonMap,
      innerError
    );

    const json = outerError.toJSON();
    expect(json.cause).toEqual(innerError.toJSON());
  });
});
