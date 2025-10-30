import { LocalStorageManager } from '../src/local-storage-manager';

describe('LocalStorageManager', () => {
  // Mock localStorage
  const mockLocalStorage = (() => {
    let store: Record<string, string> = {};
    
    return {
      getItem: jest.fn((key: string) => store[key] || null),
      setItem: jest.fn((key: string, value: string) => {
        store[key] = value;
      }),
      removeItem: jest.fn((key: string) => {
        delete store[key];
      }),
      clear: jest.fn(() => {
        store = {};
      }),
      get length() {
        return Object.keys(store).length;
      },
      key: jest.fn((index: number) => Object.keys(store)[index] || null),
    };
  })();

  // Mock console.warn to suppress expected warnings in tests
  let consoleWarnSpy: jest.SpyInstance;

  beforeEach(() => {
    // Clear all mocks and reset localStorage
    jest.clearAllMocks();
    mockLocalStorage.clear();
    
    // Mock localStorage globally for Node.js environment
    Object.defineProperty(globalThis, 'localStorage', {
      value: mockLocalStorage,
      writable: true,
      configurable: true,
    });

    // Spy on console.warn
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    if (consoleWarnSpy) {
      consoleWarnSpy.mockRestore();
    }
  });

  describe('getValue', () => {
    it('should return default value when key does not exist', () => {
      const result = LocalStorageManager.getValue('nonExistentKey', 'defaultValue');
      expect(result).toBe('defaultValue');
      expect(mockLocalStorage.getItem).toHaveBeenCalledWith('nonExistentKey');
    });

    it('should return default value when stored value is null', () => {
      mockLocalStorage.getItem.mockReturnValueOnce(null);
      const result = LocalStorageManager.getValue('nullKey', 'defaultValue');
      expect(result).toBe('defaultValue');
    });

    it('should return string value correctly', () => {
      const testValue = 'test string';
      mockLocalStorage.getItem.mockReturnValueOnce(testValue);
      const result = LocalStorageManager.getValue('stringKey', 'default');
      expect(result).toBe(testValue);
    });

    it('should parse and return number value correctly', () => {
      mockLocalStorage.getItem.mockReturnValueOnce('42');
      const result = LocalStorageManager.getValue('numberKey', 0);
      expect(result).toBe(42);
    });

    it('should handle invalid number and return default', () => {
      mockLocalStorage.getItem.mockReturnValueOnce('not a number');
      const result = LocalStorageManager.getValue('invalidNumberKey', 0);
      expect(result).toBe(0);
    });

    it('should parse and return object value correctly', () => {
      const testObject = { name: 'test', value: 123 };
      mockLocalStorage.getItem.mockReturnValueOnce(JSON.stringify(testObject));
      const result = LocalStorageManager.getValue('objectKey', {});
      expect(result).toEqual(testObject);
    });

    it('should return default value when JSON parsing fails', () => {
      mockLocalStorage.getItem.mockReturnValueOnce('invalid json {');
      const defaultObject = { default: true };
      const result = LocalStorageManager.getValue('invalidJsonKey', defaultObject);
      expect(result).toEqual(defaultObject);
    });

    it('should handle boolean default values', () => {
      mockLocalStorage.getItem.mockReturnValueOnce('true');
      const result = LocalStorageManager.getValue('booleanKey', false);
      expect(result).toBe(true);
    });

    it('should handle array default values', () => {
      const testArray = [1, 2, 3];
      mockLocalStorage.getItem.mockReturnValueOnce(JSON.stringify(testArray));
      const result = LocalStorageManager.getValue('arrayKey', []);
      expect(result).toEqual(testArray);
    });

    it('should return default value when localStorage throws an error', () => {
      mockLocalStorage.getItem.mockImplementationOnce(() => {
        throw new Error('localStorage error');
      });
      const result = LocalStorageManager.getValue('errorKey', 'defaultValue');
      expect(result).toBe('defaultValue');
    });
  });

  describe('setValue', () => {
    it('should store string value correctly', () => {
      const testValue = 'test string';
      LocalStorageManager.setValue('stringKey', testValue);
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('stringKey', testValue);
    });

    it('should store number value as string', () => {
      const testValue = 42;
      LocalStorageManager.setValue('numberKey', testValue);
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('numberKey', '42');
    });

    it('should store object value as JSON string', () => {
      const testObject = { name: 'test', value: 123 };
      LocalStorageManager.setValue('objectKey', testObject);
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        'objectKey',
        JSON.stringify(testObject)
      );
    });

    it('should store boolean value as JSON string', () => {
      LocalStorageManager.setValue('booleanKey', true);
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('booleanKey', 'true');
    });

    it('should store array value as JSON string', () => {
      const testArray = [1, 2, 3];
      LocalStorageManager.setValue('arrayKey', testArray);
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        'arrayKey',
        JSON.stringify(testArray)
      );
    });

    it('should handle localStorage errors gracefully', () => {
      mockLocalStorage.setItem.mockImplementationOnce(() => {
        throw new Error('localStorage error');
      });
      
      LocalStorageManager.setValue('errorKey', 'test value');
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'Failed to save to localStorage (errorKey):',
        expect.any(Error)
      );
    });

    it('should handle null values', () => {
      LocalStorageManager.setValue('nullKey', null);
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('nullKey', 'null');
    });

    it('should handle undefined values', () => {
      LocalStorageManager.setValue('undefinedKey', undefined);
      // JSON.stringify(undefined) returns undefined (primitive), not "undefined" string
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('undefinedKey', undefined);
    });
  });

  describe('removeValue', () => {
    it('should remove value from localStorage', () => {
      LocalStorageManager.removeValue('testKey');
      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith('testKey');
    });

    it('should handle localStorage errors gracefully', () => {
      mockLocalStorage.removeItem.mockImplementationOnce(() => {
        throw new Error('localStorage error');
      });
      
      LocalStorageManager.removeValue('errorKey');
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'Failed to remove from localStorage (errorKey):',
        expect.any(Error)
      );
    });
  });

  describe('isAvailable', () => {
    it('should return true when localStorage is available', () => {
      const result = LocalStorageManager.isAvailable();
      expect(result).toBe(true);
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        '__localStorage_test__',
        '__localStorage_test__'
      );
      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith('__localStorage_test__');
    });

    it('should return false when localStorage is not available', () => {
      mockLocalStorage.setItem.mockImplementationOnce(() => {
        throw new Error('localStorage not available');
      });
      
      const result = LocalStorageManager.isAvailable();
      expect(result).toBe(false);
    });

    it('should return false when removeItem throws an error', () => {
      mockLocalStorage.removeItem.mockImplementationOnce(() => {
        throw new Error('localStorage error');
      });
      
      const result = LocalStorageManager.isAvailable();
      expect(result).toBe(false);
    });
  });

  describe('integration tests', () => {
    it('should store and retrieve string values correctly', () => {
      const key = 'testString';
      const value = 'Hello, World!';
      
      LocalStorageManager.setValue(key, value);
      const retrieved = LocalStorageManager.getValue(key, '');
      
      expect(retrieved).toBe(value);
    });

    it('should store and retrieve number values correctly', () => {
      const key = 'testNumber';
      const value = 42;
      
      LocalStorageManager.setValue(key, value);
      const retrieved = LocalStorageManager.getValue(key, 0);
      
      expect(retrieved).toBe(value);
    });

    it('should store and retrieve object values correctly', () => {
      const key = 'testObject';
      const value = { name: 'test', id: 123, active: true };
      
      LocalStorageManager.setValue(key, value);
      const retrieved = LocalStorageManager.getValue(key, {});
      
      expect(retrieved).toEqual(value);
    });

    it('should store and retrieve array values correctly', () => {
      const key = 'testArray';
      const value = [1, 'two', { three: 3 }, true];
      
      LocalStorageManager.setValue(key, value);
      const retrieved = LocalStorageManager.getValue(key, []);
      
      expect(retrieved).toEqual(value);
    });

    it('should handle value removal correctly', () => {
      const key = 'testRemoval';
      const value = 'to be removed';
      const defaultValue = 'default';
      
      LocalStorageManager.setValue(key, value);
      expect(LocalStorageManager.getValue(key, defaultValue)).toBe(value);
      
      LocalStorageManager.removeValue(key);
      expect(LocalStorageManager.getValue(key, defaultValue)).toBe(defaultValue);
    });
  });

  describe('edge cases', () => {
    it('should handle empty string values', () => {
      const key = 'emptyString';
      const value = '';
      
      // Mock localStorage to return empty string
      mockLocalStorage.getItem.mockReturnValueOnce(value);
      const retrieved = LocalStorageManager.getValue(key, 'default');
      
      expect(retrieved).toBe(value);
    });

    it('should handle zero number values', () => {
      const key = 'zeroNumber';
      const value = 0;
      
      LocalStorageManager.setValue(key, value);
      const retrieved = LocalStorageManager.getValue(key, 42);
      
      expect(retrieved).toBe(value);
    });

    it('should handle negative number values', () => {
      const key = 'negativeNumber';
      const value = -123;
      
      LocalStorageManager.setValue(key, value);
      const retrieved = LocalStorageManager.getValue(key, 0);
      
      expect(retrieved).toBe(value);
    });

    it('should handle floating point number values', () => {
      const key = 'floatNumber';
      const value = 3.14159;
      
      LocalStorageManager.setValue(key, value);
      const retrieved = LocalStorageManager.getValue(key, 0);
      
      // Note: parseInt will truncate, so this tests the current behavior
      expect(retrieved).toBe(3);
    });

    it('should handle empty object values', () => {
      const key = 'emptyObject';
      const value = {};
      
      LocalStorageManager.setValue(key, value);
      const retrieved = LocalStorageManager.getValue(key, { default: true });
      
      expect(retrieved).toEqual(value);
    });

    it('should handle empty array values', () => {
      const key = 'emptyArray';
      const value: any[] = [];
      
      LocalStorageManager.setValue(key, value);
      const retrieved = LocalStorageManager.getValue(key, ['default']);
      
      expect(retrieved).toEqual(value);
    });

    it('should handle nested objects', () => {
      const key = 'nestedObject';
      const value = {
        user: {
          name: 'John',
          preferences: {
            theme: 'dark',
            notifications: true,
          },
        },
      };
      
      LocalStorageManager.setValue(key, value);
      const retrieved = LocalStorageManager.getValue(key, {});
      
      expect(retrieved).toEqual(value);
    });
  });
});