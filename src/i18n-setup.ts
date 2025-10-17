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
    [SuiteCoreStringKey.Validation_InvalidJwtToken]: 'Invalid JWT token',
    [SuiteCoreStringKey.Validation_InvalidToken]: 'Invalid token',
    [SuiteCoreStringKey.Validation_InvalidUsername]: 'Invalid username format',
    [SuiteCoreStringKey.Validation_PasswordTooWeak]:
      'Password does not meet security requirements',
    [SuiteCoreStringKey.Validation_TokenExpired]: 'Token has expired',
    [SuiteCoreStringKey.Validation_UsernameInUse]: 'Username is already in use',
    [SuiteCoreStringKey.Validation_UsernameOrEmailRequired]:
      'Username or email is required',
    [SuiteCoreStringKey.Validation_ExpressValidationFailed]:
      'Express validation failed',
    [SuiteCoreStringKey.Validation_MongooseValidationError]:
      'Mongoose validation error occurred',
    [SuiteCoreStringKey.Error_AccountStatus_Active]: 'Account is active',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
      'Account is locked by an administrator',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      'Account is pending email verification',
    [SuiteCoreStringKey.Common_UnexpectedError]: 'An unexpected error occurred',
    [SuiteCoreStringKey.Common_Ready]: 'Ready',
    [SuiteCoreStringKey.Common_Stopping]: 'Stopping',
    [SuiteCoreStringKey.Common_Stopped]: 'Stopped',
    [SuiteCoreStringKey.Common_Connecting]: 'Connecting',
    [SuiteCoreStringKey.Common_Disconnected]: 'Disconnected',
    [SuiteCoreStringKey.Common_MongoDB]: 'MongoDB',
    [SuiteCoreStringKey.Common_ApplicationAndDatabase]: 'Application and Database',
    [SuiteCoreStringKey.Common_Unauthorized]: 'Unauthorized',
    [SuiteCoreStringKey.Common_NoActiveRequest]: 'No active request',
    [SuiteCoreStringKey.Common_NoUserOnRequest]: 'No user on request',
    [SuiteCoreStringKey.Common_NoActiveResponse]: 'No active response',
    
    [SuiteCoreStringKey.Error_EngineAlreadySet]: 'I18n engine already set',
    [SuiteCoreStringKey.Error_EngineNotSet]: 'I18n engine not set',
    [SuiteCoreStringKey.Error_LengthExceedsMaximum]: 'Length exceeds maximum',
    [SuiteCoreStringKey.Error_LengthIsInvalidType]: 'Length is invalid type',
    [SuiteCoreStringKey.Error_FailedToStartApplication]: 'Failed to start application',
    [SuiteCoreStringKey.Error_InvalidModelKeyTemplate]: 'Invalid model key: {modelKey}',
    [SuiteCoreStringKey.Error_ModelNotRegisteredTemplate]: 'Model not registered: {modelName}',
    [SuiteCoreStringKey.Error_FailedToCreateRoleTemplate]: 'Failed to create {NAME} role',
    
    [SuiteCoreStringKey.ValidationError]: 'Validation Error',
    [SuiteCoreStringKey.Validation_MissingValidatedData]: 'Missing validated data',
    [SuiteCoreStringKey.Validation_MissingValidatedDataForField]: 'Missing validated data for field: {field}',
    [SuiteCoreStringKey.Validation_MnemonicRegex]: 'Invalid mnemonic format',
    
    [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]: 'No MongoDB client found, falling back',
    [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]: 'Transaction failed (transient): {error}',
    [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]: 'Transaction timeout after {timeMs}ms',
    [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]: 'Starting database initialization',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]: 'Failed to initialize user database (timeout after {timeMs}ms)',
    [SuiteCoreStringKey.Admin_EnvNotSetTemplate]: 'Environment variable not set: {variable}'
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
    [SuiteCoreStringKey.Validation_InvalidJwtToken]: 'Invalid JWT token',
    [SuiteCoreStringKey.Validation_InvalidToken]: 'Invalid token',
    [SuiteCoreStringKey.Validation_InvalidUsername]: 'Invalid username format',
    [SuiteCoreStringKey.Validation_PasswordTooWeak]:
      'Password does not meet security requirements',
    [SuiteCoreStringKey.Validation_TokenExpired]: 'Token has expired',
    [SuiteCoreStringKey.Validation_UsernameInUse]: 'Username is already in use',
    [SuiteCoreStringKey.Validation_UsernameOrEmailRequired]:
      'Username or email is required',
    [SuiteCoreStringKey.Validation_ExpressValidationFailed]:
      'Express validation failed',
    [SuiteCoreStringKey.Validation_MongooseValidationError]:
      'Mongoose validation error occurred',
    [SuiteCoreStringKey.Error_AccountStatus_Active]: 'Account is active',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
      'Account is locked by an administrator',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      'Account is pending email verification',
    [SuiteCoreStringKey.Common_UnexpectedError]: 'An unexpected error occurred',
    [SuiteCoreStringKey.Common_Ready]: 'Ready',
    [SuiteCoreStringKey.Common_Stopping]: 'Stopping',
    [SuiteCoreStringKey.Common_Stopped]: 'Stopped',
    [SuiteCoreStringKey.Common_Connecting]: 'Connecting',
    [SuiteCoreStringKey.Common_Disconnected]: 'Disconnected',
    [SuiteCoreStringKey.Common_MongoDB]: 'MongoDB',
    [SuiteCoreStringKey.Common_ApplicationAndDatabase]: 'Application and Database',
    [SuiteCoreStringKey.Common_Unauthorized]: 'Unauthorised',
    [SuiteCoreStringKey.Common_NoActiveRequest]: 'No active request',
    [SuiteCoreStringKey.Common_NoUserOnRequest]: 'No user on request',
    [SuiteCoreStringKey.Common_NoActiveResponse]: 'No active response',
    
    [SuiteCoreStringKey.Error_EngineAlreadySet]: 'I18n engine already set',
    [SuiteCoreStringKey.Error_EngineNotSet]: 'I18n engine not set',
    [SuiteCoreStringKey.Error_LengthExceedsMaximum]: 'Length exceeds maximum',
    [SuiteCoreStringKey.Error_LengthIsInvalidType]: 'Length is invalid type',
    [SuiteCoreStringKey.Error_FailedToStartApplication]: 'Failed to start application',
    [SuiteCoreStringKey.Error_InvalidModelKeyTemplate]: 'Invalid model key: {modelKey}',
    [SuiteCoreStringKey.Error_ModelNotRegisteredTemplate]: 'Model not registered: {modelName}',
    [SuiteCoreStringKey.Error_FailedToCreateRoleTemplate]: 'Failed to create {NAME} role',
    
    [SuiteCoreStringKey.ValidationError]: 'Validation Error',
    [SuiteCoreStringKey.Validation_MissingValidatedData]: 'Missing validated data',
    [SuiteCoreStringKey.Validation_MissingValidatedDataForField]: 'Missing validated data for field: {field}',
    [SuiteCoreStringKey.Validation_MnemonicRegex]: 'Invalid mnemonic format',
    
    [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]: 'No MongoDB client found, falling back',
    [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]: 'Transaction failed (transient): {error}',
    [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]: 'Transaction timeout after {timeMs}ms',
    [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]: 'Starting database initialization',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]: 'Failed to initialize user database (timeout after {timeMs}ms)',
    [SuiteCoreStringKey.Admin_EnvNotSetTemplate]: 'Environment variable not set: {variable}'
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
    [SuiteCoreStringKey.Validation_InvalidJwtToken]: 'Token JWT invalide',
    [SuiteCoreStringKey.Validation_InvalidToken]: 'Jeton invalide',
    [SuiteCoreStringKey.Validation_InvalidUsername]:
      "Format de nom d'utilisateur invalide",
    [SuiteCoreStringKey.Validation_PasswordTooWeak]:
      'Le mot de passe ne respecte pas les exigences de sécurité',
    [SuiteCoreStringKey.Validation_TokenExpired]: 'Le token a expiré',
    [SuiteCoreStringKey.Validation_UsernameInUse]:
      "Le nom d'utilisateur est déjà utilisé",
    [SuiteCoreStringKey.Validation_UsernameOrEmailRequired]:
      "Le nom d'utilisateur ou l'e-mail est requis",
    [SuiteCoreStringKey.Validation_ExpressValidationFailed]:
      'Échec de la validation Express',
    [SuiteCoreStringKey.Validation_MongooseValidationError]:
      'Une erreur de validation Mongoose s\'est produite',
    [SuiteCoreStringKey.Error_AccountStatus_Active]: 'Le compte est actif',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
      'Le compte est verrouillé par un administrateur',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      'Le compte est en attente de vérification par e-mail',
    [SuiteCoreStringKey.Common_UnexpectedError]: 'Une erreur inattendue s\'est produite',
    [SuiteCoreStringKey.Common_Ready]: 'Prêt',
    [SuiteCoreStringKey.Common_Stopping]: 'Arrêt',
    [SuiteCoreStringKey.Common_Stopped]: 'Arrêté',
    [SuiteCoreStringKey.Common_Connecting]: 'Connexion',
    [SuiteCoreStringKey.Common_Disconnected]: 'Déconnecté',
    [SuiteCoreStringKey.Common_MongoDB]: 'MongoDB',
    [SuiteCoreStringKey.Common_ApplicationAndDatabase]: 'Application et Base de Données',
    [SuiteCoreStringKey.Common_Unauthorized]: 'Non autorisé',
    [SuiteCoreStringKey.Common_NoActiveRequest]: 'Aucune requête active',
    [SuiteCoreStringKey.Common_NoUserOnRequest]: 'Aucun utilisateur sur la requête',
    [SuiteCoreStringKey.Common_NoActiveResponse]: 'Aucune réponse active',
    
    [SuiteCoreStringKey.Error_EngineAlreadySet]: 'Moteur i18n déjà configuré',
    [SuiteCoreStringKey.Error_EngineNotSet]: 'Moteur i18n non configuré',
    [SuiteCoreStringKey.Error_LengthExceedsMaximum]: 'La longueur dépasse le maximum',
    [SuiteCoreStringKey.Error_LengthIsInvalidType]: 'La longueur est de type invalide',
    [SuiteCoreStringKey.Error_FailedToStartApplication]: 'Échec du démarrage de l\'application',
    [SuiteCoreStringKey.Error_InvalidModelKeyTemplate]: 'Clé de modèle invalide : {modelKey}',
    [SuiteCoreStringKey.Error_ModelNotRegisteredTemplate]: 'Modèle non enregistré : {modelName}',
    [SuiteCoreStringKey.Error_FailedToCreateRoleTemplate]: 'Échec de la création du rôle {NAME}',

    [SuiteCoreStringKey.ValidationError]: 'Erreur de Validation',
    [SuiteCoreStringKey.Validation_MissingValidatedData]: 'Données validées manquantes',
    [SuiteCoreStringKey.Validation_MissingValidatedDataForField]: 'Données validées manquantes pour le champ: {field}',
    [SuiteCoreStringKey.Validation_MnemonicRegex]: 'Format de mnémonique invalide',
    
    [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]: 'Aucun client MongoDB trouvé, utilisation de l\'alternative',
    [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]: 'Transaction échouée (transitoire): {error}',
    [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]: 'Délai d\'attente de transaction après {timeMs}ms',
    [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]: 'Démarrage de l\'initialisation de la base de données',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]: 'Échec de l\'initialisation de la base de données utilisateur (délai d\'attente après {timeMs}ms)',
    [SuiteCoreStringKey.Admin_EnvNotSetTemplate]: 'Variable d\'environnement non définie: {variable}'
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
    [SuiteCoreStringKey.Validation_InvalidJwtToken]: 'Ungültiger JWT-Token',
    [SuiteCoreStringKey.Validation_InvalidToken]: 'Ungültiger Token',
    [SuiteCoreStringKey.Validation_InvalidUsername]:
      'Ungültiges Benutzernameformat',
    [SuiteCoreStringKey.Validation_PasswordTooWeak]:
      'Passwort erfüllt nicht die Sicherheitsanforderungen',
    [SuiteCoreStringKey.Validation_TokenExpired]: 'Token ist abgelaufen',
    [SuiteCoreStringKey.Validation_UsernameInUse]:
      'Benutzername wird bereits verwendet',
    [SuiteCoreStringKey.Validation_UsernameOrEmailRequired]:
      'Benutzername oder E-Mail ist erforderlich',
    [SuiteCoreStringKey.Validation_ExpressValidationFailed]:
      'Express-Validierung fehlgeschlagen',
    [SuiteCoreStringKey.Validation_MongooseValidationError]:
      'Mongoose-Validierungsfehler aufgetreten',
    [SuiteCoreStringKey.Error_AccountStatus_Active]: 'Konto ist aktiv',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
      'Konto ist von einem Administrator gesperrt',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      'Konto wartet auf E-Mail-Verifizierung',
    [SuiteCoreStringKey.Common_UnexpectedError]: 'Ein unerwarteter Fehler ist aufgetreten',
    [SuiteCoreStringKey.Common_Ready]: 'Bereit',
    [SuiteCoreStringKey.Common_Stopping]: 'Anhalten',
    [SuiteCoreStringKey.Common_Stopped]: 'Angehalten',
    [SuiteCoreStringKey.Common_Connecting]: 'Verbinden',
    [SuiteCoreStringKey.Common_Disconnected]: 'Getrennt',
    [SuiteCoreStringKey.Common_MongoDB]: 'MongoDB',
    [SuiteCoreStringKey.Common_ApplicationAndDatabase]: 'Anwendung und Datenbank',
    [SuiteCoreStringKey.Common_Unauthorized]: 'Nicht autorisiert',
    [SuiteCoreStringKey.Common_NoActiveRequest]: 'Keine aktive Anfrage',
    [SuiteCoreStringKey.Common_NoUserOnRequest]: 'Kein Benutzer in der Anfrage',
    [SuiteCoreStringKey.Common_NoActiveResponse]: 'Keine aktive Antwort',
    
    [SuiteCoreStringKey.Error_EngineAlreadySet]: 'I18n-Engine bereits gesetzt',
    [SuiteCoreStringKey.Error_EngineNotSet]: 'I18n-Engine nicht gesetzt',
    [SuiteCoreStringKey.Error_LengthExceedsMaximum]: 'Länge überschreitet Maximum',
    [SuiteCoreStringKey.Error_LengthIsInvalidType]: 'Länge ist ungültiger Typ',
    [SuiteCoreStringKey.Error_FailedToStartApplication]: 'Fehler beim Starten der Anwendung',
    [SuiteCoreStringKey.Error_InvalidModelKeyTemplate]: 'Ungültiger Modellschlüssel: {modelKey}',
    [SuiteCoreStringKey.Error_ModelNotRegisteredTemplate]: 'Modell nicht registriert: {modelName}',
    [SuiteCoreStringKey.Error_FailedToCreateRoleTemplate]: 'Fehler beim Erstellen der Rolle {NAME}',

    [SuiteCoreStringKey.ValidationError]: 'Validierungsfehler',
    [SuiteCoreStringKey.Validation_MissingValidatedData]: 'Fehlende validierte Daten',
    [SuiteCoreStringKey.Validation_MissingValidatedDataForField]: 'Fehlende validierte Daten für Feld: {field}',
    [SuiteCoreStringKey.Validation_MnemonicRegex]: 'Ungültiges Mnemoformat',
    
    [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]: 'Kein MongoDB-Client gefunden, wechsle zu Fallback',
    [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]: 'Transaktion fehlgeschlagen (transient): {error}',
    [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]: 'Transaktionszeitüberschreitung nach {timeMs}ms',
    [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]: 'Starte Datenbankinitialisierung',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]: 'Fehler beim Initialisieren der Benutzerdatenbank (Zeitüberschreitung nach {timeMs}ms)',
    [SuiteCoreStringKey.Admin_EnvNotSetTemplate]: 'Umgebungsvariable nicht gesetzt: {variable}',
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
    [SuiteCoreStringKey.Validation_InvalidJwtToken]: 'Token JWT inválido',
    [SuiteCoreStringKey.Validation_InvalidToken]: 'Token inválido',
    [SuiteCoreStringKey.Validation_InvalidUsername]:
      'Formato de nombre de usuario inválido',
    [SuiteCoreStringKey.Validation_PasswordTooWeak]:
      'La contraseña no cumple con los requisitos de seguridad',
    [SuiteCoreStringKey.Validation_TokenExpired]: 'El token ha expirado',
    [SuiteCoreStringKey.Validation_UsernameInUse]:
      'El nombre de usuario ya está en uso',
    [SuiteCoreStringKey.Validation_UsernameOrEmailRequired]:
      'Se requiere nombre de usuario o correo electrónico',
    [SuiteCoreStringKey.Validation_ExpressValidationFailed]:
      'Express validación fallida',
    [SuiteCoreStringKey.Validation_MongooseValidationError]:
      'Error de validación de Mongoose',
    [SuiteCoreStringKey.Error_AccountStatus_Active]: 'La cuenta está activa',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
      'La cuenta está bloqueada por un administrador',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      'La cuenta está pendiente de verificación por correo electrónico',
    [SuiteCoreStringKey.Common_UnexpectedError]: 'Ocurrió un error inesperado',
    [SuiteCoreStringKey.Common_Ready]: 'Listo',
    [SuiteCoreStringKey.Common_Stopping]: 'Deteniendo',
    [SuiteCoreStringKey.Common_Stopped]: 'Detenido',
    [SuiteCoreStringKey.Common_Connecting]: 'Conectando',
    [SuiteCoreStringKey.Common_Disconnected]: 'Desconectado',
    [SuiteCoreStringKey.Common_MongoDB]: 'MongoDB',
    [SuiteCoreStringKey.Common_ApplicationAndDatabase]: 'Aplicación y Base de Datos',
    [SuiteCoreStringKey.Common_Unauthorized]: 'No autorizado',
    [SuiteCoreStringKey.Common_NoActiveRequest]: 'No hay solicitud activa',
    [SuiteCoreStringKey.Common_NoUserOnRequest]: 'No hay usuario en la solicitud',
    [SuiteCoreStringKey.Common_NoActiveResponse]: 'No hay respuesta activa',
    
    [SuiteCoreStringKey.Error_EngineAlreadySet]: 'Motor i18n ya configurado',
    [SuiteCoreStringKey.Error_EngineNotSet]: 'Motor i18n no configurado',
    [SuiteCoreStringKey.Error_LengthExceedsMaximum]: 'La longitud excede el máximo',
    [SuiteCoreStringKey.Error_LengthIsInvalidType]: 'La longitud es de tipo inválido',
    [SuiteCoreStringKey.Error_FailedToStartApplication]: 'Error al iniciar la aplicación',
    [SuiteCoreStringKey.Error_InvalidModelKeyTemplate]: 'Clave de modelo inválida: {modelKey}',
    [SuiteCoreStringKey.Error_ModelNotRegisteredTemplate]: 'Modelo no registrado: {modelName}',
    [SuiteCoreStringKey.Error_FailedToCreateRoleTemplate]: 'Error al crear el rol {NAME}',

    [SuiteCoreStringKey.ValidationError]: 'Error de Validación',
    [SuiteCoreStringKey.Validation_MissingValidatedData]: 'Faltan datos validados',
    [SuiteCoreStringKey.Validation_MissingValidatedDataForField]: 'Faltan datos validados para el campo: {field}',
    [SuiteCoreStringKey.Validation_MnemonicRegex]: 'Formato de mnemónico inválido',
    
    [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]: 'No se encontró cliente MongoDB, usando alternativa',
    [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]: 'Transacción falló (transitorio): {error}',
    [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]: 'Tiempo de espera de transacción después de {timeMs}ms',
    [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]: 'Iniciando inicialización de base de datos',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]: 'Error al inicializar base de datos de usuario (tiempo de espera después de {timeMs}ms)',
    [SuiteCoreStringKey.Admin_EnvNotSetTemplate]: 'Variable de entorno no configurada: {variable}'
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
    [SuiteCoreStringKey.Validation_InvalidJwtToken]: '无效的JWT令牌',
    [SuiteCoreStringKey.Validation_InvalidToken]: '无效的令牌',
    [SuiteCoreStringKey.Validation_InvalidUsername]: '无效的用户名格式',
    [SuiteCoreStringKey.Validation_PasswordTooWeak]: '密码不符合安全要求',
    [SuiteCoreStringKey.Validation_TokenExpired]: '令牌已过期',
    [SuiteCoreStringKey.Validation_UsernameInUse]: '用户名已被使用',
    [SuiteCoreStringKey.Validation_UsernameOrEmailRequired]:
      '需要用户名或电子邮件',
    [SuiteCoreStringKey.Validation_ExpressValidationFailed]:
      'Express验证失败',
    [SuiteCoreStringKey.Validation_MongooseValidationError]:
      '发生了Mongoose验证错误',
    [SuiteCoreStringKey.Error_AccountStatus_Active]: '账户处于激活状态',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]: '账户被管理员锁定',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      '账户待电子邮件验证',
    [SuiteCoreStringKey.Common_UnexpectedError]: '发生了意外错误',
    [SuiteCoreStringKey.Common_Ready]: '就绪',
    [SuiteCoreStringKey.Common_Stopping]: '正在停止',
    [SuiteCoreStringKey.Common_Stopped]: '已停止',
    [SuiteCoreStringKey.Common_Connecting]: '正在连接',
    [SuiteCoreStringKey.Common_Disconnected]: '已断开连接',
    [SuiteCoreStringKey.Common_MongoDB]: 'MongoDB',
    [SuiteCoreStringKey.Common_ApplicationAndDatabase]: '应用程序和数据库',
    [SuiteCoreStringKey.Common_Unauthorized]: '未授权',
    [SuiteCoreStringKey.Common_NoActiveRequest]: '没有活动请求',
    [SuiteCoreStringKey.Common_NoUserOnRequest]: '请求中没有用户',
    [SuiteCoreStringKey.Common_NoActiveResponse]: '没有活动响应',
    
    [SuiteCoreStringKey.Error_EngineAlreadySet]: 'i18n引擎已设置',
    [SuiteCoreStringKey.Error_EngineNotSet]: 'i18n引擎未设置',
    [SuiteCoreStringKey.Error_LengthExceedsMaximum]: '长度超过最大值',
    [SuiteCoreStringKey.Error_LengthIsInvalidType]: '长度类型无效',
    [SuiteCoreStringKey.Error_FailedToStartApplication]: '启动应用程序失败',
    [SuiteCoreStringKey.Error_InvalidModelKeyTemplate]: '无效的模型键：{modelKey}',
    [SuiteCoreStringKey.Error_ModelNotRegisteredTemplate]: '模型未注册：{modelName}',
    [SuiteCoreStringKey.Error_FailedToCreateRoleTemplate]: '创建{NAME}角色失败',

    [SuiteCoreStringKey.ValidationError]: '验证错误',
    [SuiteCoreStringKey.Validation_MissingValidatedData]: '缺少验证数据',
    [SuiteCoreStringKey.Validation_MissingValidatedDataForField]: '字段缺少验证数据：{field}',
    [SuiteCoreStringKey.Validation_MnemonicRegex]: '助记词格式无效',
    
    [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]: '未找到MongoDB客户端，使用备用方案',
    [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]: '事务失败（临时）：{error}',
    [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]: '事务在{timeMs}毫秒后超时',
    [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]: '开始数据库初始化',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]: '初始化用户数据库失败（{timeMs}毫秒后超时）',
    [SuiteCoreStringKey.Admin_EnvNotSetTemplate]: '环境变量未设置：{variable}'
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
    [SuiteCoreStringKey.Validation_InvalidJwtToken]: '無効なJWTトークン',
    [SuiteCoreStringKey.Validation_InvalidToken]: '無効なトークン',
    [SuiteCoreStringKey.Validation_InvalidUsername]: '無効なユーザー名形式',
    [SuiteCoreStringKey.Validation_PasswordTooWeak]:
      'パスワードがセキュリティ要件を満たしていません',
    [SuiteCoreStringKey.Validation_TokenExpired]: 'トークンの有効期限が切れています',
    [SuiteCoreStringKey.Validation_UsernameInUse]:
      'ユーザー名は既に使用されています',
    [SuiteCoreStringKey.Validation_UsernameOrEmailRequired]:
      'ユーザー名またはメールが必要です',
    [SuiteCoreStringKey.Validation_ExpressValidationFailed]:
      'Expressの検証に失敗しました',
    [SuiteCoreStringKey.Validation_MongooseValidationError]:
      'Mongooseの検証エラーが発生しました',
    [SuiteCoreStringKey.Error_AccountStatus_Active]:
      'アカウントはアクティブです',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
      'アカウントは管理者によりロックされています',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      'アカウントはメール認証待ちです',
    [SuiteCoreStringKey.Common_UnexpectedError]: '予期しないエラーが発生しました',
    [SuiteCoreStringKey.Common_Ready]: '準備完了',
    [SuiteCoreStringKey.Common_Stopping]: '停止中',
    [SuiteCoreStringKey.Common_Stopped]: '停止しました',
    [SuiteCoreStringKey.Common_Connecting]: '接続中',
    [SuiteCoreStringKey.Common_Disconnected]: '切断されました',
    [SuiteCoreStringKey.Common_MongoDB]: 'MongoDB',
    [SuiteCoreStringKey.Common_ApplicationAndDatabase]: 'アプリケーションとデータベース',
    [SuiteCoreStringKey.Common_Unauthorized]: '未認証',
    [SuiteCoreStringKey.Common_NoActiveRequest]: 'アクティブなリクエストがありません',
    [SuiteCoreStringKey.Common_NoUserOnRequest]: 'リクエストにユーザーがいません',
    [SuiteCoreStringKey.Common_NoActiveResponse]: 'アクティブなレスポンスがありません',
    
    [SuiteCoreStringKey.Error_EngineAlreadySet]: 'i18nエンジンは既に設定されています',
    [SuiteCoreStringKey.Error_EngineNotSet]: 'i18nエンジンが設定されていません',
    [SuiteCoreStringKey.Error_LengthExceedsMaximum]: '長さが最大値を超えています',
    [SuiteCoreStringKey.Error_LengthIsInvalidType]: '長さの型が無効です',
    [SuiteCoreStringKey.Error_FailedToStartApplication]: 'アプリケーションの起動に失敗しました',
    [SuiteCoreStringKey.Error_InvalidModelKeyTemplate]: '無効なモデルキー: {modelKey}',
    [SuiteCoreStringKey.Error_ModelNotRegisteredTemplate]: 'モデルが登録されていません: {modelName}',
    [SuiteCoreStringKey.Error_FailedToCreateRoleTemplate]: '{NAME}ロールの作成に失敗しました',

    [SuiteCoreStringKey.ValidationError]: '検証エラー',
    [SuiteCoreStringKey.Validation_MissingValidatedData]: '検証済みデータが不足しています',
    [SuiteCoreStringKey.Validation_MissingValidatedDataForField]: 'フィールドの検証済みデータが不足しています: {field}',
    [SuiteCoreStringKey.Validation_MnemonicRegex]: '無効なニーモニック形式',
    
    [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]: 'MongoDBクライアントが見つからないため、フォールバックします',
    [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]: 'トランザクションが失敗しました（一時的）: {error}',
    [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]: '{timeMs}ms後にトランザクションがタイムアウトしました',
    [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]: 'データベースの初期化を開始しています',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]: '{timeMs}ms後にユーザーデータベースの初期化に失敗しました（タイムアウト）',
    [SuiteCoreStringKey.Admin_EnvNotSetTemplate]: '環境変数が設定されていません: {variable}'
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
    [SuiteCoreStringKey.Validation_InvalidJwtToken]: 'Недійсний JWT токен',
    [SuiteCoreStringKey.Validation_InvalidToken]: 'Недійсний токен',
    [SuiteCoreStringKey.Validation_InvalidUsername]:
      'Недійсний формат імені користувача',
    [SuiteCoreStringKey.Validation_PasswordTooWeak]:
      'Пароль не відповідає вимогам безпеки',
    [SuiteCoreStringKey.Validation_TokenExpired]: 'Термін дії токена минув',
    [SuiteCoreStringKey.Validation_UsernameInUse]:
      "Ім'я користувача вже використовується",
    [SuiteCoreStringKey.Validation_UsernameOrEmailRequired]:
      "Потрібно вказати ім'я користувача або електронну пошту",
    [SuiteCoreStringKey.Validation_ExpressValidationFailed]:
      'Не вдалося виконати перевірку Express',
    [SuiteCoreStringKey.Validation_MongooseValidationError]:
      'Виникла помилка перевірки Mongoose',
    [SuiteCoreStringKey.Error_AccountStatus_Active]: 'Обліковий запис активний',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
      'Обліковий запис заблоковано адміністратором',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      'Обліковий запис очікує підтвердження електронної пошти',
    [SuiteCoreStringKey.Common_UnexpectedError]: 'Сталася неочікувана помилка',
    [SuiteCoreStringKey.Common_Ready]: 'Готово',
    [SuiteCoreStringKey.Common_Stopping]: 'Зупинка',
    [SuiteCoreStringKey.Common_Stopped]: 'Зупинено',
    [SuiteCoreStringKey.Common_Connecting]: 'Підключення',
    [SuiteCoreStringKey.Common_Disconnected]: 'Відключено',
    [SuiteCoreStringKey.Common_MongoDB]: 'MongoDB',
    [SuiteCoreStringKey.Common_ApplicationAndDatabase]: 'Додаток та База Даних',
    [SuiteCoreStringKey.Common_Unauthorized]: 'Неавторизовано',
    [SuiteCoreStringKey.Common_NoActiveRequest]: 'Немає активного запиту',
    [SuiteCoreStringKey.Common_NoUserOnRequest]: 'Немає користувача в запиті',
    [SuiteCoreStringKey.Common_NoActiveResponse]: 'Немає активної відповіді',
    
    [SuiteCoreStringKey.Error_EngineAlreadySet]: 'Двигун i18n вже налаштовано',
    [SuiteCoreStringKey.Error_EngineNotSet]: 'Двигун i18n не налаштовано',
    [SuiteCoreStringKey.Error_LengthExceedsMaximum]: 'Довжина перевищує максимум',
    [SuiteCoreStringKey.Error_LengthIsInvalidType]: 'Довжина має недійсний тип',
    [SuiteCoreStringKey.Error_FailedToStartApplication]: 'Не вдалося запустити додаток',
    [SuiteCoreStringKey.Error_InvalidModelKeyTemplate]: 'Недійсний ключ моделі: {modelKey}',
    [SuiteCoreStringKey.Error_ModelNotRegisteredTemplate]: 'Модель не зареєстрована: {modelName}',
    [SuiteCoreStringKey.Error_FailedToCreateRoleTemplate]: 'Не вдалося створити роль {NAME}',

    [SuiteCoreStringKey.ValidationError]: 'Помилка Валідації',
    [SuiteCoreStringKey.Validation_MissingValidatedData]: 'Відсутні валідовані дані',
    [SuiteCoreStringKey.Validation_MissingValidatedDataForField]: 'Відсутні валідовані дані для поля: {field}',
    [SuiteCoreStringKey.Validation_MnemonicRegex]: 'Недійсний формат мнемоніки',
    
    [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]: 'Клієнт MongoDB не знайдено, використовується резервний варіант',
    [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]: 'Транзакція не вдалася (тимчасово): {error}',
    [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]: 'Тайм-аут транзакції після {timeMs}мс',
    [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]: 'Початок ініціалізації бази даних',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]: 'Не вдалося ініціалізувати базу даних користувача (тайм-аут після {timeMs}мс)',
    [SuiteCoreStringKey.Admin_EnvNotSetTemplate]: 'Змінна середовища не встановлена: {variable}'
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
