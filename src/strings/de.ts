/**
 * German (de) translation strings for suite-core library.
 * Contains all localized error messages and user-facing text in German.
 */
import { SuiteCoreStringKey } from '../enumerations';
import type { SuiteCoreStringKeyValue } from '../enumerations';

export const germanStrings: Record<SuiteCoreStringKeyValue, string> = {
  [SuiteCoreStringKey.Auth_AccountLocked]: 'Konto ist vorübergehend gesperrt',
  [SuiteCoreStringKey.Auth_InsufficientPermissions]:
    'Unzureichende Berechtigungen für diese Aktion',
  [SuiteCoreStringKey.Auth_InvalidToken]: 'Ungültiger Authentifizierungstoken',
  [SuiteCoreStringKey.Auth_TokenExpired]:
    'Authentifizierungstoken ist abgelaufen',
  [SuiteCoreStringKey.Auth_UserNotFound]: 'Benutzerkonto nicht gefunden',
  [SuiteCoreStringKey.User_AlreadyExists]: 'Benutzer existiert bereits',
  [SuiteCoreStringKey.User_CreationFailed]:
    'Fehler beim Erstellen des Benutzerkontos',
  [SuiteCoreStringKey.Common_SiteTemplate]: '{Site}',
  [SuiteCoreStringKey.Common_SiteTaglineTemplate]: '{SiteTagline}',
  [SuiteCoreStringKey.Common_SiteDescriptionTemplate]: '{SiteDescription}',
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
  [SuiteCoreStringKey.Error_ArrayLengthMismatch]:
    'Arrays müssen gleich lang sein',
  [SuiteCoreStringKey.Error_AccountStatus_Active]: 'Konto ist aktiv',
  [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
    'Konto ist von einem Administrator gesperrt',
  [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
    'Konto wartet auf E-Mail-Verifizierung',
  [SuiteCoreStringKey.Error_IndexFileNotFoundTemplate]:
    'Index-Datei nicht gefunden: {path}',
  [SuiteCoreStringKey.Error_AppDoesNotAppearToBeRunningWithinDistTemplate]:
    'Die App scheint nicht innerhalb eines /dist/-Verzeichnisses zu laufen: {dir}',
  [SuiteCoreStringKey.Error_ChildRoleCannotBeASystemRole]:
    'Eine untergeordnete Rolle kann keine Systemrolle sein',
  [SuiteCoreStringKey.Error_ChildRoleCannotBeAnAdminRole]:
    'Eine untergeordnete Rolle kann keine Administratorrolle sein',
  [SuiteCoreStringKey.Error_ValidationFunctionNotRegisteredInAllowlist]:
    'Validation function not registered in allowlist',
  [SuiteCoreStringKey.Error_InvalidCertificatePathAfterResolution]:
    'Ungültiger Zertifikatspfad nach Auflösung',
  [SuiteCoreStringKey.Error_InvalidCertificatePathMustBeAbsolute]:
    'Ungültiger Zertifikatspfad: muss absolut sein und darf .. nicht enthalten',
  [SuiteCoreStringKey.Error_InvalidViewsPathEscapesBaseDirectory]:
    'Ungültiger Ansichtspfad: verlässt Basisverzeichnis',
  [SuiteCoreStringKey.Error_InvalidPathContainsParentDirectoryReference]:
    'Ungültiger Pfad: enthält Verweis auf übergeordnetes Verzeichnis',
  [SuiteCoreStringKey.Error_InvalidIndexPathEscapesBaseDirectory]:
    'Ungültiger Index-Pfad: verlässt Basisverzeichnis',
  [SuiteCoreStringKey.Error_InvalidAssetsPathEscapesBaseDirectory]:
    'Ungültiger Asset-Pfad: verlässt Basisverzeichnis',
  [SuiteCoreStringKey.Error_MissingRequiredEnvironmentVariableTemplate]:
    'Erforderliche Umgebungsvariable fehlt: {key}',
  [SuiteCoreStringKey.Error_EmptyEnvironmentVariableTemplate]:
    'Umgebungsvariable {key} ist leer',
  [SuiteCoreStringKey.Error_RecursiveErrorHandlingDetected]:
    'Rekursive Fehlerbehandlung erkannt',
  [SuiteCoreStringKey.Error_SystemUserMustBeSystemMemberType]:
    'Systembenutzer muss vom MemberType.System sein',
  [SuiteCoreStringKey.Error_JwtSecretMustBe64CharHexString]:
    'JWT_SECRET muss eine hexadezimale Zeichenkette mit 64 Zeichen sein',
  [SuiteCoreStringKey.Error_MnemonicHmacSecretMustBe64CharHexString]:
    'MNEMONIC_HMAC_SECRET muss eine hexadezimale Zeichenkette mit 64 Zeichen sein',
  [SuiteCoreStringKey.Error_MnemonicEncryptionKeyMustBe64CharHexString]:
    'MNEMONIC_ENCRYPTION_KEY muss eine hexadezimale Zeichenkette mit 64 Zeichen sein',
  [SuiteCoreStringKey.Error_AdminMnemonicMustBeValidMnemonicPhrase]:
    'ADMIN_MNEMONIC muss eine gültige BIP39-Phrase sein',
  [SuiteCoreStringKey.Error_MemberMnemonicMustBeValidMnemonicPhrase]:
    'MEMBER_MNEMONIC muss eine gültige BIP39-Phrase sein',
  [SuiteCoreStringKey.Error_Pbkdf2IterationsMustBeGreaterThanZero]:
    'PBKDF2_ITERATIONS muss größer als 0 sein',
  [SuiteCoreStringKey.Error_LetsEncryptMaintainerEmailRequired]:
    'LETS_ENCRYPT_EMAIL ist erforderlich, wenn Let\'s Encrypt aktiviert ist',
  [SuiteCoreStringKey.Error_LetsEncryptHostnamesRequired]:
    'LETS_ENCRYPT_HOSTNAMES ist erforderlich, wenn Let\'s Encrypt aktiviert ist',
  [SuiteCoreStringKey.Error_LetsEncryptInvalidHostnameTemplate]:
    'Ungültiger Hostname in LETS_ENCRYPT_HOSTNAMES: {hostname}',
  [SuiteCoreStringKey.Error_InvalidCspOrHelmetOptionsProvided]:
    'Ungültige CSP- oder Helmet-Optionen bereitgestellt',
  [SuiteCoreStringKey.Error_EnvironmentIsRequired]: 'Umgebung ist erforderlich',
  [SuiteCoreStringKey.Error_ApiRouterFactoryIsRequired]:
    'API-Router-Factory ist erforderlich',
  [SuiteCoreStringKey.Error_SchemaMapFactoryIsRequired]:
    'Schema-Map-Factory ist erforderlich',
  [SuiteCoreStringKey.Error_DatabaseInitFunctionIsRequired]:
    'Datenbank-Initialisierungsfunktion ist erforderlich',
  [SuiteCoreStringKey.Error_InitResultHashFunctionIsRequired]:
    'Init-Ergebnis-Hash-Funktion ist erforderlich',
  [SuiteCoreStringKey.Error_ServiceIsNotRegisteredTemplate]:
    'Service {key} nicht registriert',
  [SuiteCoreStringKey.Validation_ValueIsRequired]: 'Wert ist erforderlich',
  [SuiteCoreStringKey.Validation_ValueMustBeOneOfTheAvailableOptions]:
    'Wert muss eine der verfügbaren Optionen sein',
  [SuiteCoreStringKey.Error_UnexpectedErrorInAuthenticateCrypto]:
    'Unerwarteter Fehler in authenticateCrypto',
  [SuiteCoreStringKey.Common_StackTrace]: 'Stapelverfolgung',
  [SuiteCoreStringKey.Common_UnexpectedError]:
    'Ein unerwarteter Fehler ist aufgetreten',
  [SuiteCoreStringKey.Common_Ready]: 'Bereit',
  [SuiteCoreStringKey.Common_Success]: 'Erfolg',
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
  [SuiteCoreStringKey.Error_LengthExceedsMaximum]:
    'Länge überschreitet Maximum',
  [SuiteCoreStringKey.Error_LengthIsInvalidType]: 'Länge ist ungültiger Typ',
  [SuiteCoreStringKey.Error_FailedToStartApplication]:
    'Fehler beim Starten der Anwendung',
  [SuiteCoreStringKey.Error_InvalidModelKeyTemplate]:
    'Ungültiger Modellschlüssel: {modelKey}',
  [SuiteCoreStringKey.Error_ModelNotRegisteredTemplate]:
    'Modell nicht registriert: {modelName}',
  [SuiteCoreStringKey.Error_FailedToCreateRoleTemplate]:
    'Fehler beim Erstellen der Rolle {NAME}',

  [SuiteCoreStringKey.ValidationError]: 'Validierungsfehler',
  [SuiteCoreStringKey.Validation_MissingValidatedData]:
    'Fehlende validierte Daten',
  [SuiteCoreStringKey.Validation_MissingValidatedDataForFieldTemplate]:
    'Fehlende validierte Daten für Feld: {field}',
  [SuiteCoreStringKey.Validation_MnemonicRegex]: 'Ungültiges Mnemoformat',
  [SuiteCoreStringKey.Admin_DotEnvFormat]:
    'Unten sind die Zugangsdaten, die Sie Ihrer API .env-Datei hinzufügen müssen',
  [SuiteCoreStringKey.Admin_EndDotEnvFormat]: 'Ende der .env-Zugangsdaten',
  [SuiteCoreStringKey.Admin_Error_InvalidMongoUri]: 'Ungültige Mongo URI',
  [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]:
    'Kein MongoDB-Client gefunden, wechsle zu Fallback',
  [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]:
    'Transaktion fehlgeschlagen (transient): {error}',
  [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]:
    'Transaktionszeitüberschreitung nach {timeMs}ms',
  [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]:
    'Starte Datenbankinitialisierung',
  [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]:
    'Fehler beim Initialisieren der Benutzerdatenbank (Zeitüberschreitung nach {timeMs}ms)',
  [SuiteCoreStringKey.Admin_EnvNotSetTemplate]:
    'Umgebungsvariable nicht gesetzt: {variable}',
  [SuiteCoreStringKey.Admin_ServingRoute]: 'Route wird bedient',
  [SuiteCoreStringKey.Admin_AccountCredentials]:
    'KONTOANMELDEINFORMATIONEN (In Passwortmanager speichern)',
  [SuiteCoreStringKey.Admin_CreatingUserTemplate]:
    'Erstelle {TYPE} Benutzer {NAME} und generiere Schlüssel',
  [SuiteCoreStringKey.Admin_DatabaseInitializedWithOptionsHashTemplate]:
    'Datenbank mit Options-Hash initialisiert: {hash}',
  [SuiteCoreStringKey.Admin_DatabaseAlreadyInitialized]:
    'Datenbank bereits initialisiert',
  [SuiteCoreStringKey.Admin_DatabaseDropped]: 'Datenbank-Collections gelöscht',
  [SuiteCoreStringKey.Admin_DevelopmentDatabase]: 'Entwicklungsdatenbank',
  [SuiteCoreStringKey.Admin_DroppingDatabase]: 'Datenbank wird gelöscht',
  [SuiteCoreStringKey.Admin_EndCredentials]: 'ENDE DER ANMELDEINFORMATIONEN',
  [SuiteCoreStringKey.Admin_EnvDirSetButMissingTemplate]:
    '{VAR} ist auf {PATH} gesetzt, aber das Verzeichnis fehlt',
  [SuiteCoreStringKey.Admin_EnvFileNotFound]:
    '.env-Datei nicht gefunden, Überspringen des Ladens',
  [SuiteCoreStringKey.Admin_EnvFileNotFoundTemplate]:
    'Umgebungsdatei nicht gefunden unter {PATH}',
  [SuiteCoreStringKey.Admin_Error_DatabaseNotConnectedYet]:
    'Datenbank ist noch nicht verbunden. Bitte rufen Sie zuerst start() auf',
  [SuiteCoreStringKey.Admin_Error_EnvironmentAlreadyInitialized]:
    'Die Umgebung ist bereits initialisiert',
  [SuiteCoreStringKey.Admin_Error_EnvironmentNotInitialized]:
    'Die Umgebung ist nicht initialisiert',
  [SuiteCoreStringKey.Admin_Error_FailedToDropDatabase]:
    'Fehler beim Löschen der Datenbank-Collections',
  [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabase]:
    'Fehler beim Initialisieren der Benutzerdatenbank',
  [SuiteCoreStringKey.Admin_Error_FailedToLoadEnvironment]:
    'Fehler beim Laden der .env-Datei',
  [SuiteCoreStringKey.Admin_Error_FailedToSetTransactionTimeout]:
    'Fehler beim Festlegen der Transaktionszeitüberschreitung, keine Datenbankverbindung',
  [SuiteCoreStringKey.Admin_Error_NotConnectedToMongoDB]:
    'Fehler bei der Verbindung zu MongoDB.',
  [SuiteCoreStringKey.Admin_Error_SchemaMapIsNotLoadedYet]:
    'schemaMap ist noch nicht geladen. Bitte rufen Sie zuerst start() auf',
  [SuiteCoreStringKey.Admin_Error_UnhandledErrorInMain]:
    'Fehler im Hauptprozess nicht behandelt',
  [SuiteCoreStringKey.Admin_ErrorCleaningUpTestData]:
    'Fehler beim Bereinigen der Testdaten',
  [SuiteCoreStringKey.Admin_ErrorClosingConnection]:
    'Fehler beim Schließen der Verbindung',
  [SuiteCoreStringKey.Admin_ErrorStoppingMongoServer]:
    'Fehler beim Stoppen des Mongo-Servers',
  [SuiteCoreStringKey.Admin_FailedToSetUpTestDatabase]:
    'Fehler beim Einrichten der Testdatenbank',
  [SuiteCoreStringKey.Admin_LoadingEnvironmentTemplate]:
    'Lade Umgebung von {PATH}',
  [SuiteCoreStringKey.Admin_MakeSureToSetItInEnv]:
    'Stellen Sie sicher, dass Sie es in Ihrer .env-Datei festlegen',
  [SuiteCoreStringKey.Admin_ProceedingToDbInitialization]:
    'Datenbankinitialisierungsverfahren...',
  [SuiteCoreStringKey.Admin_RoleCreatedTemplate]:
    'Rolle {ROLE} erfolgreich erstellt mit ID {ID}',
  [SuiteCoreStringKey.Admin_SettingUp]: 'Einrichtung läuft...',
  [SuiteCoreStringKey.Admin_SettingUpUsersAndRoles]:
    'Einrichtung von Benutzern und Rollen',
  [SuiteCoreStringKey.Admin_SetTransactionTimeoutSuccessfully]:
    'Transaktionszeitüberschreitung erfolgreich festgelegt',
  [SuiteCoreStringKey.Admin_StartingDbInitialization]:
    'Datenbankinitialisierungsverfahren...',
  [SuiteCoreStringKey.Admin_StringNotFoundForLanguageTemplate]:
    'Zeichenfolge {NAME} nicht gefunden für Sprache {LANG}',
  [SuiteCoreStringKey.Admin_TearingDown]: 'Abbau...',
  [SuiteCoreStringKey.Admin_TransactionsEnabledDisabledTemplate]:
    'Transaktionen sind {STATE}',
  [SuiteCoreStringKey.Admin_UserDatabaseInitialized]:
    'Benutzerdatenbank initialisiert',
  [SuiteCoreStringKey.Admin_UserRoleCreatedTemplate]:
    'Benutzer-Rollen-Beziehung erstellt: Benutzer {USERID} -> Rolle {ROLEID}',
  [SuiteCoreStringKey.Admin_CredentialsWrittenToEnv]:
    'Anmeldeinformationen wurden in {path} geschrieben',
  [SuiteCoreStringKey.Admin_UsingMongoDbMemoryWithTransactions]:
    'Verwendung von MongoDB Memory Server mit Unterstützung für Transaktionen',
  [SuiteCoreStringKey.AdminRoleNotFound]: 'Administratorrolle nicht gefunden',
  [SuiteCoreStringKey.ApiAccess_Title]: 'Ihr Zugriffstoken',
  [SuiteCoreStringKey.ApiAccess_TokenNotAvailable]: 'Token nicht verfügbar',
  [SuiteCoreStringKey.BackupCodes_FailedToFetch]:
    'Fehler beim Abrufen der Backup-Codes',
  [SuiteCoreStringKey.BackupCodes_FailedToGenerate]:
    'Fehler beim Generieren der Backup-Codes',
  [SuiteCoreStringKey.BackupCodeRecovery_CodesRemainingTemplate]:
    'Verbleibende Backup-Codes: {count}',
  [SuiteCoreStringKey.BackupCodeRecovery_GenerateNewCodes]:
    'Neue Backup-Codes generieren',
  [SuiteCoreStringKey.BackupCodeRecovery_Login]: 'Mit Backup-Code anmelden',
  [SuiteCoreStringKey.BackupCodeRecovery_RecoverMnemonic]:
    'Wiederherstellung Ihrer mnemonischen Phrase',
  [SuiteCoreStringKey.BackupCodeRecovery_Success]:
    'Backup-Code-Wiederherstellung erfolgreich.',
  [SuiteCoreStringKey.BackupCodeRecovery_Title]: 'Anmeldung mit Backup-Code',
  [SuiteCoreStringKey.BackupCodeRecovery_YourNewCodes]:
    'Hier sind Ihre neuen Backup-Codes. Bitte notieren Sie sie an einem sicheren Ort, da sie nicht erneut angezeigt werden können.',
  [SuiteCoreStringKey.CannotRemoveLastAdmin]:
    'Das letzte Administrator-Konto kann nicht entfernt werden',
  [SuiteCoreStringKey.ChangePassword_ChangePasswordButton]: 'Passwort ändern',
  [SuiteCoreStringKey.Common_Admin]: 'Administrator',
  [SuiteCoreStringKey.Common_Amount]: 'Betrag',
  [SuiteCoreStringKey.Common_BackupCode]: 'Backup-Code',
  [SuiteCoreStringKey.Common_BackupCodes]: 'Backup-Codes',
  [SuiteCoreStringKey.Common_Cancel]: 'Abbrechen',
  [SuiteCoreStringKey.Common_ChangePassword]: 'Passwort ändern',
  [SuiteCoreStringKey.Common_ChangingPassword]: 'Passwort wird geändert',
  [SuiteCoreStringKey.Common_CheckingAuthentication]:
    'Authentifizierung wird überprüft',
  [SuiteCoreStringKey.Common_ClearMnemonic]: 'Mnemonic löschen',
  [SuiteCoreStringKey.Common_ClearWallet]: 'Wallet löschen',
  [SuiteCoreStringKey.Common_Confirm]: 'Bestätigen',
  [SuiteCoreStringKey.Common_ConfirmNewPassword]: 'Neues Passwort bestätigen',
  [SuiteCoreStringKey.Common_Connected]: 'Verbunden',
  [SuiteCoreStringKey.Common_CopiedToClipboard]:
    'In die Zwischenablage kopiert',
  [SuiteCoreStringKey.Common_CopyToClipboard]: 'In die Zwischenablage kopieren',
  [SuiteCoreStringKey.Common_CurrencyCode]: 'Währungscode',
  [SuiteCoreStringKey.Common_CurrentPassword]: 'Aktuelles Passwort',
  [SuiteCoreStringKey.Common_Dashboard]: 'Dashboard',
  [SuiteCoreStringKey.Common_Date]: 'Datum',
  [SuiteCoreStringKey.Common_DateCreated]: 'Erstellungsdatum',
  [SuiteCoreStringKey.Common_Description]: 'Beschreibung',
  [SuiteCoreStringKey.Common_Disabled]: 'Deaktiviert',
  [SuiteCoreStringKey.Common_Email]: 'E-Mail-Adresse',
  [SuiteCoreStringKey.Common_EmailVerification]: 'E-Mail-Verifizierung',
  [SuiteCoreStringKey.Common_Enabled]: 'Aktiviert',
  [SuiteCoreStringKey.Common_Expiration]: 'Ablauf',
  [SuiteCoreStringKey.Common_ID]: 'ID',
  [SuiteCoreStringKey.Common_KeyFeatures]: 'Hauptmerkmale',
  [SuiteCoreStringKey.Common_Loaded]: 'Geladen',
  [SuiteCoreStringKey.Common_Loading]: 'Wird geladen',
  [SuiteCoreStringKey.Common_Logo]: 'Logo',
  [SuiteCoreStringKey.Common_Member]: 'Mitglied',
  [SuiteCoreStringKey.Common_Minute]: 'Minute',
  [SuiteCoreStringKey.Common_Minutes]: 'Minuten',
  [SuiteCoreStringKey.Common_Mnemonic]: 'Mnemonische Phrase',
  [SuiteCoreStringKey.Common_MnemonicExpiration]:
    'Ablauf der mnemonischen Phrase',
  [SuiteCoreStringKey.Common_NewPassword]: 'Neues Passwort',
  [SuiteCoreStringKey.Common_Notification]: 'Benachrichtigung',
  [SuiteCoreStringKey.Common_NotValidTimeZoneTemplate]:
    '{timezone} ist keine gültige Zeitzone',
  [SuiteCoreStringKey.Common_NotValidCurrencyTemplate]:
    '{currency} ist kein gültiger Währungscode',
  [SuiteCoreStringKey.Common_OK]: 'OK',
  [SuiteCoreStringKey.Common_Online]: 'Online',
  [SuiteCoreStringKey.Common_Password]: 'Passwort',
  [SuiteCoreStringKey.Common_PrivateKey]: 'Privater Schlüssel',
  [SuiteCoreStringKey.Common_PublicKey]: 'Öffentlicher Schlüssel',
  [SuiteCoreStringKey.Common_Registration]: 'Registrierung',
  [SuiteCoreStringKey.Common_RemoveMember]: 'Mitglied entfernen',
  [SuiteCoreStringKey.Common_Role]: 'Rolle',
  [SuiteCoreStringKey.Common_Schema]: 'Schema',
  [SuiteCoreStringKey.Common_Schemas]: 'Schemas',
  [SuiteCoreStringKey.Common_Seconds]: 'Sekunden',
  [SuiteCoreStringKey.Common_Status]: 'Status',
  [SuiteCoreStringKey.Common_System]: 'System',
  [SuiteCoreStringKey.Common_ThemeToggle_Dark]: 'Dunkelmodus aktivieren',
  [SuiteCoreStringKey.Common_ThemeToggle_Light]: 'Hellmodus aktivieren',
  [SuiteCoreStringKey.Common_Timezone]: 'Zeitzone',
  [SuiteCoreStringKey.Common_Type]: 'Typ',
  [SuiteCoreStringKey.Common_UseMnemonic]: 'Nur Mnemonik verwenden',
  [SuiteCoreStringKey.Common_UsePassword]: 'Passwort festlegen',
  [SuiteCoreStringKey.Common_User]: 'Benutzer',
  [SuiteCoreStringKey.Common_UserID]: 'Benutzer-ID',
  [SuiteCoreStringKey.Common_UserCreatedTemplate]:
    '{TYPE} Benutzer {NAME} erfolgreich erstellt',
  [SuiteCoreStringKey.Common_Username]: 'Benutzername',
  [SuiteCoreStringKey.Common_Using]: 'Verwendung von',
  [SuiteCoreStringKey.Common_Wallet]: 'Brieftasche',
  [SuiteCoreStringKey.Common_WalletExpiration]: 'Ablauf der Brieftasche',
  [SuiteCoreStringKey.Dashboard_YourDashboard]: 'Ihr Dashboard',
  [SuiteCoreStringKey.Email_ConfirmationBody]:
    'Bitte klicken Sie auf den untenstehenden Link, um Ihre E-Mail zu bestätigen.',
  [SuiteCoreStringKey.Email_ConfirmationSubjectTemplate]:
    '{Site} E-Mail-Bestätigung',
  [SuiteCoreStringKey.Email_LinkExpiresInTemplate]:
    'Der Link läuft in {EmailTokenResendIntervalMinutes} Minuten ab',
  [SuiteCoreStringKey.Email_LoginRequestBody]:
    'Bitte klicken Sie auf den untenstehenden Link, um sich bei Ihrem Konto anzumelden.',
  [SuiteCoreStringKey.Email_LoginRequestSubjectTemplate]:
    '{Site} Anmeldeanfrage',
  [SuiteCoreStringKey.Email_ResetPasswordBody]:
    'Bitte klicken Sie auf den untenstehenden Link, um Ihr Passwort zurückzusetzen.',
  [SuiteCoreStringKey.Email_ResetPasswordSubjectTemplate]:
    '{Site} Passwort zurücksetzen',
  [SuiteCoreStringKey.Email_TokenFailedToSend]:
    'Fehler beim Senden des Tokens per E-Mail',
  [SuiteCoreStringKey.Email_TokenSent]:
    'Wenn ein Konto mit dieser E-Mail oder diesem Benutzernamen existiert, wurde eine E-Mail gesendet.',
  [SuiteCoreStringKey.EmailVerification_AlreadyVerified]:
    'Ihre E-Mail-Adresse ist bereits verifiziert',
  [SuiteCoreStringKey.EmailVerification_Failed]:
    'E-Mail-Verifizierung fehlgeschlagen. Bitte versuchen Sie es erneut.',
  [SuiteCoreStringKey.EmailVerification_Resent]:
    'E-Mail-Verifizierung erfolgreich erneut gesendet',
  [SuiteCoreStringKey.EmailVerification_Success]:
    'E-Mail erfolgreich verifiziert',
  [SuiteCoreStringKey.Error_VerificationFailed]: 'Verifizierung fehlgeschlagen',
  [SuiteCoreStringKey.Error_NoPasswordOrMnemonicProvided]:
    'Kein Passwort oder mnemonische Phrase angegeben',
  [SuiteCoreStringKey.Error_ChallengeError]:
    'Fehler bei der Generierung der Herausforderung',
  [SuiteCoreStringKey.Error_DirectTokenAlreadyUsed]:
    'Der Direktanmeldetoken wurde bereits verwendet',
  [SuiteCoreStringKey.Error_Disposed]: 'Bereits entsorgt',
  [SuiteCoreStringKey.Error_EciesError_InvalidMultipleMessageOverheadSize]:
    'Ungültige ECIES-Mehrfachnachrichten-Overhead-Konstanten',
  [SuiteCoreStringKey.Error_EciesError_InvalidPublicKeyLength]:
    'Ungültige ECIES-öffentliche Schlüssellänge',
  [SuiteCoreStringKey.Error_EciesError_InvalidRecipientCount]:
    'Ungültige ECIES-Empfängeranzahl',
  [SuiteCoreStringKey.Error_EciesErrorCrcError]: 'ECIES-CRC-Fehler',
  [SuiteCoreStringKey.Error_EciesErrorDecryptionFailed]:
    'ECIES-Entschlüsselung fehlgeschlagen (MAC-Überprüfung oder Padding-Fehler)',
  [SuiteCoreStringKey.Error_EciesErrorEncryptionDataLengthMismatch]:
    'Ungültige Länge der verschlüsselten Daten',
  [SuiteCoreStringKey.Error_EciesErrorEncryptionTypeMismatch]:
    'Ungültiger Verschlüsselungstyp',
  [SuiteCoreStringKey.Error_EciesErrorFileSizeTooLarge]:
    'Ungültige ECIES-Dateigröße',
  [SuiteCoreStringKey.Error_EciesErrorInvalidAuthTagLength]:
    'Ungültige ECIES-Authentifizierungs-Tag-Länge',
  [SuiteCoreStringKey.Error_EciesErrorInvalidDataLength]:
    'Ungültige ECIES-Datenlänge',
  [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedDataLength]:
    'Ungültige ECIES-verschlüsselte Datenlänge',
  [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedKeyLength]:
    'Ungültige ECIES-verschlüsselte Schlüssellänge',
  [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptionType]:
    'Ungültiger ECIES-Verschlüsselungstyp',
  [SuiteCoreStringKey.Error_EciesErrorInvalidEphemeralPublicKey]:
    'Ungültiger ECIES-ephemerer öffentlicher Schlüssel',
  [SuiteCoreStringKey.Error_EciesErrorInvalidHeaderLength]:
    'Ungültige ECIES-Headerlänge',
  [SuiteCoreStringKey.Error_EciesErrorInvalidIVLength]:
    'Ungültige ECIES-IV-Länge',
  [SuiteCoreStringKey.Error_EciesErrorInvalidMessageCrc]:
    'Ungültige ECIES-Nachrichten-CRC',
  [SuiteCoreStringKey.Error_EciesErrorInvalidMnemonic]:
    'Ungültige ECIES-Mnemonik',
  [SuiteCoreStringKey.Error_EciesErrorInvalidOperation]: 'Ungültige Operation',
  [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientCount]:
    'Ungültige ECIES-Empfängeranzahl',
  [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientPublicKey]:
    'Ungültiger ECIES-öffentlicher Empfängerschlüssel für die Verschlüsselung',
  [SuiteCoreStringKey.Error_EciesErrorInvalidSenderPublicKey]:
    'Ungültiger ECIES-öffentlicher Absenderschlüssel',
  [SuiteCoreStringKey.Error_EciesErrorInvalidSignature]:
    'Ungültige ECIES-Signatur',
  [SuiteCoreStringKey.Error_EciesErrorMessageLengthMismatch]:
    'Ungültige Nachrichtenlängenübereinstimmung',
  [SuiteCoreStringKey.Error_EciesErrorPrivateKeyNotLoaded]:
    'Ungültiger ECIES-privater Schlüssel nicht geladen',
  [SuiteCoreStringKey.Error_EciesErrorRecipientKeyCountMismatch]:
    'Ungültige Anzahl von ECIES-Empfängerschlüsseln',
  [SuiteCoreStringKey.Error_EciesErrorRecipientNotFound]:
    'Ungültiger ECIES-Empfänger nicht gefunden',
  [SuiteCoreStringKey.Error_EciesErrorSecretComputationFailed]:
    'Fehler bei der Berechnung des gemeinsamen Geheimnisses während der ECIES-Operation',
  [SuiteCoreStringKey.Error_EciesErrorTooManyRecipients]:
    'Zu viele Empfänger: Überschreitung des zulässigen Maximums',
  [SuiteCoreStringKey.Error_EciesFailedSharedSecret]:
    'Fehler bei der Berechnung des gemeinsamen Geheimnisses',
  [SuiteCoreStringKey.Error_EmailSentTooRecentlyTemplate]:
    'E-Mail-Token wurde zu kürzlich gesendet. Bitte versuchen Sie es in ${timeRemaining} Sekunden erneut.',
  [SuiteCoreStringKey.Error_FailedToCopy]: 'Fehler beim Kopieren des Textes',
  [SuiteCoreStringKey.Error_FailedToCreateUserRoleTemplate]:
    'Fehler beim Erstellen der Benutzer-Rollen-Beziehung für Benutzer {USER_ID} und Rolle {ROLE_ID}',
  [SuiteCoreStringKey.Error_FailedToCreateUserTemplate]:
    'Fehler beim Erstellen des Benutzers {NAME}',
  [SuiteCoreStringKey.Error_FailedToFindRoleTemplate]:
    'Fehler bei der Suche nach der Rolle {ROLE}',
  [SuiteCoreStringKey.Error_FailedToLookupRoleTemplate]:
    'Fehler bei der Suche nach der Rollen-ID für {ROLE}',
  [SuiteCoreStringKey.Error_FailedToReEncryptMnemonicTemplate]:
    'Fehler bei der erneuten Verschlüsselung des mnemonischen Schlüssels mit der ID: {ID}',
  [SuiteCoreStringKey.Error_FailedToStoreUserMnemonicTemplate]:
    'Fehler beim Speichern des mnemonischen Schlüssels für den Benutzer {NAME}',
  [SuiteCoreStringKey.Error_FailedToUpdateLastLoginTemplate]:
    'Fehler beim Aktualisieren von lastLogin für den Benutzer {userId}',
  [SuiteCoreStringKey.Error_FailedToUseDirectLoginToken]:
    'Fehler bei der Verwendung des Direktanmeldetokens',
  [SuiteCoreStringKey.Error_FecErrorDataRequired]:
    'Daten sind erforderlich für FEC-Operationen',
  [SuiteCoreStringKey.Error_FecErrorFecDecodingFailedTemplate]:
    'Fehler beim FEC-Dekodieren: {ERROR}',
  [SuiteCoreStringKey.Error_FecErrorFecEncodingFailedTemplate]:
    'Fehler beim FEC-Kodieren: {ERROR}',
  [SuiteCoreStringKey.Error_FecErrorInputDataMustBeUint8Array]:
    'Eingabedaten müssen ein Uint8Array sein',
  [SuiteCoreStringKey.Error_FecErrorInvalidDataLengthTemplate]:
    'Ungültige Datenlänge: {LENGTH}, erwartet {EXPECTED}',
  [SuiteCoreStringKey.Error_FecErrorInvalidShardCounts]:
    'Ungültige Fragmentanzahlen',
  [SuiteCoreStringKey.Error_FecErrorInvalidShardsAvailableArray]:
    'Ungültiges verfügbares Fragment-Array',
  [SuiteCoreStringKey.Error_FecErrorNotEnoughShardsAvailableTemplate]:
    'Nicht genügend verfügbare Fragmente: {AVAILABLE}, benötigt {REQUIRED}',
  [SuiteCoreStringKey.Error_FecErrorParityDataCountMustBePositive]:
    'Die Anzahl der Paritätsdaten muss positiv sein',
  [SuiteCoreStringKey.Error_FecErrorParityDataRequired]:
    'Die Paritätsdaten sind für FEC-Operationen erforderlich',
  [SuiteCoreStringKey.Error_FecErrorShardSizeExceedsMaximumTemplate]:
    'Die Größe des Fragments {SIZE} überschreitet das Maximum {MAXIMUM}',
  [SuiteCoreStringKey.Error_InvalidBackupCodeVersionTemplate]:
    '{version} ist eine ungültige Backup-Code-Version',
  [SuiteCoreStringKey.Error_InvalidChallengeResponse]:
    'Ungültige oder falsche Antwort auf die Anmeldeherausforderung',
  [SuiteCoreStringKey.Error_InvalidChecksumConstants]:
    'Ungültige Prüfsummen-Konstanten',
  [SuiteCoreStringKey.Error_InvalidEmail]: 'Ungültige E-Mail.',
  [SuiteCoreStringKey.Error_InvalidEmailTokenType]:
    'Ungültiger E-Mail-Token-Typ.',
  [SuiteCoreStringKey.Error_InvalidEmailTemplate]:
    '{email} ist keine gültige E-Mail-Adresse.',
  [SuiteCoreStringKey.Error_InvalidEmailMissing]: 'E-Mail fehlt.',
  [SuiteCoreStringKey.Error_InvalidEmailWhitespace]:
    'E-Mail enthält führende oder nachfolgende Leerzeichen.',
  [SuiteCoreStringKey.Error_InvalidGuid]: 'GUID ungültig.',
  [SuiteCoreStringKey.Error_InvalidGuidTemplate]: 'GUID ungültig: {GUID}',
  [SuiteCoreStringKey.Error_InvalidGuidUnknownBrandTemplate]:
    'Unbekannte Marken-GUID: {BRAND}.',
  [SuiteCoreStringKey.Error_InvalidGuidUnknownLengthTemplate]:
    'Ungültige GUID-Länge: {LENGTH}.',
  [SuiteCoreStringKey.Error_InvalidLanguageCodeTemplate]:
    'Der angegebene Sprachcode "{LANGUAGE}" ist ungültig. Rückkehr zur Standardsprache "{DEFAULT_LANGUAGE}".',
  [SuiteCoreStringKey.Error_InvalidMnemonicEncryptionKey]:
    'Der Verschlüsselungsschlüssel muss 32 Bytes (64 hexadezimale Zeichen) lang sein.',
  [SuiteCoreStringKey.Error_LanguageNotFoundForEnumTemplate]:
    'Sprache {lang} nicht gefunden für die Enumeration {enumName}',
  [SuiteCoreStringKey.Error_LanguageNotFoundInStringsTemplate]:
    'Sprache {LANG} nicht gefunden in den Zeichenketten',
  [SuiteCoreStringKey.Error_Login_ChallengeExpiredTemplate]:
    'Die Anmeldeherausforderung ist nach {LoginChallengeExpiration} ms abgelaufen',
  [SuiteCoreStringKey.Error_Login_DirectLoginNotAllowed]:
    'Die direkte Anmeldung ist für dieses Konto nicht erlaubt. Bitte fordern Sie einen Anmeldelink per E-Mail an.',
  [SuiteCoreStringKey.Error_Login_DirectChallengeNotEnabled]:
    'Die direkte Challenge-Anmeldung ist für dieses Konto nicht aktiviert. Bitte verwenden Sie die E-Mail-Anmeldung oder kontaktieren Sie den Support.',
  [SuiteCoreStringKey.Error_Login_PasswordLoginNotEnabled]:
    'Passwort-Anmeldung ist für dieses Konto nicht aktiviert. Bitte verwenden Sie die E-Mail-Anmeldung oder kontaktieren Sie den Support.',
  [SuiteCoreStringKey.Error_Login_PasswordLoginNotSetup]:
    'Passwort-Anmeldung ist für diesen Browser nicht eingerichtet. Bitte verwenden Sie die E-Mail-Anmeldung oder kontaktieren Sie den Support.',
  [SuiteCoreStringKey.Error_MemberErrorEncryptionDataTooLarge]:
    'Die Verschlüsselungsdaten sind zu groß.',
  [SuiteCoreStringKey.Error_MemberErrorFailedToConvertMemberData]:
    'Fehler bei der Umwandlung der Mitgliedsdaten.',
  [SuiteCoreStringKey.Error_MemberErrorFailedToHydrateMember]:
    'Fehler bei der Hydrierung des Mitglieds.',
  [SuiteCoreStringKey.Error_MemberErrorIncorrectOrInvalidPrivateKey]:
    'Falscher oder ungültiger privater Schlüssel für den öffentlichen Schlüssel',
  [SuiteCoreStringKey.Error_MemberErrorInvalidEmail]: 'Ungültige E-Mail.',
  [SuiteCoreStringKey.Error_MemberErrorInvalidEmailWhitespace]:
    'Die E-Mail enthält führende oder nachfolgende Leerzeichen.',
  [SuiteCoreStringKey.Error_MemberErrorInvalidEncryptionData]:
    'Ungültige Verschlüsselungsdaten.',
  [SuiteCoreStringKey.Error_MemberErrorInvalidMemberData]:
    'Ungültige Mitgliedsdaten.',
  [SuiteCoreStringKey.Error_MemberErrorInvalidMemberName]:
    'Ungültiger Mitgliedsname.',
  [SuiteCoreStringKey.Error_MemberErrorInvalidMemberNameWhitespace]:
    'Der Mitgliedsname enthält führende oder nachfolgende Leerzeichen.',
  [SuiteCoreStringKey.Error_MemberErrorInvalidMemberStatus]:
    'Ungültiger Mitgliedsstatus.',
  [SuiteCoreStringKey.Error_MemberErrorInvalidMnemonic]:
    'Ungültiges Wallet-Mnemonic.',
  [SuiteCoreStringKey.Error_MemberErrorMemberAlreadyExists]:
    'Mitglied existiert bereits.',
  [SuiteCoreStringKey.Error_MemberErrorMemberNotFound]:
    'Mitglied nicht gefunden.',
  [SuiteCoreStringKey.Error_MemberErrorMissingEmail]: 'E-Mail fehlt.',
  [SuiteCoreStringKey.Error_MemberErrorMissingEncryptionData]:
    'Fehlende Verschlüsselungsdaten.',
  [SuiteCoreStringKey.Error_MemberErrorMissingMemberName]:
    'Fehlender Mitgliedsname.',
  [SuiteCoreStringKey.Error_MemberErrorMissingPrivateKey]:
    'Fehlender privater Schlüssel.',
  [SuiteCoreStringKey.Error_MemberErrorMissingVotingPrivateKey]:
    'Fehlender privater Abstimmungsschlüssel.',
  [SuiteCoreStringKey.Error_MemberErrorMissingVotingPublicKey]:
    'Fehlender öffentlicher Abstimmungsschlüssel.',
  [SuiteCoreStringKey.Error_MemberErrorNoWallet]: 'Kein Wallet geladen.',
  [SuiteCoreStringKey.Error_MemberErrorPrivateKeyRequiredToDeriveVotingKeyPair]:
    'Privater Schlüssel erforderlich, um das Abstimmungsschlüsselpaar abzuleiten.',
  [SuiteCoreStringKey.Error_MemberErrorWalletAlreadyLoaded]:
    'Wallet bereits geladen.',
  [SuiteCoreStringKey.Error_MnemonicIsNullTemplate]:
    '{NAME} Mnemonic ist null oder undefiniert',
  [SuiteCoreStringKey.Error_NoTranslationsForEnumLanguageTemplate]:
    'Keine Übersetzung gefunden für {enumName}.{value} in {language}',
  [SuiteCoreStringKey.Error_NoTranslationsForEnumTemplate]:
    'Keine Übersetzung gefunden für die Enumeration: {enumName}',
  [SuiteCoreStringKey.Error_PasswordChange]: 'Fehler beim Ändern des Passworts',
  [SuiteCoreStringKey.Error_Pbkdf2InvalidHashLength]:
    'Die Hash-Länge entspricht nicht der erwarteten Länge',
  [SuiteCoreStringKey.Error_Pbkdf2InvalidSaltLength]:
    'Die Salt-Länge entspricht nicht der erwarteten Länge',
  [SuiteCoreStringKey.Error_RoleNotFoundTemplate]:
    'Rolle mit der ID {ID} konnte nicht in der Rollen-Enumeration abgebildet werden',
  [SuiteCoreStringKey.Error_SecureStorageDecryptedValueChecksumMismatch]:
    'Die Prüfsumme des entschlüsselten Werts stimmt nicht überein',
  [SuiteCoreStringKey.Error_SecureStorageDecryptedValueLengthMismatch]:
    'Die Länge des entschlüsselten Werts entspricht nicht der erwarteten Länge',
  [SuiteCoreStringKey.Error_SecureStorageValueIsNull]:
    'Der Wert im sicheren Speicher ist null oder undefiniert',
  [SuiteCoreStringKey.Error_SymmetricDataNullOrUndefined]:
    'Die zu verschlüsselnden Daten dürfen nicht null oder undefiniert sein',
  [SuiteCoreStringKey.Error_SymmetricInvalidKeyLengthTemplate]:
    'Der Verschlüsselungsschlüssel muss {KEY_BYTES} Bytes lang sein',
  [SuiteCoreStringKey.Error_UnknownEnumValueForEnumTemplate]:
    'Unbekannter Enumerationswert: {value} für die Enumeration: {enumName}',
  [SuiteCoreStringKey.Error_MustMatchRegexTemplate]:
    '{value} muss dem erforderlichen Format entsprechen',
  [SuiteCoreStringKey.Error_EmailService_NotConfigured]:
    'E-Mail-Dienst nicht konfiguriert. Rufen Sie setEmailService() auf, bevor Sie die Middleware verwenden.',
  [SuiteCoreStringKey.Error_FailedToCreateEmailToken]:
    'Fehler beim Erstellen des E-Mail-Tokens',
  [SuiteCoreStringKey.ForgotPassword_BackToLogin]: 'Zurück zur Anmeldung',
  [SuiteCoreStringKey.ForgotPassword_Error]:
    'Bei der Bearbeitung Ihrer Anfrage ist ein Fehler aufgetreten.',
  [SuiteCoreStringKey.ForgotPassword_ForgotPassword]: 'Passwort vergessen',
  [SuiteCoreStringKey.ForgotPassword_InvalidToken]:
    'Ungültiges oder abgelaufenes Token. Bitte fordern Sie eine neue Passwortzurücksetzung an.',
  [SuiteCoreStringKey.ForgotPassword_ResetPassword]: 'Passwort zurücksetzen',
  [SuiteCoreStringKey.ForgotPassword_SendResetLink]:
    'Zurücksetzungslink senden',
  [SuiteCoreStringKey.ForgotPassword_Success]:
    'Ihr Passwort wurde erfolgreich zurückgesetzt. Sie können sich jetzt mit Ihrem neuen Passwort anmelden.',
  [SuiteCoreStringKey.ForgotPassword_Title]: 'Passwort vergessen',
  [SuiteCoreStringKey.HavingTroubleContactSupport]:
    'Wenn Sie Probleme haben, wenden Sie sich bitte an unser Support-Team oder',
  [SuiteCoreStringKey.KeyFeatures_1]:
    'Speichern Sie Dateien sicher mit automatischen Freigabe- oder Löschregeln.',
  [SuiteCoreStringKey.KeyFeatures_2]:
    'Erstellen Sie "Canaries", um Ihre digitale oder physische Aktivität zu überwachen.',
  [SuiteCoreStringKey.KeyFeatures_3]:
    'Aktionen werden basierend auf dem Status des Canaries ausgelöst (z. B. Inaktivität).',
  [SuiteCoreStringKey.KeyFeatures_4]:
    'Sicherheitscodes für sofortige und dringende Aktionen.',
  [SuiteCoreStringKey.LanguageUpdate_Success]:
    'Sprache erfolgreich aktualisiert',
  [SuiteCoreStringKey.LoggedIn_Success]: 'Erfolgreich angemeldet',
  [SuiteCoreStringKey.Login_ChallengeGenerated]: 'Anmelde-Challenge generiert',
  [SuiteCoreStringKey.Login_DirectLogin]: 'Direkte Anmeldung',
  [SuiteCoreStringKey.Login_DirectLoginWarning]:
    'Wenn der Benutzername oder die E-Mail ungültig ist oder der Benutzer die direkte Anmeldung deaktiviert hat, schlägt die direkte Herausforderungsanmeldung mit einem generischen ungültigen Herausforderungsantwortfehler fehl, der nicht offenlegt, ob das Konto existiert.',
  [SuiteCoreStringKey.Login_EmailChallengeSent]:
    'Ein Anmeldelink wurde an Ihre E-Mail gesendet. Bitte klicken Sie darauf, um sich anzumelden.',
  [SuiteCoreStringKey.Login_EmailLogin]: 'Anmeldung per E-Mail',
  [SuiteCoreStringKey.Login_ForgotPassword]: 'Passwort vergessen?',
  [SuiteCoreStringKey.Login_LoginButton]: 'Anmelden',
  [SuiteCoreStringKey.Login_SignUp]:
    'Sie haben noch kein Konto? Registrieren Sie sich',
  [SuiteCoreStringKey.Login_Title]: 'Anmeldung',
  [SuiteCoreStringKey.Login_UseEmailAddress]: 'E-Mail-Adresse verwenden',
  [SuiteCoreStringKey.Login_UseUsername]: 'Benutzernamen verwenden',
  [SuiteCoreStringKey.LogoutButton]: 'Abmelden',
  [SuiteCoreStringKey.MemberRoleNotFound]: 'Mitgliederrolle nicht gefunden',
  [SuiteCoreStringKey.SystemRoleNotFound]: 'Systemrolle nicht gefunden',
  [SuiteCoreStringKey.MnemonicRecovery_Missing]:
    'Fehlende mnemonische Wiederherstellungsdaten',
  [SuiteCoreStringKey.MnemonicRecovery_Success]:
    'Mnemonische Wiederherstellung erfolgreich',
  [SuiteCoreStringKey.NoMembersYet]: 'Noch keine Mitglieder',
  [SuiteCoreStringKey.NoVerificationTokenProvided]:
    'Kein Verifizierungstoken bereitgestellt.',
  [SuiteCoreStringKey.PasswordChange_IncorrectPassword]:
    'Das aktuelle Passwort ist falsch',
  [SuiteCoreStringKey.PasswordChange_Success]: 'Passwort erfolgreich geändert',
  [SuiteCoreStringKey.PasswordLogin_InvalidCurrentPassword]:
    'Das aktuelle Passwort ist falsch',
  [SuiteCoreStringKey.PasswordLogin_Setup_Failure]:
    'Fehler bei der Einrichtung der Passwortanmeldung',
  [SuiteCoreStringKey.PasswordLogin_Setup_NotAvailable]:
    'Passwortanmeldung nicht verfügbar',
  [SuiteCoreStringKey.PasswordLogin_Setup_Success]:
    'Passwortanmeldung erfolgreich eingerichtet',
  [SuiteCoreStringKey.PasswordReset_AlreadySent]:
    'Ein Link zum Zurücksetzen des Passworts wurde bereits an Ihre E-Mail gesendet.',
  [SuiteCoreStringKey.PasswordReset_EmailNotVerified]:
    'Bitte überprüfen Sie Ihre E-Mail-Adresse, bevor Sie Ihr Passwort zurücksetzen.',
  [SuiteCoreStringKey.PasswordReset_Success]:
    'Wenn ein Konto mit dieser E-Mail existiert, wurde ein SLink zum Zurücksetzen des Passworts gesendet.',
  [SuiteCoreStringKey.PasswordReset_Button]: 'Passwort zurücksetzen',
  [SuiteCoreStringKey.PasswordReset_Title]: 'Passwort Zurücksetzen',
  [SuiteCoreStringKey.ProceedToLogin]: 'Zur Anmeldung fortfahren',
  [SuiteCoreStringKey.Register_RegisterButton]: 'Loslegen',
  [SuiteCoreStringKey.RegisterButton]: 'Registrieren',
  [SuiteCoreStringKey.Registration_ConfirmPassword]: 'Passwort bestätigen',
  [SuiteCoreStringKey.Registration_Error]:
    'Ein unerwarteter Fehler ist bei der Registrierung aufgetreten. Bitte versuchen Sie es erneut.',
  [SuiteCoreStringKey.Registration_LoginLink]:
    'Sie haben bereits ein Konto? Anmelden',
  [SuiteCoreStringKey.Registration_MnemonicSuccess]:
    'Registrierung erfolgreich. Bitte speichern Sie Ihr Mnemonic sicher. Es wird nicht erneut angezeigt. Bitte überprüfen Sie Ihre E-Mail, um Ihr Konto zu verifizieren.',
  [SuiteCoreStringKey.Registration_RegisterButton]: 'Registrieren',
  [SuiteCoreStringKey.Registration_Registering]: 'Registrierung läuft...',
  [SuiteCoreStringKey.Registration_RegisteringMessage]:
    'Bitte warten Sie, während wir Ihr Konto erstellen. Es kann eine Minute dauern, um einen Schlüssel zu generieren und die Registrierung abzuschließen.',
  [SuiteCoreStringKey.Registration_Success]:
    'Registrierung erfolgreich. Bitte überprüfen Sie Ihre E-Mail, um Ihr Konto zu verifizieren.',
  [SuiteCoreStringKey.Registration_SuccessTitle]: 'Registrierung erfolgreich.',
  [SuiteCoreStringKey.Registration_DirectChallengeLabel]:
    'Direkte Challenge-Anmeldung aktivieren',
  [SuiteCoreStringKey.Registration_DirectChallengeHelper]:
    'Ermöglichen Sie die direkte Anmeldung mit Ihrer mnemonischen Phrase ohne E-Mail-Verifizierung. Dies ist bequemer, aber weniger sicher, wenn Ihre mnemonische Phrase kompromittiert wird.',
  [SuiteCoreStringKey.RemoveAdmin_Success]:
    'Administrator erfolgreich entfernt',
  [SuiteCoreStringKey.RemoveAdmin_Unauthorized]:
    'Nicht berechtigt, einen Administrator zu entfernen',
  [SuiteCoreStringKey.RemoveMember_Success]: 'Mitglied erfolgreich entfernt',
  [SuiteCoreStringKey.RemoveMember_Unauthorized]:
    'Nicht berechtigt, ein Mitglied zu entfernen',
  [SuiteCoreStringKey.RequestNewVerificationEmail]:
    'Neue Verifizierungs-E-Mail anfordern',
  [SuiteCoreStringKey.Settings_SaveSuccess]:
    'Einstellungen erfolgreich gespeichert',
  [SuiteCoreStringKey.Settings_Title]: 'Einstellungen',
  [SuiteCoreStringKey.Settings_EmailHelper]:
    'Wenn Sie Ihre E-Mail-Adresse ändern, ist eine erneute Verifizierung erforderlich. Wir senden eine Verifizierungs-E-Mail an die neue Adresse zur Bestätigung. Bitte überprüfen Sie Ihren Posteingang nach dem Speichern der Änderungen und folgen Sie den Anweisungen in der E-Mail, um Ihre neue Adresse zu verifizieren.',
  [SuiteCoreStringKey.Settings_SiteLanguage]: 'Seitensprache',
  [SuiteCoreStringKey.Settings_Currency]: 'Bevorzugte Währung',
  [SuiteCoreStringKey.Settings_DarkMode]: 'Dunkelmodus',
  [SuiteCoreStringKey.Settings_DarkModeSuccess]:
    'Dunkelmodus erfolgreich aktualisiert',
  [SuiteCoreStringKey.Settings_Saving]: 'Einstellungen werden gespeichert...',
  [SuiteCoreStringKey.Settings_Save]: 'Einstellungen speichern',
  [SuiteCoreStringKey.Settings_RetrievedSuccess]:
    'Einstellungen erfolgreich abgerufen',
  [SuiteCoreStringKey.Settings_UpdateFailed]:
    'Fehler beim Aktualisieren der Einstellungen',
  [SuiteCoreStringKey.Settings_RetrieveFailure]:
    'Fehler beim Abrufen der Einstellungen',
  [SuiteCoreStringKey.SignInButton]: 'Anmelden',
  [SuiteCoreStringKey.TestItemCountTemplate]: '{count} Elemente',
  [SuiteCoreStringKey.TestTemplate]:
    'Dies ist ein Test: {variable1}, {AdministratorEmail}',
  [SuiteCoreStringKey.TestUsernameTemplate]:
    'Dies ist ein Testbenutzername: {user}',
  [SuiteCoreStringKey.TogglePasswordVisibility]:
    'Passwortsichtbarkeit umschalten',
  [SuiteCoreStringKey.TokenCreate_Success]: 'Token erfolgreich erstellt',
  [SuiteCoreStringKey.TokenNotFoundTemplate]: 'Token nicht gefunden: {TOKEN}',
  [SuiteCoreStringKey.TokenRefreshed]: 'Token aktualisiert',
  [SuiteCoreStringKey.TokenType_AccountVerification]: 'Kontoverifizierung',
  [SuiteCoreStringKey.TokenType_LoginRequest]: 'Anmeldeanfrage',
  [SuiteCoreStringKey.TokenType_PasswordReset]: 'Passwort zurücksetzen',
  [SuiteCoreStringKey.TokenType_MnemonicRecoveryRequest]:
    'Anfrage zur mnemonischen Wiederherstellung',
  [SuiteCoreStringKey.TokenType_PrivateKeyRequest]:
    'Anfrage für privaten Schlüssel',
  [SuiteCoreStringKey.Validation_AccountLocked]: 'Konto ist gesperrt',
  [SuiteCoreStringKey.Validation_AdminUserIdRequired]:
    'Die Administrator-ID ist erforderlich',
  [SuiteCoreStringKey.Validation_ConfirmNewPassword]:
    'Bitte bestätigen Sie Ihr neues Passwort',
  [SuiteCoreStringKey.Validation_CreatedUserIdError]:
    'Die erstellte Benutzer-ID existiert nicht und stimmt nicht mit der neuen Benutzer-ID überein.',
  [SuiteCoreStringKey.Validation_CurrencyCodeRequired]:
    'Der Währungscode ist erforderlich',
  [SuiteCoreStringKey.Validation_CurrentPasswordRequired]:
    'Das aktuelle Passwort ist erforderlich',
  [SuiteCoreStringKey.Validation_DescriptionRequired]:
    'Die Beschreibung ist erforderlich',
  [SuiteCoreStringKey.Validation_EmailNotVerified]:
    'Die E-Mail ist nicht verifiziert',
  [SuiteCoreStringKey.Validation_HmacRegex]:
    'HMAC muss eine gültige hexadezimale Zeichenkette sein.',
  [SuiteCoreStringKey.Validation_InvalidAdminUserId]:
    'Ungültige Administrator-ID',
  [SuiteCoreStringKey.Validation_InvalidBackupCode]:
    'Ungültiger oder bereits verwendeter Backup-Code',
  [SuiteCoreStringKey.Validation_InvalidChallenge]:
    'Ungültige oder falsche Herausforderung',
  [SuiteCoreStringKey.Validation_InvalidCurrencyCode]:
    'Ungültiger Währungscode',
  [SuiteCoreStringKey.Validation_InvalidEncryptedMnemonic]:
    'Ungültige verschlüsselte Mnemonik. Sie muss eine gültige hexadezimale Zeichenkette sein.',
  [SuiteCoreStringKey.Validation_InvalidGuid]: 'Ungültige GUID',
  [SuiteCoreStringKey.Validation_InvalidLanguage]: 'Ungültige Sprache',
  [SuiteCoreStringKey.Validation_InvalidLanguageCode]: 'Ungültiger Sprachcode',
  [SuiteCoreStringKey.Validation_InvalidMemberId]: 'Ungültige Mitglieds-ID',
  [SuiteCoreStringKey.Validation_InvalidMnemonic]: 'Ungültige Mnemonik.',
  [SuiteCoreStringKey.Validation_InvalidOldMnemonicEncryptionKey]:
    'Das alte Passwort muss 32 Bytes (64 hexadezimale Zeichen) lang sein.',
  [SuiteCoreStringKey.Validation_InvalidPassword]:
    'Ungültiges oder falsches Passwort',
  [SuiteCoreStringKey.Validation_InvalidSignature]: 'Ungültige Signatur',
  [SuiteCoreStringKey.Validation_InvalidUserId]: 'Ungültige Benutzer-ID',
  [SuiteCoreStringKey.Validation_InvalidUserIdTemplate]:
    'Ungültige Benutzer-ID: {detail}',
  [SuiteCoreStringKey.Validation_IsMemberBoolean]:
    'isMember muss ein boolescher Wert sein',
  [SuiteCoreStringKey.Validation_MemberIdRequired]:
    'Die Mitglieds-ID ist erforderlich',
  [SuiteCoreStringKey.Validation_MnemonicOrPasswordRequired]:
    'Entweder Mnemonik oder Passwort ist erforderlich',
  [SuiteCoreStringKey.Validation_MnemonicRequired]:
    'Die Mnemonik ist erforderlich',
  [SuiteCoreStringKey.Validation_NameRequired]: 'Der Name ist erforderlich',
  [SuiteCoreStringKey.Validation_NewPasswordRequired]:
    'Das neue Passwort ist erforderlich',
  [SuiteCoreStringKey.Validation_PasswordMatch]:
    'Die Passwörter müssen übereinstimmen',
  [SuiteCoreStringKey.Validation_PasswordMinLengthTemplate]:
    'Das Passwort muss mindestens {PasswordMinLength} Zeichen lang sein',
  [SuiteCoreStringKey.Validation_PasswordRegexErrorTemplate]:
    'Das Passwort muss mindestens {PasswordMinLength} Zeichen lang sein und mindestens einen Buchstaben, eine Zahl und ein Sonderzeichen (!@#$%^&*()_+-=[]{};\':"|,.<>/?) enthalten',
  [SuiteCoreStringKey.Validation_PasswordsDifferent]:
    'Das neue Passwort muss sich vom aktuellen Passwort unterscheiden',
  [SuiteCoreStringKey.Validation_Required]: 'Erforderlich',
  [SuiteCoreStringKey.Validation_TimezoneInvalid]: 'Ungültige Zeitzone',
  [SuiteCoreStringKey.Validation_TimezoneRequired]:
    'Die Zeitzone ist erforderlich',
  [SuiteCoreStringKey.Validation_TokenInvalid]:
    'Der E-Mail-Bestätigungslink wurde bereits verwendet oder ist ungültig',
  [SuiteCoreStringKey.Validation_TokenMissing]: 'Kein Token angegeben',
  [SuiteCoreStringKey.Validation_TokenRequired]: 'Das Token ist erforderlich',
  [SuiteCoreStringKey.Validation_TokenValid]: 'Das Token ist gültig',
  [SuiteCoreStringKey.Validation_UserIdMustNotExist]:
    'Die neue Benutzer-ID darf nicht existieren.',
  [SuiteCoreStringKey.Validation_UserIdRequired]:
    'Die Benutzer-ID ist erforderlich',
  [SuiteCoreStringKey.Validation_UsernameMaxLengthTemplate]:
    'Der Benutzername darf höchstens {UsernameMaxLength} Zeichen enthalten',
  [SuiteCoreStringKey.Validation_UsernameMinLengthTemplate]:
    'Der Benutzername muss mindestens {UsernameMinLength} Zeichen enthalten',
  [SuiteCoreStringKey.Validation_UsernameRegexErrorTemplate]:
    'Der Benutzername muss zwischen {UsernameMinLength} und {UsernameMaxLength} Zeichen lang sein und darf nur Buchstaben und Zahlen enthalten',
  [SuiteCoreStringKey.Validation_UserNotFound]:
    'Benutzer nicht gefunden oder inaktiv',
};
