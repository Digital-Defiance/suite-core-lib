import {
  ComponentDefinition,
  ComponentRegistration,
  CoreLanguage,
  createCoreI18nEngine,
  PluginI18nEngine,
} from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from './enumerations/suite-core-string-key';

export const SuiteCoreI18nEngineKey =
  'DigitalDefiance.SuiteCore.I18nEngine' as const;
export const SuiteCoreComponentId = 'suite-core-lib' as const;

// Define the Suite Core component
export const SuiteCoreComponent: ComponentDefinition<SuiteCoreStringKey> = {
  id: SuiteCoreComponentId,
  name: 'Suite Core Library Component',
  stringKeys: Object.values(SuiteCoreStringKey),
};

// Create complete component strings for all supported languages
export const SuiteCoreComponentStrings: Record<
  CoreLanguage,
  Record<SuiteCoreStringKey, string>
> = {
  [CoreLanguage.EnglishUS]: {
    [SuiteCoreStringKey.Auth_AccountLocked]: 'Account is temporarily locked',
    [SuiteCoreStringKey.Auth_InsufficientPermissions]:
      'Insufficient permissions for this action',
    [SuiteCoreStringKey.Auth_InvalidToken]: 'Invalid authentication token',
    [SuiteCoreStringKey.Auth_TokenExpired]: 'Authentication token has expired',
    [SuiteCoreStringKey.Auth_UserNotFound]: 'User account not found',
    [SuiteCoreStringKey.User_AlreadyExists]: 'User already exists',
    [SuiteCoreStringKey.User_CreationFailed]: 'Failed to create user account',
    [SuiteCoreStringKey.User_DeletionFailed]: 'Failed to delete user account',
    [SuiteCoreStringKey.User_NotFound]: 'User not found',
    [SuiteCoreStringKey.User_UpdateFailed]: 'Failed to update user account',
    [SuiteCoreStringKey.Validation_EmailInUse]:
      'Email address is already in use',
    [SuiteCoreStringKey.Validation_InvalidCredentials]:
      'Invalid username or password',
    [SuiteCoreStringKey.Validation_InvalidEmail]:
      'Invalid email address format',
    [SuiteCoreStringKey.Validation_InvalidUsername]: 'Invalid username format',
    [SuiteCoreStringKey.Validation_PasswordTooWeak]:
      'Password does not meet security requirements',
    [SuiteCoreStringKey.Validation_UsernameInUse]: 'Username is already in use',
    [SuiteCoreStringKey.Validation_UsernameOrEmailRequired]:
      'Username or email is required',
    [SuiteCoreStringKey.Error_AccountStatus_Active]: 'Account is active',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
      'Account is locked by an administrator',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      'Account is pending email verification',
  },
  [CoreLanguage.EnglishUK]: {
    [SuiteCoreStringKey.Auth_AccountLocked]: 'Account is temporarily locked',
    [SuiteCoreStringKey.Auth_InsufficientPermissions]:
      'Insufficient permissions for this action',
    [SuiteCoreStringKey.Auth_InvalidToken]: 'Invalid authentication token',
    [SuiteCoreStringKey.Auth_TokenExpired]: 'Authentication token has expired',
    [SuiteCoreStringKey.Auth_UserNotFound]: 'User account not found',
    [SuiteCoreStringKey.User_AlreadyExists]: 'User already exists',
    [SuiteCoreStringKey.User_CreationFailed]: 'Failed to create user account',
    [SuiteCoreStringKey.User_DeletionFailed]: 'Failed to delete user account',
    [SuiteCoreStringKey.User_NotFound]: 'User not found',
    [SuiteCoreStringKey.User_UpdateFailed]: 'Failed to update user account',
    [SuiteCoreStringKey.Validation_EmailInUse]:
      'Email address is already in use',
    [SuiteCoreStringKey.Validation_InvalidCredentials]:
      'Invalid username or password',
    [SuiteCoreStringKey.Validation_InvalidEmail]:
      'Invalid email address format',
    [SuiteCoreStringKey.Validation_InvalidUsername]: 'Invalid username format',
    [SuiteCoreStringKey.Validation_PasswordTooWeak]:
      'Password does not meet security requirements',
    [SuiteCoreStringKey.Validation_UsernameInUse]: 'Username is already in use',
    [SuiteCoreStringKey.Validation_UsernameOrEmailRequired]:
      'Username or email is required',
    [SuiteCoreStringKey.Error_AccountStatus_Active]: 'Account is active',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
      'Account is locked by an administrator',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      'Account is pending email verification',
  },
  [CoreLanguage.French]: {
    [SuiteCoreStringKey.Auth_AccountLocked]:
      'Le compte est temporairement verrouillé',
    [SuiteCoreStringKey.Auth_InsufficientPermissions]:
      'Permissions insuffisantes pour cette action',
    [SuiteCoreStringKey.Auth_InvalidToken]: "Jeton d'authentification invalide",
    [SuiteCoreStringKey.Auth_TokenExpired]:
      "Le jeton d'authentification a expiré",
    [SuiteCoreStringKey.Auth_UserNotFound]: 'Compte utilisateur introuvable',
    [SuiteCoreStringKey.User_AlreadyExists]: "L'utilisateur existe déjà",
    [SuiteCoreStringKey.User_CreationFailed]:
      'Échec de la création du compte utilisateur',
    [SuiteCoreStringKey.User_DeletionFailed]:
      'Échec de la suppression du compte utilisateur',
    [SuiteCoreStringKey.User_NotFound]: 'Utilisateur introuvable',
    [SuiteCoreStringKey.User_UpdateFailed]:
      'Échec de la mise à jour du compte utilisateur',
    [SuiteCoreStringKey.Validation_EmailInUse]:
      "L'adresse e-mail est déjà utilisée",
    [SuiteCoreStringKey.Validation_InvalidCredentials]:
      "Nom d'utilisateur ou mot de passe invalide",
    [SuiteCoreStringKey.Validation_InvalidEmail]:
      "Format d'adresse e-mail invalide",
    [SuiteCoreStringKey.Validation_InvalidUsername]:
      "Format de nom d'utilisateur invalide",
    [SuiteCoreStringKey.Validation_PasswordTooWeak]:
      'Le mot de passe ne respecte pas les exigences de sécurité',
    [SuiteCoreStringKey.Validation_UsernameInUse]:
      "Le nom d'utilisateur est déjà utilisé",
    [SuiteCoreStringKey.Validation_UsernameOrEmailRequired]:
      "Le nom d'utilisateur ou l'e-mail est requis",
    [SuiteCoreStringKey.Error_AccountStatus_Active]: 'Le compte est actif',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
      'Le compte est verrouillé par un administrateur',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      'Le compte est en attente de vérification par e-mail',
  },
  [CoreLanguage.German]: {
    [SuiteCoreStringKey.Auth_AccountLocked]: 'Konto ist vorübergehend gesperrt',
    [SuiteCoreStringKey.Auth_InsufficientPermissions]:
      'Unzureichende Berechtigungen für diese Aktion',
    [SuiteCoreStringKey.Auth_InvalidToken]:
      'Ungültiger Authentifizierungstoken',
    [SuiteCoreStringKey.Auth_TokenExpired]:
      'Authentifizierungstoken ist abgelaufen',
    [SuiteCoreStringKey.Auth_UserNotFound]: 'Benutzerkonto nicht gefunden',
    [SuiteCoreStringKey.User_AlreadyExists]: 'Benutzer existiert bereits',
    [SuiteCoreStringKey.User_CreationFailed]:
      'Fehler beim Erstellen des Benutzerkontos',
    [SuiteCoreStringKey.User_DeletionFailed]:
      'Fehler beim Löschen des Benutzerkontos',
    [SuiteCoreStringKey.User_NotFound]: 'Benutzer nicht gefunden',
    [SuiteCoreStringKey.User_UpdateFailed]:
      'Fehler beim Aktualisieren des Benutzerkontos',
    [SuiteCoreStringKey.Validation_EmailInUse]:
      'E-Mail-Adresse wird bereits verwendet',
    [SuiteCoreStringKey.Validation_InvalidCredentials]:
      'Ungültiger Benutzername oder Passwort',
    [SuiteCoreStringKey.Validation_InvalidEmail]:
      'Ungültiges E-Mail-Adressformat',
    [SuiteCoreStringKey.Validation_InvalidUsername]:
      'Ungültiges Benutzernameformat',
    [SuiteCoreStringKey.Validation_PasswordTooWeak]:
      'Passwort erfüllt nicht die Sicherheitsanforderungen',
    [SuiteCoreStringKey.Validation_UsernameInUse]:
      'Benutzername wird bereits verwendet',
    [SuiteCoreStringKey.Validation_UsernameOrEmailRequired]:
      'Benutzername oder E-Mail ist erforderlich',
    [SuiteCoreStringKey.Error_AccountStatus_Active]: 'Konto ist aktiv',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
      'Konto ist von einem Administrator gesperrt',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      'Konto wartet auf E-Mail-Verifizierung',
  },
  [CoreLanguage.Spanish]: {
    [SuiteCoreStringKey.Auth_AccountLocked]:
      'La cuenta está temporalmente bloqueada',
    [SuiteCoreStringKey.Auth_InsufficientPermissions]:
      'Permisos insuficientes para esta acción',
    [SuiteCoreStringKey.Auth_InvalidToken]: 'Token de autenticación inválido',
    [SuiteCoreStringKey.Auth_TokenExpired]:
      'El token de autenticación ha expirado',
    [SuiteCoreStringKey.Auth_UserNotFound]: 'Cuenta de usuario no encontrada',
    [SuiteCoreStringKey.User_AlreadyExists]: 'El usuario ya existe',
    [SuiteCoreStringKey.User_CreationFailed]:
      'Error al crear la cuenta de usuario',
    [SuiteCoreStringKey.User_DeletionFailed]:
      'Error al eliminar la cuenta de usuario',
    [SuiteCoreStringKey.User_NotFound]: 'Usuario no encontrado',
    [SuiteCoreStringKey.User_UpdateFailed]:
      'Error al actualizar la cuenta de usuario',
    [SuiteCoreStringKey.Validation_EmailInUse]:
      'La dirección de correo electrónico ya está en uso',
    [SuiteCoreStringKey.Validation_InvalidCredentials]:
      'Nombre de usuario o contraseña inválidos',
    [SuiteCoreStringKey.Validation_InvalidEmail]:
      'Formato de dirección de correo electrónico inválido',
    [SuiteCoreStringKey.Validation_InvalidUsername]:
      'Formato de nombre de usuario inválido',
    [SuiteCoreStringKey.Validation_PasswordTooWeak]:
      'La contraseña no cumple con los requisitos de seguridad',
    [SuiteCoreStringKey.Validation_UsernameInUse]:
      'El nombre de usuario ya está en uso',
    [SuiteCoreStringKey.Validation_UsernameOrEmailRequired]:
      'Se requiere nombre de usuario o correo electrónico',
    [SuiteCoreStringKey.Error_AccountStatus_Active]: 'La cuenta está activa',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
      'La cuenta está bloqueada por un administrador',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      'La cuenta está pendiente de verificación por correo electrónico',
  },
  [CoreLanguage.MandarinChinese]: {
    [SuiteCoreStringKey.Auth_AccountLocked]: '账户暂时被锁定',
    [SuiteCoreStringKey.Auth_InsufficientPermissions]:
      '权限不足，无法执行此操作',
    [SuiteCoreStringKey.Auth_InvalidToken]: '无效的认证令牌',
    [SuiteCoreStringKey.Auth_TokenExpired]: '认证令牌已过期',
    [SuiteCoreStringKey.Auth_UserNotFound]: '未找到用户账户',
    [SuiteCoreStringKey.User_AlreadyExists]: '用户已存在',
    [SuiteCoreStringKey.User_CreationFailed]: '创建用户账户失败',
    [SuiteCoreStringKey.User_DeletionFailed]: '删除用户账户失败',
    [SuiteCoreStringKey.User_NotFound]: '未找到用户',
    [SuiteCoreStringKey.User_UpdateFailed]: '更新用户账户失败',
    [SuiteCoreStringKey.Validation_EmailInUse]: '电子邮件地址已被使用',
    [SuiteCoreStringKey.Validation_InvalidCredentials]: '无效的用户名或密码',
    [SuiteCoreStringKey.Validation_InvalidEmail]: '无效的电子邮件地址格式',
    [SuiteCoreStringKey.Validation_InvalidUsername]: '无效的用户名格式',
    [SuiteCoreStringKey.Validation_PasswordTooWeak]: '密码不符合安全要求',
    [SuiteCoreStringKey.Validation_UsernameInUse]: '用户名已被使用',
    [SuiteCoreStringKey.Validation_UsernameOrEmailRequired]:
      '需要用户名或电子邮件',
    [SuiteCoreStringKey.Error_AccountStatus_Active]: '账户处于激活状态',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]: '账户被管理员锁定',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      '账户待电子邮件验证',
  },
  [CoreLanguage.Japanese]: {
    [SuiteCoreStringKey.Auth_AccountLocked]:
      'アカウントが一時的にロックされています',
    [SuiteCoreStringKey.Auth_InsufficientPermissions]:
      'この操作に必要な権限がありません',
    [SuiteCoreStringKey.Auth_InvalidToken]: '無効な認証トークン',
    [SuiteCoreStringKey.Auth_TokenExpired]:
      '認証トークンの有効期限が切れています',
    [SuiteCoreStringKey.Auth_UserNotFound]:
      'ユーザーアカウントが見つかりません',
    [SuiteCoreStringKey.User_AlreadyExists]: 'ユーザーは既に存在します',
    [SuiteCoreStringKey.User_CreationFailed]:
      'ユーザーアカウントの作成に失敗しました',
    [SuiteCoreStringKey.User_DeletionFailed]:
      'ユーザーアカウントの削除に失敗しました',
    [SuiteCoreStringKey.User_NotFound]: 'ユーザーが見つかりません',
    [SuiteCoreStringKey.User_UpdateFailed]:
      'ユーザーアカウントの更新に失敗しました',
    [SuiteCoreStringKey.Validation_EmailInUse]:
      'メールアドレスは既に使用されています',
    [SuiteCoreStringKey.Validation_InvalidCredentials]:
      '無効なユーザー名またはパスワード',
    [SuiteCoreStringKey.Validation_InvalidEmail]: '無効なメールアドレス形式',
    [SuiteCoreStringKey.Validation_InvalidUsername]: '無効なユーザー名形式',
    [SuiteCoreStringKey.Validation_PasswordTooWeak]:
      'パスワードがセキュリティ要件を満たしていません',
    [SuiteCoreStringKey.Validation_UsernameInUse]:
      'ユーザー名は既に使用されています',
    [SuiteCoreStringKey.Validation_UsernameOrEmailRequired]:
      'ユーザー名またはメールが必要です',
    [SuiteCoreStringKey.Error_AccountStatus_Active]:
      'アカウントはアクティブです',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
      'アカウントは管理者によりロックされています',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      'アカウントはメール認証待ちです',
  },
  [CoreLanguage.Ukrainian]: {
    [SuiteCoreStringKey.Auth_AccountLocked]:
      'Обліковий запис тимчасово заблоковано',
    [SuiteCoreStringKey.Auth_InsufficientPermissions]:
      'Недостатньо прав для виконання цієї дії',
    [SuiteCoreStringKey.Auth_InvalidToken]: 'Недійсний токен автентифікації',
    [SuiteCoreStringKey.Auth_TokenExpired]:
      'Термін дії токена автентифікації минув',
    [SuiteCoreStringKey.Auth_UserNotFound]:
      'Обліковий запис користувача не знайдено',
    [SuiteCoreStringKey.User_AlreadyExists]: 'Користувач вже існує',
    [SuiteCoreStringKey.User_CreationFailed]:
      'Не вдалося створити обліковий запис користувача',
    [SuiteCoreStringKey.User_DeletionFailed]:
      'Не вдалося видалити обліковий запис користувача',
    [SuiteCoreStringKey.User_NotFound]: 'Користувача не знайдено',
    [SuiteCoreStringKey.User_UpdateFailed]:
      'Не вдалося оновити обліковий запис користувача',
    [SuiteCoreStringKey.Validation_EmailInUse]:
      'Адреса електронної пошти вже використовується',
    [SuiteCoreStringKey.Validation_InvalidCredentials]:
      "Недійсне ім'я користувача або пароль",
    [SuiteCoreStringKey.Validation_InvalidEmail]:
      'Недійсний формат адреси електронної пошти',
    [SuiteCoreStringKey.Validation_InvalidUsername]:
      'Недійсний формат імені користувача',
    [SuiteCoreStringKey.Validation_PasswordTooWeak]:
      'Пароль не відповідає вимогам безпеки',
    [SuiteCoreStringKey.Validation_UsernameInUse]:
      "Ім'я користувача вже використовується",
    [SuiteCoreStringKey.Validation_UsernameOrEmailRequired]:
      "Потрібно вказати ім'я користувача або електронну пошту",
    [SuiteCoreStringKey.Error_AccountStatus_Active]: 'Обліковий запис активний',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
      'Обліковий запис заблоковано адміністратором',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      'Обліковий запис очікує підтвердження електронної пошти',
  },
};

// Create the component registration
export const SuiteCoreComponentRegistration: ComponentRegistration<
  SuiteCoreStringKey,
  CoreLanguage
> = {
  component: SuiteCoreComponent,
  strings: SuiteCoreComponentStrings,
};

/**
 * Initialize or get the User System i18n engine instance
 */
export function initSuiteCoreI18nEngine(
  instanceKey?: string,
): PluginI18nEngine<CoreLanguage> {
  const key = instanceKey || SuiteCoreI18nEngineKey;

  // Check if instance already exists
  let engine: PluginI18nEngine<CoreLanguage>;

  if (PluginI18nEngine.hasInstance(key)) {
    engine = PluginI18nEngine.getInstance<CoreLanguage>(key);
  } else {
    engine = createCoreI18nEngine(key);

    // Register the user system component
    const validationResult = engine.registerComponent(
      SuiteCoreComponentRegistration,
    );

    if (!validationResult.isValid) {
      console.warn(
        'User System component registration incomplete:',
        validationResult.missingKeys,
      );
    }
  }

  return engine;
}

// Singleton instance management
let _SuiteCoreI18nEngine: PluginI18nEngine<CoreLanguage> | null = null;

/**
 * Get the User System i18n engine instance (singleton)
 */
export function getSuiteCoreI18nEngine(): PluginI18nEngine<CoreLanguage> {
  if (!_SuiteCoreI18nEngine) {
    _SuiteCoreI18nEngine = initSuiteCoreI18nEngine();
  }
  return _SuiteCoreI18nEngine;
}

/**
 * Reset the User System i18n engine instance
 */
export function resetSuiteCoreI18nEngine(): void {
  if (_SuiteCoreI18nEngine) {
    PluginI18nEngine.removeInstance(SuiteCoreI18nEngineKey);
    _SuiteCoreI18nEngine = null;
  }
}

/**
 * Helper function to get user system translations
 */
export function getSuiteCoreTranslation(
  key: SuiteCoreStringKey,
  variables?: Record<string, string | number>,
  language?: CoreLanguage,
): string {
  const engine = getSuiteCoreI18nEngine();
  return engine.translate(SuiteCoreComponentId, key, variables, language);
}

/**
 * Safe translation helper that provides fallback
 */
export function safeGetSuiteCoreTranslation(
  key: SuiteCoreStringKey,
  variables?: Record<string, string | number>,
  language?: CoreLanguage,
): string {
  const engine = getSuiteCoreI18nEngine();
  return engine.safeTranslate(SuiteCoreComponentId, key, variables, language);
}

/**
 * Register the User System component with an existing i18n engine
 */
export function registerSuiteCoreComponent(
  engine: PluginI18nEngine<CoreLanguage>,
): void {
  const validationResult = engine.registerComponent(
    SuiteCoreComponentRegistration,
  );

  if (!validationResult.isValid) {
    console.warn(
      'User System component registration incomplete:',
      validationResult.missingKeys,
    );
  }
}

// Default instance export
export const SuiteCoreI18nEngine = getSuiteCoreI18nEngine();
