import { LanguageCodes, PluginI18nEngine } from '@digitaldefiance/i18n-lib';
import { UsernameInUseError } from '../../src/errors/username-in-use';
import { UserNotFoundError } from '../../src/errors/user-not-found';
import { AdminRoleNotFoundError } from '../../src/errors/admin-role-not-found';
import { MemberRoleNotFoundError } from '../../src/errors/member-role-not-found';
import { SystemRoleNotFoundError } from '../../src/errors/system-role-not-found';
import {
  initSuiteCoreI18nEngine,
  resetSuiteCoreI18nEngine,
} from '../../src/i18n-setup';

describe('Specific Error Classes', () => {
  beforeEach(() => {
    PluginI18nEngine.resetAll();
    resetSuiteCoreI18nEngine();
    initSuiteCoreI18nEngine();
  });

  afterEach(() => {
    PluginI18nEngine.resetAll();
    resetSuiteCoreI18nEngine();
  });

  describe('UsernameInUseError', () => {
    it('should create error with English message by default', () => {
      const error = new UsernameInUseError();
      expect(error.message).toBe('Username is already in use');
      expect(error.name).toBe('UsernameInUseError');
      expect(error.statusCode).toBe(422);
    });

    it('should create error with French translation', () => {
      const error = new UsernameInUseError(LanguageCodes.FR);
      expect(error.message).toBe('Le nom d\'utilisateur est déjà utilisé');
    });

    it('should create error with German translation', () => {
      const error = new UsernameInUseError(LanguageCodes.DE);
      expect(error.message).toBe('Benutzername wird bereits verwendet');
    });

    it('should create error with Spanish translation', () => {
      const error = new UsernameInUseError(LanguageCodes.ES);
      expect(error.message).toBe('El nombre de usuario ya está en uso');
    });

    it('should allow custom status code', () => {
      const error = new UsernameInUseError(LanguageCodes.EN_US, 409);
      expect(error.statusCode).toBe(409);
    });

    it('should print translated message', () => {
      const error = new UsernameInUseError(LanguageCodes.FR);
      expect(error.toString()).toContain('Le nom d\'utilisateur est déjà utilisé');
    });
  });

  describe('UserNotFoundError', () => {
    it('should create error with English message by default', () => {
      const error = new UserNotFoundError();
      expect(error.message).toBe('User account not found');
      expect(error.name).toBe('UserNotFoundError');
      expect(error.statusCode).toBe(404);
    });

    it('should create error with French translation', () => {
      const error = new UserNotFoundError(LanguageCodes.FR);
      expect(error.message).toBe('Compte utilisateur introuvable');
    });

    it('should create error with German translation', () => {
      const error = new UserNotFoundError(LanguageCodes.DE);
      expect(error.message).toBe('Benutzerkonto nicht gefunden');
    });

    it('should create error with Spanish translation', () => {
      const error = new UserNotFoundError(LanguageCodes.ES);
      expect(error.message).toBe('Cuenta de usuario no encontrada');
    });

    it('should allow custom status code', () => {
      const error = new UserNotFoundError(LanguageCodes.EN_US, 410);
      expect(error.statusCode).toBe(410);
    });

    it('should print translated message', () => {
      const error = new UserNotFoundError(LanguageCodes.DE);
      expect(error.toString()).toContain('Benutzerkonto nicht gefunden');
    });
  });

  describe('AdminRoleNotFoundError', () => {
    it('should create error with English message by default', () => {
      const error = new AdminRoleNotFoundError();
      expect(error.message).toBe('Admin role not found');
      expect(error.name).toBe('AdminRoleNotFoundError');
      expect(error.statusCode).toBe(500);
    });

    it('should create error with French translation', () => {
      const error = new AdminRoleNotFoundError(LanguageCodes.FR);
      expect(error.message).toBe('Rôle administrateur non trouvé');
    });

    it('should create error with German translation', () => {
      const error = new AdminRoleNotFoundError(LanguageCodes.DE);
      expect(error.message).toBe('Administratorrolle nicht gefunden');
    });

    it('should create error with Spanish translation', () => {
      const error = new AdminRoleNotFoundError(LanguageCodes.ES);
      expect(error.message).toBe('Rol de administrador no encontrado');
    });

    it('should print translated message', () => {
      const error = new AdminRoleNotFoundError(LanguageCodes.ES);
      expect(error.toString()).toContain('Rol de administrador no encontrado');
    });
  });

  describe('MemberRoleNotFoundError', () => {
    it('should create error with English message by default', () => {
      const error = new MemberRoleNotFoundError();
      expect(error.message).toBe('Member role not found');
      expect(error.name).toBe('MemberRoleNotFoundError');
      expect(error.statusCode).toBe(500);
    });

    it('should create error with French translation', () => {
      const error = new MemberRoleNotFoundError(LanguageCodes.FR);
      expect(error.message).toBe('Rôle de membre non trouvé');
    });

    it('should create error with German translation', () => {
      const error = new MemberRoleNotFoundError(LanguageCodes.DE);
      expect(error.message).toBe('Mitgliederrolle nicht gefunden');
    });

    it('should create error with Spanish translation', () => {
      const error = new MemberRoleNotFoundError(LanguageCodes.ES);
      expect(error.message).toBe('Rol de miembro no encontrado');
    });

    it('should print translated message', () => {
      const error = new MemberRoleNotFoundError(LanguageCodes.FR);
      expect(error.toString()).toContain('Rôle de membre non trouvé');
    });
  });

  describe('SystemRoleNotFoundError', () => {
    it('should create error with English message by default', () => {
      const error = new SystemRoleNotFoundError();
      expect(error.message).toBe('System role not found');
      expect(error.name).toBe('SystemRoleNotFoundError');
      expect(error.statusCode).toBe(500);
    });

    it('should create error with French translation', () => {
      const error = new SystemRoleNotFoundError(LanguageCodes.FR);
      expect(error.message).toBe('Rôle système non trouvé');
    });

    it('should create error with German translation', () => {
      const error = new SystemRoleNotFoundError(LanguageCodes.DE);
      expect(error.message).toBe('Systemrolle nicht gefunden');
    });

    it('should create error with Spanish translation', () => {
      const error = new SystemRoleNotFoundError(LanguageCodes.ES);
      expect(error.message).toBe('Rol de sistema no encontrado');
    });

    it('should print translated message', () => {
      const error = new SystemRoleNotFoundError(LanguageCodes.DE);
      expect(error.toString()).toContain('Systemrolle nicht gefunden');
    });
  });

  describe('Error inheritance', () => {
    it('should all be instances of Error', () => {
      expect(new UsernameInUseError() instanceof Error).toBe(true);
      expect(new UserNotFoundError() instanceof Error).toBe(true);
      expect(new AdminRoleNotFoundError() instanceof Error).toBe(true);
      expect(new MemberRoleNotFoundError() instanceof Error).toBe(true);
      expect(new SystemRoleNotFoundError() instanceof Error).toBe(true);
    });

    it('should all have proper stack traces', () => {
      const errors = [
        new UsernameInUseError(),
        new UserNotFoundError(),
        new AdminRoleNotFoundError(),
        new MemberRoleNotFoundError(),
        new SystemRoleNotFoundError(),
      ];

      errors.forEach(error => {
        expect(error.stack).toBeDefined();
        expect(error.stack).toContain(error.name);
      });
    });
  });

  describe('Multiple languages support', () => {
    it('should support all languages for all error types', () => {
      const languages = [
        LanguageCodes.EN_US,
        LanguageCodes.EN_GB,
        LanguageCodes.FR,
        LanguageCodes.DE,
        LanguageCodes.ES,
      ];

      const errorClasses = [
        UsernameInUseError,
        UserNotFoundError,
        AdminRoleNotFoundError,
        MemberRoleNotFoundError,
        SystemRoleNotFoundError,
      ];

      errorClasses.forEach(ErrorClass => {
        languages.forEach(lang => {
          const error = new ErrorClass(lang);
          expect(error.message).toBeTruthy();
          expect(error.message.length).toBeGreaterThan(0);
        });
      });
    });
  });
});
