/**
 * Utility functions for managing localStorage with type safety
 */

export class LocalStorageManager {
  /**
   * Get a value from localStorage with a default fallback
   */
  static getValue<T>(key: string, defaultValue: T): T {
    try {
      const stored = localStorage.getItem(key);
      if (stored === null) return defaultValue;

      // For primitive types, parse appropriately
      if (typeof defaultValue === 'number') {
        const parsed = parseInt(stored, 10);
        return (isNaN(parsed) ? defaultValue : parsed) as T;
      }
      if (typeof defaultValue === 'string') {
        return stored as T;
      }

      // For objects, parse JSON
      return JSON.parse(stored) as T;
    } catch {
      return defaultValue;
    }
  }

  /**
   * Set a value in localStorage
   */
  static setValue<T>(key: string, value: T): void {
    try {
      if (typeof value === 'string' || typeof value === 'number') {
        localStorage.setItem(key, value.toString());
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.warn(`Failed to save to localStorage (${key}):`, error);
    }
  }

  /**
   * Remove a value from localStorage
   */
  static removeValue(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn(`Failed to remove from localStorage (${key}):`, error);
    }
  }

  /**
   * Check if localStorage is available
   */
  static isAvailable(): boolean {
    try {
      const test = '__localStorage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }
}
