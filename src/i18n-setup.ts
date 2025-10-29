import {
  ComponentDefinition,
  ComponentRegistration,
  LanguageCodes,
  createCoreI18nEngine,
  PluginI18nEngine,
} from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from './enumerations/suite-core-string-key';

export const SuiteCoreI18nEngineKey =
  'DigitalDefiance.SuiteCore.I18nEngine' as const;
export const SuiteCoreComponentId = 'suite-core-lib' as const;
export const DefaultLanguageCode = LanguageCodes.EN_US;

// Define the Suite Core component
export const SuiteCoreComponent: ComponentDefinition<SuiteCoreStringKey> = {
  id: SuiteCoreComponentId,
  name: 'Suite Core Library Component',
  stringKeys: Object.values(SuiteCoreStringKey),
};

// Create complete component strings for all supported languages
export const SuiteCoreComponentStrings: Record<
  string,
  Record<SuiteCoreStringKey, string>
> = {
  [LanguageCodes.EN_US]: {
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
    [SuiteCoreStringKey.Common_SiteTemplate]: '{Site}',
    [SuiteCoreStringKey.Common_SiteTaglineTemplate]: '{SiteTagline}',
    [SuiteCoreStringKey.Common_SiteDescriptionTemplate]: '{SiteDescription}',
    [SuiteCoreStringKey.Error_ChildRoleCannotBeASystemRole]: 'A child role cannot be a system role',
    [SuiteCoreStringKey.Error_ChildRoleCannotBeAnAdminRole]: 'A child role cannot be an admin role',
    [SuiteCoreStringKey.Error_EngineAlreadySet]: 'I18n engine already set',
    [SuiteCoreStringKey.Error_EngineNotSet]: 'I18n engine not set',
    [SuiteCoreStringKey.Error_LengthExceedsMaximum]: 'Length exceeds maximum',
    [SuiteCoreStringKey.Error_LengthIsInvalidType]: 'Length is invalid type',
    [SuiteCoreStringKey.Error_FailedToStartApplication]: 'Failed to start application',
    [SuiteCoreStringKey.Error_InvalidModelKeyTemplate]: 'Invalid model key: {modelKey}',
    [SuiteCoreStringKey.Error_ModelNotRegisteredTemplate]: 'Model not registered: {modelName}',
    [SuiteCoreStringKey.Error_FailedToCreateRoleTemplate]: 'Failed to create {NAME} role',
    [SuiteCoreStringKey.Error_IndexFileNotFoundTemplate]: 'Index file not found: {path}',
    [SuiteCoreStringKey.Error_AppDoesNotAppearToBeRunningWithinDistTemplate]: 'App does not appear to be running within a /dist/ directory: {dir}', 
    [SuiteCoreStringKey.Error_FailedToCreateEmailToken]: 'Failed to create email token',
    [SuiteCoreStringKey.Error_ValidationFunctionNotRegisteredInAllowlist]: 'Validation function not registered in allowlist',
    [SuiteCoreStringKey.Error_InvalidCertificatePathAfterResolution]: 'Invalid certificate path after resolution',
    [SuiteCoreStringKey.Error_InvalidCertificatePathMustBeAbsolute]: 'Invalid certificate path: must be absolute and cannot contain ..',
    [SuiteCoreStringKey.Error_InvalidViewsPathEscapesBaseDirectory]: 'Invalid views path: escapes base directory',
    [SuiteCoreStringKey.Error_InvalidPathContainsParentDirectoryReference]: 'Invalid path: contains parent directory reference',
    [SuiteCoreStringKey.Error_InvalidIndexPathEscapesBaseDirectory]: 'Invalid index path: escapes base directory',
    [SuiteCoreStringKey.Error_InvalidAssetsPathEscapesBaseDirectory]: 'Invalid assets path: escapes base directory',
    [SuiteCoreStringKey.Error_MissingRequiredEnvironmentVariableTemplate]: 'Missing required environment variable: {key}',
    [SuiteCoreStringKey.Error_EmptyEnvironmentVariableTemplate]: 'Environment variable {key} is empty',

    [SuiteCoreStringKey.ValidationError]: 'Validation Error',
    [SuiteCoreStringKey.Validation_MissingValidatedData]: 'Missing validated data',
    [SuiteCoreStringKey.Validation_MissingValidatedDataForFieldTemplate]: 'Missing validated data for field: {field}',
    [SuiteCoreStringKey.Validation_MnemonicRegex]: 'Invalid mnemonic format',
    
    [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]: 'No MongoDB client found, falling back',
    [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]: 'Transaction failed (transient): {error}',
    [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]: 'Transaction timeout after {timeMs}ms',
    [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]: 'Starting database initialization',
    [SuiteCoreStringKey.Admin_Error_InvalidMongoUri]: 'Invalid Mongo URI',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]: 'Failed to initialize user database (timeout after {timeMs}ms)',
    [SuiteCoreStringKey.Admin_EnvNotSetTemplate]: 'Environment variable not set: {variable}',
    [SuiteCoreStringKey.Admin_ServingRoute]: 'Serving route',
    [SuiteCoreStringKey.Admin_AccountCredentials]:
    'ACCOUNT CREDENTIALS (Save to Password Manager)',
    [SuiteCoreStringKey.Admin_CreatingUserTemplate]:
      'Creating {TYPE} user {NAME} and generating keys',
    [SuiteCoreStringKey.Admin_DatabaseInitializedWithOptionsHashTemplate]: 'Database initialized with options hash: {hash}',
    [SuiteCoreStringKey.Admin_DatabaseAlreadyInitialized]: 'Database already initialized',
    [SuiteCoreStringKey.Admin_DatabaseDropped]: 'Database collections dropped',
    [SuiteCoreStringKey.Admin_DevelopmentDatabase]: 'Development Database',
    [SuiteCoreStringKey.Admin_DroppingDatabase]: 'Dropping database',
    [SuiteCoreStringKey.Admin_EndCredentials]: 'END CREDENTIALS',
    [SuiteCoreStringKey.Admin_EnvDirSetButMissingTemplate]:
      '{VAR} is set to {PATH} but the directory is missing',
    [SuiteCoreStringKey.Admin_EnvFileNotFound]: '.env file not found, skipping loading',
    [SuiteCoreStringKey.Admin_EnvFileNotFoundTemplate]:
      'Environment file not found at {PATH}',
    [SuiteCoreStringKey.Admin_Error_DatabaseNotConnectedYet]:
      'db is not connected yet. call start() first',
    [SuiteCoreStringKey.Admin_Error_EnvironmentAlreadyInitialized]:
      'Environment already initialized',
    [SuiteCoreStringKey.Admin_Error_EnvironmentNotInitialized]:
      'Environment not initialized',
    [SuiteCoreStringKey.Admin_Error_FailedToDropDatabase]:
      'Failed to drop database collections',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabase]:
      'Failed to initialize user database',
    [SuiteCoreStringKey.Admin_Error_FailedToLoadEnvironment]: 'Failed to load .env file',
    [SuiteCoreStringKey.Admin_Error_FailedToSetTransactionTimeout]:
      'Unable to set transaction timeout, no database connection',
    [SuiteCoreStringKey.Admin_Error_NotConnectedToMongoDB]:
      'MongoDB connection not established as expected.',
    [SuiteCoreStringKey.Admin_Error_SchemaMapIsNotLoadedYet]:
      'schemaMap is not loaded yet. call start() first',
    [SuiteCoreStringKey.Admin_Error_UnhandledErrorInMain]: 'Unhandled error in main',
    [SuiteCoreStringKey.Admin_ErrorCleaningUpTestData]: 'Error cleaning up test data',
    [SuiteCoreStringKey.Admin_ErrorClosingConnection]: 'Error closing connection',
    [SuiteCoreStringKey.Admin_ErrorStoppingMongoServer]: 'Error stopping mongo server',
    [SuiteCoreStringKey.Admin_FailedToSetUpTestDatabase]: 'Failed to setup test database',
    [SuiteCoreStringKey.Admin_LoadingEnvironmentTemplate]:
      'Loading environment from {PATH}',
    [SuiteCoreStringKey.Admin_MakeSureToSetItInEnv]:
      'Make sure to set it in your .env file',
    [SuiteCoreStringKey.Admin_ProceedingToDbInitialization]:
      'Proceeding to database initialization...',
    [SuiteCoreStringKey.Admin_RoleCreatedTemplate]:
      'Role {ROLE} created successfully with ID {ID}',
    [SuiteCoreStringKey.Admin_SettingUp]: 'Setting up...',
    [SuiteCoreStringKey.Admin_SettingUpUsersAndRoles]: 'Setting up users and roles',
    [SuiteCoreStringKey.Admin_SetTransactionTimeoutSuccessfully]:
      'Transaction timeout set successfully',
    [SuiteCoreStringKey.Admin_StartingDbInitialization]:
      'Starting database initialization...',
    [SuiteCoreStringKey.Admin_StringNotFoundForLanguageTemplate]:
      'String {NAME} not found for language {LANG}',
    [SuiteCoreStringKey.Admin_TearingDown]: 'Tearing down...',
    [SuiteCoreStringKey.Admin_TransactionsEnabledDisabledTemplate]:
      'Transactions are {STATE}',
    [SuiteCoreStringKey.Admin_UserDatabaseInitialized]: 'User database initialized',
    [SuiteCoreStringKey.Admin_UserRoleCreatedTemplate]:
      'User-role relationship created: User {USERID} -> Role {ROLEID}',
    [SuiteCoreStringKey.Admin_UsingMongoDbMemoryWithTransactions]:
      'Using MongoDB Memory Server with transaction support',
    [SuiteCoreStringKey.AdminRoleNotFound]: 'Admin role not found',
    [SuiteCoreStringKey.ApiAccess_Title]: 'Your Access Token',
    [SuiteCoreStringKey.ApiAccess_TokenNotAvailable]: 'Token not available',
    [SuiteCoreStringKey.BackupCodeRecovery_CodesRemainingTemplate]:
      '{count} backup codes remaining',
    [SuiteCoreStringKey.BackupCodeRecovery_GenerateNewCodes]: 'Generate New Backup Codes',
    [SuiteCoreStringKey.BackupCodeRecovery_Login]: 'Login with Backup Code',
    [SuiteCoreStringKey.BackupCodeRecovery_RecoverMnemonic]: 'Recover your mnemonic',
    [SuiteCoreStringKey.BackupCodeRecovery_Success]: 'Backup code recovery successful.',
    [SuiteCoreStringKey.BackupCodeRecovery_Title]: 'Backup Code Login',
    [SuiteCoreStringKey.BackupCodeRecovery_YourNewCodes]:
      'Here are your new backup codes. Please write them down in a safe location, they cannot be viewed again.',
    [SuiteCoreStringKey.CannotRemoveLastAdmin]: 'Cannot remove last admin',
    [SuiteCoreStringKey.ChangePassword_ChangePasswordButton]: 'Change Password',
    [SuiteCoreStringKey.Common_Admin]: 'Admin',
    [SuiteCoreStringKey.Common_Amount]: 'Amount',
    [SuiteCoreStringKey.Common_BackupCode]: 'Backup Code',
    [SuiteCoreStringKey.Common_BackupCodes]: 'Backup Codes',
    [SuiteCoreStringKey.Common_Cancel]: 'Cancel',
    [SuiteCoreStringKey.Common_ChangePassword]: 'Change Password',
    [SuiteCoreStringKey.Common_ChangingPassword]: 'Changing password',
    [SuiteCoreStringKey.Common_Confirm]: 'Confirm',
    [SuiteCoreStringKey.Common_ConfirmNewPassword]: 'Confirm New Password',
    [SuiteCoreStringKey.Common_Connected]: 'Connected',
    [SuiteCoreStringKey.Common_CopiedToClipboard]: 'Copied to clipboard',
    [SuiteCoreStringKey.Common_CopyToClipboard]: 'Copy to clipboard',
    [SuiteCoreStringKey.Common_CurrencyCode]: 'Currency Code',
    [SuiteCoreStringKey.Common_CurrentPassword]: 'Current Password',
    [SuiteCoreStringKey.Common_Dashboard]: 'Dashboard',
    [SuiteCoreStringKey.Common_Date]: 'Date',
    [SuiteCoreStringKey.Common_DateCreated]: 'Date Created',
    [SuiteCoreStringKey.Common_Description]: 'Description',
    [SuiteCoreStringKey.Common_Disabled]: 'Disabled',
    [SuiteCoreStringKey.Common_Email]: 'Email Address',
    [SuiteCoreStringKey.Common_EmailVerification]: 'Email Verification',
    [SuiteCoreStringKey.Common_Enabled]: 'Enabled',
    [SuiteCoreStringKey.Common_Expiration]: 'Expiration',
    [SuiteCoreStringKey.Common_ID]: 'ID',
    [SuiteCoreStringKey.Common_KeyFeatures]: 'Key Features',
    [SuiteCoreStringKey.Common_Loaded]: 'Loaded',
    [SuiteCoreStringKey.Common_Loading]: 'Loading',
    [SuiteCoreStringKey.Common_Logo]: 'Logo',
    [SuiteCoreStringKey.Common_Member]: 'Member',
    [SuiteCoreStringKey.Common_Minute]: 'Minute',
    [SuiteCoreStringKey.Common_Minutes]: 'Minutes',
    [SuiteCoreStringKey.Common_Mnemonic]: 'Mnemonic',
    [SuiteCoreStringKey.Common_MnemonicExpiration]: 'Mnemonic Expiration',
    [SuiteCoreStringKey.Common_NewPassword]: 'New Password',
    [SuiteCoreStringKey.Common_Notification]: 'Notification',
    [SuiteCoreStringKey.Common_NotValidTimeZoneTemplate]:
      '{timezone} is not a valid timezone',
    [SuiteCoreStringKey.Common_OK]: 'OK',
    [SuiteCoreStringKey.Common_Online]: 'Online',
    [SuiteCoreStringKey.Common_Password]: 'Password',
    [SuiteCoreStringKey.Common_PrivateKey]: 'Private Key',
    [SuiteCoreStringKey.Common_PublicKey]: 'Public Key',
    [SuiteCoreStringKey.Common_Registration]: 'Register',
    [SuiteCoreStringKey.Common_RemoveMember]: 'Remove Member',
    [SuiteCoreStringKey.Common_Role]: 'Role',
    [SuiteCoreStringKey.Common_Schema]: 'Schema',
    [SuiteCoreStringKey.Common_Schemas]: 'Schemas',
    [SuiteCoreStringKey.Common_Seconds]: 'Seconds',
    [SuiteCoreStringKey.Common_Status]: 'Status',
    [SuiteCoreStringKey.Common_System]: 'System',
    [SuiteCoreStringKey.Common_ThemeToggle_Dark]: 'Set Dark Mode',
    [SuiteCoreStringKey.Common_ThemeToggle_Light]: 'Set Light Mode',
    [SuiteCoreStringKey.Common_Timezone]: 'Timezone',
    [SuiteCoreStringKey.Common_Type]: 'Type',
    [SuiteCoreStringKey.Common_UseMnemonic]: 'Use mnemonic only',
    [SuiteCoreStringKey.Common_UsePassword]: 'Set password',
    [SuiteCoreStringKey.Common_User]: 'User',
    [SuiteCoreStringKey.Common_UserCreatedTemplate]:
      '{TYPE} user {NAME} created successfully',
    [SuiteCoreStringKey.Common_Username]: 'Username',
    [SuiteCoreStringKey.Common_Using]: 'Using',
    [SuiteCoreStringKey.Common_Wallet]: 'Wallet',
    [SuiteCoreStringKey.Common_WalletExpiration]: 'Wallet Expiration',
    [SuiteCoreStringKey.Dashboard_YourDashboard]: 'Your Dashboard',
    [SuiteCoreStringKey.Email_ConfirmationBody]:
      'Please click the link below to confirm your email.',
    [SuiteCoreStringKey.Email_ConfirmationSubjectTemplate]: '{Site} email confirmation',
    [SuiteCoreStringKey.Email_LinkExpiresInTemplate]:
      'Link expires in {EmailTokenResendIntervalMinutes} minutes.',
    [SuiteCoreStringKey.Email_LoginRequestBody]:
      'Please click the link below to log in to your account.',
    [SuiteCoreStringKey.Email_LoginRequestSubjectTemplate]: '{Site} login request',
    [SuiteCoreStringKey.Email_ResetPasswordBody]:
      'Please click the link below to reset your password.',
    [SuiteCoreStringKey.Email_ResetPasswordSubjectTemplate]: '{Site} password reset',
    [SuiteCoreStringKey.Email_TokenFailedToSend]: 'Failed to send email token',
    [SuiteCoreStringKey.Email_TokenSent]:
      'If an account with that email or username exists, an email has been sent.',
    [SuiteCoreStringKey.EmailVerification_AlreadyVerified]:
      'This email address has already been verified.',
    [SuiteCoreStringKey.EmailVerification_Failed]:
      'Email verification failed. Please try again.',
    [SuiteCoreStringKey.EmailVerification_Resent]:
      'Verification email resent successfully',
    [SuiteCoreStringKey.EmailVerification_Success]: 'Email verified successfully',
    [SuiteCoreStringKey.Error_ChallengeError]: 'Error producing challenge',
    [SuiteCoreStringKey.Error_DirectTokenAlreadyUsed]:
      'Direct login token has already been used',
    [SuiteCoreStringKey.Error_Disposed]: 'Already disposed',
    [SuiteCoreStringKey.Error_EciesError_InvalidMultipleMessageOverheadSize]:
      'Invalid ECIES multiple message overhead constants',
    [SuiteCoreStringKey.Error_EciesError_InvalidPublicKeyLength]:
      'Invalid ECIES public key length',
    [SuiteCoreStringKey.Error_EciesError_InvalidRecipientCount]:
      'Invalid ECIES multiple recipient count size',
    [SuiteCoreStringKey.Error_EciesErrorCrcError]: 'CRC error',
    [SuiteCoreStringKey.Error_EciesErrorDecryptionFailed]:
      'ECIES decryption failed (MAC check or padding error)',
    [SuiteCoreStringKey.Error_EciesErrorEncryptionDataLengthMismatch]:
      'Encrypted data length mismatch',
    [SuiteCoreStringKey.Error_EciesErrorEncryptionTypeMismatch]:
      'Encryption type mismatch',
    [SuiteCoreStringKey.Error_EciesErrorFileSizeTooLarge]: 'File size too large',
    [SuiteCoreStringKey.Error_EciesErrorInvalidAuthTagLength]: 'Invalid auth tag length',
    [SuiteCoreStringKey.Error_EciesErrorInvalidDataLength]: 'Invalid data length',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedDataLength]:
      'Invalid encrypted data length',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedKeyLength]:
      'Invalid encrypted key length',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptionType]: 'Invalid encryption type',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEphemeralPublicKey]:
      'Invalid ephemeral public key',
    [SuiteCoreStringKey.Error_EciesErrorInvalidHeaderLength]: 'Invalid header length',
    [SuiteCoreStringKey.Error_EciesErrorInvalidIVLength]: 'Invalid IV length',
    [SuiteCoreStringKey.Error_EciesErrorInvalidMessageCrc]: 'Invalid message CRC',
    [SuiteCoreStringKey.Error_EciesErrorInvalidMnemonic]: 'Invalid mnemonic',
    [SuiteCoreStringKey.Error_EciesErrorInvalidOperation]: 'Invalid operation',
    [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientCount]: 'Invalid recipient count',
    [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientPublicKey]:
      'Invalid recipient public key provided for encryption',
    [SuiteCoreStringKey.Error_EciesErrorInvalidSenderPublicKey]:
      'Invalid sender public key',
    [SuiteCoreStringKey.Error_EciesErrorInvalidSignature]: 'Invalid signature',
    [SuiteCoreStringKey.Error_EciesErrorMessageLengthMismatch]: 'Message length mismatch',
    [SuiteCoreStringKey.Error_EciesErrorPrivateKeyNotLoaded]: 'Private key not loaded',
    [SuiteCoreStringKey.Error_EciesErrorRecipientKeyCountMismatch]:
      'Recipient count does not match key count',
    [SuiteCoreStringKey.Error_EciesErrorRecipientNotFound]:
      'Recipient not found in recipient IDs',
    [SuiteCoreStringKey.Error_EciesErrorSecretComputationFailed]:
      'Failed to compute shared secret during ECIES operation',
    [SuiteCoreStringKey.Error_EciesErrorTooManyRecipients]:
      'Too many recipients: exceeds maximum allowed',
    [SuiteCoreStringKey.Error_EciesFailedSharedSecret]: 'Failed to compute shared secret',
    [SuiteCoreStringKey.Error_EmailSentTooRecentlyTemplate]: 'Email token sent too recently. Please try again in ${timeRemaining} seconds.',
    [SuiteCoreStringKey.Error_FailedToCopy]: 'Failed to copy text',
    [SuiteCoreStringKey.Error_FailedToCreateUserRoleTemplate]:
      'Failed to create user-role relationship for user {USER_ID} and role {ROLE_ID}',
    [SuiteCoreStringKey.Error_FailedToCreateUserTemplate]: 'Failed to create {NAME} user',
    [SuiteCoreStringKey.Error_FailedToFindRoleTemplate]: 'Failed to find role {ROLE}',
    [SuiteCoreStringKey.Error_FailedToLookupRoleTemplate]:
      'Failed to lookup role ID for {ROLE}',
    [SuiteCoreStringKey.Error_FailedToReEncryptMnemonicTemplate]:
      'Failed to re-encrypt mnemonic with id: {ID}',
    [SuiteCoreStringKey.Error_FailedToStoreUserMnemonicTemplate]:
      'Failed to store mnemonic for user {NAME}',
    [SuiteCoreStringKey.Error_FailedToUpdateLastLoginTemplate]:
      'Failed to update lastLogin for user {userId}',
    [SuiteCoreStringKey.Error_FailedToUseDirectLoginToken]:
      'Failed to use direct login token',
    [SuiteCoreStringKey.Error_FecErrorDataRequired]: 'Data is required',
    [SuiteCoreStringKey.Error_FecErrorFecDecodingFailedTemplate]:
      'FEC decoding failed: {ERROR}',
    [SuiteCoreStringKey.Error_FecErrorFecEncodingFailedTemplate]:
      'FEC encoding failed: {ERROR}',
    [SuiteCoreStringKey.Error_FecErrorInputDataMustBeUint8Array]:
      'Input data must be a Uint8Array',
    [SuiteCoreStringKey.Error_FecErrorInvalidDataLengthTemplate]:
      'Invalid data length: {LENGTH}, expected {EXPECTED}',
    [SuiteCoreStringKey.Error_FecErrorInvalidShardCounts]: 'Invalid shard counts',
    [SuiteCoreStringKey.Error_FecErrorInvalidShardsAvailableArray]:
      'Invalid shards available array',
    [SuiteCoreStringKey.Error_FecErrorNotEnoughShardsAvailableTemplate]:
      'Not enough shards available: {AVAILABLE}, need {REQUIRED}',
    [SuiteCoreStringKey.Error_FecErrorParityDataCountMustBePositive]:
      'Parity data count must be positive',
    [SuiteCoreStringKey.Error_FecErrorParityDataRequired]:
      'Parity data is required for FEC operations',
    [SuiteCoreStringKey.Error_FecErrorShardSizeExceedsMaximumTemplate]:
      'Shard size {SIZE} exceeds maximum {MAXIMUM}',
    [SuiteCoreStringKey.Error_InvalidBackupCodeVersionTemplate]:
      '{version} is an invalid backup code version',
    [SuiteCoreStringKey.Error_InvalidChallengeResponse]:
      'Invalid or incorrect login challenge response',
    [SuiteCoreStringKey.Error_InvalidChecksumConstants]: 'Invalid checksum constants',
    [SuiteCoreStringKey.Error_InvalidEmail]: 'Invalid email.',
    [SuiteCoreStringKey.Error_InvalidEmailTemplate]: '{email} is not a valid email address.',
    [SuiteCoreStringKey.Error_InvalidEmailMissing]: 'Missing email.',
    [SuiteCoreStringKey.Error_InvalidEmailWhitespace]:
      'Email contains trailing or leading whitespace.',
    [SuiteCoreStringKey.Error_InvalidGuid]: 'Invalid GUID.',
    [SuiteCoreStringKey.Error_InvalidGuidTemplate]: 'Invalid GUID: {GUID}',
    [SuiteCoreStringKey.Error_InvalidGuidUnknownBrandTemplate]:
      'Unknown GUID brand: {BRAND}.',
    [SuiteCoreStringKey.Error_InvalidGuidUnknownLengthTemplate]:
      'Invalid GUID length: {LENGTH}.',
    [SuiteCoreStringKey.Error_InvalidLanguageCodeTemplate]:
      'Invalid language code "{LANGUAGE}" provided. Falling back to default language "{DEFAULT_LANGUAGE}".',
    [SuiteCoreStringKey.Error_InvalidMnemonicEncryptionKey]:
      'Encryption key must be 32 bytes (64 hex characters).',
    [SuiteCoreStringKey.Error_LanguageNotFoundForEnumTemplate]:
      'Language {lang} not found for enum {enumName}',
    [SuiteCoreStringKey.Error_LanguageNotFoundInStringsTemplate]:
      'Language {LANG} not found in Strings',
    [SuiteCoreStringKey.Error_Login_ChallengeExpiredTemplate]:
      'Login challenge expired after {LoginChallengeExpiration} ms',
    [SuiteCoreStringKey.Error_Login_DirectLoginNotAllowed]:
      'Direct login is not allowed for this account. Please request an email login link.',
    [SuiteCoreStringKey.Error_MemberErrorEncryptionDataTooLarge]:
      'Encryption data too large.',
    [SuiteCoreStringKey.Error_MemberErrorFailedToConvertMemberData]:
      'Failed to convert member data.',
    [SuiteCoreStringKey.Error_MemberErrorFailedToHydrateMember]:
      'Failed to hydrate member.',
    [SuiteCoreStringKey.Error_MemberErrorIncorrectOrInvalidPrivateKey]:
      'Incorrect or invalid private key for public key',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEmail]: 'Invalid email.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEmailWhitespace]:
      'Email contains trailing or leading whitespace.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEncryptionData]:
      'Invalid encryption data.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberData]: 'Invalid member data.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberName]: 'Invalid member name.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberNameWhitespace]:
      'Member name contains trailing or leading whitespace.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberStatus]: 'Invalid member status.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMnemonic]: 'Invalid wallet mnemonic.',
    [SuiteCoreStringKey.Error_MemberErrorMemberAlreadyExists]: 'Member already exists.',
    [SuiteCoreStringKey.Error_MemberErrorMemberNotFound]: 'Member not found.',
    [SuiteCoreStringKey.Error_MemberErrorMissingEmail]: 'Missing email.',
    [SuiteCoreStringKey.Error_MemberErrorMissingEncryptionData]:
      'Missing encryption data.',
    [SuiteCoreStringKey.Error_MemberErrorMissingMemberName]: 'Missing member name.',
    [SuiteCoreStringKey.Error_MemberErrorMissingPrivateKey]: 'Missing private key.',
    [SuiteCoreStringKey.Error_MemberErrorMissingVotingPrivateKey]:
      'Missing voting private key.',
    [SuiteCoreStringKey.Error_MemberErrorMissingVotingPublicKey]:
      'Missing voting public key.',
    [SuiteCoreStringKey.Error_MemberErrorNoWallet]: 'No wallet loaded.',
    [SuiteCoreStringKey.Error_MemberErrorPrivateKeyRequiredToDeriveVotingKeyPair]:
      'Private key required to derive voting key pair.',
    [SuiteCoreStringKey.Error_MemberErrorWalletAlreadyLoaded]: 'Wallet already loaded.',
    [SuiteCoreStringKey.Error_MnemonicIsNullTemplate]: '{NAME} mnemonic is null',
    [SuiteCoreStringKey.Error_NoTranslationsForEnumLanguageTemplate]:
      'Translation not found for {enumName}.{value} in {language}',
    [SuiteCoreStringKey.Error_NoTranslationsForEnumTemplate]:
      'No translations found for enum: {enumName}',
    [SuiteCoreStringKey.Error_PasswordChange]: 'Error changing password',
    [SuiteCoreStringKey.Error_Pbkdf2InvalidHashLength]:
      'Hash length does not match expected length',
    [SuiteCoreStringKey.Error_Pbkdf2InvalidSaltLength]:
      'Salt length does not match expected length',
    [SuiteCoreStringKey.Error_RoleNotFoundTemplate]:
      'Could not map Role with ID {ID} to an entry in Role enum',
    [SuiteCoreStringKey.Error_SecureStorageDecryptedValueChecksumMismatch]:
      'Decrypted value checksum does not match',
    [SuiteCoreStringKey.Error_SecureStorageDecryptedValueLengthMismatch]:
      'Decrypted value length does not match expected length',
    [SuiteCoreStringKey.Error_SecureStorageValueIsNull]: 'Secure storage value is null',
    [SuiteCoreStringKey.Error_SymmetricDataNullOrUndefined]:
      'Data to encrypt cannot be null or undefined',
    [SuiteCoreStringKey.Error_SymmetricInvalidKeyLengthTemplate]:
      'Encryption key must be {KEY_BYTES} bytes long',
    [SuiteCoreStringKey.Error_UnknownEnumValueForEnumTemplate]:
      'Unknown enum value: {value} for enum: {enumName}',
    [SuiteCoreStringKey.Error_EmailService_NotConfigured]: 'Email service not configured. Call setEmailService() before using middleware.',
    [SuiteCoreStringKey.ForgotPassword_BackToLogin]: 'Back to Login',
    [SuiteCoreStringKey.ForgotPassword_Error]:
      'An error occurred while processing your request.',
    [SuiteCoreStringKey.ForgotPassword_ForgotPassword]: 'Forgot Password',
    [SuiteCoreStringKey.ForgotPassword_InvalidToken]:
      'Invalid or expired token. Please request a new password reset.',
    [SuiteCoreStringKey.ForgotPassword_ResetPassword]: 'Reset Password',
    [SuiteCoreStringKey.ForgotPassword_SendResetLink]: 'Send Reset Link',
    [SuiteCoreStringKey.ForgotPassword_Success]:
      'Your password has been successfully reset. You can now log in with your new password.',
    [SuiteCoreStringKey.ForgotPassword_Title]: 'Forgot Password',
    [SuiteCoreStringKey.HavingTroubleContactSupport]:
      "If you're having trouble, please contact our support team or",
    [SuiteCoreStringKey.KeyFeatures_1]:
      'Securely store files with rules for automated release or deletion.',
    [SuiteCoreStringKey.KeyFeatures_2]:
      'Create "Canaries" to monitor your digital or physical activity.',
    [SuiteCoreStringKey.KeyFeatures_3]:
      'Actions are triggered based on canary status (e.g., inactivity).',
    [SuiteCoreStringKey.KeyFeatures_4]: 'Duress codes for immediate, emergency actions.',
    [SuiteCoreStringKey.LanguageUpdate_Success]: 'Language updated successfully',
    [SuiteCoreStringKey.LoggedIn_Success]: 'Logged in successfully',
    [SuiteCoreStringKey.Login_ChallengeGenerated]: 'Login challenge generated',
    [SuiteCoreStringKey.Login_DirectLogin]: 'Direct Login',
    [SuiteCoreStringKey.Login_DirectLoginWarning]:
      'When the username or email is invalid, or the user has direct login disabled, the direct challenge login will fail with a generic invalid challenge response error that does not reveal whether the account exists.',
    [SuiteCoreStringKey.Login_EmailChallengeSent]:
      'A login link has been sent to your email. Please click it to log in.',
    [SuiteCoreStringKey.Login_EmailLogin]: 'Email Login',
    [SuiteCoreStringKey.Login_ForgotPassword]: 'Forgot Password?',
    [SuiteCoreStringKey.Login_LoginButton]: 'Log In',
    [SuiteCoreStringKey.Login_SignUp]: "Don't have an account? Sign Up",
    [SuiteCoreStringKey.Login_Title]: 'Sign In',
    [SuiteCoreStringKey.Login_UseEmail]: 'Use Email',
    [SuiteCoreStringKey.Login_UseUsername]: 'Use Username',
    [SuiteCoreStringKey.LogoutButton]: 'Logout',
    [SuiteCoreStringKey.MemberRoleNotFound]: 'Member role not found',
    [SuiteCoreStringKey.MnemonicRecovery_Missing]: 'Mnemonic recovery data missing',
    [SuiteCoreStringKey.MnemonicRecovery_Success]: 'Mnemonic recovered successfully',
    [SuiteCoreStringKey.NoMembersYet]: 'No members yet',
    [SuiteCoreStringKey.NoVerificationTokenProvided]: 'No verification token provided.',
    [SuiteCoreStringKey.PasswordChange_IncorrectPassword]:
      'Current password is incorrect',
    [SuiteCoreStringKey.PasswordLogin_InvalidCurrentPassword]: 'Current password is incorrect',
    [SuiteCoreStringKey.PasswordChange_Success]: 'Password changed successfully',
    [SuiteCoreStringKey.PasswordLogin_Setup_Failure]: 'Password login setup failed',
    [SuiteCoreStringKey.PasswordLogin_Setup_NotAvailable]: 'Password login not available',
    [SuiteCoreStringKey.PasswordLogin_Setup_Success]: 'Password login setup successful',
    [SuiteCoreStringKey.PasswordReset_AlreadySent]:
      'Password reset link has already been sent to your email.',
    [SuiteCoreStringKey.PasswordReset_EmailNotVerified]:
      'Please verify your email address before resetting your password.',
    [SuiteCoreStringKey.PasswordReset_Success]:
      'If an account with that email exists, a password reset link has been sent.',
    [SuiteCoreStringKey.ProceedToLogin]: 'Proceed to login',
    [SuiteCoreStringKey.Register_RegisterButton]: 'Get Started',
    [SuiteCoreStringKey.RegisterButton]: 'Register',
    [SuiteCoreStringKey.Registration_ConfirmPassword]: 'Confirm Password',
    [SuiteCoreStringKey.Registration_Error]:
      'An unexpected error occurred during registration. Please try again.',
    [SuiteCoreStringKey.Registration_LoginLink]: 'Already have an account? Log in',
    [SuiteCoreStringKey.Registration_MnemonicSuccess]:
      'Registration successful. Please save your mnemonic securely. It will not be shown again. Please check your email to verify your account.',
    [SuiteCoreStringKey.Registration_RegisterButton]: 'Register',
    [SuiteCoreStringKey.Registration_Registering]: 'Registering...',
    [SuiteCoreStringKey.Registration_RegisteringMessage]:
      'Please wait while we create your account. This may take a minute to generate a key and complete the registration.',
    [SuiteCoreStringKey.Registration_Success]:
      'Registration successful. Please check your email to verify your account.',
    [SuiteCoreStringKey.Registration_SuccessTitle]: 'Registration successful.',
    [SuiteCoreStringKey.RemoveAdmin_Success]: 'Admin removed successfully',
    [SuiteCoreStringKey.RemoveAdmin_Unauthorized]: 'Unauthorized to remove an admin',
    [SuiteCoreStringKey.RemoveMember_Success]: 'Member removed successfully',
    [SuiteCoreStringKey.RemoveMember_Unauthorized]: 'Unauthorized to remove a member',
    [SuiteCoreStringKey.RequestNewVerificationEmail]: 'Request a new verification email',
    [SuiteCoreStringKey.SignInButton]: 'Sign In',
    [SuiteCoreStringKey.TestItemCountTemplate]: '{count} items',
    [SuiteCoreStringKey.TestTemplate]:
      'This is a test: {variable1}, {AdministratorEmail}',
    [SuiteCoreStringKey.TestUsernameTemplate]: 'This is a test username: {user}',
    [SuiteCoreStringKey.TogglePasswordVisibility]: 'toggle password visibility',
    [SuiteCoreStringKey.TokenCreate_Success]: 'Token created successfully',
    [SuiteCoreStringKey.TokenNotFoundTemplate]: 'Token not found: {TOKEN}',
    [SuiteCoreStringKey.TokenRefreshed]: 'Token refreshed',
    [SuiteCoreStringKey.TokenType_AccountVerification]: 'Account Verification',
    [SuiteCoreStringKey.TokenType_LoginRequest]: 'Login Request',
    [SuiteCoreStringKey.TokenType_PasswordReset]: 'Password Reset',
    [SuiteCoreStringKey.TokenType_MnemonicRecoveryRequest]: 'Mnemonic Recovery Request',
    [SuiteCoreStringKey.TokenType_PrivateKeyRequest]: 'Private Key Request',
    [SuiteCoreStringKey.Validation_AccountLocked]: 'Account is locked',
    [SuiteCoreStringKey.Validation_AdminUserIdRequired]: 'Admin user ID is required',
    [SuiteCoreStringKey.Validation_ConfirmNewPassword]:
      'Please confirm your new password',
    [SuiteCoreStringKey.Validation_CreatedUserIdError]:
      'The created by user ID does not exist and does not match the new user ID.',
    [SuiteCoreStringKey.Validation_CurrencyCodeRequired]: 'Currency code is required',
    [SuiteCoreStringKey.Validation_CurrentPasswordRequired]:
      'Current password is required',
    [SuiteCoreStringKey.Validation_DescriptionRequired]: 'Description is required',
    [SuiteCoreStringKey.Validation_EmailNotVerified]: 'Email is not verified',
    [SuiteCoreStringKey.Validation_HmacRegex]: 'HMAC must be a valid hexadecimal string.',
    [SuiteCoreStringKey.Validation_InvalidAdminUserId]: 'Invalid admin user ID',
    [SuiteCoreStringKey.Validation_InvalidBackupCode]:
      'Invalid or already used backup code',
    [SuiteCoreStringKey.Validation_InvalidChallenge]: 'Invalid or incorrect challenge',
    [SuiteCoreStringKey.Validation_InvalidCurrencyCode]: 'Invalid currency code',
    [SuiteCoreStringKey.Validation_InvalidEncryptedMnemonic]:
      'Invalid encrypted mnemonic. It must be a valid hexadecimal string.',
    [SuiteCoreStringKey.Validation_InvalidGuid]: 'Invalid GUID',
    [SuiteCoreStringKey.Validation_InvalidLanguage]: 'Invalid language',
    [SuiteCoreStringKey.Validation_InvalidLanguageCode]: 'Invalid language code',
    [SuiteCoreStringKey.Validation_InvalidMemberId]: 'Invalid member ID',
    [SuiteCoreStringKey.Validation_InvalidMnemonic]: 'Invalid mnemonic phrase.',
    [SuiteCoreStringKey.Validation_InvalidOldMnemonicEncryptionKey]:
      'Old encryption key must be 32 bytes (64 hex characters).',
    [SuiteCoreStringKey.Validation_InvalidPassword]: 'Invalid or incorrect password',
    [SuiteCoreStringKey.Validation_InvalidSignature]: 'Invalid signature',
    [SuiteCoreStringKey.Validation_InvalidUserId]: 'Invalid user ID',
    [SuiteCoreStringKey.Validation_InvalidUserIdTemplate]: 'Invalid user ID: {detail}',
    [SuiteCoreStringKey.Validation_IsMemberBoolean]: 'isMember must be a boolean',
    [SuiteCoreStringKey.Validation_MemberIdRequired]: 'Member ID is required',
    [SuiteCoreStringKey.Validation_MnemonicOrPasswordRequired]:
      'Either mnemonic or password is required',
    [SuiteCoreStringKey.Validation_MnemonicRequired]: 'Mnemonic is required.',
    [SuiteCoreStringKey.Validation_NameRequired]: 'Name is required',
    [SuiteCoreStringKey.Validation_NewPasswordRequired]: 'New password is required',
    [SuiteCoreStringKey.Validation_PasswordMatch]: 'Passwords must match',
    [SuiteCoreStringKey.Validation_PasswordMinLengthTemplate]:
      'Password must be at least {PasswordMinLength} characters',
    [SuiteCoreStringKey.Validation_PasswordRegexErrorTemplate]:
      'Password must be at least {PasswordMinLength} characters long and include at least one letter, one number, and one special character (!@#$%^&*()_+-=[]{};\':"|,.<>/?)',
    [SuiteCoreStringKey.Validation_PasswordsDifferent]:
      'New password must be different from the current password',
    [SuiteCoreStringKey.Validation_Required]: 'Required',
    [SuiteCoreStringKey.Validation_TimezoneInvalid]: 'Invalid timezone',
    [SuiteCoreStringKey.Validation_TimezoneRequired]: 'Timezone is required',
    [SuiteCoreStringKey.Validation_TokenInvalid]:
      'Email verification link has already been used or is invalid',
    [SuiteCoreStringKey.Validation_TokenMissing]: 'No token provided',
    [SuiteCoreStringKey.Validation_TokenRequired]: 'Token is required',
    [SuiteCoreStringKey.Validation_TokenValid]: 'Token is valid',
    [SuiteCoreStringKey.Validation_UserIdMustNotExist]: 'The new user ID must not exist.',
    [SuiteCoreStringKey.Validation_UserIdRequired]: 'User ID is required',
    [SuiteCoreStringKey.Validation_UsernameMaxLengthTemplate]:
      'Username must be at most {UsernameMaxLength} characters',
    [SuiteCoreStringKey.Validation_UsernameMinLengthTemplate]:
      'Username must be at least {UsernameMinLength} characters',
    [SuiteCoreStringKey.Validation_UsernameRegexErrorTemplate]:
      'Username must be {UsernameMinLength}-{UsernameMaxLength} characters long and contain only letters and numbers',
    [SuiteCoreStringKey.Validation_UserNotFound]: 'User not found or inactive',
  },
  [LanguageCodes.EN_GB]: {
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
    [SuiteCoreStringKey.Error_InvalidCertificatePathAfterResolution]: 'Invalid certificate path after resolution',
    [SuiteCoreStringKey.Error_InvalidCertificatePathMustBeAbsolute]: 'Invalid certificate path: must be absolute and cannot contain ..',
    [SuiteCoreStringKey.Error_InvalidViewsPathEscapesBaseDirectory]: 'Invalid views path: escapes base directory',
    [SuiteCoreStringKey.Error_InvalidPathContainsParentDirectoryReference]: 'Invalid path: contains parent directory reference',
    [SuiteCoreStringKey.Error_InvalidIndexPathEscapesBaseDirectory]: 'Invalid index path: escapes base directory',
    [SuiteCoreStringKey.Error_InvalidAssetsPathEscapesBaseDirectory]: 'Invalid assets path: escapes base directory',
    [SuiteCoreStringKey.Error_MissingRequiredEnvironmentVariableTemplate]: 'Missing required environment variable: {key}',
    [SuiteCoreStringKey.Error_EmptyEnvironmentVariableTemplate]: 'Environment variable {key} is empty',
    [SuiteCoreStringKey.Common_UnexpectedError]: 'An unexpected error occurred',
    [SuiteCoreStringKey.Common_Ready]: 'Ready',
    [SuiteCoreStringKey.Common_Stopping]: 'Stopping',
    [SuiteCoreStringKey.Common_Stopped]: 'Stopped',
    [SuiteCoreStringKey.Common_Connecting]: 'Connecting',
    [SuiteCoreStringKey.Common_Disconnected]: 'Disconnected',
    [SuiteCoreStringKey.Common_MongoDB]: 'MongoDB',
    [SuiteCoreStringKey.Common_ApplicationAndDatabase]: 'Application and Database',
    [SuiteCoreStringKey.Common_Unauthorized]: 'Unauthorized',
    [SuiteCoreStringKey.Common_SiteTemplate]: '{Site}',
    [SuiteCoreStringKey.Common_SiteTaglineTemplate]: '{SiteTagline}',
    [SuiteCoreStringKey.Common_SiteDescriptionTemplate]: '{SiteDescription}',
    [SuiteCoreStringKey.Common_NoActiveRequest]: 'No active request',
    [SuiteCoreStringKey.Common_NoUserOnRequest]: 'No user on request',
    [SuiteCoreStringKey.Common_NoActiveResponse]: 'No active response',
    [SuiteCoreStringKey.Error_ChildRoleCannotBeASystemRole]: 'A child role cannot be a system role',
    [SuiteCoreStringKey.Error_ChildRoleCannotBeAnAdminRole]: 'A child role cannot be an admin role',
    [SuiteCoreStringKey.Error_EngineAlreadySet]: 'I18n engine already set',
    [SuiteCoreStringKey.Error_EngineNotSet]: 'I18n engine not set',
    [SuiteCoreStringKey.Error_LengthExceedsMaximum]: 'Length exceeds maximum',
    [SuiteCoreStringKey.Error_LengthIsInvalidType]: 'Length is invalid type',
    [SuiteCoreStringKey.Error_FailedToStartApplication]: 'Failed to start application',
    [SuiteCoreStringKey.Error_InvalidModelKeyTemplate]: 'Invalid model key: {modelKey}',
    [SuiteCoreStringKey.Error_ModelNotRegisteredTemplate]: 'Model not registered: {modelName}',
    [SuiteCoreStringKey.Error_FailedToCreateRoleTemplate]: 'Failed to create {NAME} role',
    [SuiteCoreStringKey.Error_IndexFileNotFoundTemplate]: 'Index file not found: {path}',
    [SuiteCoreStringKey.Error_AppDoesNotAppearToBeRunningWithinDistTemplate]: 'App does not appear to be running within a /dist/ directory: {dir}', 
    [SuiteCoreStringKey.Error_ValidationFunctionNotRegisteredInAllowlist]: 'Validation function not registered in allowlist',
    [SuiteCoreStringKey.ValidationError]: 'Validation Error',
    [SuiteCoreStringKey.Validation_MissingValidatedData]: 'Missing validated data',
    [SuiteCoreStringKey.Validation_MissingValidatedDataForFieldTemplate]: 'Missing validated data for field: {field}',
    [SuiteCoreStringKey.Validation_MnemonicRegex]: 'Invalid mnemonic format',
    [SuiteCoreStringKey.Admin_Error_InvalidMongoUri]: 'Invalid Mongo URI',
    [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]: 'No MongoDB client found, falling back',
    [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]: 'Transaction failed (transient): {error}',
    [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]: 'Transaction timeout after {timeMs}ms',
    [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]: 'Starting database initialization',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]: 'Failed to initialize user database (timeout after {timeMs}ms)',
    [SuiteCoreStringKey.Admin_EnvNotSetTemplate]: 'Environment variable not set: {variable}',
    [SuiteCoreStringKey.Admin_ServingRoute]: 'Serving route',
    [SuiteCoreStringKey.Admin_AccountCredentials]:
    'ACCOUNT CREDENTIALS (Save to Password Manager)',
    [SuiteCoreStringKey.Admin_CreatingUserTemplate]:
      'Creating {TYPE} user {NAME} and generating keys',
    [SuiteCoreStringKey.Admin_DatabaseInitializedWithOptionsHashTemplate]: 'Database initialized with options hash: {hash}',
    [SuiteCoreStringKey.Admin_DatabaseAlreadyInitialized]: 'Database already initialized',
    [SuiteCoreStringKey.Admin_DatabaseDropped]: 'Database collections dropped',
    [SuiteCoreStringKey.Admin_DevelopmentDatabase]: 'Development Database',
    [SuiteCoreStringKey.Admin_DroppingDatabase]: 'Dropping database',
    [SuiteCoreStringKey.Admin_EndCredentials]: 'END CREDENTIALS',
    [SuiteCoreStringKey.Admin_EnvDirSetButMissingTemplate]:
      '{VAR} is set to {PATH} but the directory is missing',
    [SuiteCoreStringKey.Admin_EnvFileNotFound]: '.env file not found, skipping loading',
    [SuiteCoreStringKey.Admin_EnvFileNotFoundTemplate]:
      'Environment file not found at {PATH}',
    [SuiteCoreStringKey.Admin_Error_DatabaseNotConnectedYet]:
      'db is not connected yet. call start() first',
    [SuiteCoreStringKey.Admin_Error_EnvironmentAlreadyInitialized]:
      'Environment already initialized',
    [SuiteCoreStringKey.Admin_Error_EnvironmentNotInitialized]:
      'Environment not initialized',
    [SuiteCoreStringKey.Admin_Error_FailedToDropDatabase]:
      'Failed to drop database collections',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabase]:
      'Failed to initialize user database',
    [SuiteCoreStringKey.Admin_Error_FailedToLoadEnvironment]: 'Failed to load .env file',
    [SuiteCoreStringKey.Admin_Error_FailedToSetTransactionTimeout]:
      'Unable to set transaction timeout, no database connection',
    [SuiteCoreStringKey.Admin_Error_NotConnectedToMongoDB]:
      'MongoDB connection not established as expected.',
    [SuiteCoreStringKey.Admin_Error_SchemaMapIsNotLoadedYet]:
      'schemaMap is not loaded yet. call start() first',
    [SuiteCoreStringKey.Admin_Error_UnhandledErrorInMain]: 'Unhandled error in main',
    [SuiteCoreStringKey.Admin_ErrorCleaningUpTestData]: 'Error cleaning up test data',
    [SuiteCoreStringKey.Admin_ErrorClosingConnection]: 'Error closing connection',
    [SuiteCoreStringKey.Admin_ErrorStoppingMongoServer]: 'Error stopping mongo server',
    [SuiteCoreStringKey.Admin_FailedToSetUpTestDatabase]: 'Failed to setup test database',
    [SuiteCoreStringKey.Admin_LoadingEnvironmentTemplate]:
      'Loading environment from {PATH}',
    [SuiteCoreStringKey.Admin_MakeSureToSetItInEnv]:
      'Make sure to set it in your .env file',
    [SuiteCoreStringKey.Admin_ProceedingToDbInitialization]:
      'Proceeding to database initialization...',
    [SuiteCoreStringKey.Admin_RoleCreatedTemplate]:
      'Role {ROLE} created successfully with ID {ID}',
    [SuiteCoreStringKey.Admin_SettingUp]: 'Setting up...',
    [SuiteCoreStringKey.Admin_SettingUpUsersAndRoles]: 'Setting up users and roles',
    [SuiteCoreStringKey.Admin_SetTransactionTimeoutSuccessfully]:
      'Transaction timeout set successfully',
    [SuiteCoreStringKey.Admin_StartingDbInitialization]:
      'Starting database initialization...',
    [SuiteCoreStringKey.Admin_StringNotFoundForLanguageTemplate]:
      'String {NAME} not found for language {LANG}',
    [SuiteCoreStringKey.Admin_TearingDown]: 'Tearing down...',
    [SuiteCoreStringKey.Admin_TransactionsEnabledDisabledTemplate]:
      'Transactions are {STATE}',
    [SuiteCoreStringKey.Admin_UserDatabaseInitialized]: 'User database initialized',
    [SuiteCoreStringKey.Admin_UserRoleCreatedTemplate]:
      'User-role relationship created: User {USERID} -> Role {ROLEID}',
    [SuiteCoreStringKey.Admin_UsingMongoDbMemoryWithTransactions]:
      'Using MongoDB Memory Server with transaction support',
    [SuiteCoreStringKey.AdminRoleNotFound]: 'Admin role not found',
    [SuiteCoreStringKey.ApiAccess_Title]: 'Your Access Token',
    [SuiteCoreStringKey.ApiAccess_TokenNotAvailable]: 'Token not available',
    [SuiteCoreStringKey.BackupCodeRecovery_CodesRemainingTemplate]:
      '{count} backup codes remaining',
    [SuiteCoreStringKey.BackupCodeRecovery_GenerateNewCodes]: 'Generate New Backup Codes',
    [SuiteCoreStringKey.BackupCodeRecovery_Login]: 'Login with Backup Code',
    [SuiteCoreStringKey.BackupCodeRecovery_RecoverMnemonic]: 'Recover your mnemonic',
    [SuiteCoreStringKey.BackupCodeRecovery_Success]: 'Backup code recovery successful.',
    [SuiteCoreStringKey.BackupCodeRecovery_Title]: 'Backup Code Login',
    [SuiteCoreStringKey.BackupCodeRecovery_YourNewCodes]:
      'Here are your new backup codes. Please write them down in a safe location, they cannot be viewed again.',
    [SuiteCoreStringKey.CannotRemoveLastAdmin]: 'Cannot remove last admin',
    [SuiteCoreStringKey.ChangePassword_ChangePasswordButton]: 'Change Password',
    [SuiteCoreStringKey.Common_Admin]: 'Admin',
    [SuiteCoreStringKey.Common_Amount]: 'Amount',
    [SuiteCoreStringKey.Common_BackupCode]: 'Backup Code',
    [SuiteCoreStringKey.Common_BackupCodes]: 'Backup Codes',
    [SuiteCoreStringKey.Common_Cancel]: 'Cancel',
    [SuiteCoreStringKey.Common_ChangePassword]: 'Change Password',
    [SuiteCoreStringKey.Common_ChangingPassword]: 'Changing password',
    [SuiteCoreStringKey.Common_Confirm]: 'Confirm',
    [SuiteCoreStringKey.Common_ConfirmNewPassword]: 'Confirm New Password',
    [SuiteCoreStringKey.Common_Connected]: 'Connected',
    [SuiteCoreStringKey.Common_CopiedToClipboard]: 'Copied to clipboard',
    [SuiteCoreStringKey.Common_CopyToClipboard]: 'Copy to clipboard',
    [SuiteCoreStringKey.Common_CurrencyCode]: 'Currency Code',
    [SuiteCoreStringKey.Common_CurrentPassword]: 'Current Password',
    [SuiteCoreStringKey.Common_Dashboard]: 'Dashboard',
    [SuiteCoreStringKey.Common_Date]: 'Date',
    [SuiteCoreStringKey.Common_DateCreated]: 'Date Created',
    [SuiteCoreStringKey.Common_Description]: 'Description',
    [SuiteCoreStringKey.Common_Disabled]: 'Disabled',
    [SuiteCoreStringKey.Common_Email]: 'Email Address',
    [SuiteCoreStringKey.Common_EmailVerification]: 'Email Verification',
    [SuiteCoreStringKey.Common_Enabled]: 'Enabled',
    [SuiteCoreStringKey.Common_Expiration]: 'Expiration',
    [SuiteCoreStringKey.Common_ID]: 'ID',
    [SuiteCoreStringKey.Common_KeyFeatures]: 'Key Features',
    [SuiteCoreStringKey.Common_Loaded]: 'Loaded',
    [SuiteCoreStringKey.Common_Loading]: 'Loading',
    [SuiteCoreStringKey.Common_Logo]: 'Logo',
    [SuiteCoreStringKey.Common_Member]: 'Member',
    [SuiteCoreStringKey.Common_Minute]: 'Minute',
    [SuiteCoreStringKey.Common_Minutes]: 'Minutes',
    [SuiteCoreStringKey.Common_Mnemonic]: 'Mnemonic',
    [SuiteCoreStringKey.Common_MnemonicExpiration]: 'Mnemonic Expiration',
    [SuiteCoreStringKey.Common_NewPassword]: 'New Password',
    [SuiteCoreStringKey.Common_Notification]: 'Notification',
    [SuiteCoreStringKey.Common_NotValidTimeZoneTemplate]:
      '{timezone} is not a valid timezone',
    [SuiteCoreStringKey.Common_OK]: 'OK',
    [SuiteCoreStringKey.Common_Online]: 'Online',
    [SuiteCoreStringKey.Common_Password]: 'Password',
    [SuiteCoreStringKey.Common_PrivateKey]: 'Private Key',
    [SuiteCoreStringKey.Common_PublicKey]: 'Public Key',
    [SuiteCoreStringKey.Common_Registration]: 'Register',
    [SuiteCoreStringKey.Common_RemoveMember]: 'Remove Member',
    [SuiteCoreStringKey.Common_Role]: 'Role',
    [SuiteCoreStringKey.Common_Schema]: 'Schema',
    [SuiteCoreStringKey.Common_Schemas]: 'Schemas',
    [SuiteCoreStringKey.Common_Seconds]: 'Seconds',
    [SuiteCoreStringKey.Common_Status]: 'Status',
    [SuiteCoreStringKey.Common_System]: 'System',
    [SuiteCoreStringKey.Common_ThemeToggle_Dark]: 'Set Dark Mode',
    [SuiteCoreStringKey.Common_ThemeToggle_Light]: 'Set Light Mode',
    [SuiteCoreStringKey.Common_Timezone]: 'Timezone',
    [SuiteCoreStringKey.Common_Type]: 'Type',
    [SuiteCoreStringKey.Common_UseMnemonic]: 'Use mnemonic only',
    [SuiteCoreStringKey.Common_UsePassword]: 'Set password',
    [SuiteCoreStringKey.Common_User]: 'User',
    [SuiteCoreStringKey.Common_UserCreatedTemplate]:
      '{TYPE} user {NAME} created successfully',
    [SuiteCoreStringKey.Common_Username]: 'Username',
    [SuiteCoreStringKey.Common_Using]: 'Using',
    [SuiteCoreStringKey.Common_Wallet]: 'Wallet',
    [SuiteCoreStringKey.Common_WalletExpiration]: 'Wallet Expiration',
    [SuiteCoreStringKey.Dashboard_YourDashboard]: 'Your Dashboard',
    [SuiteCoreStringKey.Email_ConfirmationBody]:
      'Please click the link below to confirm your email.',
    [SuiteCoreStringKey.Email_ConfirmationSubjectTemplate]: '{Site} email confirmation',
    [SuiteCoreStringKey.Email_LinkExpiresInTemplate]:
      'Link expires in {EmailTokenResendIntervalMinutes} minutes.',
    [SuiteCoreStringKey.Email_LoginRequestBody]:
      'Please click the link below to log in to your account.',
    [SuiteCoreStringKey.Email_LoginRequestSubjectTemplate]: '{Site} login request',
    [SuiteCoreStringKey.Email_ResetPasswordBody]:
      'Please click the link below to reset your password.',
    [SuiteCoreStringKey.Email_ResetPasswordSubjectTemplate]: '{Site} password reset',
    [SuiteCoreStringKey.Email_TokenFailedToSend]: 'Failed to send email token',
    [SuiteCoreStringKey.Email_TokenSent]:
      'If an account with that email or username exists, an email has been sent.',
    [SuiteCoreStringKey.EmailVerification_AlreadyVerified]:
      'This email address has already been verified.',
    [SuiteCoreStringKey.EmailVerification_Failed]:
      'Email verification failed. Please try again.',
    [SuiteCoreStringKey.EmailVerification_Resent]:
      'Verification email resent successfully',
    [SuiteCoreStringKey.EmailVerification_Success]: 'Email verified successfully',
    [SuiteCoreStringKey.Error_ChallengeError]: 'Error producing challenge',
    [SuiteCoreStringKey.Error_DirectTokenAlreadyUsed]:
      'Direct login token has already been used',
    [SuiteCoreStringKey.Error_Disposed]: 'Already disposed',
    [SuiteCoreStringKey.Error_EciesError_InvalidMultipleMessageOverheadSize]:
      'Invalid ECIES multiple message overhead constants',
    [SuiteCoreStringKey.Error_EciesError_InvalidPublicKeyLength]:
      'Invalid ECIES public key length',
    [SuiteCoreStringKey.Error_EciesError_InvalidRecipientCount]:
      'Invalid ECIES multiple recipient count size',
    [SuiteCoreStringKey.Error_EciesErrorCrcError]: 'CRC error',
    [SuiteCoreStringKey.Error_EciesErrorDecryptionFailed]:
      'ECIES decryption failed (MAC check or padding error)',
    [SuiteCoreStringKey.Error_EciesErrorEncryptionDataLengthMismatch]:
      'Encrypted data length mismatch',
    [SuiteCoreStringKey.Error_EciesErrorEncryptionTypeMismatch]:
      'Encryption type mismatch',
    [SuiteCoreStringKey.Error_EciesErrorFileSizeTooLarge]: 'File size too large',
    [SuiteCoreStringKey.Error_EciesErrorInvalidAuthTagLength]: 'Invalid auth tag length',
    [SuiteCoreStringKey.Error_EciesErrorInvalidDataLength]: 'Invalid data length',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedDataLength]:
      'Invalid encrypted data length',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedKeyLength]:
      'Invalid encrypted key length',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptionType]: 'Invalid encryption type',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEphemeralPublicKey]:
      'Invalid ephemeral public key',
    [SuiteCoreStringKey.Error_EciesErrorInvalidHeaderLength]: 'Invalid header length',
    [SuiteCoreStringKey.Error_EciesErrorInvalidIVLength]: 'Invalid IV length',
    [SuiteCoreStringKey.Error_EciesErrorInvalidMessageCrc]: 'Invalid message CRC',
    [SuiteCoreStringKey.Error_EciesErrorInvalidMnemonic]: 'Invalid mnemonic',
    [SuiteCoreStringKey.Error_EciesErrorInvalidOperation]: 'Invalid operation',
    [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientCount]: 'Invalid recipient count',
    [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientPublicKey]:
      'Invalid recipient public key provided for encryption',
    [SuiteCoreStringKey.Error_EciesErrorInvalidSenderPublicKey]:
      'Invalid sender public key',
    [SuiteCoreStringKey.Error_EciesErrorInvalidSignature]: 'Invalid signature',
    [SuiteCoreStringKey.Error_EciesErrorMessageLengthMismatch]: 'Message length mismatch',
    [SuiteCoreStringKey.Error_EciesErrorPrivateKeyNotLoaded]: 'Private key not loaded',
    [SuiteCoreStringKey.Error_EciesErrorRecipientKeyCountMismatch]:
      'Recipient count does not match key count',
    [SuiteCoreStringKey.Error_EciesErrorRecipientNotFound]:
      'Recipient not found in recipient IDs',
    [SuiteCoreStringKey.Error_EciesErrorSecretComputationFailed]:
      'Failed to compute shared secret during ECIES operation',
    [SuiteCoreStringKey.Error_EciesErrorTooManyRecipients]:
      'Too many recipients: exceeds maximum allowed',
    [SuiteCoreStringKey.Error_EciesFailedSharedSecret]: 'Failed to compute shared secret',
    [SuiteCoreStringKey.Error_EmailSentTooRecentlyTemplate]: 'Email token sent too recently. Please try again in ${timeRemaining} seconds.',
    [SuiteCoreStringKey.Error_FailedToCopy]: 'Failed to copy text',
    [SuiteCoreStringKey.Error_FailedToCreateUserRoleTemplate]:
      'Failed to create user-role relationship for user {USER_ID} and role {ROLE_ID}',
    [SuiteCoreStringKey.Error_FailedToCreateUserTemplate]: 'Failed to create {NAME} user',
    [SuiteCoreStringKey.Error_FailedToFindRoleTemplate]: 'Failed to find role {ROLE}',
    [SuiteCoreStringKey.Error_FailedToLookupRoleTemplate]:
      'Failed to lookup role ID for {ROLE}',
    [SuiteCoreStringKey.Error_FailedToReEncryptMnemonicTemplate]:
      'Failed to re-encrypt mnemonic with id: {ID}',
    [SuiteCoreStringKey.Error_FailedToStoreUserMnemonicTemplate]:
      'Failed to store mnemonic for user {NAME}',
    [SuiteCoreStringKey.Error_FailedToUpdateLastLoginTemplate]:
      'Failed to update lastLogin for user {userId}',
    [SuiteCoreStringKey.Error_FailedToUseDirectLoginToken]:
      'Failed to use direct login token',
    [SuiteCoreStringKey.Error_FecErrorDataRequired]: 'Data is required',
    [SuiteCoreStringKey.Error_FecErrorFecDecodingFailedTemplate]:
      'FEC decoding failed: {ERROR}',
    [SuiteCoreStringKey.Error_FecErrorFecEncodingFailedTemplate]:
      'FEC encoding failed: {ERROR}',
    [SuiteCoreStringKey.Error_FecErrorInputDataMustBeUint8Array]:
      'Input data must be a Uint8Array',
    [SuiteCoreStringKey.Error_FecErrorInvalidDataLengthTemplate]:
      'Invalid data length: {LENGTH}, expected {EXPECTED}',
    [SuiteCoreStringKey.Error_FecErrorInvalidShardCounts]: 'Invalid shard counts',
    [SuiteCoreStringKey.Error_FecErrorInvalidShardsAvailableArray]:
      'Invalid shards available array',
    [SuiteCoreStringKey.Error_FecErrorNotEnoughShardsAvailableTemplate]:
      'Not enough shards available: {AVAILABLE}, need {REQUIRED}',
    [SuiteCoreStringKey.Error_FecErrorParityDataCountMustBePositive]:
      'Parity data count must be positive',
    [SuiteCoreStringKey.Error_FecErrorParityDataRequired]:
      'Parity data is required for FEC operations',
    [SuiteCoreStringKey.Error_FecErrorShardSizeExceedsMaximumTemplate]:
      'Shard size {SIZE} exceeds maximum {MAXIMUM}',
    [SuiteCoreStringKey.Error_InvalidBackupCodeVersionTemplate]:
      '{version} is an invalid backup code version',
    [SuiteCoreStringKey.Error_InvalidChallengeResponse]:
      'Invalid or incorrect login challenge response',
    [SuiteCoreStringKey.Error_InvalidChecksumConstants]: 'Invalid checksum constants',
    [SuiteCoreStringKey.Error_InvalidEmail]: 'Invalid email.',
    [SuiteCoreStringKey.Error_InvalidEmailTemplate]: '{email} is not a valid email address.',
    [SuiteCoreStringKey.Error_InvalidEmailMissing]: 'Missing email.',
    [SuiteCoreStringKey.Error_InvalidEmailWhitespace]:
      'Email contains trailing or leading whitespace.',
    [SuiteCoreStringKey.Error_InvalidGuid]: 'Invalid GUID.',
    [SuiteCoreStringKey.Error_InvalidGuidTemplate]: 'Invalid GUID: {GUID}',
    [SuiteCoreStringKey.Error_InvalidGuidUnknownBrandTemplate]:
      'Unknown GUID brand: {BRAND}.',
    [SuiteCoreStringKey.Error_InvalidGuidUnknownLengthTemplate]:
      'Invalid GUID length: {LENGTH}.',
    [SuiteCoreStringKey.Error_InvalidLanguageCodeTemplate]:
      'Invalid language code "{LANGUAGE}" provided. Falling back to default language "{DEFAULT_LANGUAGE}".',
    [SuiteCoreStringKey.Error_InvalidMnemonicEncryptionKey]:
      'Encryption key must be 32 bytes (64 hex characters).',
    [SuiteCoreStringKey.Error_LanguageNotFoundForEnumTemplate]:
      'Language {lang} not found for enum {enumName}',
    [SuiteCoreStringKey.Error_LanguageNotFoundInStringsTemplate]:
      'Language {LANG} not found in Strings',
    [SuiteCoreStringKey.Error_Login_ChallengeExpiredTemplate]:
      'Login challenge expired after {LoginChallengeExpiration} ms',
    [SuiteCoreStringKey.Error_Login_DirectLoginNotAllowed]:
      'Direct login is not allowed for this account. Please request an email login link.',
    [SuiteCoreStringKey.Error_MemberErrorEncryptionDataTooLarge]:
      'Encryption data too large.',
    [SuiteCoreStringKey.Error_MemberErrorFailedToConvertMemberData]:
      'Failed to convert member data.',
    [SuiteCoreStringKey.Error_MemberErrorFailedToHydrateMember]:
      'Failed to hydrate member.',
    [SuiteCoreStringKey.Error_MemberErrorIncorrectOrInvalidPrivateKey]:
      'Incorrect or invalid private key for public key',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEmail]: 'Invalid email.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEmailWhitespace]:
      'Email contains trailing or leading whitespace.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEncryptionData]:
      'Invalid encryption data.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberData]: 'Invalid member data.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberName]: 'Invalid member name.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberNameWhitespace]:
      'Member name contains trailing or leading whitespace.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberStatus]: 'Invalid member status.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMnemonic]: 'Invalid wallet mnemonic.',
    [SuiteCoreStringKey.Error_MemberErrorMemberAlreadyExists]: 'Member already exists.',
    [SuiteCoreStringKey.Error_MemberErrorMemberNotFound]: 'Member not found.',
    [SuiteCoreStringKey.Error_MemberErrorMissingEmail]: 'Missing email.',
    [SuiteCoreStringKey.Error_MemberErrorMissingEncryptionData]:
      'Missing encryption data.',
    [SuiteCoreStringKey.Error_MemberErrorMissingMemberName]: 'Missing member name.',
    [SuiteCoreStringKey.Error_MemberErrorMissingPrivateKey]: 'Missing private key.',
    [SuiteCoreStringKey.Error_MemberErrorMissingVotingPrivateKey]:
      'Missing voting private key.',
    [SuiteCoreStringKey.Error_MemberErrorMissingVotingPublicKey]:
      'Missing voting public key.',
    [SuiteCoreStringKey.Error_MemberErrorNoWallet]: 'No wallet loaded.',
    [SuiteCoreStringKey.Error_MemberErrorPrivateKeyRequiredToDeriveVotingKeyPair]:
      'Private key required to derive voting key pair.',
    [SuiteCoreStringKey.Error_MemberErrorWalletAlreadyLoaded]: 'Wallet already loaded.',
    [SuiteCoreStringKey.Error_MnemonicIsNullTemplate]: '{NAME} mnemonic is null',
    [SuiteCoreStringKey.Error_NoTranslationsForEnumLanguageTemplate]:
      'Translation not found for {enumName}.{value} in {language}',
    [SuiteCoreStringKey.Error_NoTranslationsForEnumTemplate]:
      'No translations found for enum: {enumName}',
    [SuiteCoreStringKey.Error_PasswordChange]: 'Error changing password',
    [SuiteCoreStringKey.Error_Pbkdf2InvalidHashLength]:
      'Hash length does not match expected length',
    [SuiteCoreStringKey.Error_Pbkdf2InvalidSaltLength]:
      'Salt length does not match expected length',
    [SuiteCoreStringKey.Error_RoleNotFoundTemplate]:
      'Could not map Role with ID {ID} to an entry in Role enum',
    [SuiteCoreStringKey.Error_SecureStorageDecryptedValueChecksumMismatch]:
      'Decrypted value checksum does not match',
    [SuiteCoreStringKey.Error_SecureStorageDecryptedValueLengthMismatch]:
      'Decrypted value length does not match expected length',
    [SuiteCoreStringKey.Error_SecureStorageValueIsNull]: 'Secure storage value is null',
    [SuiteCoreStringKey.Error_SymmetricDataNullOrUndefined]:
      'Data to encrypt cannot be null or undefined',
    [SuiteCoreStringKey.Error_SymmetricInvalidKeyLengthTemplate]:
      'Encryption key must be {KEY_BYTES} bytes long',
    [SuiteCoreStringKey.Error_UnknownEnumValueForEnumTemplate]:
      'Unknown enum value: {value} for enum: {enumName}',
    [SuiteCoreStringKey.Error_EmailService_NotConfigured]: 'Email service not configured. Call setEmailService() before using middleware.',
    [SuiteCoreStringKey.Error_FailedToCreateEmailToken]: 'Failed to create email token',
    [SuiteCoreStringKey.ForgotPassword_BackToLogin]: 'Back to Login',
    [SuiteCoreStringKey.ForgotPassword_Error]:
      'An error occurred while processing your request.',
    [SuiteCoreStringKey.ForgotPassword_ForgotPassword]: 'Forgot Password',
    [SuiteCoreStringKey.ForgotPassword_InvalidToken]:
      'Invalid or expired token. Please request a new password reset.',
    [SuiteCoreStringKey.ForgotPassword_ResetPassword]: 'Reset Password',
    [SuiteCoreStringKey.ForgotPassword_SendResetLink]: 'Send Reset Link',
    [SuiteCoreStringKey.ForgotPassword_Success]:
      'Your password has been successfully reset. You can now log in with your new password.',
    [SuiteCoreStringKey.ForgotPassword_Title]: 'Forgot Password',
    [SuiteCoreStringKey.HavingTroubleContactSupport]:
      "If you're having trouble, please contact our support team or",
    [SuiteCoreStringKey.KeyFeatures_1]:
      'Securely store files with rules for automated release or deletion.',
    [SuiteCoreStringKey.KeyFeatures_2]:
      'Create "Canaries" to monitor your digital or physical activity.',
    [SuiteCoreStringKey.KeyFeatures_3]:
      'Actions are triggered based on canary status (e.g., inactivity).',
    [SuiteCoreStringKey.KeyFeatures_4]: 'Duress codes for immediate, emergency actions.',
    [SuiteCoreStringKey.LanguageUpdate_Success]: 'Language updated successfully',
    [SuiteCoreStringKey.LoggedIn_Success]: 'Logged in successfully',
    [SuiteCoreStringKey.Login_ChallengeGenerated]: 'Login challenge generated',
    [SuiteCoreStringKey.Login_DirectLogin]: 'Direct Login',
    [SuiteCoreStringKey.Login_DirectLoginWarning]:
      'When the username or email is invalid, or the user has direct login disabled, the direct challenge login will fail with a generic invalid challenge response error that does not reveal whether the account exists.',
    [SuiteCoreStringKey.Login_EmailChallengeSent]:
      'A login link has been sent to your email. Please click it to log in.',
    [SuiteCoreStringKey.Login_EmailLogin]: 'Email Login',
    [SuiteCoreStringKey.Login_ForgotPassword]: 'Forgot Password?',
    [SuiteCoreStringKey.Login_LoginButton]: 'Log In',
    [SuiteCoreStringKey.Login_SignUp]: "Don't have an account? Sign Up",
    [SuiteCoreStringKey.Login_Title]: 'Sign In',
    [SuiteCoreStringKey.Login_UseEmail]: 'Use Email',
    [SuiteCoreStringKey.Login_UseUsername]: 'Use Username',
    [SuiteCoreStringKey.LogoutButton]: 'Logout',
    [SuiteCoreStringKey.MemberRoleNotFound]: 'Member role not found',
    [SuiteCoreStringKey.MnemonicRecovery_Missing]: 'Mnemonic recovery data missing',
    [SuiteCoreStringKey.MnemonicRecovery_Success]: 'Mnemonic recovered successfully',
    [SuiteCoreStringKey.NoMembersYet]: 'No members yet',
    [SuiteCoreStringKey.NoVerificationTokenProvided]: 'No verification token provided.',
    [SuiteCoreStringKey.PasswordChange_IncorrectPassword]:
      'Current password is incorrect',
    [SuiteCoreStringKey.PasswordLogin_InvalidCurrentPassword]: 'Current password is incorrect',
    [SuiteCoreStringKey.PasswordChange_Success]: 'Password changed successfully',
    [SuiteCoreStringKey.PasswordLogin_Setup_Failure]: 'Password login setup failed',
    [SuiteCoreStringKey.PasswordLogin_Setup_NotAvailable]: 'Password login not available',
    [SuiteCoreStringKey.PasswordLogin_Setup_Success]: 'Password login setup successful',
    [SuiteCoreStringKey.PasswordReset_AlreadySent]:
      'Password reset link has already been sent to your email.',
    [SuiteCoreStringKey.PasswordReset_EmailNotVerified]:
      'Please verify your email address before resetting your password.',
    [SuiteCoreStringKey.PasswordReset_Success]:
      'If an account with that email exists, a password reset link has been sent.',
    [SuiteCoreStringKey.ProceedToLogin]: 'Proceed to login',
    [SuiteCoreStringKey.Register_RegisterButton]: 'Get Started',
    [SuiteCoreStringKey.RegisterButton]: 'Register',
    [SuiteCoreStringKey.Registration_ConfirmPassword]: 'Confirm Password',
    [SuiteCoreStringKey.Registration_Error]:
      'An unexpected error occurred during registration. Please try again.',
    [SuiteCoreStringKey.Registration_LoginLink]: 'Already have an account? Log in',
    [SuiteCoreStringKey.Registration_MnemonicSuccess]:
      'Registration successful. Please save your mnemonic securely. It will not be shown again. Please check your email to verify your account.',
    [SuiteCoreStringKey.Registration_RegisterButton]: 'Register',
    [SuiteCoreStringKey.Registration_Registering]: 'Registering...',
    [SuiteCoreStringKey.Registration_RegisteringMessage]:
      'Please wait while we create your account. This may take a minute to generate a key and complete the registration.',
    [SuiteCoreStringKey.Registration_Success]:
      'Registration successful. Please check your email to verify your account.',
    [SuiteCoreStringKey.Registration_SuccessTitle]: 'Registration successful.',
    [SuiteCoreStringKey.RemoveAdmin_Success]: 'Admin removed successfully',
    [SuiteCoreStringKey.RemoveAdmin_Unauthorized]: 'Unauthorized to remove an admin',
    [SuiteCoreStringKey.RemoveMember_Success]: 'Member removed successfully',
    [SuiteCoreStringKey.RemoveMember_Unauthorized]: 'Unauthorized to remove a member',
    [SuiteCoreStringKey.RequestNewVerificationEmail]: 'Request a new verification email',
    [SuiteCoreStringKey.SignInButton]: 'Sign In',
    [SuiteCoreStringKey.TestItemCountTemplate]: '{count} items',
    [SuiteCoreStringKey.TestTemplate]:
      'This is a test: {variable1}, {AdministratorEmail}',
    [SuiteCoreStringKey.TestUsernameTemplate]: 'This is a test username: {user}',
    [SuiteCoreStringKey.TogglePasswordVisibility]: 'toggle password visibility',
    [SuiteCoreStringKey.TokenCreate_Success]: 'Token created successfully',
    [SuiteCoreStringKey.TokenNotFoundTemplate]: 'Token not found: {TOKEN}',
    [SuiteCoreStringKey.TokenRefreshed]: 'Token refreshed',
    [SuiteCoreStringKey.TokenType_AccountVerification]: 'Account Verification',
    [SuiteCoreStringKey.TokenType_LoginRequest]: 'Login Request',
    [SuiteCoreStringKey.TokenType_PasswordReset]: 'Password Reset',
    [SuiteCoreStringKey.TokenType_MnemonicRecoveryRequest]: 'Mnemonic Recovery Request',
    [SuiteCoreStringKey.TokenType_PrivateKeyRequest]: 'Private Key Request',
    [SuiteCoreStringKey.Validation_AccountLocked]: 'Account is locked',
    [SuiteCoreStringKey.Validation_AdminUserIdRequired]: 'Admin user ID is required',
    [SuiteCoreStringKey.Validation_ConfirmNewPassword]:
      'Please confirm your new password',
    [SuiteCoreStringKey.Validation_CreatedUserIdError]:
      'The created by user ID does not exist and does not match the new user ID.',
    [SuiteCoreStringKey.Validation_CurrencyCodeRequired]: 'Currency code is required',
    [SuiteCoreStringKey.Validation_CurrentPasswordRequired]:
      'Current password is required',
    [SuiteCoreStringKey.Validation_DescriptionRequired]: 'Description is required',
    [SuiteCoreStringKey.Validation_EmailNotVerified]: 'Email is not verified',
    [SuiteCoreStringKey.Validation_HmacRegex]: 'HMAC must be a valid hexadecimal string.',
    [SuiteCoreStringKey.Validation_InvalidAdminUserId]: 'Invalid admin user ID',
    [SuiteCoreStringKey.Validation_InvalidBackupCode]:
      'Invalid or already used backup code',
    [SuiteCoreStringKey.Validation_InvalidChallenge]: 'Invalid or incorrect challenge',
    [SuiteCoreStringKey.Validation_InvalidCurrencyCode]: 'Invalid currency code',
    [SuiteCoreStringKey.Validation_InvalidEncryptedMnemonic]:
      'Invalid encrypted mnemonic. It must be a valid hexadecimal string.',
    [SuiteCoreStringKey.Validation_InvalidGuid]: 'Invalid GUID',
    [SuiteCoreStringKey.Validation_InvalidLanguage]: 'Invalid language',
    [SuiteCoreStringKey.Validation_InvalidLanguageCode]: 'Invalid language code',
    [SuiteCoreStringKey.Validation_InvalidMemberId]: 'Invalid member ID',
    [SuiteCoreStringKey.Validation_InvalidMnemonic]: 'Invalid mnemonic phrase.',
    [SuiteCoreStringKey.Validation_InvalidOldMnemonicEncryptionKey]:
      'Old encryption key must be 32 bytes (64 hex characters).',
    [SuiteCoreStringKey.Validation_InvalidPassword]: 'Invalid or incorrect password',
    [SuiteCoreStringKey.Validation_InvalidSignature]: 'Invalid signature',
    [SuiteCoreStringKey.Validation_InvalidUserId]: 'Invalid user ID',
    [SuiteCoreStringKey.Validation_InvalidUserIdTemplate]: 'Invalid user ID: {detail}',
    [SuiteCoreStringKey.Validation_IsMemberBoolean]: 'isMember must be a boolean',
    [SuiteCoreStringKey.Validation_MemberIdRequired]: 'Member ID is required',
    [SuiteCoreStringKey.Validation_MnemonicOrPasswordRequired]:
      'Either mnemonic or password is required',
    [SuiteCoreStringKey.Validation_MnemonicRequired]: 'Mnemonic is required.',
    [SuiteCoreStringKey.Validation_NameRequired]: 'Name is required',
    [SuiteCoreStringKey.Validation_NewPasswordRequired]: 'New password is required',
    [SuiteCoreStringKey.Validation_PasswordMatch]: 'Passwords must match',
    [SuiteCoreStringKey.Validation_PasswordMinLengthTemplate]:
      'Password must be at least {PasswordMinLength} characters',
    [SuiteCoreStringKey.Validation_PasswordRegexErrorTemplate]:
      'Password must be at least {PasswordMinLength} characters long and include at least one letter, one number, and one special character (!@#$%^&*()_+-=[]{};\':"|,.<>/?)',
    [SuiteCoreStringKey.Validation_PasswordsDifferent]:
      'New password must be different from the current password',
    [SuiteCoreStringKey.Validation_Required]: 'Required',
    [SuiteCoreStringKey.Validation_TimezoneInvalid]: 'Invalid timezone',
    [SuiteCoreStringKey.Validation_TimezoneRequired]: 'Timezone is required',
    [SuiteCoreStringKey.Validation_TokenInvalid]:
      'Email verification link has already been used or is invalid',
    [SuiteCoreStringKey.Validation_TokenMissing]: 'No token provided',
    [SuiteCoreStringKey.Validation_TokenRequired]: 'Token is required',
    [SuiteCoreStringKey.Validation_TokenValid]: 'Token is valid',
    [SuiteCoreStringKey.Validation_UserIdMustNotExist]: 'The new user ID must not exist.',
    [SuiteCoreStringKey.Validation_UserIdRequired]: 'User ID is required',
    [SuiteCoreStringKey.Validation_UsernameMaxLengthTemplate]:
      'Username must be at most {UsernameMaxLength} characters',
    [SuiteCoreStringKey.Validation_UsernameMinLengthTemplate]:
      'Username must be at least {UsernameMinLength} characters',
    [SuiteCoreStringKey.Validation_UsernameRegexErrorTemplate]:
      'Username must be {UsernameMinLength}-{UsernameMaxLength} characters long and contain only letters and numbers',
    [SuiteCoreStringKey.Validation_UserNotFound]: 'User not found or inactive',
  },
  [LanguageCodes.FR]: {
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
    [SuiteCoreStringKey.Common_SiteTemplate]: '{Site}',
    [SuiteCoreStringKey.Common_SiteTaglineTemplate]: '{SiteTagline}',
    [SuiteCoreStringKey.Common_SiteDescriptionTemplate]: '{SiteDescription}',
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
    [SuiteCoreStringKey.Error_IndexFileNotFoundTemplate]: 'Fichier index introuvable : {path}',
    [SuiteCoreStringKey.Error_AppDoesNotAppearToBeRunningWithinDistTemplate]: 'L\'application ne semble pas être exécutée dans un répertoire /dist/',
    [SuiteCoreStringKey.Error_ValidationFunctionNotRegisteredInAllowlist]: 'Fonction de validation non enregistrée dans la liste autorisée',
    [SuiteCoreStringKey.Error_InvalidCertificatePathAfterResolution]: 'Chemin de certificat invalide après résolution',
    [SuiteCoreStringKey.Error_InvalidCertificatePathMustBeAbsolute]: 'Chemin de certificat invalide : doit être absolu et ne peut pas contenir ..',
    [SuiteCoreStringKey.Error_InvalidViewsPathEscapesBaseDirectory]: 'Ruta de vistas inválida: escapa del directorio base',
    [SuiteCoreStringKey.Error_InvalidPathContainsParentDirectoryReference]: 'Ruta inválida: contiene referencia al directorio padre',
    [SuiteCoreStringKey.Error_InvalidIndexPathEscapesBaseDirectory]: 'Ruta de índice inválida: escapa del directorio base',
    [SuiteCoreStringKey.Error_InvalidAssetsPathEscapesBaseDirectory]: 'Ruta de recursos inválida: escapa del directorio base',
    [SuiteCoreStringKey.Error_MissingRequiredEnvironmentVariableTemplate]: 'Variable d\'environnement requise manquante : {key}',
    [SuiteCoreStringKey.Error_EmptyEnvironmentVariableTemplate]: 'La variable d\'environnement {key} est vide',
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
    [SuiteCoreStringKey.Error_ChildRoleCannotBeASystemRole]: 'Un rôle enfant ne peut pas être un rôle système',
    [SuiteCoreStringKey.Error_ChildRoleCannotBeAnAdminRole]: 'Un rôle enfant ne peut pas être un rôle administrateur',
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
    [SuiteCoreStringKey.Validation_MissingValidatedDataForFieldTemplate]: 'Données validées manquantes pour le champ: {field}',
    [SuiteCoreStringKey.Validation_MnemonicRegex]: 'Format de mnémonique invalide',
    [SuiteCoreStringKey.Admin_Error_InvalidMongoUri]: 'URI Mongo invalide',
    [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]: 'Aucun client MongoDB trouvé, utilisation de l\'alternative',
    [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]: 'Transaction échouée (transitoire): {error}',
    [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]: 'Délai d\'attente de transaction après {timeMs}ms',
    [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]: 'Démarrage de l\'initialisation de la base de données',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]: 'Échec de l\'initialisation de la base de données utilisateur (délai d\'attente après {timeMs}ms)',
    [SuiteCoreStringKey.Admin_EnvNotSetTemplate]: 'Variable d\'environnement non définie: {variable}',
    [SuiteCoreStringKey.Admin_ServingRoute]: 'Service de la route',
    [SuiteCoreStringKey.Admin_AccountCredentials]:
    'IDENTIFIANTS DE COMPTE (Enregistrer dans le gestionnaire de mots de passe)',
    [SuiteCoreStringKey.Admin_CreatingUserTemplate]:
      'Création de {TYPE} utilisateur {NAME} et génération des clés',
    [SuiteCoreStringKey.Admin_DatabaseInitializedWithOptionsHashTemplate]: 'Base de données initialisée avec le hachage des options : {hash}',
    [SuiteCoreStringKey.Admin_DatabaseAlreadyInitialized]:
      'Base de données déjà initialisée',
    [SuiteCoreStringKey.Admin_DatabaseDropped]:
      'Collections de base de données supprimées',
    [SuiteCoreStringKey.Admin_DevelopmentDatabase]: 'Base de données de développement',
    [SuiteCoreStringKey.Admin_DroppingDatabase]: 'Suppression de la base de données',
    [SuiteCoreStringKey.Admin_EndCredentials]: 'FIN DES IDENTIFIANTS',
    [SuiteCoreStringKey.Admin_EnvDirSetButMissingTemplate]:
      '{VAR} est défini sur {PATH} mais le répertoire est manquant',
    [SuiteCoreStringKey.Admin_EnvFileNotFound]:
      'Fichier .env non trouvé, chargement ignoré',
    [SuiteCoreStringKey.Admin_EnvFileNotFoundTemplate]:
      'Fichier d’environnement non trouvé à {PATH}',
    [SuiteCoreStringKey.Admin_Error_DatabaseNotConnectedYet]:
      "db n'est pas encore connecté. appelez start() d'abord",
    [SuiteCoreStringKey.Admin_Error_EnvironmentAlreadyInitialized]:
      "L'environnement est déjà initialisé",
    [SuiteCoreStringKey.Admin_Error_EnvironmentNotInitialized]:
      "L'environnement n'est pas initialisé",
    [SuiteCoreStringKey.Admin_Error_FailedToDropDatabase]:
      'Échec de la suppression des collections de base de données',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabase]:
      "Échec de l'initialisation de la base de données utilisateur",
    [SuiteCoreStringKey.Admin_Error_FailedToLoadEnvironment]:
      'Échec du chargement du fichier .env',
    [SuiteCoreStringKey.Admin_Error_FailedToSetTransactionTimeout]:
      "Impossible de définir le délai d'expiration de la transaction, aucune connexion à la base de données",
    [SuiteCoreStringKey.Admin_Error_NotConnectedToMongoDB]:
      'Échec de la connexion à MongoDB.',
    [SuiteCoreStringKey.Admin_Error_SchemaMapIsNotLoadedYet]:
      "schemaMap n'est pas encore chargé. appelez start() d'abord",
    [SuiteCoreStringKey.Admin_Error_UnhandledErrorInMain]:
      'Erreur non gérée dans le main',
    [SuiteCoreStringKey.Admin_ErrorCleaningUpTestData]:
      'Erreur lors du nettoyage des données de test',
    [SuiteCoreStringKey.Admin_ErrorClosingConnection]:
      'Erreur lors de la fermeture de la connexion',
    [SuiteCoreStringKey.Admin_ErrorStoppingMongoServer]:
      "Erreur lors de l'arrêt du serveur mongo",
    [SuiteCoreStringKey.Admin_FailedToSetUpTestDatabase]:
      'Échec de la configuration de la base de données de test',
    [SuiteCoreStringKey.Admin_LoadingEnvironmentTemplate]:
      "Chargement de l'environnement à partir de {PATH}",
    [SuiteCoreStringKey.Admin_MakeSureToSetItInEnv]:
      'Assurez-vous de le définir dans votre fichier .env',
    [SuiteCoreStringKey.Admin_ProceedingToDbInitialization]:
      "Procédure d'initialisation de la base de données...",
    [SuiteCoreStringKey.Admin_RoleCreatedTemplate]:
      "Rôle {ROLE} créé avec succès avec l'ID {ID}",
    [SuiteCoreStringKey.Admin_SettingUp]: 'Configuration en cours...',
    [SuiteCoreStringKey.Admin_SettingUpUsersAndRoles]:
      'Configuration des utilisateurs et des rôles',
    [SuiteCoreStringKey.Admin_SetTransactionTimeoutSuccessfully]:
      "Délai d'attente de la transaction défini avec succès",
    [SuiteCoreStringKey.Admin_StartingDbInitialization]:
      "Démarrage de l'initialisation de la base de données...",
    [SuiteCoreStringKey.Admin_StringNotFoundForLanguageTemplate]:
      'Chaîne {NAME} introuvable pour la langue {LANG}',
    [SuiteCoreStringKey.Admin_TearingDown]: 'Démontage...',
    [SuiteCoreStringKey.Admin_TransactionsEnabledDisabledTemplate]:
      'Les transactions sont {STATE}',
    [SuiteCoreStringKey.Admin_UserDatabaseInitialized]:
      'Base de données utilisateur initialisée',
    [SuiteCoreStringKey.Admin_UserRoleCreatedTemplate]:
      'Relation utilisateur-rôle créée : Utilisateur {USERID} -> Rôle {ROLEID}',
    [SuiteCoreStringKey.Admin_UsingMongoDbMemoryWithTransactions]:
      'Utilisation de MongoDB Memory Server avec prise en charge des transactions',
    [SuiteCoreStringKey.AdminRoleNotFound]: 'Rôle administrateur non trouvé',
    [SuiteCoreStringKey.ApiAccess_Title]: "Votre jeton d'accès",
    [SuiteCoreStringKey.ApiAccess_TokenNotAvailable]: 'Jeton non disponible',
    [SuiteCoreStringKey.BackupCodeRecovery_CodesRemainingTemplate]:
      '{count} codes de sauvegarde restants',
    [SuiteCoreStringKey.BackupCodeRecovery_GenerateNewCodes]:
      'Générer de nouveaux codes de sauvegarde',
    [SuiteCoreStringKey.BackupCodeRecovery_Login]: 'Connexion avec le code de sauvegarde',
    [SuiteCoreStringKey.BackupCodeRecovery_RecoverMnemonic]:
      'Récupérer votre phrase mnémotechnique',
    [SuiteCoreStringKey.BackupCodeRecovery_Success]:
      'Récupération du code de sauvegarde réussie.',
    [SuiteCoreStringKey.BackupCodeRecovery_Title]: 'Connexion par code de sauvegarde',
    [SuiteCoreStringKey.BackupCodeRecovery_YourNewCodes]:
      'Voici vos nouveaux codes de sauvegarde. Veuillez les noter dans un endroit sûr, ils ne pourront plus être consultés.',
    [SuiteCoreStringKey.CannotRemoveLastAdmin]:
      'Impossible de supprimer le dernier administrateur',
    [SuiteCoreStringKey.ChangePassword_ChangePasswordButton]: 'Changer le mot de passe',
    [SuiteCoreStringKey.Common_Admin]: 'Administrateur',
    [SuiteCoreStringKey.Common_Amount]: 'Montant',
    [SuiteCoreStringKey.Common_BackupCode]: 'Code de sauvegarde',
    [SuiteCoreStringKey.Common_BackupCodes]: 'Codes de sauvegarde',
    [SuiteCoreStringKey.Common_Cancel]: 'Annuler',
    [SuiteCoreStringKey.Common_ChangePassword]: 'Changer le mot de passe',
    [SuiteCoreStringKey.Common_ChangingPassword]: 'Changement de mot de passe',
    [SuiteCoreStringKey.Common_Confirm]: 'Confirmer',
    [SuiteCoreStringKey.Common_ConfirmNewPassword]: 'Confirmer le nouveau mot de passe',
    [SuiteCoreStringKey.Common_Connected]: 'Connecté',
    [SuiteCoreStringKey.Common_CopiedToClipboard]: 'Copié dans le presse-papier',
    [SuiteCoreStringKey.Common_CopyToClipboard]: 'Copier dans le presse-papier',
    [SuiteCoreStringKey.Common_CurrencyCode]: 'Code de devise',
    [SuiteCoreStringKey.Common_CurrentPassword]: 'Mot de passe actuel',
    [SuiteCoreStringKey.Common_Dashboard]: 'Tableau de bord',
    [SuiteCoreStringKey.Common_Date]: 'Date',
    [SuiteCoreStringKey.Common_DateCreated]: 'Date de création',
    [SuiteCoreStringKey.Common_Description]: 'Description',
    [SuiteCoreStringKey.Common_Disabled]: 'Désactivé',
    [SuiteCoreStringKey.Common_Email]: 'Adresse e-mail',
    [SuiteCoreStringKey.Common_EmailVerification]: "Vérification de l'e-mail",
    [SuiteCoreStringKey.Common_Enabled]: 'Activé',
    [SuiteCoreStringKey.Common_Expiration]: 'Expiration',
    [SuiteCoreStringKey.Common_ID]: 'CI',
    [SuiteCoreStringKey.Common_KeyFeatures]: 'Caractéristiques principales',
    [SuiteCoreStringKey.Common_Loaded]: 'Chargé',
    [SuiteCoreStringKey.Common_Loading]: 'Chargement',
    [SuiteCoreStringKey.Common_Logo]: 'Logo',
    [SuiteCoreStringKey.Common_Member]: 'Membre',
    [SuiteCoreStringKey.Common_Minute]: 'Minute',
    [SuiteCoreStringKey.Common_Minutes]: 'Minutes',
    [SuiteCoreStringKey.Common_Mnemonic]: 'Phrase mnémotechnique',
    [SuiteCoreStringKey.Common_MnemonicExpiration]: 'Expiration du Mémonique',
    [SuiteCoreStringKey.Common_NewPassword]: 'Nouveau mot de passe',
    [SuiteCoreStringKey.Common_Notification]: 'Notification',
    [SuiteCoreStringKey.Common_NotValidTimeZoneTemplate]:
      "{timezone} n'est pas un fuseau horaire valide",
    [SuiteCoreStringKey.Common_OK]: "D'accord",
    [SuiteCoreStringKey.Common_Online]: 'En ligne',
    [SuiteCoreStringKey.Common_Password]: 'Mot de passe',
    [SuiteCoreStringKey.Common_PrivateKey]: 'Clé privée',
    [SuiteCoreStringKey.Common_PublicKey]: 'Clé publique',
    [SuiteCoreStringKey.Common_Registration]: 'Inscription',
    [SuiteCoreStringKey.Common_RemoveMember]: 'Supprimer le membre',
    [SuiteCoreStringKey.Common_Role]: 'ôle',
    [SuiteCoreStringKey.Common_Schema]: 'Schéma',
    [SuiteCoreStringKey.Common_Schemas]: 'Schémas',
    [SuiteCoreStringKey.Common_Seconds]: 'Secondes',
    [SuiteCoreStringKey.Common_Status]: 'Statut',
    [SuiteCoreStringKey.Common_System]: 'Système',
    [SuiteCoreStringKey.Common_ThemeToggle_Dark]: 'Activer le mode sombre',
    [SuiteCoreStringKey.Common_ThemeToggle_Light]: 'Activer le mode clair',
    [SuiteCoreStringKey.Common_Timezone]: 'Fuseau horaire',
    [SuiteCoreStringKey.Common_Type]: 'Type',
    [SuiteCoreStringKey.Common_UseMnemonic]: 'Utiliser uniquement la mnémotechnique',
    [SuiteCoreStringKey.Common_UsePassword]: 'Définir le mot de passe',
    [SuiteCoreStringKey.Common_User]: 'Utilisateur',
    [SuiteCoreStringKey.Common_UserCreatedTemplate]:
      '{TYPE} utilisateur {NAME} créé avec succès',
    [SuiteCoreStringKey.Common_Username]: "Nom d'utilisateur",
    [SuiteCoreStringKey.Common_Using]: 'Utilisation de',
    [SuiteCoreStringKey.Common_Wallet]: 'Portefeuille',
    [SuiteCoreStringKey.Common_WalletExpiration]: 'Expiration du Portefeuille',
    [SuiteCoreStringKey.Dashboard_YourDashboard]: 'Votre tableau de bord',
    [SuiteCoreStringKey.Email_ConfirmationBody]:
      'Veuillez cliquer sur le lien ci-dessous pour confirmer votre e-mail.',
    [SuiteCoreStringKey.Email_ConfirmationSubjectTemplate]:
      "{Site} confirmation d'e-mail",
    [SuiteCoreStringKey.Email_LinkExpiresInTemplate]:
      'Le lien expire dans {EmailTokenResendIntervalMinutes} minutes',
    [SuiteCoreStringKey.Email_LoginRequestBody]:
      'Veuillez cliquer sur le lien ci-dessous pour vous connecter à votre compte.',
    [SuiteCoreStringKey.Email_LoginRequestSubjectTemplate]: '{Site} demande de connexion',
    [SuiteCoreStringKey.Email_ResetPasswordBody]:
      'Veuillez cliquer sur le lien ci-dessous pour réinitialiser votre mot de passe.',
    [SuiteCoreStringKey.Email_ResetPasswordSubjectTemplate]:
      '{Site} réinitialisation du mot de passe',
    [SuiteCoreStringKey.Email_TokenFailedToSend]: "Échec de l'envoi du jeton par e-mail",
    [SuiteCoreStringKey.Email_TokenSent]:
      'Si un compte avec cet e-mail ou nom d’utilisateur existe, un e-mail a été envoyé.',
    [SuiteCoreStringKey.EmailVerification_AlreadyVerified]:
      'Votre adresse e-mail est deja verifiée',
    [SuiteCoreStringKey.EmailVerification_Failed]:
      "Échec de la vérification de l'e-mail. Veuillez réessayer.",
    [SuiteCoreStringKey.EmailVerification_Resent]:
      'E-mail de vérification renvoyé avec succès',
    [SuiteCoreStringKey.EmailVerification_Success]: 'E-mail vérifié avec succès',
    [SuiteCoreStringKey.Error_ChallengeError]: 'Erreur lors de la génération du défi',
    [SuiteCoreStringKey.Error_DirectTokenAlreadyUsed]:
      'Le jeton de connexion directe a déjà été utilisé',
    [SuiteCoreStringKey.Error_Disposed]: 'Déjà éliminé',
    [SuiteCoreStringKey.Error_EciesError_InvalidMultipleMessageOverheadSize]:
      'Constantes de surcharge de message multiple ECIES invalides',
    [SuiteCoreStringKey.Error_EciesError_InvalidPublicKeyLength]:
      'Longueur de clé publique ECIES invalide',
    [SuiteCoreStringKey.Error_EciesError_InvalidRecipientCount]:
      'Taille de compte de destinataire multiple ECIES invalide',
    [SuiteCoreStringKey.Error_EciesErrorCrcError]: 'Erreur CRC ECIES',
    [SuiteCoreStringKey.Error_EciesErrorDecryptionFailed]:
      'Échec de la décryption ECIES (vérification MAC ou erreur de remplissage)',
    [SuiteCoreStringKey.Error_EciesErrorEncryptionDataLengthMismatch]:
      'Inadéquation de la longueur des données chiffrées',
    [SuiteCoreStringKey.Error_EciesErrorEncryptionTypeMismatch]:
      'Inadéquation du type de chiffrement',
    [SuiteCoreStringKey.Error_EciesErrorFileSizeTooLarge]:
      'La taille du fichier ECIES est trop grande',
    [SuiteCoreStringKey.Error_EciesErrorInvalidAuthTagLength]:
      'Longueur de balise d’authentification ECIES invalide',
    [SuiteCoreStringKey.Error_EciesErrorInvalidDataLength]:
      'Longueur de données ECIES invalide',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedDataLength]:
      'Longueur de données chiffrées ECIES invalide',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedKeyLength]:
      'Longueur de clé chiffrée ECIES invalide',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptionType]:
      'Type de chiffrement ECIES invalide',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEphemeralPublicKey]:
      'Clé publique éphémère ECIES invalide',
    [SuiteCoreStringKey.Error_EciesErrorInvalidHeaderLength]:
      'Longueur d’en-tête ECIES invalide',
    [SuiteCoreStringKey.Error_EciesErrorInvalidIVLength]: 'Longueur IV ECIES invalide',
    [SuiteCoreStringKey.Error_EciesErrorInvalidMessageCrc]:
      'CRC de message ECIES invalide',
    [SuiteCoreStringKey.Error_EciesErrorInvalidMnemonic]: 'Mnémonique ECIES invalide',
    [SuiteCoreStringKey.Error_EciesErrorInvalidOperation]: 'Opération invalide',
    [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientCount]:
      'Nombre de destinataires ECIES invalide',
    [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientPublicKey]:
      'Clé publique de destinataire ECIES invalide fournie pour le chiffrement',
    [SuiteCoreStringKey.Error_EciesErrorInvalidSenderPublicKey]:
      'Clé publique de l’expéditeur ECIES invalide',
    [SuiteCoreStringKey.Error_EciesErrorInvalidSignature]: 'Signature ECIES invalide',
    [SuiteCoreStringKey.Error_EciesErrorMessageLengthMismatch]:
      'Inadéquation de la longueur du message',
    [SuiteCoreStringKey.Error_EciesErrorPrivateKeyNotLoaded]:
      'Clé privée ECIES non chargée',
    [SuiteCoreStringKey.Error_EciesErrorRecipientKeyCountMismatch]:
      'Inadéquation du nombre de clés de destinataire ECIES',
    [SuiteCoreStringKey.Error_EciesErrorRecipientNotFound]:
      'Destinataire ECIES non trouvé',
    [SuiteCoreStringKey.Error_EciesErrorSecretComputationFailed]:
      'Échec du calcul du secret partagé lors de l’opération ECIES',
    [SuiteCoreStringKey.Error_EciesErrorTooManyRecipients]:
      'Trop de destinataires : dépasse le maximum autorisé',
    [SuiteCoreStringKey.Error_EciesFailedSharedSecret]:
      'Échec du calcul du secret partagé',
    [SuiteCoreStringKey.Error_EmailSentTooRecentlyTemplate]: 'Jeton d\'e-mail envoyé trop récemment. Veuillez réessayer dans ${timeRemaining} secondes.',
    [SuiteCoreStringKey.Error_FailedToCopy]: 'Erreur lors de la copie du texte',
    [SuiteCoreStringKey.Error_FailedToCreateUserRoleTemplate]:
      "Échec de la création de la relation utilisateur-rôle pour l'utilisateur {USER_ID} et le rôle {ROLE_ID}",
    [SuiteCoreStringKey.Error_FailedToCreateUserTemplate]:
      "Échec de la création de l'utilisateur {NAME}",
    [SuiteCoreStringKey.Error_FailedToFindRoleTemplate]:
      'Échec de la recherche du rôle {ROLE}',
    [SuiteCoreStringKey.Error_FailedToLookupRoleTemplate]:
      "Échec de la recherche de l'ID de rôle pour {ROLE}",
    [SuiteCoreStringKey.Error_FailedToReEncryptMnemonicTemplate]:
      "Échec de la ré-encryption de la clé mnémotechnique avec l'id : {ID}",
    [SuiteCoreStringKey.Error_FailedToStoreUserMnemonicTemplate]:
      "Échec de l'enregistrement de la mnémotechnique pour l'utilisateur {NAME}",
    [SuiteCoreStringKey.Error_FailedToUpdateLastLoginTemplate]:
      "Échec de la mise à jour de lastLogin pour l'utilisateur {userId}",
    [SuiteCoreStringKey.Error_FailedToUseDirectLoginToken]:
      "Échec de l'utilisation du jeton de connexion direct",
    [SuiteCoreStringKey.Error_FecErrorDataRequired]: 'Les données sont requises',
    [SuiteCoreStringKey.Error_FecErrorFecDecodingFailedTemplate]:
      'Échec du décodage FEC : {ERROR}',
    [SuiteCoreStringKey.Error_FecErrorFecEncodingFailedTemplate]:
      'Échec de l’encodage FEC : {ERROR}',
    [SuiteCoreStringKey.Error_FecErrorInputDataMustBeUint8Array]:
      'Les données d’entrée doivent être un Uint8Array',
    [SuiteCoreStringKey.Error_FecErrorInvalidDataLengthTemplate]:
      'Longueur de données invalide : {LENGTH}, attendu {EXPECTED}',
    [SuiteCoreStringKey.Error_FecErrorInvalidShardCounts]: 'Nombre de fragments invalide',
    [SuiteCoreStringKey.Error_FecErrorInvalidShardsAvailableArray]:
      'Tableau de fragments disponibles invalide',
    [SuiteCoreStringKey.Error_FecErrorNotEnoughShardsAvailableTemplate]:
      'Nombre de fragments disponibles insuffisant : {AVAILABLE}, besoin de {REQUIRED}',
    [SuiteCoreStringKey.Error_FecErrorParityDataCountMustBePositive]:
      'Le nombre de données de parité doit être positif',
    [SuiteCoreStringKey.Error_FecErrorParityDataRequired]:
      'Les données de parité sont requises pour les opérations FEC',
    [SuiteCoreStringKey.Error_FecErrorShardSizeExceedsMaximumTemplate]:
      'La taille du fragment {SIZE} dépasse le maximum {MAXIMUM}',
    [SuiteCoreStringKey.Error_InvalidBackupCodeVersionTemplate]:
      '{version} est une version de code de sauvegarde invalide',
    [SuiteCoreStringKey.Error_InvalidChallengeResponse]:
      'Réponse de défi de connexion invalide ou incorrecte',
    [SuiteCoreStringKey.Error_InvalidChecksumConstants]:
      'Constantes de somme de contrôle invalides',
    [SuiteCoreStringKey.Error_InvalidEmail]: 'Email invalide.',
    [SuiteCoreStringKey.Error_InvalidEmailTemplate]: '{email} n\'est pas une adresse e-mail valide.',
    [SuiteCoreStringKey.Error_InvalidEmailMissing]: 'Email manquant.',
    [SuiteCoreStringKey.Error_InvalidEmailWhitespace]:
      'L’email contient des espaces avant ou après.',
    [SuiteCoreStringKey.Error_InvalidGuid]: 'GUID invalide.',
    [SuiteCoreStringKey.Error_InvalidGuidTemplate]: 'GUID invalide : {GUID}',
    [SuiteCoreStringKey.Error_InvalidGuidUnknownBrandTemplate]:
      'Marque GUID inconnue : {BRAND}.',
    [SuiteCoreStringKey.Error_InvalidGuidUnknownLengthTemplate]:
      'Longueur GUID invalide : {LENGTH}.',
    [SuiteCoreStringKey.Error_InvalidLanguageCodeTemplate]:
      'Le code de langue "{LANGUAGE}" fourni est invalide. Retour au langage par défaut "{DEFAULT_LANGUAGE}".',
    [SuiteCoreStringKey.Error_InvalidMnemonicEncryptionKey]:
      'La clé de chiffrement doit faire 32 octets (64 caractères hexadécimaux).',
    [SuiteCoreStringKey.Error_LanguageNotFoundForEnumTemplate]:
      'Langue {lang} non trouvée pour l’énumération {enumName}',
    [SuiteCoreStringKey.Error_LanguageNotFoundInStringsTemplate]:
      'Langue {LANG} introuvable dans les chaînes',
    [SuiteCoreStringKey.Error_Login_ChallengeExpiredTemplate]:
      'Le défi de connexion a expiré après {LoginChallengeExpiration} ms',
    [SuiteCoreStringKey.Error_Login_DirectLoginNotAllowed]:
      'La connexion directe n’est pas autorisée pour ce compte. Veuillez demander un lien de connexion par e-mail.',
    [SuiteCoreStringKey.Error_MemberErrorEncryptionDataTooLarge]:
      'Les données de chiffrement sont trop volumineuses.',
    [SuiteCoreStringKey.Error_MemberErrorFailedToConvertMemberData]:
      'Échec de la conversion des données de membre.',
    [SuiteCoreStringKey.Error_MemberErrorFailedToHydrateMember]:
      'Échec de l’hydratation du membre.',
    [SuiteCoreStringKey.Error_MemberErrorIncorrectOrInvalidPrivateKey]:
      'Clé privée incorrecte ou invalide pour la clé publique',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEmail]: 'Email invalide.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEmailWhitespace]:
      'L’email contient des espaces avant ou après.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEncryptionData]:
      'Données de chiffrement invalides.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberData]:
      'Données de membre invalides.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberName]: 'Nom de membre invalide.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberNameWhitespace]:
      'Le nom de membre contient des espaces avant ou après.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberStatus]:
      'Statut de membre invalide.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMnemonic]:
      'Mnémonique de portefeuille invalide.',
    [SuiteCoreStringKey.Error_MemberErrorMemberAlreadyExists]: 'Le membre existe déjà.',
    [SuiteCoreStringKey.Error_MemberErrorMemberNotFound]: 'Membre non trouvé.',
    [SuiteCoreStringKey.Error_MemberErrorMissingEmail]: 'Email manquant.',
    [SuiteCoreStringKey.Error_MemberErrorMissingEncryptionData]:
      'Données de chiffrement manquantes.',
    [SuiteCoreStringKey.Error_MemberErrorMissingMemberName]: 'Nom de membre manquant.',
    [SuiteCoreStringKey.Error_MemberErrorMissingPrivateKey]: 'Clé privée manquante.',
    [SuiteCoreStringKey.Error_MemberErrorMissingVotingPrivateKey]:
      'Clé privée de vote manquante.',
    [SuiteCoreStringKey.Error_MemberErrorMissingVotingPublicKey]:
      'Clé publique de vote manquante.',
    [SuiteCoreStringKey.Error_MemberErrorNoWallet]: 'Aucun portefeuille chargé.',
    [SuiteCoreStringKey.Error_MemberErrorPrivateKeyRequiredToDeriveVotingKeyPair]:
      'Clé privée requise pour dériver la paire de clés de vote.',
    [SuiteCoreStringKey.Error_MemberErrorWalletAlreadyLoaded]:
      'Portefeuille déjà chargé.',
    [SuiteCoreStringKey.Error_MnemonicIsNullTemplate]: '{NAME} mnémonique est nul',
    [SuiteCoreStringKey.Error_NoTranslationsForEnumLanguageTemplate]:
      'Aucune traduction trouvée pour {enumName}.{value} dans {language}',
    [SuiteCoreStringKey.Error_NoTranslationsForEnumTemplate]:
      'Aucune traduction trouvée pour l’énumération : {enumName}',
    [SuiteCoreStringKey.Error_PasswordChange]:
      'Erreur lors du changement de mot de passe',
    [SuiteCoreStringKey.Error_Pbkdf2InvalidHashLength]:
      'La longueur du hachage ne correspond pas à la longueur attendue',
    [SuiteCoreStringKey.Error_Pbkdf2InvalidSaltLength]:
      'La longueur du sel ne correspond pas à la longueur attendue',
    [SuiteCoreStringKey.Error_RoleNotFoundTemplate]:
      "Impossible de mapper le rôle avec l'ID {ID} à une entrée dans l'énumération des rôles",
    [SuiteCoreStringKey.Error_SecureStorageDecryptedValueChecksumMismatch]:
      'Le contrôle de redondance cyclique de la valeur déchiffrée ne correspond pas',
    [SuiteCoreStringKey.Error_SecureStorageDecryptedValueLengthMismatch]:
      'La longueur de la valeur déchiffrée ne correspond pas à la longueur attendue',
    [SuiteCoreStringKey.Error_SecureStorageValueIsNull]:
      'La valeur du stockage sécurisé est nulle',
    [SuiteCoreStringKey.Error_SymmetricDataNullOrUndefined]:
      'Les données à chiffrer ne peuvent pas être nulles ou indéfinies',
    [SuiteCoreStringKey.Error_SymmetricInvalidKeyLengthTemplate]:
      'La clé de chiffrement doit faire {KEY_BYTES} octets de long',
    [SuiteCoreStringKey.Error_UnknownEnumValueForEnumTemplate]:
      'Valeur d’énumération inconnue : {value} pour l’énumération : {enumName}',
    [SuiteCoreStringKey.Error_EmailService_NotConfigured]: 'Service de messagerie non configuré. Appelez setEmailService() avant d\'utiliser le middleware.',
    [SuiteCoreStringKey.Error_FailedToCreateEmailToken]: 'Échec de la création du jeton d\'email',
    [SuiteCoreStringKey.ForgotPassword_BackToLogin]: 'Retour à la connexion',
    [SuiteCoreStringKey.ForgotPassword_Error]:
      'Une erreur est survenue lors du traitement de votre demande.',
    [SuiteCoreStringKey.ForgotPassword_ForgotPassword]: 'Mot de passe oublié',
    [SuiteCoreStringKey.ForgotPassword_InvalidToken]:
      'Jeton invalide ou expiré. Veuillez demander une nouvelle réinitialisation du mot de passe.',
    [SuiteCoreStringKey.ForgotPassword_ResetPassword]: 'Réinitialiser le mot de passe',
    [SuiteCoreStringKey.ForgotPassword_SendResetLink]:
      'Envoyer le lien de réinitialisation',
    [SuiteCoreStringKey.ForgotPassword_Success]:
      'Votre mot de passe a été réinitialisé avec succès. Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.',
    [SuiteCoreStringKey.ForgotPassword_Title]: 'Mot de passe oublié',
    [SuiteCoreStringKey.HavingTroubleContactSupport]:
      'Si vous rencontrez des problèmes, veuillez contacter notre équipe de support ou',
    [SuiteCoreStringKey.KeyFeatures_1]:
      'Stockez des fichiers en toute sécurité avec des règles de libération ou de suppression automatisées.',
    [SuiteCoreStringKey.KeyFeatures_2]:
      'Créez des "Canaries" pour surveiller votre activité numérique ou physique.',
    [SuiteCoreStringKey.KeyFeatures_3]:
      'Les actions sont déclenchées en fonction du statut du canari (par ex. inactivité).',
    [SuiteCoreStringKey.KeyFeatures_4]:
      'Codes de contrainte pour des actions immédiates et urgentes.',
    [SuiteCoreStringKey.LanguageUpdate_Success]: 'Langue mise à jour avec succès',
    [SuiteCoreStringKey.LoggedIn_Success]: 'Connecté avec succès',
    [SuiteCoreStringKey.Login_ChallengeGenerated]: 'Défi de connexion généré',
    [SuiteCoreStringKey.Login_DirectLogin]: 'Connexion directe',
    [SuiteCoreStringKey.Login_DirectLoginWarning]:
      'Lorsque le nom d’utilisateur ou l’e-mail est invalide, ou que l’utilisateur a désactivé la connexion directe, la connexion par défi direct échouera avec une erreur de réponse de défi invalide générique qui ne révèle pas si le compte existe.',
    [SuiteCoreStringKey.Login_EmailChallengeSent]:
      'Un lien de connexion a été envoyé à votre e-mail. Veuillez cliquer dessus pour vous connecter.',
    [SuiteCoreStringKey.Login_EmailLogin]: 'Connexion par e-mail',
    [SuiteCoreStringKey.Login_ForgotPassword]: 'Mot de passe oublié ?',
    [SuiteCoreStringKey.Login_LoginButton]: 'Se connecter',
    [SuiteCoreStringKey.Login_SignUp]: "Vous n'avez pas de compte ? Inscrivez-vous",
    [SuiteCoreStringKey.Login_Title]: 'Connexion',
    [SuiteCoreStringKey.Login_UseEmail]: "Utiliser l'e-mail",
    [SuiteCoreStringKey.Login_UseUsername]: "Utiliser le nom d'utilisateur",
    [SuiteCoreStringKey.LogoutButton]: 'Se déconnecter',
    [SuiteCoreStringKey.MemberRoleNotFound]: 'Rôle de membre non trouvé',
    [SuiteCoreStringKey.MnemonicRecovery_Missing]:
      'Données de récupération mnémonique manquantes',
    [SuiteCoreStringKey.MnemonicRecovery_Success]:
      'Récupération de la mnémonique réussie',
    [SuiteCoreStringKey.NoMembersYet]: 'Aucun membre pour le moment',
    [SuiteCoreStringKey.NoVerificationTokenProvided]:
      'Aucun jeton de vérification fourni.',
    [SuiteCoreStringKey.PasswordChange_IncorrectPassword]:
      'Le mot de passe actuel est incorrect',
    [SuiteCoreStringKey.PasswordChange_Success]: 'Mot de passe modifié avec succès',
    [SuiteCoreStringKey.PasswordLogin_InvalidCurrentPassword]: 'Le mot de passe actuel est incorrect',
    [SuiteCoreStringKey.PasswordLogin_Setup_Failure]: 'Échec de la configuration de la connexion par mot de passe',
    [SuiteCoreStringKey.PasswordLogin_Setup_NotAvailable]: 'Connexion par mot de passe non disponible',
    [SuiteCoreStringKey.PasswordLogin_Setup_Success]: 'Configuration de la connexion par mot de passe réussie',
    [SuiteCoreStringKey.PasswordReset_AlreadySent]:
      'Un lien de réinitialisation du mot de passe a déjà été envoyé à votre e-mail.',
    [SuiteCoreStringKey.PasswordReset_EmailNotVerified]:
      'Veuillez vérifier votre adresse e-mail avant de réinitialiser votre mot de passe.',
    [SuiteCoreStringKey.PasswordReset_Success]:
      'Si un compte avec cet e-mail existe, un lien de réinitialisation du mot de passe a été envoyé.',
    [SuiteCoreStringKey.ProceedToLogin]: 'Procéder à la connexion',
    [SuiteCoreStringKey.Register_RegisterButton]: 'Commencer',
    [SuiteCoreStringKey.RegisterButton]: "S'inscrire",
    [SuiteCoreStringKey.Registration_ConfirmPassword]: 'Confirmer le mot de passe',
    [SuiteCoreStringKey.Registration_Error]:
      "Une erreur inattendue est survenue lors de l'inscription. Veuillez réessayer.",
    [SuiteCoreStringKey.Registration_LoginLink]:
      'Vous avez déjà un compte ? Connectez-vous',
    [SuiteCoreStringKey.Registration_MnemonicSuccess]:
      'Inscription réussie. Veuillez enregistrer votre mnémonique en toute sécurité. Il ne sera pas affiché à nouveau. Veuillez vérifier votre e-mail pour vérifier votre compte.',
    [SuiteCoreStringKey.Registration_RegisterButton]: "S'inscrire",
    [SuiteCoreStringKey.Registration_Registering]: 'Enregistrement en cours...',
    [SuiteCoreStringKey.Registration_RegisteringMessage]:
      "Veuillez patienter pendant que nous créons votre compte. Cela peut prendre une minute pour générer une clé et terminer l'inscription.",
    [SuiteCoreStringKey.Registration_Success]:
      'Inscription réussie. Veuillez vérifier votre e-mail pour vérifier votre compte.',
    [SuiteCoreStringKey.Registration_SuccessTitle]: 'Inscription réussie.',
    [SuiteCoreStringKey.RemoveAdmin_Success]: 'Administrateur supprimé avec succès',
    [SuiteCoreStringKey.RemoveAdmin_Unauthorized]:
      'Non autorisé à supprimer un administrateur',
    [SuiteCoreStringKey.RemoveMember_Success]: 'Membre supprimé avec succès',
    [SuiteCoreStringKey.RemoveMember_Unauthorized]: 'Non autorisé à supprimer un membre',
    [SuiteCoreStringKey.RequestNewVerificationEmail]:
      'Demander un nouvel e-mail de vérification',
    [SuiteCoreStringKey.SignInButton]: 'Se connecter',
    [SuiteCoreStringKey.TestItemCountTemplate]: '{count} éléments',
    [SuiteCoreStringKey.TestTemplate]:
      'Ceci est un test : {variable1}, {AdministratorEmail}',
    [SuiteCoreStringKey.TestUsernameTemplate]:
      "Ceci est un nom d'utilisateur de test : {user}",
    [SuiteCoreStringKey.TogglePasswordVisibility]:
      'basculer la visibilité du mot de passe',
    [SuiteCoreStringKey.TokenCreate_Success]: 'Jeton créé avec succès',
    [SuiteCoreStringKey.TokenNotFoundTemplate]: 'Jeton non trouvé: {TOKEN}',
    [SuiteCoreStringKey.TokenRefreshed]: 'Jeton rafraîchi',
    [SuiteCoreStringKey.TokenType_AccountVerification]: 'Vérification du compte',
    [SuiteCoreStringKey.TokenType_LoginRequest]: 'Demande de connexion',
    [SuiteCoreStringKey.TokenType_PasswordReset]: 'Réinitialisation du mot de passe',
    [SuiteCoreStringKey.TokenType_MnemonicRecoveryRequest]: 'Demande de récupération mnémonique',
    [SuiteCoreStringKey.TokenType_PrivateKeyRequest]: 'Demande de clé privée',
    [SuiteCoreStringKey.Validation_AccountLocked]: 'Le compte est verrouillé',
    [SuiteCoreStringKey.Validation_AdminUserIdRequired]:
      "L'ID de l'administrateur est requis",
    [SuiteCoreStringKey.Validation_ConfirmNewPassword]:
      'Veuillez confirmer votre nouveau mot de passe',
    [SuiteCoreStringKey.Validation_CreatedUserIdError]:
      "L'ID de l'utilisateur créé n'existe pas et ne correspond pas au nouvel ID utilisateur.",
    [SuiteCoreStringKey.Validation_CurrencyCodeRequired]: 'Le code de devise est requis',
    [SuiteCoreStringKey.Validation_CurrentPasswordRequired]:
      'Le mot de passe actuel est requis',
    [SuiteCoreStringKey.Validation_DescriptionRequired]: 'La description est requise',
    [SuiteCoreStringKey.Validation_EmailNotVerified]: "L'e-mail n'est pas vérifié",
    [SuiteCoreStringKey.Validation_HmacRegex]:
      'HMAC doit être une chaîne hexadécimale valide.',
    [SuiteCoreStringKey.Validation_InvalidAdminUserId]: "ID d'administrateur invalide",
    [SuiteCoreStringKey.Validation_InvalidBackupCode]:
      'Code de sauvegarde invalide ou déjà utilisé',
    [SuiteCoreStringKey.Validation_InvalidChallenge]: 'Défi invalide ou incorrect',
    [SuiteCoreStringKey.Validation_InvalidCurrencyCode]: 'Code de devise invalide',
    [SuiteCoreStringKey.Validation_InvalidEncryptedMnemonic]:
      'Phrase mnémonique chiffrée invalide. Elle doit être une chaîne hexadécimale valide.',
    [SuiteCoreStringKey.Validation_InvalidGuid]: 'GUID invalide',
    [SuiteCoreStringKey.Validation_InvalidLanguage]: 'Langue invalide',
    [SuiteCoreStringKey.Validation_InvalidLanguageCode]: 'Code de langue invalide',
    [SuiteCoreStringKey.Validation_InvalidMemberId]: 'ID de membre invalide',
    [SuiteCoreStringKey.Validation_InvalidMnemonic]: 'Phrase mnémonique invalide.',
    [SuiteCoreStringKey.Validation_InvalidOldMnemonicEncryptionKey]:
      "L'ancien mot de passe doit comporter 32 octets (64 caractères hexadécimaux).",
    [SuiteCoreStringKey.Validation_InvalidPassword]: 'Mot de passe invalide ou incorrect',
    [SuiteCoreStringKey.Validation_InvalidSignature]: 'Signature invalide',
    [SuiteCoreStringKey.Validation_InvalidUserId]: "ID d'utilisateur invalide",
    [SuiteCoreStringKey.Validation_InvalidUserIdTemplate]: "ID d'utilisateur invalide: {detail}",
    [SuiteCoreStringKey.Validation_IsMemberBoolean]: 'isMember doit être un booléen',
    [SuiteCoreStringKey.Validation_MemberIdRequired]: "L'ID du membre est requis",
    [SuiteCoreStringKey.Validation_MnemonicOrPasswordRequired]:
      'Soit le mnémonique, soit le mot de passe est requis',
    [SuiteCoreStringKey.Validation_MnemonicRequired]: 'Le mnémonique est requis.',
    [SuiteCoreStringKey.Validation_NameRequired]: 'Le nom est requis',
    [SuiteCoreStringKey.Validation_NewPasswordRequired]:
      'Le nouveau mot de passe est requis',
    [SuiteCoreStringKey.Validation_PasswordMatch]:
      'Les mots de passe doivent correspondre',
    [SuiteCoreStringKey.Validation_PasswordMinLengthTemplate]:
      'Le mot de passe doit comporter au moins {PasswordMinLength} caractères',
    [SuiteCoreStringKey.Validation_PasswordRegexErrorTemplate]:
      'Le mot de passe doit comporter au moins {PasswordMinLength} caractères et inclure au moins une lettre, un chiffre et un caractère spécial (!@#$%^&*()_+-=[]{};\':"|,.<>/?)',
    [SuiteCoreStringKey.Validation_PasswordsDifferent]:
      'Le nouveau mot de passe doit être différent du mot de passe actuel',
    [SuiteCoreStringKey.Validation_Required]: 'Requis',
    [SuiteCoreStringKey.Validation_TimezoneInvalid]: 'Fuseau horaire invalide',
    [SuiteCoreStringKey.Validation_TimezoneRequired]: 'Le fuseau horaire est requis',
    [SuiteCoreStringKey.Validation_TokenInvalid]:
      "Le lien de vérification de l'e-mail a déjà été utilisé ou est invalide",
    [SuiteCoreStringKey.Validation_TokenMissing]: 'Aucun jeton fourni',
    [SuiteCoreStringKey.Validation_TokenRequired]: 'Le jeton est requis',
    [SuiteCoreStringKey.Validation_TokenValid]: 'Le jeton est valide',
    [SuiteCoreStringKey.Validation_UserIdMustNotExist]:
      'Le nouvel ID utilisateur ne doit pas exister.',
    [SuiteCoreStringKey.Validation_UserIdRequired]: "L'ID utilisateur est requis",
    [SuiteCoreStringKey.Validation_UsernameMaxLengthTemplate]:
      "Le nom d'utilisateur doit comporter au maximum {UsernameMaxLength} caractères",
    [SuiteCoreStringKey.Validation_UsernameMinLengthTemplate]:
      "Le nom d'utilisateur doit comporter au moins {UsernameMinLength} caractères",
    [SuiteCoreStringKey.Validation_UsernameRegexErrorTemplate]:
      "Le nom d'utilisateur doit comporter entre {UsernameMinLength} et {UsernameMaxLength} caractères et ne contenir que des lettres et des chiffres",
    [SuiteCoreStringKey.Validation_UserNotFound]: 'Utilisateur non trouvé ou inactif',
  },
  [LanguageCodes.DE]: {
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
    [SuiteCoreStringKey.Error_AccountStatus_Active]: 'Konto ist aktiv',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
      'Konto ist von einem Administrator gesperrt',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      'Konto wartet auf E-Mail-Verifizierung',
    [SuiteCoreStringKey.Error_IndexFileNotFoundTemplate]: 'Index-Datei nicht gefunden: {path}',
    [SuiteCoreStringKey.Error_AppDoesNotAppearToBeRunningWithinDistTemplate]: 'Die App scheint nicht innerhalb eines /dist/-Verzeichnisses zu laufen: {dir}',
    [SuiteCoreStringKey.Error_ChildRoleCannotBeASystemRole]: 'Eine untergeordnete Rolle kann keine Systemrolle sein',
    [SuiteCoreStringKey.Error_ChildRoleCannotBeAnAdminRole]: 'Eine untergeordnete Rolle kann keine Administratorrolle sein',
    [SuiteCoreStringKey.Error_ValidationFunctionNotRegisteredInAllowlist]: 'Validation function not registered in allowlist',
    [SuiteCoreStringKey.Error_InvalidCertificatePathAfterResolution]: 'Ungültiger Zertifikatspfad nach Auflösung',
    [SuiteCoreStringKey.Error_InvalidCertificatePathMustBeAbsolute]: 'Ungültiger Zertifikatspfad: muss absolut sein und darf .. nicht enthalten',
    [SuiteCoreStringKey.Error_InvalidViewsPathEscapesBaseDirectory]: 'Ungültiger Ansichtspfad: verlässt Basisverzeichnis',
    [SuiteCoreStringKey.Error_InvalidPathContainsParentDirectoryReference]: 'Ungültiger Pfad: enthält Verweis auf übergeordnetes Verzeichnis',
    [SuiteCoreStringKey.Error_InvalidIndexPathEscapesBaseDirectory]: 'Ungültiger Index-Pfad: verlässt Basisverzeichnis',
    [SuiteCoreStringKey.Error_InvalidAssetsPathEscapesBaseDirectory]: 'Ungültiger Asset-Pfad: verlässt Basisverzeichnis',
    [SuiteCoreStringKey.Error_MissingRequiredEnvironmentVariableTemplate]: 'Erforderliche Umgebungsvariable fehlt: {key}',
    [SuiteCoreStringKey.Error_EmptyEnvironmentVariableTemplate]: 'Umgebungsvariable {key} ist leer',
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
    [SuiteCoreStringKey.Validation_MissingValidatedDataForFieldTemplate]: 'Fehlende validierte Daten für Feld: {field}',
    [SuiteCoreStringKey.Validation_MnemonicRegex]: 'Ungültiges Mnemoformat',
    [SuiteCoreStringKey.Admin_Error_InvalidMongoUri]: 'Ungültige Mongo URI',
    [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]: 'Kein MongoDB-Client gefunden, wechsle zu Fallback',
    [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]: 'Transaktion fehlgeschlagen (transient): {error}',
    [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]: 'Transaktionszeitüberschreitung nach {timeMs}ms',
    [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]: 'Starte Datenbankinitialisierung',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]: 'Fehler beim Initialisieren der Benutzerdatenbank (Zeitüberschreitung nach {timeMs}ms)',
    [SuiteCoreStringKey.Admin_EnvNotSetTemplate]: 'Umgebungsvariable nicht gesetzt: {variable}',
    [SuiteCoreStringKey.Admin_ServingRoute]: 'Route wird bedient',
    [SuiteCoreStringKey.Admin_AccountCredentials]:
      'KONTOANMELDEINFORMATIONEN (In Passwortmanager speichern)',
    [SuiteCoreStringKey.Admin_CreatingUserTemplate]:
      'Erstelle {TYPE} Benutzer {NAME} und generiere Schlüssel',
    [SuiteCoreStringKey.Admin_DatabaseInitializedWithOptionsHashTemplate]: 'Datenbank mit Options-Hash initialisiert: {hash}',
    [SuiteCoreStringKey.Admin_DatabaseAlreadyInitialized]:
      'Datenbank bereits initialisiert',
    [SuiteCoreStringKey.Admin_DatabaseDropped]:
      'Datenbank-Collections gelöscht',
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
      "Datenbank ist noch nicht verbunden. Bitte rufen Sie zuerst start() auf",
    [SuiteCoreStringKey.Admin_Error_EnvironmentAlreadyInitialized]:
      'Die Umgebung ist bereits initialisiert',
    [SuiteCoreStringKey.Admin_Error_EnvironmentNotInitialized]:
      "Die Umgebung ist nicht initialisiert",
    [SuiteCoreStringKey.Admin_Error_FailedToDropDatabase]:
      'Fehler beim Löschen der Datenbank-Collections',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabase]:
      "Fehler beim Initialisieren der Benutzerdatenbank",
    [SuiteCoreStringKey.Admin_Error_FailedToLoadEnvironment]:
      'Fehler beim Laden der .env-Datei',
    [SuiteCoreStringKey.Admin_Error_FailedToSetTransactionTimeout]:
      'Fehler beim Festlegen der Transaktionszeitüberschreitung, keine Datenbankverbindung',
    [SuiteCoreStringKey.Admin_Error_NotConnectedToMongoDB]:
      'Fehler bei der Verbindung zu MongoDB.',
    [SuiteCoreStringKey.Admin_Error_SchemaMapIsNotLoadedYet]:
      "schemaMap ist noch nicht geladen. Bitte rufen Sie zuerst start() auf",
    [SuiteCoreStringKey.Admin_Error_UnhandledErrorInMain]:
      'Fehler im Hauptprozess nicht behandelt',
    [SuiteCoreStringKey.Admin_ErrorCleaningUpTestData]:
      'Fehler beim Bereinigen der Testdaten',
    [SuiteCoreStringKey.Admin_ErrorClosingConnection]:
      'Fehler beim Schließen der Verbindung',
    [SuiteCoreStringKey.Admin_ErrorStoppingMongoServer]:
      "Fehler beim Stoppen des Mongo-Servers",
    [SuiteCoreStringKey.Admin_FailedToSetUpTestDatabase]:
      'Fehler beim Einrichten der Testdatenbank',
    [SuiteCoreStringKey.Admin_LoadingEnvironmentTemplate]:
      'Lade Umgebung von {PATH}',
    [SuiteCoreStringKey.Admin_MakeSureToSetItInEnv]:
      'Stellen Sie sicher, dass Sie es in Ihrer .env-Datei festlegen',
    [SuiteCoreStringKey.Admin_ProceedingToDbInitialization]:
      "Datenbankinitialisierungsverfahren...",
    [SuiteCoreStringKey.Admin_RoleCreatedTemplate]:
      'Rolle {ROLE} erfolgreich erstellt mit ID {ID}',
    [SuiteCoreStringKey.Admin_SettingUp]: 'Einrichtung läuft...',
    [SuiteCoreStringKey.Admin_SettingUpUsersAndRoles]:
      'Einrichtung von Benutzern und Rollen',
    [SuiteCoreStringKey.Admin_SetTransactionTimeoutSuccessfully]:
      "Transaktionszeitüberschreitung erfolgreich festgelegt",
    [SuiteCoreStringKey.Admin_StartingDbInitialization]:
      "Datenbankinitialisierungsverfahren...",
    [SuiteCoreStringKey.Admin_StringNotFoundForLanguageTemplate]:
      'Zeichenfolge {NAME} nicht gefunden für Sprache {LANG}',
    [SuiteCoreStringKey.Admin_TearingDown]: 'Abbau...',
    [SuiteCoreStringKey.Admin_TransactionsEnabledDisabledTemplate]:
      'Transaktionen sind {STATE}',
    [SuiteCoreStringKey.Admin_UserDatabaseInitialized]:
      'Benutzerdatenbank initialisiert',
    [SuiteCoreStringKey.Admin_UserRoleCreatedTemplate]:
      'Benutzer-Rollen-Beziehung erstellt: Benutzer {USERID} -> Rolle {ROLEID}',
    [SuiteCoreStringKey.Admin_UsingMongoDbMemoryWithTransactions]:
      'Verwendung von MongoDB Memory Server mit Unterstützung für Transaktionen',
    [SuiteCoreStringKey.AdminRoleNotFound]: 'Administratorrolle nicht gefunden',
    [SuiteCoreStringKey.ApiAccess_Title]: "Ihr Zugriffstoken",
    [SuiteCoreStringKey.ApiAccess_TokenNotAvailable]: 'Token nicht verfügbar',
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
    [SuiteCoreStringKey.ChangePassword_ChangePasswordButton]: 
    'Passwort ändern',
    [SuiteCoreStringKey.Common_Admin]: 'Administrator',
    [SuiteCoreStringKey.Common_Amount]: 'Betrag',
    [SuiteCoreStringKey.Common_BackupCode]: 'Backup-Code',
    [SuiteCoreStringKey.Common_BackupCodes]: 'Backup-Codes',
    [SuiteCoreStringKey.Common_Cancel]: 'Abbrechen',
    [SuiteCoreStringKey.Common_ChangePassword]: 'Passwort ändern',
    [SuiteCoreStringKey.Common_ChangingPassword]: 'Passwort wird geändert',
    [SuiteCoreStringKey.Common_Confirm]: 'Bestätigen',
    [SuiteCoreStringKey.Common_ConfirmNewPassword]: 'Neues Passwort bestätigen',
    [SuiteCoreStringKey.Common_Connected]: 'Verbunden',
    [SuiteCoreStringKey.Common_CopiedToClipboard]: 'In die Zwischenablage kopiert',
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
    [SuiteCoreStringKey.Common_MnemonicExpiration]: 'Ablauf der mnemonischen Phrase',
    [SuiteCoreStringKey.Common_NewPassword]: 'Neues Passwort',
    [SuiteCoreStringKey.Common_Notification]: 'Benachrichtigung',
    [SuiteCoreStringKey.Common_NotValidTimeZoneTemplate]:
      '{timezone} ist keine gültige Zeitzone',
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
    [SuiteCoreStringKey.Common_UserCreatedTemplate]:
      '{TYPE} Benutzer {NAME} erfolgreich erstellt',
    [SuiteCoreStringKey.Common_Username]: "Benutzername",
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
    [SuiteCoreStringKey.Email_LoginRequestSubjectTemplate]: '{Site} Anmeldeanfrage',
    [SuiteCoreStringKey.Email_ResetPasswordBody]:
      'Bitte klicken Sie auf den untenstehenden Link, um Ihr Passwort zurückzusetzen.',
    [SuiteCoreStringKey.Email_ResetPasswordSubjectTemplate]:
      '{Site} Passwort zurücksetzen',
    [SuiteCoreStringKey.Email_TokenFailedToSend]: "Fehler beim Senden des Tokens per E-Mail",
    [SuiteCoreStringKey.Email_TokenSent]:
      'Wenn ein Konto mit dieser E-Mail oder diesem Benutzernamen existiert, wurde eine E-Mail gesendet.',
    [SuiteCoreStringKey.EmailVerification_AlreadyVerified]:
      'Ihre E-Mail-Adresse ist bereits verifiziert',
    [SuiteCoreStringKey.EmailVerification_Failed]:
      "E-Mail-Verifizierung fehlgeschlagen. Bitte versuchen Sie es erneut.",
    [SuiteCoreStringKey.EmailVerification_Resent]:
      'E-Mail-Verifizierung erfolgreich erneut gesendet',
    [SuiteCoreStringKey.EmailVerification_Success]: 'E-Mail erfolgreich verifiziert',
    [SuiteCoreStringKey.Error_ChallengeError]: 'Fehler bei der Generierung der Herausforderung',
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
    [SuiteCoreStringKey.Error_EciesErrorInvalidIVLength]: 'Ungültige ECIES-IV-Länge',
    [SuiteCoreStringKey.Error_EciesErrorInvalidMessageCrc]:
      'Ungültige ECIES-Nachrichten-CRC',
    [SuiteCoreStringKey.Error_EciesErrorInvalidMnemonic]: 'Ungültige ECIES-Mnemonik',
    [SuiteCoreStringKey.Error_EciesErrorInvalidOperation]: 'Ungültige Operation',
    [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientCount]:
      'Ungültige ECIES-Empfängeranzahl',
    [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientPublicKey]:
      'Ungültiger ECIES-öffentlicher Empfängerschlüssel für die Verschlüsselung',
    [SuiteCoreStringKey.Error_EciesErrorInvalidSenderPublicKey]:
      'Ungültiger ECIES-öffentlicher Absenderschlüssel',
    [SuiteCoreStringKey.Error_EciesErrorInvalidSignature]: 'Ungültige ECIES-Signatur',
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
    [SuiteCoreStringKey.Error_EmailSentTooRecentlyTemplate]: 'E-Mail-Token wurde zu kürzlich gesendet. Bitte versuchen Sie es in ${timeRemaining} Sekunden erneut.',
    [SuiteCoreStringKey.Error_FailedToCopy]: 'Fehler beim Kopieren des Textes',
    [SuiteCoreStringKey.Error_FailedToCreateUserRoleTemplate]:
      "Fehler beim Erstellen der Benutzer-Rollen-Beziehung für Benutzer {USER_ID} und Rolle {ROLE_ID}",
    [SuiteCoreStringKey.Error_FailedToCreateUserTemplate]:
      "Fehler beim Erstellen des Benutzers {NAME}",
    [SuiteCoreStringKey.Error_FailedToFindRoleTemplate]:
      'Fehler bei der Suche nach der Rolle {ROLE}',
    [SuiteCoreStringKey.Error_FailedToLookupRoleTemplate]:
      "Fehler bei der Suche nach der Rollen-ID für {ROLE}",
    [SuiteCoreStringKey.Error_FailedToReEncryptMnemonicTemplate]:
      "Fehler bei der erneuten Verschlüsselung des mnemonischen Schlüssels mit der ID: {ID}",
    [SuiteCoreStringKey.Error_FailedToStoreUserMnemonicTemplate]:
      "Fehler beim Speichern des mnemonischen Schlüssels für den Benutzer {NAME}",
    [SuiteCoreStringKey.Error_FailedToUpdateLastLoginTemplate]:
      "Fehler beim Aktualisieren von lastLogin für den Benutzer {userId}",
    [SuiteCoreStringKey.Error_FailedToUseDirectLoginToken]:
      "Fehler bei der Verwendung des Direktanmeldetokens",
    [SuiteCoreStringKey.Error_FecErrorDataRequired]: 'Daten sind erforderlich für FEC-Operationen',
    [SuiteCoreStringKey.Error_FecErrorFecDecodingFailedTemplate]:
      'Fehler beim FEC-Dekodieren: {ERROR}',
    [SuiteCoreStringKey.Error_FecErrorFecEncodingFailedTemplate]:
      'Fehler beim FEC-Kodieren: {ERROR}',
    [SuiteCoreStringKey.Error_FecErrorInputDataMustBeUint8Array]:
      'Eingabedaten müssen ein Uint8Array sein',
    [SuiteCoreStringKey.Error_FecErrorInvalidDataLengthTemplate]:
      'Ungültige Datenlänge: {LENGTH}, erwartet {EXPECTED}',
    [SuiteCoreStringKey.Error_FecErrorInvalidShardCounts]: 'Ungültige Fragmentanzahlen',
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
    [SuiteCoreStringKey.Error_InvalidEmailTemplate]: '{email} ist keine gültige E-Mail-Adresse.',
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
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberName]: 'Ungültiger Mitgliedsname.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberNameWhitespace]:
      'Der Mitgliedsname enthält führende oder nachfolgende Leerzeichen.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberStatus]:
      'Ungültiger Mitgliedsstatus.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMnemonic]:
      'Ungültiges Wallet-Mnemonic.',
    [SuiteCoreStringKey.Error_MemberErrorMemberAlreadyExists]: 'Mitglied existiert bereits.',
    [SuiteCoreStringKey.Error_MemberErrorMemberNotFound]: 'Mitglied nicht gefunden.',
  [SuiteCoreStringKey.Error_MemberErrorMissingEmail]: 'E-Mail fehlt.',
    [SuiteCoreStringKey.Error_MemberErrorMissingEncryptionData]:
      'Fehlende Verschlüsselungsdaten.',
    [SuiteCoreStringKey.Error_MemberErrorMissingMemberName]: 'Fehlender Mitgliedsname.',
    [SuiteCoreStringKey.Error_MemberErrorMissingPrivateKey]: 'Fehlender privater Schlüssel.',
    [SuiteCoreStringKey.Error_MemberErrorMissingVotingPrivateKey]:
      'Fehlender privater Abstimmungsschlüssel.',
    [SuiteCoreStringKey.Error_MemberErrorMissingVotingPublicKey]:
      'Fehlender öffentlicher Abstimmungsschlüssel.',
    [SuiteCoreStringKey.Error_MemberErrorNoWallet]: 'Kein Wallet geladen.',
    [SuiteCoreStringKey.Error_MemberErrorPrivateKeyRequiredToDeriveVotingKeyPair]:
      'Privater Schlüssel erforderlich, um das Abstimmungsschlüsselpaar abzuleiten.',
    [SuiteCoreStringKey.Error_MemberErrorWalletAlreadyLoaded]:
      'Wallet bereits geladen.',
    [SuiteCoreStringKey.Error_MnemonicIsNullTemplate]: '{NAME} Mnemonic ist null oder undefiniert',
    [SuiteCoreStringKey.Error_NoTranslationsForEnumLanguageTemplate]:
      'Keine Übersetzung gefunden für {enumName}.{value} in {language}',
    [SuiteCoreStringKey.Error_NoTranslationsForEnumTemplate]:
      'Keine Übersetzung gefunden für die Enumeration: {enumName}',
    [SuiteCoreStringKey.Error_PasswordChange]:
      'Fehler beim Ändern des Passworts',
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
    [SuiteCoreStringKey.Error_EmailService_NotConfigured]: 'E-Mail-Dienst nicht konfiguriert. Rufen Sie setEmailService() auf, bevor Sie die Middleware verwenden.',
    [SuiteCoreStringKey.Error_FailedToCreateEmailToken]: 'Fehler beim Erstellen des E-Mail-Tokens',
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
    [SuiteCoreStringKey.Login_SignUp]: "Sie haben noch kein Konto? Registrieren Sie sich",
    [SuiteCoreStringKey.Login_Title]: 'Anmeldung',
    [SuiteCoreStringKey.Login_UseEmail]: "E-Mail verwenden",
    [SuiteCoreStringKey.Login_UseUsername]: "Benutzernamen verwenden",
    [SuiteCoreStringKey.LogoutButton]: 'Abmelden',
    [SuiteCoreStringKey.MemberRoleNotFound]: 'Mitgliederrolle nicht gefunden',
    [SuiteCoreStringKey.MnemonicRecovery_Missing]:
      'Fehlende mnemonische Wiederherstellungsdaten',
    [SuiteCoreStringKey.MnemonicRecovery_Success]:
      'Mnemonische Wiederherstellung erfolgreich',
    [SuiteCoreStringKey.NoMembersYet]:
      'Noch keine Mitglieder',
    [SuiteCoreStringKey.NoVerificationTokenProvided]:
      'Kein Verifizierungstoken bereitgestellt.',
    [SuiteCoreStringKey.PasswordChange_IncorrectPassword]:
      'Das aktuelle Passwort ist falsch',
    [SuiteCoreStringKey.PasswordChange_Success]: 'Passwort erfolgreich geändert',
    [SuiteCoreStringKey.PasswordLogin_InvalidCurrentPassword]: 'Das aktuelle Passwort ist falsch',
    [SuiteCoreStringKey.PasswordLogin_Setup_Failure]: 'Fehler bei der Einrichtung der Passwortanmeldung',
    [SuiteCoreStringKey.PasswordLogin_Setup_NotAvailable]: 'Passwortanmeldung nicht verfügbar',
    [SuiteCoreStringKey.PasswordLogin_Setup_Success]: 'Passwortanmeldung erfolgreich eingerichtet',
    [SuiteCoreStringKey.PasswordReset_AlreadySent]:
      'Ein Link zum Zurücksetzen des Passworts wurde bereits an Ihre E-Mail gesendet.',
    [SuiteCoreStringKey.PasswordReset_EmailNotVerified]:
      'Bitte überprüfen Sie Ihre E-Mail-Adresse, bevor Sie Ihr Passwort zurücksetzen.',
    [SuiteCoreStringKey.PasswordReset_Success]:
      'Wenn ein Konto mit dieser E-Mail existiert, wurde ein Link zum Zurücksetzen des Passworts gesendet.',
    [SuiteCoreStringKey.ProceedToLogin]: 'Zur Anmeldung fortfahren',
    [SuiteCoreStringKey.Register_RegisterButton]: 'Loslegen',
    [SuiteCoreStringKey.RegisterButton]: "Registrieren",
    [SuiteCoreStringKey.Registration_ConfirmPassword]: 'Passwort bestätigen',
    [SuiteCoreStringKey.Registration_Error]:
      "Ein unerwarteter Fehler ist bei der Registrierung aufgetreten. Bitte versuchen Sie es erneut.",
    [SuiteCoreStringKey.Registration_LoginLink]:
      'Sie haben bereits ein Konto? Anmelden',
    [SuiteCoreStringKey.Registration_MnemonicSuccess]:
      'Registrierung erfolgreich. Bitte speichern Sie Ihr Mnemonic sicher. Es wird nicht erneut angezeigt. Bitte überprüfen Sie Ihre E-Mail, um Ihr Konto zu verifizieren.',
    [SuiteCoreStringKey.Registration_RegisterButton]: "Registrieren",
    [SuiteCoreStringKey.Registration_Registering]: 'Registrierung läuft...',
    [SuiteCoreStringKey.Registration_RegisteringMessage]:
      "Bitte warten Sie, während wir Ihr Konto erstellen. Es kann eine Minute dauern, um einen Schlüssel zu generieren und die Registrierung abzuschließen.",
    [SuiteCoreStringKey.Registration_Success]:
      'Registrierung erfolgreich. Bitte überprüfen Sie Ihre E-Mail, um Ihr Konto zu verifizieren.',
    [SuiteCoreStringKey.Registration_SuccessTitle]: 'Registrierung erfolgreich.',
    [SuiteCoreStringKey.RemoveAdmin_Success]: 'Administrator erfolgreich entfernt',
    [SuiteCoreStringKey.RemoveAdmin_Unauthorized]:
      'Nicht berechtigt, einen Administrator zu entfernen',
    [SuiteCoreStringKey.RemoveMember_Success]: 'Mitglied erfolgreich entfernt',
    [SuiteCoreStringKey.RemoveMember_Unauthorized]: 'Nicht berechtigt, ein Mitglied zu entfernen',
    [SuiteCoreStringKey.RequestNewVerificationEmail]:
      'Neue Verifizierungs-E-Mail anfordern',
    [SuiteCoreStringKey.SignInButton]: 'Anmelden',
    [SuiteCoreStringKey.TestItemCountTemplate]: '{count} Elemente',
    [SuiteCoreStringKey.TestTemplate]:
      'Dies ist ein Test: {variable1}, {AdministratorEmail}',
    [SuiteCoreStringKey.TestUsernameTemplate]:
      "Dies ist ein Testbenutzername: {user}",
    [SuiteCoreStringKey.TogglePasswordVisibility]:
      'Passwortsichtbarkeit umschalten',
    [SuiteCoreStringKey.TokenCreate_Success]: 'Token erfolgreich erstellt',
    [SuiteCoreStringKey.TokenNotFoundTemplate]: 'Token nicht gefunden: {TOKEN}',
    [SuiteCoreStringKey.TokenRefreshed]: 'Token aktualisiert',
    [SuiteCoreStringKey.TokenType_AccountVerification]: 'Kontoverifizierung',
    [SuiteCoreStringKey.TokenType_LoginRequest]: 'Anmeldeanfrage',
    [SuiteCoreStringKey.TokenType_PasswordReset]: 'Passwort zurücksetzen',
    [SuiteCoreStringKey.TokenType_MnemonicRecoveryRequest]: 'Anfrage zur mnemonischen Wiederherstellung',
    [SuiteCoreStringKey.TokenType_PrivateKeyRequest]: 'Anfrage für privaten Schlüssel',
    [SuiteCoreStringKey.Validation_AccountLocked]: 'Konto ist gesperrt',
    [SuiteCoreStringKey.Validation_AdminUserIdRequired]:
      "Die Administrator-ID ist erforderlich",
    [SuiteCoreStringKey.Validation_ConfirmNewPassword]:
      'Bitte bestätigen Sie Ihr neues Passwort',
    [SuiteCoreStringKey.Validation_CreatedUserIdError]:
      "Die erstellte Benutzer-ID existiert nicht und stimmt nicht mit der neuen Benutzer-ID überein.",
    [SuiteCoreStringKey.Validation_CurrencyCodeRequired]: 'Der Währungscode ist erforderlich',
    [SuiteCoreStringKey.Validation_CurrentPasswordRequired]:
      'Das aktuelle Passwort ist erforderlich',
    [SuiteCoreStringKey.Validation_DescriptionRequired]: 'Die Beschreibung ist erforderlich',
    [SuiteCoreStringKey.Validation_EmailNotVerified]: "Die E-Mail ist nicht verifiziert",
    [SuiteCoreStringKey.Validation_HmacRegex]:
      'HMAC muss eine gültige hexadezimale Zeichenkette sein.',
    [SuiteCoreStringKey.Validation_InvalidAdminUserId]: "Ungültige Administrator-ID",
    [SuiteCoreStringKey.Validation_InvalidBackupCode]:
      'Ungültiger oder bereits verwendeter Backup-Code',
    [SuiteCoreStringKey.Validation_InvalidChallenge]: 'Ungültige oder falsche Herausforderung',
    [SuiteCoreStringKey.Validation_InvalidCurrencyCode]: 'Ungültiger Währungscode',
    [SuiteCoreStringKey.Validation_InvalidEncryptedMnemonic]:
      'Ungültige verschlüsselte Mnemonik. Sie muss eine gültige hexadezimale Zeichenkette sein.',
    [SuiteCoreStringKey.Validation_InvalidGuid]: 'Ungültige GUID',
    [SuiteCoreStringKey.Validation_InvalidLanguage]: 'Ungültige Sprache',
    [SuiteCoreStringKey.Validation_InvalidLanguageCode]: 'Ungültiger Sprachcode',
    [SuiteCoreStringKey.Validation_InvalidMemberId]: 'Ungültige Mitglieds-ID',
    [SuiteCoreStringKey.Validation_InvalidMnemonic]: 'Ungültige Mnemonik.',
    [SuiteCoreStringKey.Validation_InvalidOldMnemonicEncryptionKey]:
      "Das alte Passwort muss 32 Bytes (64 hexadezimale Zeichen) lang sein.",
    [SuiteCoreStringKey.Validation_InvalidPassword]: 'Ungültiges oder falsches Passwort',
    [SuiteCoreStringKey.Validation_InvalidSignature]: 'Ungültige Signatur',
    [SuiteCoreStringKey.Validation_InvalidUserId]: "Ungültige Benutzer-ID",
    [SuiteCoreStringKey.Validation_InvalidUserIdTemplate]: "Ungültige Benutzer-ID: {detail}",
    [SuiteCoreStringKey.Validation_IsMemberBoolean]: 'isMember muss ein boolescher Wert sein',
    [SuiteCoreStringKey.Validation_MemberIdRequired]: "Die Mitglieds-ID ist erforderlich",
    [SuiteCoreStringKey.Validation_MnemonicOrPasswordRequired]:
      'Entweder Mnemonik oder Passwort ist erforderlich',
    [SuiteCoreStringKey.Validation_MnemonicRequired]: 'Die Mnemonik ist erforderlich',
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
    [SuiteCoreStringKey.Validation_TimezoneRequired]: 'Die Zeitzone ist erforderlich',
    [SuiteCoreStringKey.Validation_TokenInvalid]:
      "Der E-Mail-Bestätigungslink wurde bereits verwendet oder ist ungültig",
    [SuiteCoreStringKey.Validation_TokenMissing]: 'Kein Token angegeben',
    [SuiteCoreStringKey.Validation_TokenRequired]: 'Das Token ist erforderlich',
    [SuiteCoreStringKey.Validation_TokenValid]: 'Das Token ist gültig',
    [SuiteCoreStringKey.Validation_UserIdMustNotExist]:
      'Die neue Benutzer-ID darf nicht existieren.',
    [SuiteCoreStringKey.Validation_UserIdRequired]: "Die Benutzer-ID ist erforderlich",
    [SuiteCoreStringKey.Validation_UsernameMaxLengthTemplate]:
      "Der Benutzername darf höchstens {UsernameMaxLength} Zeichen enthalten",
    [SuiteCoreStringKey.Validation_UsernameMinLengthTemplate]:
      "Der Benutzername muss mindestens {UsernameMinLength} Zeichen enthalten",
    [SuiteCoreStringKey.Validation_UsernameRegexErrorTemplate]:
      "Der Benutzername muss zwischen {UsernameMinLength} und {UsernameMaxLength} Zeichen lang sein und darf nur Buchstaben und Zahlen enthalten",
    [SuiteCoreStringKey.Validation_UserNotFound]: 'Benutzer nicht gefunden oder inaktiv',
  },
  [LanguageCodes.ES]: {
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
    [SuiteCoreStringKey.Common_SiteTemplate]: '{Site}',
    [SuiteCoreStringKey.Common_SiteTaglineTemplate]: '{SiteTagline}',
    [SuiteCoreStringKey.Common_SiteDescriptionTemplate]: '{SiteDescription}',
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
    [SuiteCoreStringKey.Error_IndexFileNotFoundTemplate]: 'Archivo de índice no encontrado: {path}',
    [SuiteCoreStringKey.Error_AppDoesNotAppearToBeRunningWithinDistTemplate]: 'La aplicación no parece estar ejecutándose dentro de un directorio /dist/: {dir}',
    [SuiteCoreStringKey.Error_ValidationFunctionNotRegisteredInAllowlist]: 'La función de validación no está registrada en la lista permitida',
    [SuiteCoreStringKey.Error_InvalidCertificatePathAfterResolution]: 'Ruta de certificado inválida después de la resolución',
    [SuiteCoreStringKey.Error_InvalidCertificatePathMustBeAbsolute]: 'Ruta de certificado inválida: debe ser absoluta y no puede contener ..',
    [SuiteCoreStringKey.Error_InvalidViewsPathEscapesBaseDirectory]: 'Ruta de vistas inválida: escapa del directorio base',
    [SuiteCoreStringKey.Error_InvalidPathContainsParentDirectoryReference]: 'Ruta inválida: contiene referencia al directorio padre',
    [SuiteCoreStringKey.Error_InvalidIndexPathEscapesBaseDirectory]: 'Ruta de índice inválida: escapa del directorio base',
    [SuiteCoreStringKey.Error_InvalidAssetsPathEscapesBaseDirectory]: 'Ruta de recursos inválida: escapa del directorio base',
    [SuiteCoreStringKey.Error_MissingRequiredEnvironmentVariableTemplate]: 'Falta la variable de entorno requerida: {key}',
    [SuiteCoreStringKey.Error_EmptyEnvironmentVariableTemplate]: 'La variable de entorno {key} está vacía',
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
    [SuiteCoreStringKey.Error_ChildRoleCannotBeASystemRole]: 'Un rol hijo no puede ser un rol del sistema',
    [SuiteCoreStringKey.Error_ChildRoleCannotBeAnAdminRole]: 'Un rol hijo no puede ser un rol de administrador',
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
    [SuiteCoreStringKey.Validation_MissingValidatedDataForFieldTemplate]: 'Faltan datos validados para el campo: {field}',
    [SuiteCoreStringKey.Validation_MnemonicRegex]: 'Formato de mnemónico inválido',
    [SuiteCoreStringKey.Admin_Error_InvalidMongoUri]: 'URI Mongo inválido',
    [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]: 'No se encontró cliente MongoDB, usando alternativa',
    [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]: 'Transacción falló (transitorio): {error}',
    [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]: 'Tiempo de espera de transacción después de {timeMs}ms',
    [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]: 'Iniciando inicialización de base de datos',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]: 'Error al inicializar base de datos de usuario (tiempo de espera después de {timeMs}ms)',
    [SuiteCoreStringKey.Admin_EnvNotSetTemplate]: 'Variable de entorno no configurada: {variable}',
    [SuiteCoreStringKey.Admin_ServingRoute]: 'Sirviendo ruta',
    [SuiteCoreStringKey.Admin_AccountCredentials]:
      'CREDENCIALES DE CUENTA (Guardar en el gestor de contraseñas)',
    [SuiteCoreStringKey.Admin_CreatingUserTemplate]:
      'Creando {TYPE} usuario {NAME} y generando claves',
    [SuiteCoreStringKey.Admin_DatabaseInitializedWithOptionsHashTemplate]: 'Base de datos inicializada con el hash de opciones: {hash}',
    [SuiteCoreStringKey.Admin_DatabaseAlreadyInitialized]:
      'La base de datos ya está inicializada',
    [SuiteCoreStringKey.Admin_DatabaseDropped]: 'Colecciones de base de datos eliminadas',
    [SuiteCoreStringKey.Admin_DevelopmentDatabase]: 'Base de datos de desarrollo',
    [SuiteCoreStringKey.Admin_DroppingDatabase]: 'Eliminando base de datos',
    [SuiteCoreStringKey.Admin_EndCredentials]: 'FIN DE CREDENCIALES',
    [SuiteCoreStringKey.Admin_EnvDirSetButMissingTemplate]:
      '{VAR} está configurado en {PATH} pero falta el directorio',
    [SuiteCoreStringKey.Admin_EnvFileNotFound]:
      'Archivo .env no encontrado, omitiendo carga',
    [SuiteCoreStringKey.Admin_EnvFileNotFoundTemplate]:
      'Archivo de entorno no encontrado en {PATH}',
    [SuiteCoreStringKey.Admin_Error_DatabaseNotConnectedYet]:
      'db no está conectado aún. llame a start() primero',
    [SuiteCoreStringKey.Admin_Error_EnvironmentAlreadyInitialized]:
      'El entorno ya está inicializado',
    [SuiteCoreStringKey.Admin_Error_EnvironmentNotInitialized]:
      'El entorno no está inicializado',
    [SuiteCoreStringKey.Admin_Error_FailedToDropDatabase]:
      'Error al eliminar las colecciones de base de datos',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabase]:
      'Error al inicializar la base de datos de usuarios',
    [SuiteCoreStringKey.Admin_Error_FailedToLoadEnvironment]:
      'Error al cargar el archivo .env',
    [SuiteCoreStringKey.Admin_Error_FailedToSetTransactionTimeout]:
      'No se pudo establecer el tiempo de espera de la transacción, sin conexión a la base de datos',
    [SuiteCoreStringKey.Admin_Error_NotConnectedToMongoDB]:
      'No se pudo establecer la conexión con MongoDB.',
    [SuiteCoreStringKey.Admin_Error_SchemaMapIsNotLoadedYet]:
      'schemaMap no está cargado aún. llame a start() primero',
    [SuiteCoreStringKey.Admin_Error_UnhandledErrorInMain]:
      'Error no controlado en el main',
    [SuiteCoreStringKey.Admin_ErrorCleaningUpTestData]:
      'Error al limpiar los datos de prueba',
    [SuiteCoreStringKey.Admin_ErrorClosingConnection]: 'Error al cerrar la conexión',
    [SuiteCoreStringKey.Admin_ErrorStoppingMongoServer]:
      'Error al detener el servidor de MongoDB',
    [SuiteCoreStringKey.Admin_FailedToSetUpTestDatabase]:
      'Error al configurar la base de datos de prueba',
    [SuiteCoreStringKey.Admin_LoadingEnvironmentTemplate]:
      'Loading environment from {PATH}',
    [SuiteCoreStringKey.Admin_MakeSureToSetItInEnv]:
      'Asegúrese de configurarlo en su archivo .env',
    [SuiteCoreStringKey.Admin_ProceedingToDbInitialization]:
      'Procediendo a la inicialización de la base de datos...',
    [SuiteCoreStringKey.Admin_RoleCreatedTemplate]:
      'Rol {ROLE} creado con éxito con ID {ID}',
    [SuiteCoreStringKey.Admin_SettingUp]: 'Configuración en curso...',
    [SuiteCoreStringKey.Admin_SettingUpUsersAndRoles]:
      'Configuración de usuarios y roles',
    [SuiteCoreStringKey.Admin_SetTransactionTimeoutSuccessfully]:
      'Tiempo de espera de la transacción establecido con éxito',
    [SuiteCoreStringKey.Admin_StartingDbInitialization]:
      'Iniciando la inicialización de la base de datos...',
    [SuiteCoreStringKey.Admin_StringNotFoundForLanguageTemplate]:
      'Cadena {NAME} no encontrada para el idioma {LANG}',
    [SuiteCoreStringKey.Admin_TearingDown]: 'Desmontando...',
    [SuiteCoreStringKey.Admin_TransactionsEnabledDisabledTemplate]:
      'El estado de las transacciones es {STATE}',
    [SuiteCoreStringKey.Admin_UserDatabaseInitialized]:
      'Base de datos de usuarios inicializada',
    [SuiteCoreStringKey.Admin_UserRoleCreatedTemplate]:
      'Relación usuario-rol creada: Usuario {USERID} -> Rol {ROLEID}',
    [SuiteCoreStringKey.Admin_UsingMongoDbMemoryWithTransactions]:
      'Utilización de MongoDB Memory Server con soporte de transacciones',
    [SuiteCoreStringKey.AdminRoleNotFound]: 'Rol de administrador no encontrado',
    [SuiteCoreStringKey.ApiAccess_Title]: 'Su token de acceso',
    [SuiteCoreStringKey.ApiAccess_TokenNotAvailable]: 'El token no está disponible',
    [SuiteCoreStringKey.BackupCodeRecovery_CodesRemainingTemplate]:
      '{count} códigos de respaldo restantes',
    [SuiteCoreStringKey.BackupCodeRecovery_GenerateNewCodes]:
      'Generar nuevos códigos de respaldo',
    [SuiteCoreStringKey.BackupCodeRecovery_Login]:
      'Iniciar sesión con código de respaldo',
    [SuiteCoreStringKey.BackupCodeRecovery_RecoverMnemonic]:
      'Recuperar su frase mnemotécnica',
    [SuiteCoreStringKey.BackupCodeRecovery_Success]:
      'Recuperación de código de respaldo exitosa.',
    [SuiteCoreStringKey.BackupCodeRecovery_Title]:
      'Inicio de sesión con código de respaldo',
    [SuiteCoreStringKey.BackupCodeRecovery_YourNewCodes]:
      'Aquí están sus nuevos códigos de respaldo. Por favor, anótelos en un lugar seguro, no podrán volver a visualizarse.',
    [SuiteCoreStringKey.CannotRemoveLastAdmin]:
      'No se puede eliminar al último administrador',
    [SuiteCoreStringKey.ChangePassword_ChangePasswordButton]: 'Cambiar contraseña',
    [SuiteCoreStringKey.Common_Admin]: 'Administrador',
    [SuiteCoreStringKey.Common_Amount]: 'Monto',
    [SuiteCoreStringKey.Common_BackupCode]: 'Código de respaldo',
    [SuiteCoreStringKey.Common_BackupCodes]: 'Códigos de respaldo',
    [SuiteCoreStringKey.Common_Cancel]: 'Cancelar',
    [SuiteCoreStringKey.Common_ChangePassword]: 'Cambiar contraseña',
    [SuiteCoreStringKey.Common_ChangingPassword]: 'Cambiando contraseña',
    [SuiteCoreStringKey.Common_Confirm]: 'Confirmar',
    [SuiteCoreStringKey.Common_ConfirmNewPassword]: 'Confirmar nueva contraseña',
    [SuiteCoreStringKey.Common_Connected]: 'Conectado',
    [SuiteCoreStringKey.Common_CopiedToClipboard]: 'Copiado al portapapeles',
    [SuiteCoreStringKey.Common_CopyToClipboard]: 'Copiar al portapapeles',
    [SuiteCoreStringKey.Common_CurrencyCode]: 'Código de moneda',
    [SuiteCoreStringKey.Common_CurrentPassword]: 'Contraseña actual',
    [SuiteCoreStringKey.Common_Dashboard]: 'Panel de control',
    [SuiteCoreStringKey.Common_Date]: 'Fecha',
    [SuiteCoreStringKey.Common_DateCreated]: 'Fecha de creación',
    [SuiteCoreStringKey.Common_Description]: 'Descripción',
    [SuiteCoreStringKey.Common_Disabled]: 'Deshabilitado',
    [SuiteCoreStringKey.Common_Email]: 'Dirección de correo electrónico',
    [SuiteCoreStringKey.Common_EmailVerification]: 'Verificación de correo electrónico',
    [SuiteCoreStringKey.Common_Enabled]: 'Habilitado',
    [SuiteCoreStringKey.Common_Expiration]: 'Expiración',
    [SuiteCoreStringKey.Common_ID]: 'CI',
    [SuiteCoreStringKey.Common_KeyFeatures]: 'Características clave',
    [SuiteCoreStringKey.Common_Loaded]: 'Cargado',
    [SuiteCoreStringKey.Common_Loading]: 'Cargando',
    [SuiteCoreStringKey.Common_Logo]: 'Logo',
    [SuiteCoreStringKey.Common_Member]: 'Miembro',
    [SuiteCoreStringKey.Common_Minute]: 'Minuto',
    [SuiteCoreStringKey.Common_Minutes]: 'Minutos',
    [SuiteCoreStringKey.Common_Mnemonic]: 'Frase mnemotécnica',
    [SuiteCoreStringKey.Common_MnemonicExpiration]: 'Expiración del Mnemónico',
    [SuiteCoreStringKey.Common_NewPassword]: 'Nueva contraseña',
    [SuiteCoreStringKey.Common_Notification]: 'Notificación',
    [SuiteCoreStringKey.Common_NotValidTimeZoneTemplate]:
      '{timezone} no es una zona horaria válida',
    [SuiteCoreStringKey.Common_OK]: 'Aceptar',
    [SuiteCoreStringKey.Common_Online]: 'En línea',
    [SuiteCoreStringKey.Common_Password]: 'Contraseña',
    [SuiteCoreStringKey.Common_PrivateKey]: 'Clave privada',
    [SuiteCoreStringKey.Common_PublicKey]: 'Clave pública',
    [SuiteCoreStringKey.Common_Registration]: 'Registrarse',
    [SuiteCoreStringKey.Common_RemoveMember]: 'Eliminar miembro',
    [SuiteCoreStringKey.Common_Role]: 'Rol',
    [SuiteCoreStringKey.Common_Schema]: 'Esquema',
    [SuiteCoreStringKey.Common_Schemas]: 'Esquemas',
    [SuiteCoreStringKey.Common_Seconds]: 'Segundos',
    [SuiteCoreStringKey.Common_Status]: 'Estado',
    [SuiteCoreStringKey.Common_System]: 'Sistema',
    [SuiteCoreStringKey.Common_ThemeToggle_Dark]: 'Activar modo oscuro',
    [SuiteCoreStringKey.Common_ThemeToggle_Light]: 'Activar modo claro',
    [SuiteCoreStringKey.Common_Timezone]: 'Zona horaria',
    [SuiteCoreStringKey.Common_Type]: 'Tipo',
    [SuiteCoreStringKey.Common_UseMnemonic]: 'Utilizar únicamente la mnémotechnique',
    [SuiteCoreStringKey.Common_UsePassword]: 'Definir la contraseña',
    [SuiteCoreStringKey.Common_User]: 'Usuario',
    [SuiteCoreStringKey.Common_UserCreatedTemplate]:
      '{TYPE} usuario {NAME} creado con éxito',
    [SuiteCoreStringKey.Common_Username]: 'Nombre de usuario',
    [SuiteCoreStringKey.Common_Using]: 'Usando',
    [SuiteCoreStringKey.Common_Wallet]: 'Billetera',
    [SuiteCoreStringKey.Common_WalletExpiration]: 'Expiración de la Billetera',
    [SuiteCoreStringKey.Dashboard_YourDashboard]: 'Tu panel de control',
    [SuiteCoreStringKey.Email_ConfirmationBody]:
      'Por favor, haga clic en el enlace a continuación para confirmar su correo electrónico.',
    [SuiteCoreStringKey.Email_ConfirmationSubjectTemplate]:
      '{Site} confirmación de correo electrónico',
    [SuiteCoreStringKey.Email_LinkExpiresInTemplate]:
      'El enlace expira en {EmailTokenResendIntervalMinutes} minutos.',
    [SuiteCoreStringKey.Email_LoginRequestBody]:
      'Por favor, haga clic en el enlace a continuación para iniciar sesión en su cuenta.',
    [SuiteCoreStringKey.Email_LoginRequestSubjectTemplate]:
      '{Site} solicitud de inicio de sesión',
    [SuiteCoreStringKey.Email_ResetPasswordBody]:
      'Por favor, haga clic en el enlace a continuación para restablecer su contraseña.',
    [SuiteCoreStringKey.Email_ResetPasswordSubjectTemplate]:
      '{Site} restablecimiento de contraseña',
    [SuiteCoreStringKey.Email_TokenFailedToSend]:
      'Error al enviar el token por correo electrónico',
    [SuiteCoreStringKey.Email_TokenSent]:
      'Si existe una cuenta con ese correo electrónico o nombre de usuario, se ha enviado un correo electrónico.',
    [SuiteCoreStringKey.EmailVerification_AlreadyVerified]:
      'Correo electrónico ya verificado',
    [SuiteCoreStringKey.EmailVerification_Failed]:
      'La verificación de correo electrónico falló. Por favor, inténtelo de nuevo.',
    [SuiteCoreStringKey.EmailVerification_Resent]:
      'Correo de verificación reenviado con éxito',
    [SuiteCoreStringKey.EmailVerification_Success]:
      'Correo electrónico verificado con éxito',
    [SuiteCoreStringKey.Error_ChallengeError]: 'Error al generar el desafío',
    [SuiteCoreStringKey.Error_DirectTokenAlreadyUsed]:
      'El token de inicio de sesión directo ya ha sido utilizado',
    [SuiteCoreStringKey.Error_Disposed]: 'Ya desechado',
    [SuiteCoreStringKey.Error_EciesError_InvalidMultipleMessageOverheadSize]:
      'Constantes de sobrecarga de múltiples mensajes ECIES no válidas',
    [SuiteCoreStringKey.Error_EciesError_InvalidPublicKeyLength]:
      'Longitud de clave pública ECIES no válida',
    [SuiteCoreStringKey.Error_EciesError_InvalidRecipientCount]:
      'Tamaño de cuenta de destinatario múltiple ECIES no válido',
    [SuiteCoreStringKey.Error_EciesErrorCrcError]: 'Error de CRC',
    [SuiteCoreStringKey.Error_EciesErrorDecryptionFailed]:
      'Error de descifrado de ECIES (verificación de MAC o error de relleno)',
    [SuiteCoreStringKey.Error_EciesErrorEncryptionDataLengthMismatch]:
      'Inadéquation de la longueur des données chiffrées',
    [SuiteCoreStringKey.Error_EciesErrorEncryptionTypeMismatch]:
      'Inadéquation du type de chiffrement',
    [SuiteCoreStringKey.Error_EciesErrorFileSizeTooLarge]:
      'Tamaño de archivo demasiado grande',
    [SuiteCoreStringKey.Error_EciesErrorInvalidAuthTagLength]:
      'Longitud de etiqueta de autenticación no válida',
    [SuiteCoreStringKey.Error_EciesErrorInvalidDataLength]: 'Longitud de datos no válida',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedDataLength]:
      'Longitud de datos cifrados no válida',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedKeyLength]:
      'Longitud de clave cifrada no válida',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptionType]:
      'Tipo de cifrado no válido',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEphemeralPublicKey]:
      'Clave pública efímera no válida',
    [SuiteCoreStringKey.Error_EciesErrorInvalidHeaderLength]:
      'Longitud de encabezado no válida',
    [SuiteCoreStringKey.Error_EciesErrorInvalidIVLength]: 'Longitud de IV no válida',
    [SuiteCoreStringKey.Error_EciesErrorInvalidMessageCrc]: 'CRC de mensaje no válido',
    [SuiteCoreStringKey.Error_EciesErrorInvalidMnemonic]: 'Mnemotécnico no válido',
    [SuiteCoreStringKey.Error_EciesErrorInvalidOperation]: 'Operación no válida',
    [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientCount]:
      'Número de destinatarios no válido',
    [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientPublicKey]:
      'Clave pública de destinatario no válida proporcionada para el cifrado',
    [SuiteCoreStringKey.Error_EciesErrorInvalidSenderPublicKey]:
      'Clave pública del remitente no válida',
    [SuiteCoreStringKey.Error_EciesErrorInvalidSignature]: 'Firma no válida',
    [SuiteCoreStringKey.Error_EciesErrorMessageLengthMismatch]:
      'Longitud de mensaje no coincide',
    [SuiteCoreStringKey.Error_EciesErrorPrivateKeyNotLoaded]: 'Clave privada no cargada',
    [SuiteCoreStringKey.Error_EciesErrorRecipientKeyCountMismatch]:
      'El número de claves de destinatario no coincide con el número de destinatarios',
    [SuiteCoreStringKey.Error_EciesErrorRecipientNotFound]:
      'Destinatario no encontrado en los IDs de destinatario',
    [SuiteCoreStringKey.Error_EciesErrorSecretComputationFailed]:
      'Error al calcular el secreto compartido para el destinatario',
    [SuiteCoreStringKey.Error_EciesErrorTooManyRecipients]:
      'Demasiados destinatarios: excede el máximo permitido',
    [SuiteCoreStringKey.Error_EciesFailedSharedSecret]:
      'Échec du calcul du secret partagé',
    [SuiteCoreStringKey.Error_EmailSentTooRecentlyTemplate]: 'El correo electrónico de verificación fue enviado hace poco. Por favor, espere {EmailTokenResendIntervalMinutes} minutos antes de solicitar otro.',
    [SuiteCoreStringKey.Error_FailedToCopy]: 'Error al copiar el texto',
    [SuiteCoreStringKey.Error_FailedToCreateUserRoleTemplate]:
      'Error al crear la relación usuario-rol para el usuario {USER_ID} y el rol {ROLE_ID}',
    [SuiteCoreStringKey.Error_FailedToCreateUserTemplate]:
      'Error al crear el usuario {NAME}',
    [SuiteCoreStringKey.Error_FailedToFindRoleTemplate]:
      'Error al encontrar el rol {ROLE}',
    [SuiteCoreStringKey.Error_FailedToLookupRoleTemplate]:
      'Error al buscar el ID de rol para {ROLE}',
    [SuiteCoreStringKey.Error_FailedToReEncryptMnemonicTemplate]:
      'Error al re-encriptar la clave mnemotécnica con id: {ID}',
    [SuiteCoreStringKey.Error_FailedToStoreUserMnemonicTemplate]:
      'Error al almacenar la mnémotechnique para el usuario {NAME}',
    [SuiteCoreStringKey.Error_FailedToUpdateLastLoginTemplate]:
      'Error al actualizar lastLogin para el usuario {userId}',
    [SuiteCoreStringKey.Error_FailedToUseDirectLoginToken]:
      'Error al usar el token de inicio de sesión directo',
    [SuiteCoreStringKey.Error_FecErrorDataRequired]: 'Datos requeridos para FEC',
    [SuiteCoreStringKey.Error_FecErrorFecDecodingFailedTemplate]:
      'Error de decodificación de FEC: {ERROR}',
    [SuiteCoreStringKey.Error_FecErrorFecEncodingFailedTemplate]:
      'Error de codificación de FEC: {ERROR}',
    [SuiteCoreStringKey.Error_FecErrorInputDataMustBeUint8Array]:
      'Los datos de entrada deben ser un Uint8Array',
    [SuiteCoreStringKey.Error_FecErrorInvalidDataLengthTemplate]:
      'Longitud de datos no válida: {LENGTH}, se esperaba {EXPECTED}',
    [SuiteCoreStringKey.Error_FecErrorInvalidShardCounts]:
      'Conteos de fragmentos no válidos',
    [SuiteCoreStringKey.Error_FecErrorInvalidShardsAvailableArray]:
      'Matriz de fragmentos disponibles no válida',
    [SuiteCoreStringKey.Error_FecErrorNotEnoughShardsAvailableTemplate]:
      'Cantidad de fragmentos disponibles insuficiente: {AVAILABLE}, se requieren {REQUIRED}',
    [SuiteCoreStringKey.Error_FecErrorParityDataCountMustBePositive]:
      'El recuento de datos de paridad debe ser positivo',
    [SuiteCoreStringKey.Error_FecErrorParityDataRequired]:
      'Los datos de paridad son requeridos para las operaciones de FEC',
    [SuiteCoreStringKey.Error_FecErrorShardSizeExceedsMaximumTemplate]:
      'Tamaño de fragmento {SIZE} excede el máximo {MAXIMUM}',
    [SuiteCoreStringKey.Error_InvalidBackupCodeVersionTemplate]:
      '{version} es una versión de código de respaldo inválida',
    [SuiteCoreStringKey.Error_InvalidChallengeResponse]:
      'Respuesta de desafío de inicio de sesión inválida o incorrecta',
    [SuiteCoreStringKey.Error_InvalidChecksumConstants]:
      'Constantes de suma de verificación no válidas',
    [SuiteCoreStringKey.Error_InvalidEmail]: 'Correo electrónico inválido.',
    [SuiteCoreStringKey.Error_InvalidEmailTemplate]: '{email} no es una dirección de correo electrónico válida.',
    [SuiteCoreStringKey.Error_InvalidEmailMissing]: 'Email faltante.',
    [SuiteCoreStringKey.Error_InvalidEmailWhitespace]:
      'El correo electrónico contiene espacios en blanco al principio o al final.',
    [SuiteCoreStringKey.Error_InvalidGuid]: 'GUID inválido.',
    [SuiteCoreStringKey.Error_InvalidGuidTemplate]: 'GUID inválido: {GUID}',
    [SuiteCoreStringKey.Error_InvalidGuidUnknownBrandTemplate]:
      'Marca de GUID desconocida: {BRAND}.',
    [SuiteCoreStringKey.Error_InvalidGuidUnknownLengthTemplate]:
      'Longitud de GUID inválida: {LENGTH}.',
    [SuiteCoreStringKey.Error_InvalidLanguageCodeTemplate]:
      'Código de idioma "{LANGUAGE}" proporcionado no válido. Volviendo al idioma predeterminado "{DEFAULT_LANGUAGE}".',
    [SuiteCoreStringKey.Error_InvalidMnemonicEncryptionKey]:
      'La clave de cifrado debe tener 32 bytes (64 caracteres hexadecimales).',
    [SuiteCoreStringKey.Error_LanguageNotFoundForEnumTemplate]:
      'Idioma {lang} no encontrado para la enumeración {enumName}',
    [SuiteCoreStringKey.Error_LanguageNotFoundInStringsTemplate]:
      'Idioma {LANG} no encontrado en las cadenas',
    [SuiteCoreStringKey.Error_Login_ChallengeExpiredTemplate]:
      'El desafío de inicio de sesión expiró después de {LoginChallengeExpiration} ms',
    [SuiteCoreStringKey.Error_Login_DirectLoginNotAllowed]:
      'No se permite el inicio de sesión directo para esta cuenta. Por favor, solicite un enlace de inicio de sesión por correo electrónico.',
    [SuiteCoreStringKey.Error_MemberErrorEncryptionDataTooLarge]:
      'Los datos de cifrado son demasiado grandes.',
    [SuiteCoreStringKey.Error_MemberErrorFailedToConvertMemberData]:
      'Error al convertir los datos del miembro.',
    [SuiteCoreStringKey.Error_MemberErrorFailedToHydrateMember]:
      'Error al hidratar el miembro.',
    [SuiteCoreStringKey.Error_MemberErrorIncorrectOrInvalidPrivateKey]:
      'Clave privada incorrecta o inválida para la clave pública',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEmail]: 'Email inválido.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEmailWhitespace]:
      'El email contiene espacios antes o después.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEncryptionData]:
      'Datos de cifrado inválidos.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberData]:
      'Datos de miembro inválidos.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberName]:
      'Nombre de miembro inválido.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberNameWhitespace]:
      'El nombre de miembro contiene espacios antes o después.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberStatus]:
      'Estado de miembro inválido.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMnemonic]:
      'Mnemotécnico de cartera inválido.',
    [SuiteCoreStringKey.Error_MemberErrorMemberAlreadyExists]: 'El miembro ya existe.',
    [SuiteCoreStringKey.Error_MemberErrorMemberNotFound]: 'Miembro no encontrado.',
    [SuiteCoreStringKey.Error_MemberErrorMissingEmail]: 'Email faltante.',
    [SuiteCoreStringKey.Error_MemberErrorMissingEncryptionData]:
      'Datos de cifrado faltantes.',
    [SuiteCoreStringKey.Error_MemberErrorMissingMemberName]:
      'Nombre de miembro faltante.',
    [SuiteCoreStringKey.Error_MemberErrorMissingPrivateKey]: 'Clave privada faltante.',
    [SuiteCoreStringKey.Error_MemberErrorMissingVotingPrivateKey]:
      'Clave privada de voto faltante.',
    [SuiteCoreStringKey.Error_MemberErrorMissingVotingPublicKey]:
      'Clave pública de voto faltante.',
    [SuiteCoreStringKey.Error_MemberErrorNoWallet]: 'Ninguna cartera cargada.',
    [SuiteCoreStringKey.Error_MemberErrorPrivateKeyRequiredToDeriveVotingKeyPair]:
      'Clave privada requerida para derivar la pareja de claves de voto.',
    [SuiteCoreStringKey.Error_MemberErrorWalletAlreadyLoaded]: 'Cartera ya cargada.',
    [SuiteCoreStringKey.Error_MnemonicIsNullTemplate]: '{NAME} mnemotécnico es nulo',
    [SuiteCoreStringKey.Error_NoTranslationsForEnumLanguageTemplate]:
      'No se encontró traducción para {enumName}.{value} en {language}',
    [SuiteCoreStringKey.Error_NoTranslationsForEnumTemplate]:
      'No se encontraron traducciones para la enumeración: {enumName}',
    [SuiteCoreStringKey.Error_PasswordChange]: 'Error al cambiar la contraseña',
    [SuiteCoreStringKey.Error_Pbkdf2InvalidHashLength]:
      'La longitud del hash no coincide con la longitud esperada',
    [SuiteCoreStringKey.Error_Pbkdf2InvalidSaltLength]:
      'La longitud del salt no coincide con la longitud esperada',
    [SuiteCoreStringKey.Error_RoleNotFoundTemplate]:
      'No se pudo mapear el rol con ID {ID} a una entrada en la enumeración de roles',
    [SuiteCoreStringKey.Error_SecureStorageDecryptedValueChecksumMismatch]:
      'El checksum de la valor descifrado no coincide',
    [SuiteCoreStringKey.Error_SecureStorageDecryptedValueLengthMismatch]:
      'La longitud de la valor descifrado no coincide con la longitud esperada',
    [SuiteCoreStringKey.Error_SecureStorageValueIsNull]:
      'El valor del almacenamiento seguro es nulo',
    [SuiteCoreStringKey.Error_SymmetricDataNullOrUndefined]:
      'Los datos a cifrar no pueden ser nulos o indefinidos',
    [SuiteCoreStringKey.Error_SymmetricInvalidKeyLengthTemplate]:
      'La clave de cifrado debe tener {KEY_BYTES} bytes de longitud',
    [SuiteCoreStringKey.Error_UnknownEnumValueForEnumTemplate]:
      'Valor de enumeración desconocido: {value} para la enumeración: {enumName}',
    [SuiteCoreStringKey.Error_EmailService_NotConfigured]: 'Servicio de correo electrónico no configurado. Llame a setEmailService() antes de usar el middleware.',
    [SuiteCoreStringKey.Error_FailedToCreateEmailToken]: 'Error al crear el token de correo electrónico',
    [SuiteCoreStringKey.ForgotPassword_BackToLogin]: 'Volver al inicio de sesión',
    [SuiteCoreStringKey.ForgotPassword_Error]:
      'Ocurrió un error al procesar su solicitud.',
    [SuiteCoreStringKey.ForgotPassword_ForgotPassword]: 'Olvidé mi contraseña',
    [SuiteCoreStringKey.ForgotPassword_InvalidToken]:
      'Token inválido o expirado. Por favor, solicite un nuevo restablecimiento de contraseña.',
    [SuiteCoreStringKey.ForgotPassword_ResetPassword]: 'Restablecer contraseña',
    [SuiteCoreStringKey.ForgotPassword_SendResetLink]:
      'Enviar enlace de restablecimiento',
    [SuiteCoreStringKey.ForgotPassword_Success]:
      'Su contraseña ha sido restablecida con éxito. Ahora puede iniciar sesión con su nueva contraseña.',
    [SuiteCoreStringKey.ForgotPassword_Title]: 'Olvidé mi contraseña',
    [SuiteCoreStringKey.HavingTroubleContactSupport]:
      'Si tiene problemas, por favor contacte a nuestro equipo de soporte o',
    [SuiteCoreStringKey.KeyFeatures_1]:
      'Almacene archivos de forma segura con reglas para su liberación o eliminación automatizada.',
    [SuiteCoreStringKey.KeyFeatures_2]:
      'Cree "Canarios" para monitorear su actividad digital o física.',
    [SuiteCoreStringKey.KeyFeatures_3]:
      'Las acciones se activan según el estado del canario (p. ej., inactividad).',
    [SuiteCoreStringKey.KeyFeatures_4]:
      'Códigos de coacción para acciones inmediatas y de emergencia.',
    [SuiteCoreStringKey.LanguageUpdate_Success]: 'Idioma actualizado con éxito',
    [SuiteCoreStringKey.LoggedIn_Success]: 'Inicio de sesión exitoso',
    [SuiteCoreStringKey.Login_ChallengeGenerated]: 'Desafío de inicio de sesión generado',
    [SuiteCoreStringKey.Login_DirectLogin]: 'Inicio de sesión directo',
    [SuiteCoreStringKey.Login_DirectLoginWarning]:
      'Cuando el nombre de usuario o el correo electrónico son inválidos, o el usuario ha deshabilitado el inicio de sesión directo, el inicio de sesión por desafío directo fallará con un error de respuesta de desafío inválido genérico que no revela si la cuenta existe.',
    [SuiteCoreStringKey.Login_EmailChallengeSent]:
      'Se ha enviado un enlace de inicio de sesión a su correo electrónico. Por favor, haga clic en él para iniciar sesión.',
    [SuiteCoreStringKey.Login_EmailLogin]: 'Inicio de sesión por correo electrónico',
    [SuiteCoreStringKey.Login_ForgotPassword]: '¿Olvidó su contraseña?',
    [SuiteCoreStringKey.Login_LoginButton]: 'Iniciar sesión',
    [SuiteCoreStringKey.Login_SignUp]: '¿No tiene una cuenta? Regístrese',
    [SuiteCoreStringKey.Login_Title]: 'Iniciar sesión',
    [SuiteCoreStringKey.Login_UseEmail]: 'Usar correo electrónico',
    [SuiteCoreStringKey.Login_UseUsername]: 'Usar nombre de usuario',
    [SuiteCoreStringKey.LogoutButton]: 'Cerrar sesión',
    [SuiteCoreStringKey.MemberRoleNotFound]: 'Rol de miembro no encontrado',
    [SuiteCoreStringKey.MnemonicRecovery_Missing]:
      'Faltan los datos de recuperación mnemónica',
    [SuiteCoreStringKey.MnemonicRecovery_Success]:
      'Recuperación de la mnemotécnico exitosa',
    [SuiteCoreStringKey.NoMembersYet]: 'Todavía no hay miembros',
    [SuiteCoreStringKey.NoVerificationTokenProvided]:
      'No se proporcionó un token de verificación.',
    [SuiteCoreStringKey.PasswordChange_IncorrectPassword]:
      'La contraseña actual es incorrecta',
    [SuiteCoreStringKey.PasswordChange_Success]: 'Contraseña cambiada con éxito',
    [SuiteCoreStringKey.PasswordLogin_InvalidCurrentPassword]: 'La contraseña actual es incorrecta',
    [SuiteCoreStringKey.PasswordLogin_Setup_Failure]: 'Error en la configuración de inicio de sesión por contraseña',
    [SuiteCoreStringKey.PasswordLogin_Setup_NotAvailable]: 'Inicio de sesión por contraseña no disponible',
    [SuiteCoreStringKey.PasswordLogin_Setup_Success]: 'Configuración de inicio de sesión por contraseña exitosa',
    [SuiteCoreStringKey.PasswordReset_AlreadySent]:
      'El enlace para restablecer la contraseña ya ha sido enviado a su correo electrónico.',
    [SuiteCoreStringKey.PasswordReset_EmailNotVerified]:
      'Por favor, verifique su dirección de correo electrónico antes de restablecer su contraseña.',
    [SuiteCoreStringKey.PasswordReset_Success]:
      'Si existe una cuenta con ese correo electrónico, se ha enviado un enlace para restablecer la contraseña.',
    [SuiteCoreStringKey.ProceedToLogin]: 'Proceder a iniciar sesión',
    [SuiteCoreStringKey.Register_RegisterButton]: 'Comenzar',
    [SuiteCoreStringKey.RegisterButton]: 'Registrarse',
    [SuiteCoreStringKey.Registration_ConfirmPassword]: 'Confirmar contraseña',
    [SuiteCoreStringKey.Registration_Error]:
      'Ocurrió un error inesperado durante el registro. Por favor, inténtelo de nuevo.',
    [SuiteCoreStringKey.Registration_LoginLink]: '¿Ya tiene una cuenta? Inicie sesión',
    [SuiteCoreStringKey.Registration_MnemonicSuccess]:
      'Registro exitoso. Por favor, guarde su mnemotécnico de forma segura. No se mostrará nuevamente. Verifique su correo electrónico para verificar su cuenta.',
    [SuiteCoreStringKey.Registration_RegisterButton]: 'Registrarse',
    [SuiteCoreStringKey.Registration_Registering]: 'Registrando...',
    [SuiteCoreStringKey.Registration_RegisteringMessage]:
      'Por favor, espere mientras creamos su cuenta. Esto puede tardar un minuto en generar una clave y completar el registro.',
    [SuiteCoreStringKey.Registration_Success]:
      'Registro exitoso. Por favor, verifique su correo electrónico para verificar su cuenta.',
    [SuiteCoreStringKey.Registration_SuccessTitle]: 'Registro exitoso.',
    [SuiteCoreStringKey.RemoveAdmin_Success]: 'Administrador eliminado con éxito',
    [SuiteCoreStringKey.RemoveAdmin_Unauthorized]:
      'No autorizado para eliminar un administrador',
    [SuiteCoreStringKey.RemoveMember_Success]: 'Miembro eliminado con éxito',
    [SuiteCoreStringKey.RemoveMember_Unauthorized]:
      'No autorizado para eliminar un miembro',
    [SuiteCoreStringKey.RequestNewVerificationEmail]:
      'Solicitar un nuevo correo electrónico de verificación',
    [SuiteCoreStringKey.SignInButton]: 'Iniciar sesión',
    [SuiteCoreStringKey.TestItemCountTemplate]: '{count} elementos',
    [SuiteCoreStringKey.TestTemplate]:
      'Este es un test: {variable1}, {AdministratorEmail}',
    [SuiteCoreStringKey.TestUsernameTemplate]:
      'Este es un nombre de usuario de prueba: {user}',
    [SuiteCoreStringKey.TogglePasswordVisibility]:
      'alternar visibilidad de la contraseña',
    [SuiteCoreStringKey.TokenCreate_Success]: 'Token creado con éxito',
    [SuiteCoreStringKey.TokenNotFoundTemplate]: 'Token no encontrado: {TOKEN}',
    [SuiteCoreStringKey.TokenRefreshed]: 'Token actualizado',
    [SuiteCoreStringKey.TokenType_AccountVerification]: 'Verificación de cuenta',
    [SuiteCoreStringKey.TokenType_LoginRequest]: 'Solicitud de inicio de sesión',
    [SuiteCoreStringKey.TokenType_PasswordReset]: 'Restablecimiento de contraseña',
    [SuiteCoreStringKey.TokenType_MnemonicRecoveryRequest]: 'Solicitud de recuperación mnemotécnica',
    [SuiteCoreStringKey.TokenType_PrivateKeyRequest]: 'Solicitud de clave privada',
    [SuiteCoreStringKey.Validation_AccountLocked]: 'La cuenta está bloqueada',
    [SuiteCoreStringKey.Validation_AdminUserIdRequired]:
      'Se requiere ID de usuario administrador',
    [SuiteCoreStringKey.Validation_ConfirmNewPassword]:
      'Por favor, confirme su nueva contraseña',
    [SuiteCoreStringKey.Validation_CreatedUserIdError]:
      'El ID de usuario creado no existe y no coincide con el nuevo ID de usuario.',
    [SuiteCoreStringKey.Validation_CurrencyCodeRequired]:
      'Se requiere el código de moneda',
    [SuiteCoreStringKey.Validation_CurrentPasswordRequired]:
      'Se requiere la contraseña actual',
    [SuiteCoreStringKey.Validation_DescriptionRequired]: 'Se requiere descripción',
    [SuiteCoreStringKey.Validation_EmailNotVerified]:
      'El correo electrónico no está verificado',
    [SuiteCoreStringKey.Validation_HmacRegex]:
      'HMAC debe ser una cadena hexadecimal válida.',
    [SuiteCoreStringKey.Validation_InvalidAdminUserId]:
      'ID de usuario administrador inválido',
    [SuiteCoreStringKey.Validation_InvalidBackupCode]:
      'Código de respaldo inválido o ya utilizado',
    [SuiteCoreStringKey.Validation_InvalidChallenge]: 'Desafío inválido o incorrecto',
    [SuiteCoreStringKey.Validation_InvalidCurrencyCode]: 'Código de moneda inválido',
    [SuiteCoreStringKey.Validation_InvalidEncryptedMnemonic]:
      'Frase mnemotécnica cifrada inválida. Debe ser una cadena hexadecimal válida.',
    [SuiteCoreStringKey.Validation_InvalidGuid]: 'GUID inválido',
    [SuiteCoreStringKey.Validation_InvalidLanguage]: 'Idioma inválido',
    [SuiteCoreStringKey.Validation_InvalidLanguageCode]: 'Código de idioma invático',
    [SuiteCoreStringKey.Validation_InvalidMemberId]: 'ID de miembro inválido',
    [SuiteCoreStringKey.Validation_InvalidMnemonic]: 'Frase mnemotécnica inválida.',
    [SuiteCoreStringKey.Validation_InvalidOldMnemonicEncryptionKey]:
      'La antigua clave de cifrado debe tener 32 bytes (64 caracteres hexadecimales).',
    [SuiteCoreStringKey.Validation_InvalidPassword]: 'Contraseña inválida o incorrecta',
    [SuiteCoreStringKey.Validation_InvalidSignature]: 'Firma inválida',
    [SuiteCoreStringKey.Validation_InvalidUserId]: 'ID de usuario inválido',
    [SuiteCoreStringKey.Validation_InvalidUserIdTemplate]: 'ID de usuario inválido: {detail}',
    [SuiteCoreStringKey.Validation_IsMemberBoolean]:
      'isMember debe ser un valor booleano',
    [SuiteCoreStringKey.Validation_MemberIdRequired]: 'Se requiere el ID de miembro',
    [SuiteCoreStringKey.Validation_MnemonicOrPasswordRequired]:
      'Se requiere un mnemotécnico o una contraseña',
    [SuiteCoreStringKey.Validation_MnemonicRequired]: 'Se requiere el mnemotécnico.',
    [SuiteCoreStringKey.Validation_NameRequired]: 'Se requiere el nombre',
    [SuiteCoreStringKey.Validation_NewPasswordRequired]:
      'Se requiere una nueva contraseña',
    [SuiteCoreStringKey.Validation_PasswordMatch]: 'Las contraseñas deben coincidir',
    [SuiteCoreStringKey.Validation_PasswordMinLengthTemplate]:
      'La contraseña debe tener al menos {PasswordMinLength} caracteres',
    [SuiteCoreStringKey.Validation_PasswordRegexErrorTemplate]:
      'La contraseña debe tener al menos {PasswordMinLength} caracteres e incluir al menos una letra, un número y un carácter especial (!@#$%^&*()_+-=[]{};\':"|,.<>/?)',
    [SuiteCoreStringKey.Validation_PasswordsDifferent]:
      'La nueva contraseña debe ser diferente de la contraseña actual',
    [SuiteCoreStringKey.Validation_Required]: 'Requerido',
    [SuiteCoreStringKey.Validation_TimezoneInvalid]: 'Zona horaria inválida',
    [SuiteCoreStringKey.Validation_TimezoneRequired]: 'Se requiere la zona horaria',
    [SuiteCoreStringKey.Validation_TokenInvalid]:
      'El enlace de verificación de correo electrónico ya ha sido usado o es inválido',
    [SuiteCoreStringKey.Validation_TokenMissing]: 'No se proporcionó un token',
    [SuiteCoreStringKey.Validation_TokenRequired]: 'Se requiere el token',
    [SuiteCoreStringKey.Validation_TokenValid]: 'El token es válido',
    [SuiteCoreStringKey.Validation_UserIdMustNotExist]:
      'El nuevo ID de usuario no debe existir.',
    [SuiteCoreStringKey.Validation_UserIdRequired]: 'Se requiere el ID de usuario',
    [SuiteCoreStringKey.Validation_UsernameMaxLengthTemplate]:
      'El nombre de usuario debe tener como máximo {UsernameMaxLength} caracteres',
    [SuiteCoreStringKey.Validation_UsernameMinLengthTemplate]:
      'El nombre de usuario debe tener al menos {UsernameMinLength} caracteres',
    [SuiteCoreStringKey.Validation_UsernameRegexErrorTemplate]:
      'El nombre de usuario debe tener entre {UsernameMinLength} y {UsernameMaxLength} caracteres y contener solo letras y números',
    [SuiteCoreStringKey.Validation_UserNotFound]: 'Usuario no encontrado o inactivo',
  },
  [LanguageCodes.ZH_CN]: {
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
    [SuiteCoreStringKey.Common_SiteTemplate]: '{Site}',
    [SuiteCoreStringKey.Common_SiteTaglineTemplate]: '{SiteTagline}',
    [SuiteCoreStringKey.Common_SiteDescriptionTemplate]: '{SiteDescription}',
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
    [SuiteCoreStringKey.Error_IndexFileNotFoundTemplate]: '未找到索引文件：{path}',
    [SuiteCoreStringKey.Error_AppDoesNotAppearToBeRunningWithinDistTemplate]: '应用程序似乎未在/dist/目录中运行：{dir}',
    [SuiteCoreStringKey.Error_ChildRoleCannotBeASystemRole]: '子角色不能是系统角色',
    [SuiteCoreStringKey.Error_ChildRoleCannotBeAnAdminRole]: '子角色不能是管理员角色',
    [SuiteCoreStringKey.Error_ValidationFunctionNotRegisteredInAllowlist]: '验证函数未在允许列表中注册',
    [SuiteCoreStringKey.Error_InvalidCertificatePathAfterResolution]: '解析后的证书路径无效',
    [SuiteCoreStringKey.Error_InvalidCertificatePathMustBeAbsolute]: '证书路径无效：必须是绝对路径且不能包含..',
    [SuiteCoreStringKey.Error_InvalidViewsPathEscapesBaseDirectory]: '视图路径无效：超出基础目录',
    [SuiteCoreStringKey.Error_InvalidPathContainsParentDirectoryReference]: '路径无效：包含父目录引用',
    [SuiteCoreStringKey.Error_InvalidIndexPathEscapesBaseDirectory]: '索引路径无效：超出基础目录',
    [SuiteCoreStringKey.Error_InvalidAssetsPathEscapesBaseDirectory]: '资源路径无效：超出基础目录',
    [SuiteCoreStringKey.Error_MissingRequiredEnvironmentVariableTemplate]: '缺少必需的环境变量：{key}',
    [SuiteCoreStringKey.Error_EmptyEnvironmentVariableTemplate]: '环境变量 {key} 为空',
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
    [SuiteCoreStringKey.Validation_MissingValidatedDataForFieldTemplate]: '字段缺少验证数据：{field}',
    [SuiteCoreStringKey.Validation_MnemonicRegex]: '助记词格式无效',
    [SuiteCoreStringKey.Admin_Error_InvalidMongoUri]: '无效的 Mongo URI',
    [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]: '未找到MongoDB客户端，使用备用方案',
    [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]: '事务失败（临时）：{error}',
    [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]: '事务在{timeMs}毫秒后超时',
    [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]: '开始数据库初始化',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]: '初始化用户数据库失败（{timeMs}毫秒后超时）',
    [SuiteCoreStringKey.Admin_EnvNotSetTemplate]: '环境变量未设置：{variable}',
    [SuiteCoreStringKey.Admin_ServingRoute]: '正在提供路由',
    [SuiteCoreStringKey.Admin_AccountCredentials]: '账户凭据（保存到密码管理器）',
    [SuiteCoreStringKey.Admin_CreatingUserTemplate]:
      '正在创建 {TYPE} 用户 {NAME} 并生成密钥',
    [SuiteCoreStringKey.Admin_DatabaseInitializedWithOptionsHashTemplate]: '数据库已使用选项哈希初始化：{hash}',
    [SuiteCoreStringKey.Admin_DatabaseAlreadyInitialized]: '数据库已初始化',
    [SuiteCoreStringKey.Admin_DatabaseDropped]: '数据库集合已删除',
    [SuiteCoreStringKey.Admin_DevelopmentDatabase]: '开发数据库',
    [SuiteCoreStringKey.Admin_DroppingDatabase]: '正在删除数据库',
    [SuiteCoreStringKey.Admin_EndCredentials]: '结束凭据',
    [SuiteCoreStringKey.Admin_EnvDirSetButMissingTemplate]:
      '{VAR} 被设置为 {PATH}，但目录缺失',
    [SuiteCoreStringKey.Admin_EnvFileNotFound]: '.env 文件未找到，跳过加载',
    [SuiteCoreStringKey.Admin_EnvFileNotFoundTemplate]: '未找到环境文件 {PATH}',
    [SuiteCoreStringKey.Admin_Error_DatabaseNotConnectedYet]:
      'db 尚未连接。请先调用 start()',
    [SuiteCoreStringKey.Admin_Error_EnvironmentAlreadyInitialized]: '环境已经初始化',
    [SuiteCoreStringKey.Admin_Error_EnvironmentNotInitialized]: '环境未初始化',
    [SuiteCoreStringKey.Admin_Error_FailedToDropDatabase]: '删除数据库集合失败',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabase]:
      '初始化用户数据库失败',
    [SuiteCoreStringKey.Admin_Error_FailedToLoadEnvironment]: '加载 .env 文件失败',
    [SuiteCoreStringKey.Admin_Error_FailedToSetTransactionTimeout]:
      '无法设置事务超时，未连接到数据库',
    [SuiteCoreStringKey.Admin_Error_NotConnectedToMongoDB]: '未能建立与 MongoDB 的连接。',
    [SuiteCoreStringKey.Admin_Error_SchemaMapIsNotLoadedYet]:
      'schemaMap 尚未加载。请先调用 start()',
    [SuiteCoreStringKey.Admin_Error_UnhandledErrorInMain]: '主程序中未处理的错误',
    [SuiteCoreStringKey.Admin_ErrorCleaningUpTestData]: '清理测试数据时出错',
    [SuiteCoreStringKey.Admin_ErrorClosingConnection]: '关闭连接时出错',
    [SuiteCoreStringKey.Admin_ErrorStoppingMongoServer]: '停止 MongoDB 服务器时出错',
    [SuiteCoreStringKey.Admin_FailedToSetUpTestDatabase]: '设置测试数据库失败',
    [SuiteCoreStringKey.Admin_LoadingEnvironmentTemplate]: '正在加载环境：{PATH}',
    [SuiteCoreStringKey.Admin_MakeSureToSetItInEnv]: '确保在您的 .env 文件中设置它',
    [SuiteCoreStringKey.Admin_ProceedingToDbInitialization]: '正在进行数据库初始化...',
    [SuiteCoreStringKey.Admin_RoleCreatedTemplate]: '角色 {ROLE} 创建成功，ID 为 {ID}',
    [SuiteCoreStringKey.Admin_SettingUp]: '设置中...',
    [SuiteCoreStringKey.Admin_SettingUpUsersAndRoles]: '设置用户和角色',
    [SuiteCoreStringKey.Admin_SetTransactionTimeoutSuccessfully]: '事务超时设置成功',
    [SuiteCoreStringKey.Admin_StartingDbInitialization]: '正在启动数据库初始化...',
    [SuiteCoreStringKey.Admin_StringNotFoundForLanguageTemplate]:
      '未找到字符串 {NAME} 对应的语言 {LANG}',
    [SuiteCoreStringKey.Admin_TearingDown]: '正在拆卸...',
    [SuiteCoreStringKey.Admin_TransactionsEnabledDisabledTemplate]: '交易状态为 {STATE}',
    [SuiteCoreStringKey.Admin_UserDatabaseInitialized]: '用户数据库已初始化',
    [SuiteCoreStringKey.Admin_UserRoleCreatedTemplate]:
      '用户角色关系已创建：用户 {USERID} -> 角色 {ROLEID}',
    [SuiteCoreStringKey.Admin_UsingMongoDbMemoryWithTransactions]:
      '使用 MongoDB Memory Server 进行事务支持',
    [SuiteCoreStringKey.AdminRoleNotFound]: '未找到管理员角色',
    [SuiteCoreStringKey.ApiAccess_Title]: '您的访问令牌',
    [SuiteCoreStringKey.ApiAccess_TokenNotAvailable]: '令牌不可用',
    [SuiteCoreStringKey.BackupCodeRecovery_CodesRemainingTemplate]:
      '{count} 个备份代码剩余',
    [SuiteCoreStringKey.BackupCodeRecovery_GenerateNewCodes]: '生成新的备份代码',
    [SuiteCoreStringKey.BackupCodeRecovery_Login]: '使用备份代码登录',
    [SuiteCoreStringKey.BackupCodeRecovery_RecoverMnemonic]: '恢复助记词',
    [SuiteCoreStringKey.BackupCodeRecovery_Success]: '备份代码恢复成功。',
    [SuiteCoreStringKey.BackupCodeRecovery_Title]: '备份代码登录',
    [SuiteCoreStringKey.BackupCodeRecovery_YourNewCodes]:
      '「这是您的新备用代码。请将它们写在安全的位置，它们无法再次查看。」',
    [SuiteCoreStringKey.CannotRemoveLastAdmin]: '无法删除最后一个管理员',
    [SuiteCoreStringKey.ChangePassword_ChangePasswordButton]: '更改密码',
    [SuiteCoreStringKey.Common_Admin]: '管理员',
    [SuiteCoreStringKey.Common_Amount]: '金额',
    [SuiteCoreStringKey.Common_BackupCode]: '备份代码',
    [SuiteCoreStringKey.Common_BackupCodes]: '备份代码',
    [SuiteCoreStringKey.Common_Cancel]: '取消',
    [SuiteCoreStringKey.Common_ChangePassword]: '更改密码',
    [SuiteCoreStringKey.Common_ChangingPassword]: '正在更改密码',
    [SuiteCoreStringKey.Common_Confirm]: '确认',
    [SuiteCoreStringKey.Common_ConfirmNewPassword]: '确认新密码',
    [SuiteCoreStringKey.Common_Connected]: '已连接',
    [SuiteCoreStringKey.Common_CopiedToClipboard]: '已复制到剪贴板',
    [SuiteCoreStringKey.Common_CopyToClipboard]: '复制到剪贴板',
    [SuiteCoreStringKey.Common_CurrencyCode]: '货币代码',
    [SuiteCoreStringKey.Common_CurrentPassword]: '当前密码',
    [SuiteCoreStringKey.Common_Dashboard]: '仪表盘',
    [SuiteCoreStringKey.Common_Date]: '日期',
    [SuiteCoreStringKey.Common_DateCreated]: '创建日期',
    [SuiteCoreStringKey.Common_Description]: '描述',
    [SuiteCoreStringKey.Common_Disabled]: '已禁用',
    [SuiteCoreStringKey.Common_Email]: '电子邮箱地址',
    [SuiteCoreStringKey.Common_EmailVerification]: '邮箱验证',
    [SuiteCoreStringKey.Common_Enabled]: '已启用',
    [SuiteCoreStringKey.Common_Expiration]: '过期',
    [SuiteCoreStringKey.Common_ID]: '身份证',
    [SuiteCoreStringKey.Common_KeyFeatures]: '主要特征',
    [SuiteCoreStringKey.Common_Loaded]: '已加载',
    [SuiteCoreStringKey.Common_Loading]: '加载中',
    [SuiteCoreStringKey.Common_Logo]: '标志',
    [SuiteCoreStringKey.Common_Member]: '成员',
    [SuiteCoreStringKey.Common_Minute]: '分钟',
    [SuiteCoreStringKey.Common_Minutes]: '分钟',
    [SuiteCoreStringKey.Common_Mnemonic]: '助记词',
    [SuiteCoreStringKey.Common_MnemonicExpiration]: '助记词过期时间',
    [SuiteCoreStringKey.Common_NewPassword]: '新密码',
    [SuiteCoreStringKey.Common_Notification]: '通知',
    [SuiteCoreStringKey.Common_NotValidTimeZoneTemplate]: '{timezone} 不是有效的时区',
    [SuiteCoreStringKey.Common_OK]: '确定',
    [SuiteCoreStringKey.Common_Online]: '在线',
    [SuiteCoreStringKey.Common_Password]: '密码',
    [SuiteCoreStringKey.Common_PrivateKey]: '私钥',
    [SuiteCoreStringKey.Common_PublicKey]: '公钥',
    [SuiteCoreStringKey.Common_Registration]: '注册',
    [SuiteCoreStringKey.Common_RemoveMember]: '移除成员',
    [SuiteCoreStringKey.Common_Role]: '角色',
    [SuiteCoreStringKey.Common_Schema]: '模式',
    [SuiteCoreStringKey.Common_Schemas]: '模式',
    [SuiteCoreStringKey.Common_Seconds]: '秒',
    [SuiteCoreStringKey.Common_Status]: '状态',
    [SuiteCoreStringKey.Common_System]: '系统',
    [SuiteCoreStringKey.Common_ThemeToggle_Dark]: '设置为深色模式',
    [SuiteCoreStringKey.Common_ThemeToggle_Light]: '设置为浅色模式',
    [SuiteCoreStringKey.Common_Timezone]: '时区',
    [SuiteCoreStringKey.Common_Type]: '类型',
    [SuiteCoreStringKey.Common_UseMnemonic]: '仅使用助记符',
    [SuiteCoreStringKey.Common_UsePassword]: '设置密码',
    [SuiteCoreStringKey.Common_User]: '用户',
    [SuiteCoreStringKey.Common_UserCreatedTemplate]: '{TYPE} 用户 {NAME} 创建成功',
    [SuiteCoreStringKey.Common_Username]: '用户名',
    [SuiteCoreStringKey.Common_Using]: '使用',
    [SuiteCoreStringKey.Common_Wallet]: '钱包',
    [SuiteCoreStringKey.Common_WalletExpiration]: '钱包过期时间',
    [SuiteCoreStringKey.Dashboard_YourDashboard]: '您的仪表盘',
    [SuiteCoreStringKey.Email_ConfirmationBody]: '请点击以下链接确认您的邮箱。',
    [SuiteCoreStringKey.Email_ConfirmationSubjectTemplate]: '{Site} 邮箱确认',
    [SuiteCoreStringKey.Email_LinkExpiresInTemplate]:
      '链接将在 {EmailTokenResendIntervalMinutes} 分钟后过期。',
    [SuiteCoreStringKey.Email_LoginRequestBody]: '请点击以下链接登录您的帐户。',
    [SuiteCoreStringKey.Email_LoginRequestSubjectTemplate]: '{Site} 登录请求',
    [SuiteCoreStringKey.Email_ResetPasswordBody]: '请点击以下链接重置您的密码。',
    [SuiteCoreStringKey.Email_ResetPasswordSubjectTemplate]: '{Site} 密码重置',
    [SuiteCoreStringKey.Email_TokenFailedToSend]: '发送邮箱令牌失败',
    [SuiteCoreStringKey.Email_TokenSent]:
      '如果存在该邮箱或用户名的账户，已发送电子邮件。',
    [SuiteCoreStringKey.EmailVerification_AlreadyVerified]: '邮箱已验证',
    [SuiteCoreStringKey.EmailVerification_Failed]: '邮箱验证失败。请重试。',
    [SuiteCoreStringKey.EmailVerification_Resent]: '验证邮件已成功重新发送',
    [SuiteCoreStringKey.EmailVerification_Success]: '邮箱验证成功',
    [SuiteCoreStringKey.Error_ChallengeError]: '生成挑战时出错',
    [SuiteCoreStringKey.Error_DirectTokenAlreadyUsed]: '直接登录令牌已被使用',
    [SuiteCoreStringKey.Error_Disposed]: '「已处理」',
    [SuiteCoreStringKey.Error_EciesError_InvalidMultipleMessageOverheadSize]:
      '无效的 ECIES 多消息开销常量',
    [SuiteCoreStringKey.Error_EciesError_InvalidPublicKeyLength]: '无效的 ECIES 公钥长度',
    [SuiteCoreStringKey.Error_EciesError_InvalidRecipientCount]:
      '无效的 ECIES 多收件人计数大小',
    [SuiteCoreStringKey.Error_EciesErrorCrcError]: 'ECIES CRC 错误',
    [SuiteCoreStringKey.Error_EciesErrorDecryptionFailed]:
      'ECIES 解密失败（MAC 检查或填充错误）',
    [SuiteCoreStringKey.Error_EciesErrorEncryptionDataLengthMismatch]:
      '加密数据长度不匹配',
    [SuiteCoreStringKey.Error_EciesErrorEncryptionTypeMismatch]: '加密类型不匹配',
    [SuiteCoreStringKey.Error_EciesErrorFileSizeTooLarge]: '文件大小过大',
    [SuiteCoreStringKey.Error_EciesErrorInvalidAuthTagLength]: '无效的认证标签长度',
    [SuiteCoreStringKey.Error_EciesErrorInvalidDataLength]: '无效的数据长度',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedDataLength]: '无效的加密数据长度',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedKeyLength]: '无效的加密密钥长度',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptionType]: '无效的加密类型',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEphemeralPublicKey]: '无效的临时公钥',
    [SuiteCoreStringKey.Error_EciesErrorInvalidHeaderLength]: '无效的头部长度',
    [SuiteCoreStringKey.Error_EciesErrorInvalidIVLength]: '无效的 IV 长度',
    [SuiteCoreStringKey.Error_EciesErrorInvalidMessageCrc]: '无效的消息 CRC',
    [SuiteCoreStringKey.Error_EciesErrorInvalidMnemonic]: '无效的助记词',
    [SuiteCoreStringKey.Error_EciesErrorInvalidOperation]: '无效的操作',
    [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientCount]: '无效的收件人数量',
    [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientPublicKey]: '无效的收件人公钥',
    [SuiteCoreStringKey.Error_EciesErrorInvalidSenderPublicKey]: '无效的发送者公钥',
    [SuiteCoreStringKey.Error_EciesErrorInvalidSignature]: '无效的签名',
    [SuiteCoreStringKey.Error_EciesErrorMessageLengthMismatch]: '消息长度不匹配',
    [SuiteCoreStringKey.Error_EciesErrorPrivateKeyNotLoaded]: '私钥未加载',
    [SuiteCoreStringKey.Error_EciesErrorRecipientKeyCountMismatch]:
      '收件人数量与密钥数量不匹配',
    [SuiteCoreStringKey.Error_EciesErrorRecipientNotFound]: '未在收件人 ID 中找到收件人',
    [SuiteCoreStringKey.Error_EciesErrorSecretComputationFailed]:
      'ECIES 操作期间计算共享密钥失败',
    [SuiteCoreStringKey.Error_EciesErrorTooManyRecipients]:
      '收件人过多：超过最大允许数量',
    [SuiteCoreStringKey.Error_EciesFailedSharedSecret]: 'ECIES 共享密钥失败',
    [SuiteCoreStringKey.Error_EmailSentTooRecentlyTemplate]: '电子邮件令牌发送过于频繁。请在 ${timeRemaining} 秒后重试。',
    [SuiteCoreStringKey.Error_FailedToCopy]: '复制文本时出错',
    [SuiteCoreStringKey.Error_FailedToCreateUserRoleTemplate]:
      '创建用户 {USER_ID} 和角色 {ROLE_ID} 的用户角色关系失败',
    [SuiteCoreStringKey.Error_FailedToCreateUserTemplate]: '创建 {NAME} 用户失败',
    [SuiteCoreStringKey.Error_FailedToFindRoleTemplate]: '未找到角色 {ROLE}',
    [SuiteCoreStringKey.Error_FailedToLookupRoleTemplate]: '查找角色 {ROLE} 的 ID 失败',
    [SuiteCoreStringKey.Error_FailedToReEncryptMnemonicTemplate]:
      '重新加密助记词失败，ID: {ID}',
    [SuiteCoreStringKey.Error_FailedToStoreUserMnemonicTemplate]:
      '存储用户 {NAME} 的助记符失败',
    [SuiteCoreStringKey.Error_FailedToUpdateLastLoginTemplate]:
      '未能更新用户 {userId} 的 lastLogin',
    [SuiteCoreStringKey.Error_FailedToUseDirectLoginToken]: '使用直接登录令牌失败',
    [SuiteCoreStringKey.Error_FecErrorDataRequired]: '数据是必需的',
    [SuiteCoreStringKey.Error_FecErrorFecDecodingFailedTemplate]:
      'FEC 解码失败 : {ERROR}',
    [SuiteCoreStringKey.Error_FecErrorFecEncodingFailedTemplate]:
      'FEC 编码失败 : {ERROR}',
    [SuiteCoreStringKey.Error_FecErrorInputDataMustBeUint8Array]: '输入数据必须是一个 Uint8Array',
    [SuiteCoreStringKey.Error_FecErrorInvalidDataLengthTemplate]:
      '无效的数据长度 : {LENGTH}, 预期 {EXPECTED}',
    [SuiteCoreStringKey.Error_FecErrorInvalidShardCounts]: '无效的分片计数',
    [SuiteCoreStringKey.Error_FecErrorInvalidShardsAvailableArray]: '无效的可用分片数组',
    [SuiteCoreStringKey.Error_FecErrorNotEnoughShardsAvailableTemplate]:
      '可用分片数量不足 : {AVAILABLE}, 需要 {REQUIRED}',
    [SuiteCoreStringKey.Error_FecErrorParityDataCountMustBePositive]:
      '奇偶校验数据计数必须为正',
    [SuiteCoreStringKey.Error_FecErrorParityDataRequired]:
      '奇偶校验数据是 FEC 操作所必需的',
    [SuiteCoreStringKey.Error_FecErrorShardSizeExceedsMaximumTemplate]:
      '分片大小 {SIZE} 超过最大值 {MAXIMUM}',
    [SuiteCoreStringKey.Error_InvalidBackupCodeVersionTemplate]:
      '{version} 是无效的备份代码版本',
    [SuiteCoreStringKey.Error_InvalidChallengeResponse]: '无效或不正确的登录挑战响应',
    [SuiteCoreStringKey.Error_InvalidChecksumConstants]: '无效的校验和常量',
    [SuiteCoreStringKey.Error_InvalidEmail]: '无效的电子邮件。',
    [SuiteCoreStringKey.Error_InvalidEmailTemplate]: '{email} 不是有效的电子邮件地址。',
    [SuiteCoreStringKey.Error_InvalidEmailMissing]: '缺少电子邮件。',
    [SuiteCoreStringKey.Error_InvalidEmailWhitespace]: '电子邮件前后包含空格。',
    [SuiteCoreStringKey.Error_InvalidGuid]: '无效的 GUID。',
    [SuiteCoreStringKey.Error_InvalidGuidTemplate]: '无效的 GUID: {GUID}',
    [SuiteCoreStringKey.Error_InvalidGuidUnknownBrandTemplate]:
      '未知的 GUID 品牌: {BRAND}。',
    [SuiteCoreStringKey.Error_InvalidGuidUnknownLengthTemplate]:
      '无效的 GUID 长度: {LENGTH}。',
    [SuiteCoreStringKey.Error_InvalidLanguageCodeTemplate]:
      '无效的语言代码 "{LANGUAGE}"。回退到默认语言 "{DEFAULT_LANGUAGE}"。',
    [SuiteCoreStringKey.Error_InvalidMnemonicEncryptionKey]:
      '加密密钥必须为 32 字节（64 个十六进制字符）。',
    [SuiteCoreStringKey.Error_LanguageNotFoundForEnumTemplate]:
      '未找到语言 {lang} 对应的枚举 {enumName}',
    [SuiteCoreStringKey.Error_LanguageNotFoundInStringsTemplate]:
      '语言 {LANG} 在字符串中未找到',
    [SuiteCoreStringKey.Error_Login_ChallengeExpiredTemplate]:
      '登录质询在 {LoginChallengeExpiration} ms 后过期',
    [SuiteCoreStringKey.Error_Login_DirectLoginNotAllowed]:
      '不允许直接登录此帐户。请请求电子邮件登录链接。',
    [SuiteCoreStringKey.Error_MemberErrorEncryptionDataTooLarge]:
      '加密数据过大。请确保数据不超过 1MB。',
    [SuiteCoreStringKey.Error_MemberErrorFailedToConvertMemberData]: '转换成员数据失败。',
    [SuiteCoreStringKey.Error_MemberErrorFailedToHydrateMember]:
      '成员水合失败。请检查成员数据。',
    [SuiteCoreStringKey.Error_MemberErrorIncorrectOrInvalidPrivateKey]:
      '私钥不正确或无效。',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEmail]: '无效的电子邮件。',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEmailWhitespace]:
      '电子邮件前后包含空格。',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEncryptionData]:
      '无效的加密数据。请确保数据格式正确。',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberData]: '无效的成员数据。',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberName]: '无效的成员名称。',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberNameWhitespace]:
      '成员名称前后包含空格。',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberStatus]: '无效的成员状态。',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMnemonic]: '无效的助记词。',
    [SuiteCoreStringKey.Error_MemberErrorMemberAlreadyExists]: '成员已存在。',
    [SuiteCoreStringKey.Error_MemberErrorMemberNotFound]: '未找到成员。',
    [SuiteCoreStringKey.Error_MemberErrorMissingEmail]: '缺少电子邮件。',
    [SuiteCoreStringKey.Error_MemberErrorMissingEncryptionData]: '缺少加密数据。',
    [SuiteCoreStringKey.Error_MemberErrorMissingMemberName]: '缺少成员名称。',
    [SuiteCoreStringKey.Error_MemberErrorMissingPrivateKey]: '缺少私钥。',
    [SuiteCoreStringKey.Error_MemberErrorMissingVotingPrivateKey]: '缺少投票私钥。',
    [SuiteCoreStringKey.Error_MemberErrorMissingVotingPublicKey]: '缺少投票公钥。',
    [SuiteCoreStringKey.Error_MemberErrorNoWallet]: '未加载任何钱包。',
    [SuiteCoreStringKey.Error_MemberErrorPrivateKeyRequiredToDeriveVotingKeyPair]:
      '需要私钥来派生投票密钥对。',
    [SuiteCoreStringKey.Error_MemberErrorWalletAlreadyLoaded]: '钱包已加载。',
    [SuiteCoreStringKey.Error_MnemonicIsNullTemplate]: '{NAME} 助记词为空',
    [SuiteCoreStringKey.Error_NoTranslationsForEnumLanguageTemplate]:
      '未找到 {language} 中 {enumName}.{value} 的翻译',
    [SuiteCoreStringKey.Error_NoTranslationsForEnumTemplate]:
      '未找到该枚举的翻译: {enumName}',
    [SuiteCoreStringKey.Error_PasswordChange]: '更改密码时出错',
    [SuiteCoreStringKey.Error_Pbkdf2InvalidHashLength]: '哈希长度与预期长度不匹配',
    [SuiteCoreStringKey.Error_Pbkdf2InvalidSaltLength]: '盐长度与预期长度不匹配',
    [SuiteCoreStringKey.Error_RoleNotFoundTemplate]:
      '未找到角色 {NAME} 在角色枚举中的映射',
    [SuiteCoreStringKey.Error_SecureStorageDecryptedValueChecksumMismatch]:
      '解密值的校验和与预期不符',
    [SuiteCoreStringKey.Error_SecureStorageDecryptedValueLengthMismatch]:
      '解密值的长度与预期不符',
    [SuiteCoreStringKey.Error_SecureStorageValueIsNull]: '安全存储值为空',
    [SuiteCoreStringKey.Error_SymmetricDataNullOrUndefined]: '加密数据不能为空或未定义',
    [SuiteCoreStringKey.Error_SymmetricInvalidKeyLengthTemplate]:
      '加密密钥必须为 {KEY_BYTES} 字节长',
    [SuiteCoreStringKey.Error_UnknownEnumValueForEnumTemplate]:
      '未知的枚举值: {value} 对于枚举: {enumName}',
    [SuiteCoreStringKey.Error_EmailService_NotConfigured]: '电子邮件服务未配置。在使用中间件之前请调用 setEmailService()。',
    [SuiteCoreStringKey.Error_FailedToCreateEmailToken]: '创建电子邮件令牌失败',
    [SuiteCoreStringKey.ForgotPassword_BackToLogin]: '返回登录',
    [SuiteCoreStringKey.ForgotPassword_Error]: '处理您的请求时发生错误。',
    [SuiteCoreStringKey.ForgotPassword_ForgotPassword]: '忘记密码',
    [SuiteCoreStringKey.ForgotPassword_InvalidToken]:
      '令牌无效或已过期。请请求新的密码重置。',
    [SuiteCoreStringKey.ForgotPassword_ResetPassword]: '重置密码',
    [SuiteCoreStringKey.ForgotPassword_SendResetLink]: '发送重置链接',
    [SuiteCoreStringKey.ForgotPassword_Success]:
      '您的密码已成功重置。您现在可以使用新密码登录。',
    [SuiteCoreStringKey.ForgotPassword_Title]: '忘记密码',
    [SuiteCoreStringKey.HavingTroubleContactSupport]:
      '如果您遇到问题，请联系我们的支持团队或',
    [SuiteCoreStringKey.KeyFeatures_1]: '安全地存储文件，并设置自动释放或删除规则。',
    [SuiteCoreStringKey.KeyFeatures_2]: '创建“金丝雀”来监控您的数字或物理活动。',
    [SuiteCoreStringKey.KeyFeatures_3]: '根据金丝雀状态（例如，不活动）触发操作。',
    [SuiteCoreStringKey.KeyFeatures_4]: '用于即时紧急行动的胁迫码。',
    [SuiteCoreStringKey.LanguageUpdate_Success]: '语言更新成功',
    [SuiteCoreStringKey.LoggedIn_Success]: '登录成功',
    [SuiteCoreStringKey.Login_ChallengeGenerated]: '登录挑战已生成',
    [SuiteCoreStringKey.Login_DirectLogin]: '直接登录',
    [SuiteCoreStringKey.Login_DirectLoginWarning]:
      '当用户名或电子邮件无效，或用户已禁用直接登录时，直接挑战登录将失败，并返回通用的无效挑战响应错误，而不会透露帐户是否存在。',
    [SuiteCoreStringKey.Login_EmailChallengeSent]:
      '登录链接已发送到您的电子邮件。请点击它以登录。',
    [SuiteCoreStringKey.Login_EmailLogin]: '电子邮件登录',
    [SuiteCoreStringKey.Login_ForgotPassword]: '忘记密码？',
    [SuiteCoreStringKey.Login_LoginButton]: '登录',
    [SuiteCoreStringKey.Login_SignUp]: '还没有账号？注册',
    [SuiteCoreStringKey.Login_Title]: '登录',
    [SuiteCoreStringKey.Login_UseEmail]: '使用邮箱',
    [SuiteCoreStringKey.Login_UseUsername]: '使用用户名',
    [SuiteCoreStringKey.LogoutButton]: '登出',
    [SuiteCoreStringKey.MemberRoleNotFound]: '未找到成员角色',
    [SuiteCoreStringKey.MnemonicRecovery_Missing]: '助记恢复数据缺失',
    [SuiteCoreStringKey.MnemonicRecovery_Success]: '助记词恢复成功',
    [SuiteCoreStringKey.NoMembersYet]: '尚无成员',
    [SuiteCoreStringKey.NoVerificationTokenProvided]: '未提供验证令牌。',
    [SuiteCoreStringKey.PasswordChange_IncorrectPassword]: '当前密码不正确',
    [SuiteCoreStringKey.PasswordChange_Success]: '密码更改成功',
    [SuiteCoreStringKey.PasswordLogin_InvalidCurrentPassword]: '当前密码不正确',
    [SuiteCoreStringKey.PasswordLogin_Setup_Failure]: '密码登录设置失败',
    [SuiteCoreStringKey.PasswordLogin_Setup_NotAvailable]: '密码登录不可用',
    [SuiteCoreStringKey.PasswordLogin_Setup_Success]: '密码登录设置成功',
    [SuiteCoreStringKey.PasswordReset_AlreadySent]: '密码重置链接已发送到您的邮箱。',
    [SuiteCoreStringKey.PasswordReset_EmailNotVerified]:
      '请在重置密码前验证您的邮箱地址。',
    [SuiteCoreStringKey.PasswordReset_Success]:
      '如果该邮箱存在账户，密码重置链接已发送。',
    [SuiteCoreStringKey.ProceedToLogin]: '继续登录',
    [SuiteCoreStringKey.Register_RegisterButton]: '开始使用',
    [SuiteCoreStringKey.RegisterButton]: '注册',
    [SuiteCoreStringKey.Registration_ConfirmPassword]: '确认密码',
    [SuiteCoreStringKey.Registration_Error]: '注册过程中发生意外错误。请重试。',
    [SuiteCoreStringKey.Registration_LoginLink]: '已经有账号？登录',
    [SuiteCoreStringKey.Registration_MnemonicSuccess]:
      '注册成功。请安全保存您的助记词。它将不会再次显示。请检查您的电子邮件以验证您的账户。',
    [SuiteCoreStringKey.Registration_RegisterButton]: '注册',
    [SuiteCoreStringKey.Registration_Registering]: '注册中...',
    [SuiteCoreStringKey.Registration_RegisteringMessage]:
      '请稍候，我们正在创建您的帐户。这可能需要一分钟来生成密钥并完成注册。',
    [SuiteCoreStringKey.Registration_Success]:
      '注册成功。请检查您的电子邮件以验证您的账户。',
    [SuiteCoreStringKey.Registration_SuccessTitle]: '注册成功。',
    [SuiteCoreStringKey.RemoveAdmin_Success]: '管理员移除成功',
    [SuiteCoreStringKey.RemoveAdmin_Unauthorized]: '未授权移除管理员',
    [SuiteCoreStringKey.RemoveMember_Success]: '成员移除成功',
    [SuiteCoreStringKey.RemoveMember_Unauthorized]: '未授权移除成员',
    [SuiteCoreStringKey.RequestNewVerificationEmail]: '请求新的验证邮件',
    [SuiteCoreStringKey.SignInButton]: '登录',
    [SuiteCoreStringKey.TestItemCountTemplate]: '{count} 项',
    [SuiteCoreStringKey.TestTemplate]: '这是一个测试: {variable1}, {AdministratorEmail}',
    [SuiteCoreStringKey.TestUsernameTemplate]: '这是一个测试用户名: {user}',
    [SuiteCoreStringKey.TogglePasswordVisibility]: '切换密码可见性',
    [SuiteCoreStringKey.TokenCreate_Success]: '令牌创建成功',
    [SuiteCoreStringKey.TokenNotFoundTemplate]: '未找到令牌: {TOKEN}',
    [SuiteCoreStringKey.TokenRefreshed]: '令牌已刷新',
    [SuiteCoreStringKey.TokenType_AccountVerification]: '账户验证',
    [SuiteCoreStringKey.TokenType_LoginRequest]: '登录请求',
    [SuiteCoreStringKey.TokenType_PasswordReset]: '密码重置',
    [SuiteCoreStringKey.TokenType_MnemonicRecoveryRequest]: '助记词恢复请求',
    [SuiteCoreStringKey.TokenType_PrivateKeyRequest]: '私钥请求',
    [SuiteCoreStringKey.Validation_AccountLocked]: '账户已锁定',
    [SuiteCoreStringKey.Validation_AdminUserIdRequired]: '需要管理员用户ID',
    [SuiteCoreStringKey.Validation_ConfirmNewPassword]: '请确认您的新密码',
    [SuiteCoreStringKey.Validation_CreatedUserIdError]:
      '创建的用户ID不存在且与新用户ID不匹配。',
    [SuiteCoreStringKey.Validation_CurrencyCodeRequired]: '需要货币代码',
    [SuiteCoreStringKey.Validation_CurrentPasswordRequired]: '需要当前密码',
    [SuiteCoreStringKey.Validation_DescriptionRequired]: '需要描述',
    [SuiteCoreStringKey.Validation_EmailNotVerified]: '邮箱未验证',
    [SuiteCoreStringKey.Validation_HmacRegex]: 'HMAC必须是有效的十六进制字符串。',
    [SuiteCoreStringKey.Validation_InvalidAdminUserId]: '无效的管理员用户ID',
    [SuiteCoreStringKey.Validation_InvalidBackupCode]: '无效或已使用的备份代码',
    [SuiteCoreStringKey.Validation_InvalidChallenge]: '无效或不正确的挑战',
    [SuiteCoreStringKey.Validation_InvalidCurrencyCode]: '货币代码无效',
    [SuiteCoreStringKey.Validation_InvalidEncryptedMnemonic]:
      '助记词无效。它必须是有效的十六进制字符串。',
    [SuiteCoreStringKey.Validation_InvalidGuid]: '无效的GUID',
    [SuiteCoreStringKey.Validation_InvalidLanguage]: '语言无效',
    [SuiteCoreStringKey.Validation_InvalidLanguageCode]: '语言代码无效',
    [SuiteCoreStringKey.Validation_InvalidMemberId]: '无效的成员ID',
    [SuiteCoreStringKey.Validation_InvalidMnemonic]: '助记词无效。',
    [SuiteCoreStringKey.Validation_InvalidOldMnemonicEncryptionKey]:
      '旧的加密密钥必须是32个字节（64个十六进制字符）。',
    [SuiteCoreStringKey.Validation_InvalidPassword]: '无效或错误的密码',
    [SuiteCoreStringKey.Validation_InvalidSignature]: '无效的签名',
    [SuiteCoreStringKey.Validation_InvalidUserId]: '无效的用户ID',
    [SuiteCoreStringKey.Validation_InvalidUserIdTemplate]: '无效的用户ID: {detail}',
    [SuiteCoreStringKey.Validation_IsMemberBoolean]: 'isMember 必须是布尔值',
    [SuiteCoreStringKey.Validation_MemberIdRequired]: '需要成员ID',
    [SuiteCoreStringKey.Validation_MnemonicOrPasswordRequired]: '助记词或密码是必需的',
    [SuiteCoreStringKey.Validation_MnemonicRequired]: '助记词是必需的。',
    [SuiteCoreStringKey.Validation_NameRequired]: '需要名称',
    [SuiteCoreStringKey.Validation_NewPasswordRequired]: '需要新密码',
    [SuiteCoreStringKey.Validation_PasswordMatch]: '密码必须匹配',
    [SuiteCoreStringKey.Validation_PasswordMinLengthTemplate]:
      '密码必须至少包含 {PasswordMinLength} 个字符',
    [SuiteCoreStringKey.Validation_PasswordRegexErrorTemplate]:
      '密码必须至少包含 {PasswordMinLength} 个字符，并且包含至少一个字母、一个数字和一个特殊字符 (!@#$%^&*()_+-=[]{};\':"|,.<>/?)`',
    [SuiteCoreStringKey.Validation_PasswordsDifferent]: '新密码必须与当前密码不同',
    [SuiteCoreStringKey.Validation_Required]: '必填',
    [SuiteCoreStringKey.Validation_TimezoneInvalid]: '时区无效',
    [SuiteCoreStringKey.Validation_TimezoneRequired]: '需要时区',
    [SuiteCoreStringKey.Validation_TokenInvalid]: '邮箱验证链接已被使用或无效',
    [SuiteCoreStringKey.Validation_TokenMissing]: '未提供令牌',
    [SuiteCoreStringKey.Validation_TokenRequired]: '需要令牌',
    [SuiteCoreStringKey.Validation_TokenValid]: '令牌有效',
    [SuiteCoreStringKey.Validation_UserIdMustNotExist]: '新用户ID不得存在。',
    [SuiteCoreStringKey.Validation_UserIdRequired]: '需要用户ID',
    [SuiteCoreStringKey.Validation_UsernameMaxLengthTemplate]:
      '用户名最多只能有 {UsernameMaxLength} 个字符',
    [SuiteCoreStringKey.Validation_UsernameMinLengthTemplate]:
      '用户名必须至少有 {UsernameMinLength} 个字符',
    [SuiteCoreStringKey.Validation_UsernameRegexErrorTemplate]:
      '用户名必须为 {UsernameMinLength}-{UsernameMaxLength} 个字符长，只能包含字母和数字',
    [SuiteCoreStringKey.Validation_UserNotFound]: '未找到用户或用户不活跃',
  },
  [LanguageCodes.JA]: {
    [SuiteCoreStringKey.Auth_AccountLocked]: 'アカウントは一時的にロックされています',
    [SuiteCoreStringKey.Auth_InsufficientPermissions]:
      'この操作の権限が不足しています',
    [SuiteCoreStringKey.Auth_InvalidToken]: '無効な認証トークンです',
    [SuiteCoreStringKey.Auth_TokenExpired]: '認証トークンの有効期限が切れています',
    [SuiteCoreStringKey.Auth_UserNotFound]: 'ユーザーアカウントが見つかりません',
    [SuiteCoreStringKey.User_AlreadyExists]: 'ユーザーは既に存在します',
    [SuiteCoreStringKey.User_CreationFailed]: 'ユーザーアカウントの作成に失敗しました',
    [SuiteCoreStringKey.User_DeletionFailed]: 'ユーザーアカウントの削除に失敗しました',
    [SuiteCoreStringKey.User_NotFound]: 'ユーザーが見つかりません',
    [SuiteCoreStringKey.Common_SiteTemplate]: '{Site}',
    [SuiteCoreStringKey.Common_SiteTaglineTemplate]: '{SiteTagline}',
    [SuiteCoreStringKey.Common_SiteDescriptionTemplate]: '{SiteDescription}',
    [SuiteCoreStringKey.User_UpdateFailed]: 'ユーザーアカウントの更新に失敗しました',
    [SuiteCoreStringKey.Validation_EmailInUse]:
      'このメールアドレスは既に使用されています',
    [SuiteCoreStringKey.Validation_InvalidCredentials]:
      '無効なユーザー名またはパスワード',
    [SuiteCoreStringKey.Validation_InvalidEmail]:
      '無効なメールアドレスの形式',
    [SuiteCoreStringKey.Validation_InvalidJwtToken]: '無効なJWTトークン',
    [SuiteCoreStringKey.Validation_InvalidToken]: '無効なトークン',
    [SuiteCoreStringKey.Validation_InvalidUsername]: '無効なユーザー名の形式',
    [SuiteCoreStringKey.Validation_PasswordTooWeak]:
      'パスワードがセキュリティ要件を満たしていません',
    [SuiteCoreStringKey.Validation_TokenExpired]: 'トークンの有効期限が切れています',
    [SuiteCoreStringKey.Validation_UsernameInUse]: 'ユーザー名は既に使用されています',
    [SuiteCoreStringKey.Validation_UsernameOrEmailRequired]:
      'ユーザー名またはメールアドレスが必要です',
    [SuiteCoreStringKey.Validation_ExpressValidationFailed]:
      'Expressの検証に失敗しました',
    [SuiteCoreStringKey.Validation_MongooseValidationError]:
      'Mongooseの検証に失敗しました',
    [SuiteCoreStringKey.Error_AccountStatus_Active]: 'アカウントはアクティブです',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
      'アカウントは管理者によってロックされています',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      'アカウントはメール確認待ちです',
    [SuiteCoreStringKey.Common_UnexpectedError]: '予期しないエラーが発生しました',
    [SuiteCoreStringKey.Common_Ready]: '準備完了',
    [SuiteCoreStringKey.Common_Stopping]: '停止中',
    [SuiteCoreStringKey.Common_Stopped]: '停止済み',
    [SuiteCoreStringKey.Common_Connecting]: '接続中',
    [SuiteCoreStringKey.Common_Disconnected]: '切断済み',
    [SuiteCoreStringKey.Common_MongoDB]: 'MongoDB',
    [SuiteCoreStringKey.Common_ApplicationAndDatabase]: 'アプリケーションとデータベース',
    [SuiteCoreStringKey.Common_Unauthorized]: '認証されていません',
    [SuiteCoreStringKey.Common_NoActiveRequest]:
      'アクティブなリクエストがありません',
    [SuiteCoreStringKey.Common_NoUserOnRequest]: 'リクエストにユーザーがいません',
    [SuiteCoreStringKey.Common_NoActiveResponse]: 'アクティブなレスポンスがありません',
    [SuiteCoreStringKey.Error_ChildRoleCannotBeASystemRole]: '子ロールはシステムロールにできません',
    [SuiteCoreStringKey.Error_ChildRoleCannotBeAnAdminRole]: '子ロールは管理者ロールにできません',
    [SuiteCoreStringKey.Error_EngineAlreadySet]:
      'I18nエンジンは既に設定されています',
    [SuiteCoreStringKey.Error_EngineNotSet]:
    'I18nエンジンが設定されていません',
    [SuiteCoreStringKey.Error_LengthExceedsMaximum]: 
    '長さが最大値を超えています',
    [SuiteCoreStringKey.Error_LengthIsInvalidType]: 
    '長さの型が無効です',
    [SuiteCoreStringKey.Error_FailedToStartApplication]: 
    'アプリケーションの起動に失敗しました',
    [SuiteCoreStringKey.Error_InvalidModelKeyTemplate]: 
    '無効なモデルキーです: {modelKey}',
    [SuiteCoreStringKey.Error_ModelNotRegisteredTemplate]: 
    '登録されていないモデル: {modelName}',
    [SuiteCoreStringKey.Error_FailedToCreateRoleTemplate]: 
    '役割 {NAME} の作成に失敗しました',
    [SuiteCoreStringKey.Error_IndexFileNotFoundTemplate]:
    'インデックスファイルが見つかりません: {path}',
    [SuiteCoreStringKey.Error_AppDoesNotAppearToBeRunningWithinDistTemplate]: 
    'アプリケーションは /dist/ ディレクトリ内で実行されていないようです: {dir}',
    [SuiteCoreStringKey.Error_ValidationFunctionNotRegisteredInAllowlist]: '検証関数が許可リストに登録されていません',
    [SuiteCoreStringKey.Error_InvalidCertificatePathAfterResolution]: '解決後の無効な証明書パス',
    [SuiteCoreStringKey.Error_InvalidCertificatePathMustBeAbsolute]: '無効な証明書パス: 絶対パスである必要があり、..を含めることはできません',
    [SuiteCoreStringKey.Error_InvalidViewsPathEscapesBaseDirectory]: '無効なビューパス：ベースディレクトリを超えています',
    [SuiteCoreStringKey.Error_InvalidPathContainsParentDirectoryReference]: '無効なパス：親ディレクトリへの参照が含まれています',
    [SuiteCoreStringKey.Error_InvalidIndexPathEscapesBaseDirectory]: '無効なインデックスパス：ベースディレクトリを超えています',
    [SuiteCoreStringKey.Error_InvalidAssetsPathEscapesBaseDirectory]: '無効なアセットパス：ベースディレクトリを超えています',
    [SuiteCoreStringKey.Error_MissingRequiredEnvironmentVariableTemplate]: '必須の環境変数が見つかりません：{key}',
    [SuiteCoreStringKey.Error_EmptyEnvironmentVariableTemplate]: '環境変数 {key} が空です',
    [SuiteCoreStringKey.ValidationError]:
     '検証エラー',
    [SuiteCoreStringKey.Validation_MissingValidatedData]: 
    '検証済みデータがありません',
    [SuiteCoreStringKey.Validation_MissingValidatedDataForFieldTemplate]: 
     'フィールドの検証済みデータがありません: {field}',
    [SuiteCoreStringKey.Validation_MnemonicRegex]: 
    '無効な助記詞の形式',
    [SuiteCoreStringKey.Admin_Error_InvalidMongoUri]: '無効な Mongo URI',
    [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]: 
    'MongoDBクライアントが見つかりません。フォールバックします',
    [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]: 
    'トランザクションが失敗しました (一時的): {error}',
    [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]:
     'トランザクションのタイムアウト: {timeMs}ms',
    [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]: 
     'データベースの初期化を開始します',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]:
     'ユーザーデータベースの初期化に失敗しました (タイムアウト: {timeMs}ms)',
    [SuiteCoreStringKey.Admin_EnvNotSetTemplate]: 
    '環境変数が設定されていません: {variable}',
    [SuiteCoreStringKey.Admin_ServingRoute]: 
    'ルートを提供しています',
    [SuiteCoreStringKey.Admin_AccountCredentials]:
    'アカウント資格情報（パスワードマネージャーに保存）',
    [SuiteCoreStringKey.Admin_CreatingUserTemplate]:
    'ユーザー {NAME} を作成し、キーを生成しています',
    [SuiteCoreStringKey.Admin_DatabaseInitializedWithOptionsHashTemplate]: 'オプションハッシュでデータベースが初期化されました: {hash}',
    [SuiteCoreStringKey.Admin_DatabaseAlreadyInitialized]:
    'データベースは既に初期化されています',
    [SuiteCoreStringKey.Admin_DatabaseDropped]:
    'データベースコレクションが削除されました',
    [SuiteCoreStringKey.Admin_DevelopmentDatabase]: 
    '開発データベース',
    [SuiteCoreStringKey.Admin_DroppingDatabase]:
    'データベースを削除しています',
    [SuiteCoreStringKey.Admin_EndCredentials]: '資格情報終了',
    [SuiteCoreStringKey.Admin_EnvDirSetButMissingTemplate]:
      '{VAR} は {PATH} に設定されていますが、ディレクトリが見つかりません',
    [SuiteCoreStringKey.Admin_EnvFileNotFound]:
      '.env ファイルが見つかりません、読み込みをスキップします',
    [SuiteCoreStringKey.Admin_EnvFileNotFoundTemplate]:
      '{PATH} に環境ファイルが見つかりません',
    [SuiteCoreStringKey.Admin_Error_DatabaseNotConnectedYet]:
      'データベースはまだ接続されていません。最初に start() を呼び出してください',
    [SuiteCoreStringKey.Admin_Error_EnvironmentAlreadyInitialized]:
      '環境は既に初期化されています',
    [SuiteCoreStringKey.Admin_Error_EnvironmentNotInitialized]:
      '環境は初期化されていません',
    [SuiteCoreStringKey.Admin_Error_FailedToDropDatabase]:
      'データベースコレクションの削除に失敗しました',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabase]:
      'ユーザーデータベースの初期化に失敗しました',
    [SuiteCoreStringKey.Admin_Error_FailedToLoadEnvironment]: '.env ファイルの読み込みに失敗しました',
    [SuiteCoreStringKey.Admin_Error_FailedToSetTransactionTimeout]:
      'トランザクションのタイムアウト設定に失敗しました。データベース接続がありません',
    [SuiteCoreStringKey.Admin_Error_NotConnectedToMongoDB]:
      'MongoDB 接続が予期せず確立されていません',
    [SuiteCoreStringKey.Admin_Error_SchemaMapIsNotLoadedYet]:
    'スキーママップはまだ読み込まれていません。最初に start() を呼び出してください',
    [SuiteCoreStringKey.Admin_Error_UnhandledErrorInMain]:
    'エラーが発生しました: {error}',
    [SuiteCoreStringKey.Admin_ErrorCleaningUpTestData]: 'テストデータのクリーンアップ中にエラーが発生しました',
    [SuiteCoreStringKey.Admin_ErrorClosingConnection]: '接続のクローズ中にエラーが発生しました',
    [SuiteCoreStringKey.Admin_ErrorStoppingMongoServer]: 'Mongoサーバーの停止中にエラーが発生しました',
    [SuiteCoreStringKey.Admin_FailedToSetUpTestDatabase]: 'テストデータベースのセットアップに失敗しました',
    [SuiteCoreStringKey.Admin_LoadingEnvironmentTemplate]:
      '{PATH} から環境を読み込んでいます',
    [SuiteCoreStringKey.Admin_MakeSureToSetItInEnv]:
      '.env ファイルに設定してください',
    [SuiteCoreStringKey.Admin_ProceedingToDbInitialization]:
      'データベースの初期化に進んでいます...',
    [SuiteCoreStringKey.Admin_RoleCreatedTemplate]:
      '役割 {ROLE} が正常に作成されました（ID: {ID}）',
    [SuiteCoreStringKey.Admin_SettingUp]: 'セットアップ中...',
    [SuiteCoreStringKey.Admin_SettingUpUsersAndRoles]: 'ユーザーと役割を設定しています',
    [SuiteCoreStringKey.Admin_SetTransactionTimeoutSuccessfully]:
      'トランザクションのタイムアウトが正常に設定されました',
    [SuiteCoreStringKey.Admin_StartingDbInitialization]:
      'データベースの初期化を開始しています...',
    [SuiteCoreStringKey.Admin_StringNotFoundForLanguageTemplate]:
      '文字列 {NAME} が言語 {LANG} に見つかりません',
    [SuiteCoreStringKey.Admin_TearingDown]: '終了処理中...',
    [SuiteCoreStringKey.Admin_TransactionsEnabledDisabledTemplate]:
      'トランザクションは {STATE} です',
    [SuiteCoreStringKey.Admin_UserDatabaseInitialized]: 'ユーザーデータベースが初期化されました',
    [SuiteCoreStringKey.Admin_UserRoleCreatedTemplate]:
      'ユーザーと役割の関係が作成されました: ユーザー {USERID} -> 役割 {ROLEID}',
    [SuiteCoreStringKey.Admin_UsingMongoDbMemoryWithTransactions]:
      'トランザクションサポート付きMongoDB Memory Serverを使用しています',
    [SuiteCoreStringKey.AdminRoleNotFound]: '管理者役割が見つかりません',
    [SuiteCoreStringKey.ApiAccess_Title]: 'アクセストークン',
    [SuiteCoreStringKey.ApiAccess_TokenNotAvailable]: 'トークンが利用できません',
    [SuiteCoreStringKey.BackupCodeRecovery_CodesRemainingTemplate]:
      '{count} バックアップコードが残っています',
    [SuiteCoreStringKey.BackupCodeRecovery_GenerateNewCodes]: '新しいバックアップコードを生成',
    [SuiteCoreStringKey.BackupCodeRecovery_Login]: 'バックアップコードでログイン',
    [SuiteCoreStringKey.BackupCodeRecovery_RecoverMnemonic]: 'ニーモニックを復元',
    [SuiteCoreStringKey.BackupCodeRecovery_Success]: 'バックアップコードの復元に成功しました。',
    [SuiteCoreStringKey.BackupCodeRecovery_Title]: 'バックアップコードログイン',
    [SuiteCoreStringKey.BackupCodeRecovery_YourNewCodes]:
      'こちらが新しいバックアップコードです。安全な場所に書き留めてください。再度表示することはできません。',
    [SuiteCoreStringKey.CannotRemoveLastAdmin]: '最後の管理者を削除することはできません',
    [SuiteCoreStringKey.ChangePassword_ChangePasswordButton]: 'パスワードを変更',
    [SuiteCoreStringKey.Common_Admin]: '管理者',
    [SuiteCoreStringKey.Common_Amount]: '金額',
    [SuiteCoreStringKey.Common_BackupCode]: 'バックアップコード',
    [SuiteCoreStringKey.Common_BackupCodes]: 'バックアップコード',
    [SuiteCoreStringKey.Common_Cancel]: 'キャンセル',
    [SuiteCoreStringKey.Common_ChangePassword]: 'パスワードを変更',
    [SuiteCoreStringKey.Common_ChangingPassword]: 'パスワード変更中',
    [SuiteCoreStringKey.Common_Confirm]: '確認',
    [SuiteCoreStringKey.Common_ConfirmNewPassword]: '新しいパスワードを確認',
    [SuiteCoreStringKey.Common_Connected]: '接続済み',
    [SuiteCoreStringKey.Common_CopiedToClipboard]: 'クリップボードにコピーしました',
    [SuiteCoreStringKey.Common_CopyToClipboard]: 'クリップボードにコピー',
    [SuiteCoreStringKey.Common_CurrencyCode]: '通貨コード',
    [SuiteCoreStringKey.Common_CurrentPassword]: '現在のパスワード',
    [SuiteCoreStringKey.Common_Dashboard]: 'ダッシュボード',
    [SuiteCoreStringKey.Common_Date]: '日付',
    [SuiteCoreStringKey.Common_DateCreated]: '作成日',
    [SuiteCoreStringKey.Common_Description]: '説明',
    [SuiteCoreStringKey.Common_Disabled]: '無効',
    [SuiteCoreStringKey.Common_Email]:  'メールアドレス',
    [SuiteCoreStringKey.Common_EmailVerification]: 'メール確認',
    [SuiteCoreStringKey.Common_Enabled]: '有効',
    [SuiteCoreStringKey.Common_Expiration]: '有効期限',
    [SuiteCoreStringKey.Common_ID]: 'ID',
    [SuiteCoreStringKey.Common_KeyFeatures]: '主な機能',
    [SuiteCoreStringKey.Common_Loaded]: '読み込み済み',
    [SuiteCoreStringKey.Common_Loading]: '読み込み中',
    [SuiteCoreStringKey.Common_Logo]: 'ロゴ',
    [SuiteCoreStringKey.Common_Member]: 'メンバー',
    [SuiteCoreStringKey.Common_Minute]: '分',
    [SuiteCoreStringKey.Common_Minutes]: '分',
    [SuiteCoreStringKey.Common_Mnemonic]: 'ニーモニック',
    [SuiteCoreStringKey.Common_MnemonicExpiration]: 'ニーモニック有効期限',
    [SuiteCoreStringKey.Common_NewPassword]: '新しいパスワード',
    [SuiteCoreStringKey.Common_Notification]: '通知',
    [SuiteCoreStringKey.Common_NotValidTimeZoneTemplate]:
      '{timezone} は有効なタイムゾーンではありません',
    [SuiteCoreStringKey.Common_OK]: 'OK',
    [SuiteCoreStringKey.Common_Online]: 'オンライン',
    [SuiteCoreStringKey.Common_Password]: 'パスワード',
    [SuiteCoreStringKey.Common_PrivateKey]: '秘密鍵',
    [SuiteCoreStringKey.Common_PublicKey]: '公開鍵',
    [SuiteCoreStringKey.Common_Registration]: '登録',
    [SuiteCoreStringKey.Common_RemoveMember]: 'メンバーを削除',
    [SuiteCoreStringKey.Common_Role]: '役割',
    [SuiteCoreStringKey.Common_Schema]: 'スキーマ',
    [SuiteCoreStringKey.Common_Schemas]: 'スキーマ一覧',
    [SuiteCoreStringKey.Common_Seconds]: '秒',
    [SuiteCoreStringKey.Common_Status]: 'ステータス',
    [SuiteCoreStringKey.Common_System]: 'システム',
    [SuiteCoreStringKey.Common_ThemeToggle_Dark]: 'ダークモードに設定',
    [SuiteCoreStringKey.Common_ThemeToggle_Light]: 'ライトモードに設定',
    [SuiteCoreStringKey.Common_Timezone]: 'タイムゾーン',
    [SuiteCoreStringKey.Common_Type]: 'タイプ',
    [SuiteCoreStringKey.Common_UseMnemonic]: 'ニーモニックのみを使用',
    [SuiteCoreStringKey.Common_UsePassword]: 'パスワードを設定',
    [SuiteCoreStringKey.Common_User]: 'ユーザー',
    [SuiteCoreStringKey.Common_UserCreatedTemplate]:
      '{TYPE}ユーザー{NAME}が正常に作成されました',
    [SuiteCoreStringKey.Common_Username]: 'ユーザー名',
    [SuiteCoreStringKey.Common_Using]: '使用中',
    [SuiteCoreStringKey.Common_Wallet]: 'ウォレット',
    [SuiteCoreStringKey.Common_WalletExpiration]: 'ウォレット有効期限',
    [SuiteCoreStringKey.Dashboard_YourDashboard]: 'あなたのダッシュボード',
    [SuiteCoreStringKey.Email_ConfirmationBody]:
      '以下のリンクをクリックしてメールアドレスを確認してください。',
    [SuiteCoreStringKey.Email_ConfirmationSubjectTemplate]: '{Site}メール確認',
    [SuiteCoreStringKey.Email_LinkExpiresInTemplate]:
      'リンクは{EmailTokenResendIntervalMinutes}分後に期限切れとなります。',
    [SuiteCoreStringKey.Email_LoginRequestBody]:
      '以下のリンクをクリックしてアカウントにログインしてください。',
    [SuiteCoreStringKey.Email_LoginRequestSubjectTemplate]: '{Site}ログインリクエスト',
    [SuiteCoreStringKey.Email_ResetPasswordBody]:
      '以下のリンクをクリックしてパスワードをリセットしてください。',
    [SuiteCoreStringKey.Email_ResetPasswordSubjectTemplate]: '{Site}パスワードリセット',
    [SuiteCoreStringKey.Email_TokenFailedToSend]: 'メールトークンの送信に失敗しました',
    [SuiteCoreStringKey.Email_TokenSent]:
      'そのメールアドレスまたはユーザー名のアカウントが存在する場合、メールが送信されました。',
    [SuiteCoreStringKey.EmailVerification_AlreadyVerified]:
      'このメールアドレスはすでに確認済みです。',
    [SuiteCoreStringKey.EmailVerification_Failed]:
      'メール確認に失敗しました。もう一度お試しください。',
    [SuiteCoreStringKey.EmailVerification_Resent]:
      '確認メールを再送信しました',
    [SuiteCoreStringKey.EmailVerification_Success]: 'メールが正常に確認されました',
    [SuiteCoreStringKey.Error_ChallengeError]: 'チャレンジの生成エラー',
    [SuiteCoreStringKey.Error_DirectTokenAlreadyUsed]:
      'ダイレクトログイントークンはすでに使用されています',
    [SuiteCoreStringKey.Error_Disposed]: 'すでに破棄されています',
    [SuiteCoreStringKey.Error_EciesError_InvalidMultipleMessageOverheadSize]:
      '無効なECIES複数メッセージオーバーヘッド定数',
    [SuiteCoreStringKey.Error_EciesError_InvalidPublicKeyLength]:
      '無効なECIES公開鍵の長さ',
    [SuiteCoreStringKey.Error_EciesError_InvalidRecipientCount]:
      '無効なECIES複数受信者カウントサイズ',
    [SuiteCoreStringKey.Error_EciesErrorCrcError]: 'CRCエラー',
    [SuiteCoreStringKey.Error_EciesErrorDecryptionFailed]:
      'ECIES復号化に失敗しました（MACチェックまたはパディングエラー）',
    [SuiteCoreStringKey.Error_EciesErrorEncryptionDataLengthMismatch]:
      '暗号化データの長さが一致しません',
    [SuiteCoreStringKey.Error_EciesErrorEncryptionTypeMismatch]:
      '暗号化タイプが一致しません',
    [SuiteCoreStringKey.Error_EciesErrorFileSizeTooLarge]: 'ファイルサイズが大きすぎます',
    [SuiteCoreStringKey.Error_EciesErrorInvalidAuthTagLength]: '無効な認証タグの長さ',
    [SuiteCoreStringKey.Error_EciesErrorInvalidDataLength]: '無効なデータ長',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedDataLength]:
      '無効な暗号化データ長',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedKeyLength]:
      '無効な暗号化鍵長',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptionType]: '無効な暗号化タイプ',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEphemeralPublicKey]:
      '無効な一時公開鍵',
    [SuiteCoreStringKey.Error_EciesErrorInvalidHeaderLength]: '無効なヘッダー長',
    [SuiteCoreStringKey.Error_EciesErrorInvalidIVLength]: '無効なIV長',
    [SuiteCoreStringKey.Error_EciesErrorInvalidMessageCrc]: '無効なメッセージCRC',
    [SuiteCoreStringKey.Error_EciesErrorInvalidMnemonic]: '無効なニーモニック',
    [SuiteCoreStringKey.Error_EciesErrorInvalidOperation]: '無効な操作',
    [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientCount]: '無効な受信者数',
    [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientPublicKey]:
      '暗号化に無効な受信者公開鍵が提供されました',
    [SuiteCoreStringKey.Error_EciesErrorInvalidSenderPublicKey]:
      '無効な送信者公開鍵',
    [SuiteCoreStringKey.Error_EciesErrorInvalidSignature]: '無効な署名',
    [SuiteCoreStringKey.Error_EciesErrorMessageLengthMismatch]: 'メッセージ長が一致しません',
    [SuiteCoreStringKey.Error_EciesErrorPrivateKeyNotLoaded]: '秘密鍵が読み込まれていません',
    [SuiteCoreStringKey.Error_EciesErrorRecipientKeyCountMismatch]:
      '受信者数が鍵数と一致しません',
    [SuiteCoreStringKey.Error_EciesErrorRecipientNotFound]:
      '受信者IDに受信者が見つかりません',
    [SuiteCoreStringKey.Error_EciesErrorSecretComputationFailed]:
      'ECIES操作中に共有シークレットの計算に失敗しました',
    [SuiteCoreStringKey.Error_EciesErrorTooManyRecipients]:
      '受信者が多すぎます：許可された最大数を超えています',
    [SuiteCoreStringKey.Error_EciesFailedSharedSecret]: '共有シークレットの計算に失敗しました',
    [SuiteCoreStringKey.Error_EmailSentTooRecentlyTemplate]: 'メールトークンの送信が頻繁すぎます。${timeRemaining}秒後に再試行してください。',
    [SuiteCoreStringKey.Error_FailedToCopy]: 'テキストのコピーに失敗しました',
    [SuiteCoreStringKey.Error_FailedToCreateUserRoleTemplate]:
      'ユーザー{USER_ID}と役割{ROLE_ID}のユーザー役割関係の作成に失敗しました',
    [SuiteCoreStringKey.Error_FailedToCreateUserTemplate]: '{NAME}ユーザーの作成に失敗しました',
    [SuiteCoreStringKey.Error_FailedToFindRoleTemplate]: '役割{ROLE}が見つかりませんでした',
    [SuiteCoreStringKey.Error_FailedToLookupRoleTemplate]:
      '{ROLE}の役割IDの検索に失敗しました',
    [SuiteCoreStringKey.Error_FailedToReEncryptMnemonicTemplate]:
      'ID: {ID}のニーモニックの再暗号化に失敗しました',
    [SuiteCoreStringKey.Error_FailedToStoreUserMnemonicTemplate]:
      'ユーザー{NAME}のニーモニックの保存に失敗しました',
    [SuiteCoreStringKey.Error_FailedToUpdateLastLoginTemplate]:
      'ユーザー{userId}のlastLoginの更新に失敗しました',
    [SuiteCoreStringKey.Error_FailedToUseDirectLoginToken]:
      'ダイレクトログイントークンの使用に失敗しました',
    [SuiteCoreStringKey.Error_FecErrorDataRequired]: 'データが必要です',
    [SuiteCoreStringKey.Error_FecErrorFecDecodingFailedTemplate]:
      'FECデコードに失敗しました：{ERROR}',
    [SuiteCoreStringKey.Error_FecErrorFecEncodingFailedTemplate]:
      'FECエンコードに失敗しました：{ERROR}',
    [SuiteCoreStringKey.Error_FecErrorInputDataMustBeUint8Array]:
      '入力データはUint8Arrayである必要があります',
    [SuiteCoreStringKey.Error_FecErrorInvalidDataLengthTemplate]:
      '無効なデータ長：{LENGTH}、期待値{EXPECTED}',
    [SuiteCoreStringKey.Error_FecErrorInvalidShardCounts]: '無効なシャード数',
    [SuiteCoreStringKey.Error_FecErrorInvalidShardsAvailableArray]:
      '無効な利用可能シャード配列',
    [SuiteCoreStringKey.Error_FecErrorNotEnoughShardsAvailableTemplate]:
      '利用可能なシャードが不足しています：{AVAILABLE}、{REQUIRED}が必要',
    [SuiteCoreStringKey.Error_FecErrorParityDataCountMustBePositive]:
      'パリティデータ数は正の値である必要があります',
    [SuiteCoreStringKey.Error_FecErrorParityDataRequired]:
      'FEC操作にはパリティデータが必要です',
    [SuiteCoreStringKey.Error_FecErrorShardSizeExceedsMaximumTemplate]:
      'シャードサイズ{SIZE}が最大値{MAXIMUM}を超えています',
    [SuiteCoreStringKey.Error_InvalidBackupCodeVersionTemplate]:
      '{version}は無効なバックアップコードバージョンです',
    [SuiteCoreStringKey.Error_InvalidChallengeResponse]:
      '無効または不正なログインチャレンジ応答',
    [SuiteCoreStringKey.Error_InvalidChecksumConstants]: '無効なチェックサム定数',
    [SuiteCoreStringKey.Error_InvalidEmail]: '無効なメールアドレス。',
    [SuiteCoreStringKey.Error_InvalidEmailTemplate]: '{email} は有効なメールアドレスではありません。',
    [SuiteCoreStringKey.Error_InvalidEmailMissing]: 'メールアドレスがありません。',
    [SuiteCoreStringKey.Error_InvalidEmailWhitespace]:
      'メールアドレスに末尾または先頭の空白が含まれています。',
    [SuiteCoreStringKey.Error_InvalidGuid]: '無効なGUID。',
    [SuiteCoreStringKey.Error_InvalidGuidTemplate]: '無効なGUID：{GUID}',
    [SuiteCoreStringKey.Error_InvalidGuidUnknownBrandTemplate]:
      '不明なGUIDブランド：{BRAND}。',
    [SuiteCoreStringKey.Error_InvalidGuidUnknownLengthTemplate]:
      '無効なGUID長：{LENGTH}。',
    [SuiteCoreStringKey.Error_InvalidLanguageCodeTemplate]:
      '無効な言語コード"{LANGUAGE}"が提供されました。デフォルト言語"{DEFAULT_LANGUAGE}"にフォールバックします。',
    [SuiteCoreStringKey.Error_InvalidMnemonicEncryptionKey]:
      '暗号化鍵は32バイト（64文字の16進数）である必要があります。',
    [SuiteCoreStringKey.Error_LanguageNotFoundForEnumTemplate]:
      '言語{lang}が列挙型{enumName}に見つかりません',
    [SuiteCoreStringKey.Error_LanguageNotFoundInStringsTemplate]:
      '言語{LANG}が文字列に見つかりません',
    [SuiteCoreStringKey.Error_Login_ChallengeExpiredTemplate]:
      'ログインチャレンジが{LoginChallengeExpiration}ms後に期限切れとなりました',
    [SuiteCoreStringKey.Error_Login_DirectLoginNotAllowed]:
      'このアカウントではダイレクトログインが許可されていません。メールログインリンクをリクエストしてください。',
    [SuiteCoreStringKey.Error_MemberErrorEncryptionDataTooLarge]:
      '暗号化データが大きすぎます。',
    [SuiteCoreStringKey.Error_MemberErrorFailedToConvertMemberData]:
      'メンバーデータの変換に失敗しました。',
    [SuiteCoreStringKey.Error_MemberErrorFailedToHydrateMember]:
      'メンバーのハイドレートに失敗しました。',
    [SuiteCoreStringKey.Error_MemberErrorIncorrectOrInvalidPrivateKey]:
      '公開鍵に対する秘密鍵が不正または無効です',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEmail]: '無効なメールアドレス。',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEmailWhitespace]:
      'メールアドレスに末尾または先頭の空白が含まれています。',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEncryptionData]:
      '無効な暗号化データ。',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberData]: '無効なメンバーデータ。',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberName]: '無効なメンバー名。',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberNameWhitespace]:
      'メンバー名に末尾または先頭の空白が含まれています。',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberStatus]: '無効なメンバーステータス。',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMnemonic]: '無効なウォレットニーモニック。',
    [SuiteCoreStringKey.Error_MemberErrorMemberAlreadyExists]: 'メンバーはすでに存在します。',
    [SuiteCoreStringKey.Error_MemberErrorMemberNotFound]: 'メンバーが見つかりません。',
    [SuiteCoreStringKey.Error_MemberErrorMissingEmail]: 'メールアドレスがありません。',
    [SuiteCoreStringKey.Error_MemberErrorMissingEncryptionData]:
      '暗号化データがありません。',
    [SuiteCoreStringKey.Error_MemberErrorMissingMemberName]: 'メンバー名がありません。',
    [SuiteCoreStringKey.Error_MemberErrorMissingPrivateKey]: '秘密鍵がありません。',
    [SuiteCoreStringKey.Error_MemberErrorMissingVotingPrivateKey]:
      '投票用秘密鍵がありません。',
    [SuiteCoreStringKey.Error_MemberErrorMissingVotingPublicKey]:
      '投票用公開鍵がありません。',
    [SuiteCoreStringKey.Error_MemberErrorNoWallet]: 'ウォレットが読み込まれていません。',
    [SuiteCoreStringKey.Error_MemberErrorPrivateKeyRequiredToDeriveVotingKeyPair]:
      '投票鍵ペアを導出するには秘密鍵が必要です。',
    [SuiteCoreStringKey.Error_MemberErrorWalletAlreadyLoaded]: 'ウォレットはすでに読み込まれています。',
    [SuiteCoreStringKey.Error_MnemonicIsNullTemplate]: '{NAME}ニーモニックがnullです',
    [SuiteCoreStringKey.Error_NoTranslationsForEnumLanguageTemplate]:
      '{language}の{enumName}.{value}の翻訳が見つかりません',
    [SuiteCoreStringKey.Error_NoTranslationsForEnumTemplate]:
      '列挙型の翻訳が見つかりません：{enumName}',
    [SuiteCoreStringKey.Error_PasswordChange]: 'パスワード変更エラー',
    [SuiteCoreStringKey.Error_Pbkdf2InvalidHashLength]:
      'ハッシュ長が期待値と一致しません',
    [SuiteCoreStringKey.Error_Pbkdf2InvalidSaltLength]:
      'ソルト長が期待値と一致しません',
    [SuiteCoreStringKey.Error_RoleNotFoundTemplate]:
      'ID {ID}の役割を役割列挙型のエントリにマッピングできませんでした',
    [SuiteCoreStringKey.Error_SecureStorageDecryptedValueChecksumMismatch]:
      '復号化された値のチェックサムが一致しません',
    [SuiteCoreStringKey.Error_SecureStorageDecryptedValueLengthMismatch]:
      '復号化された値の長さが期待値と一致しません',
    [SuiteCoreStringKey.Error_SecureStorageValueIsNull]: 'セキュアストレージの値がnullです',
    [SuiteCoreStringKey.Error_SymmetricDataNullOrUndefined]:
      '暗号化するデータはnullまたはundefinedにできません',
    [SuiteCoreStringKey.Error_SymmetricInvalidKeyLengthTemplate]:
      '暗号化鍵は{KEY_BYTES}バイトである必要があります',
    [SuiteCoreStringKey.Error_UnknownEnumValueForEnumTemplate]:
      '不明な列挙値：{value}、列挙型：{enumName}',
    [SuiteCoreStringKey.Error_EmailService_NotConfigured]: 'メールサービスが設定されていません。ミドルウェアを使用する前に setEmailService() を呼び出してください。',
    [SuiteCoreStringKey.Error_FailedToCreateEmailToken]: 'メールトークンの作成に失敗しました',
    [SuiteCoreStringKey.ForgotPassword_BackToLogin]: 'ログインに戻る',
    [SuiteCoreStringKey.ForgotPassword_Error]:
      'リクエストの処理中にエラーが発生しました。',
    [SuiteCoreStringKey.ForgotPassword_ForgotPassword]: 'パスワードを忘れました',
    [SuiteCoreStringKey.ForgotPassword_InvalidToken]:
      '無効または期限切れのトークン。新しいパスワードリセットをリクエストしてください。',
    [SuiteCoreStringKey.ForgotPassword_ResetPassword]: 'パスワードをリセット',
    [SuiteCoreStringKey.ForgotPassword_SendResetLink]: 'リセットリンクを送信',
    [SuiteCoreStringKey.ForgotPassword_Success]:
      'パスワードが正常にリセットされました。新しいパスワードでログインできます。',
    [SuiteCoreStringKey.ForgotPassword_Title]: 'パスワードを忘れました',
    [SuiteCoreStringKey.HavingTroubleContactSupport]:
      '問題がある場合は、サポートチームにお問い合わせください、または',
    [SuiteCoreStringKey.KeyFeatures_1]:
      '自動リリースまたは削除のルールでファイルを安全に保存します。',
    [SuiteCoreStringKey.KeyFeatures_2]:
      'デジタルまたは物理的な活動を監視するために「カナリア」を作成します。',
    [SuiteCoreStringKey.KeyFeatures_3]:
      'カナリアのステータス（例：非アクティブ）に基づいてアクションがトリガーされます。',
    [SuiteCoreStringKey.KeyFeatures_4]: '緊急時の即座アクションのための強制コード。',
    [SuiteCoreStringKey.LanguageUpdate_Success]: '言語が正常に更新されました',
    [SuiteCoreStringKey.LoggedIn_Success]: 'ログインに成功しました',
    [SuiteCoreStringKey.Login_ChallengeGenerated]: 'ログインチャレンジが生成されました',
    [SuiteCoreStringKey.Login_DirectLogin]: 'ダイレクトログイン',
    [SuiteCoreStringKey.Login_DirectLoginWarning]:
      'ユーザー名またはメールアドレスが無効、またはユーザーがダイレクトログインを無効にしている場合、ダイレクトチャレンジログインはアカウントが存在するかどうかを明かさない一般的な無効なチャレンジ応答エラーで失敗します。',
    [SuiteCoreStringKey.Login_EmailChallengeSent]:
      'ログインリンクがメールに送信されました。クリックしてログインしてください。',
    [SuiteCoreStringKey.Login_EmailLogin]: 'メールログイン',
    [SuiteCoreStringKey.Login_ForgotPassword]: 'パスワードを忘れました？',
    [SuiteCoreStringKey.Login_LoginButton]: 'ログイン',
    [SuiteCoreStringKey.Login_SignUp]: 'アカウントをお持ちではありませんか？登録',
    [SuiteCoreStringKey.Login_Title]: 'サインイン',
    [SuiteCoreStringKey.Login_UseEmail]: 'メールを使用',
    [SuiteCoreStringKey.Login_UseUsername]: 'ユーザー名を使用',
    [SuiteCoreStringKey.LogoutButton]: 'ログアウト',
    [SuiteCoreStringKey.MemberRoleNotFound]: 'メンバー役割が見つかりません',
    [SuiteCoreStringKey.MnemonicRecovery_Missing]: 'ニーモニック復元データがありません',
    [SuiteCoreStringKey.MnemonicRecovery_Success]: 'ニーモニックが正常に復元されました',
    [SuiteCoreStringKey.NoMembersYet]: 'まだメンバーがいません',
    [SuiteCoreStringKey.NoVerificationTokenProvided]: '確認トークンが提供されていません。',
    [SuiteCoreStringKey.PasswordChange_IncorrectPassword]:
      '現在のパスワードが正しくありません',
    [SuiteCoreStringKey.PasswordLogin_InvalidCurrentPassword]: '現在のパスワードが正しくありません',
    [SuiteCoreStringKey.PasswordChange_Success]: 'パスワードが正常に変更されました',
    [SuiteCoreStringKey.PasswordLogin_Setup_Failure]: 'パスワードログインの設定に失敗しました',
    [SuiteCoreStringKey.PasswordLogin_Setup_NotAvailable]: 'パスワードログインが利用できません',
    [SuiteCoreStringKey.PasswordLogin_Setup_Success]: 'パスワードログインの設定に成功しました',
    [SuiteCoreStringKey.PasswordReset_AlreadySent]:
      'パスワードリセットリンクはすでにメールに送信されています。',
    [SuiteCoreStringKey.PasswordReset_EmailNotVerified]:
      'パスワードをリセットする前にメールアドレスを確認してください。',
    [SuiteCoreStringKey.PasswordReset_Success]:
      'そのメールアドレスのアカウントが存在する場合、パスワードリセットリンクが送信されました。',
    [SuiteCoreStringKey.ProceedToLogin]: 'ログインに進む',
    [SuiteCoreStringKey.Register_RegisterButton]: '始める',
    [SuiteCoreStringKey.RegisterButton]: '登録',
    [SuiteCoreStringKey.Registration_ConfirmPassword]: 'パスワードを確認',
    [SuiteCoreStringKey.Registration_Error]:
      '登録中に予期しないエラーが発生しました。もう一度お試しください。',
    [SuiteCoreStringKey.Registration_LoginLink]: 'すでにアカウントをお持ちですか？ログイン',
    [SuiteCoreStringKey.Registration_MnemonicSuccess]:
      '登録に成功しました。ニーモニックを安全に保存してください。再度表示されません。アカウントを確認するためにメールを確認してください。',
    [SuiteCoreStringKey.Registration_RegisterButton]: '登録',
    [SuiteCoreStringKey.Registration_Registering]: '登録中...',
    [SuiteCoreStringKey.Registration_RegisteringMessage]:
      'アカウントを作成しています。鍵を生成して登録を完了するのに1分ほどかかる場合があります。',
    [SuiteCoreStringKey.Registration_Success]:
      '登録に成功しました。アカウントを確認するためにメールを確認してください。',
    [SuiteCoreStringKey.Registration_SuccessTitle]: '登録に成功しました。',
    [SuiteCoreStringKey.RemoveAdmin_Success]: '管理者が正常に削除されました',
    [SuiteCoreStringKey.RemoveAdmin_Unauthorized]: '管理者を削除する権限がありません',
    [SuiteCoreStringKey.RemoveMember_Success]: 'メンバーが正常に削除されました',
    [SuiteCoreStringKey.RemoveMember_Unauthorized]: 'メンバーを削除する権限がありません',
    [SuiteCoreStringKey.RequestNewVerificationEmail]: '新しい確認メールをリクエスト',
    [SuiteCoreStringKey.SignInButton]: 'サインイン',
    [SuiteCoreStringKey.TestItemCountTemplate]: '{count}個のアイテム',
    [SuiteCoreStringKey.TestTemplate]:
      'これはテストです：{variable1}、{AdministratorEmail}',
    [SuiteCoreStringKey.TestUsernameTemplate]: 'これはテストユーザー名です：{user}',
    [SuiteCoreStringKey.TogglePasswordVisibility]: 'パスワードの表示を切り替え',
    [SuiteCoreStringKey.TokenCreate_Success]: 'トークンが正常に作成されました',
    [SuiteCoreStringKey.TokenNotFoundTemplate]: 'トークンが見つかりません：{TOKEN}',
    [SuiteCoreStringKey.TokenRefreshed]: 'トークンが更新されました',
    [SuiteCoreStringKey.TokenType_AccountVerification]: 'アカウント確認',
    [SuiteCoreStringKey.TokenType_LoginRequest]: 'ログインリクエスト',
    [SuiteCoreStringKey.TokenType_PasswordReset]: 'パスワードリセット',
    [SuiteCoreStringKey.TokenType_MnemonicRecoveryRequest]: 'ニーモニック復元リクエスト',
    [SuiteCoreStringKey.TokenType_PrivateKeyRequest]: '秘密鍵リクエスト',
    [SuiteCoreStringKey.Validation_AccountLocked]: 'アカウントがロックされています',
    [SuiteCoreStringKey.Validation_AdminUserIdRequired]: '管理者ユーザーIDが必要です',
    [SuiteCoreStringKey.Validation_ConfirmNewPassword]:
      '新しいパスワードを確認してください',
    [SuiteCoreStringKey.Validation_CreatedUserIdError]:
      '作成されたユーザーIDが存在せず、新しいユーザーIDと一致しません。',
    [SuiteCoreStringKey.Validation_CurrencyCodeRequired]: '通貨コードが必要です',
    [SuiteCoreStringKey.Validation_CurrentPasswordRequired]:
      '現在のパスワードが必要です',
    [SuiteCoreStringKey.Validation_DescriptionRequired]: '説明が必要です',
    [SuiteCoreStringKey.Validation_EmailNotVerified]: 'メールが確認されていません',
    [SuiteCoreStringKey.Validation_HmacRegex]: 'HMACは有効な16進数文字列である必要があります。',
    [SuiteCoreStringKey.Validation_InvalidAdminUserId]: '無効な管理者ユーザーID',
    [SuiteCoreStringKey.Validation_InvalidBackupCode]:
      '無効またはすでに使用されたバックアップコード',
    [SuiteCoreStringKey.Validation_InvalidChallenge]: '無効または不正なチャレンジ',
    [SuiteCoreStringKey.Validation_InvalidCurrencyCode]: '無効な通貨コード',
    [SuiteCoreStringKey.Validation_InvalidEncryptedMnemonic]:
      '無効な暗号化ニーモニック。有効な16進数文字列である必要があります。',
    [SuiteCoreStringKey.Validation_InvalidGuid]: '無効なGUID',
    [SuiteCoreStringKey.Validation_InvalidLanguage]: '無効な言語',
    [SuiteCoreStringKey.Validation_InvalidLanguageCode]: '無効な言語コード',
    [SuiteCoreStringKey.Validation_InvalidMemberId]: '無効なメンバーID',
    [SuiteCoreStringKey.Validation_InvalidMnemonic]: '無効なニーモニックフレーズ。',
    [SuiteCoreStringKey.Validation_InvalidOldMnemonicEncryptionKey]:
      '古い暗号化鍵は32バイト（64文字の16進数）である必要があります。',
    [SuiteCoreStringKey.Validation_InvalidPassword]: '無効または不正なパスワード',
    [SuiteCoreStringKey.Validation_InvalidSignature]: '無効な署名',
    [SuiteCoreStringKey.Validation_InvalidUserId]: '無効なユーザーID',
    [SuiteCoreStringKey.Validation_InvalidUserIdTemplate]: '無効なユーザーID: {detail}',
    [SuiteCoreStringKey.Validation_IsMemberBoolean]: 'isMemberはブール値である必要があります',
    [SuiteCoreStringKey.Validation_MemberIdRequired]: 'メンバーIDが必要です',
    [SuiteCoreStringKey.Validation_MnemonicOrPasswordRequired]:
      'ニーモニックまたはパスワードのいずれかが必要です',
    [SuiteCoreStringKey.Validation_MnemonicRequired]: 'ニーモニックが必要です。',
    [SuiteCoreStringKey.Validation_NameRequired]: '名前が必要です',
    [SuiteCoreStringKey.Validation_NewPasswordRequired]: '新しいパスワードが必要です',
    [SuiteCoreStringKey.Validation_PasswordMatch]: 'パスワードが一致する必要があります',
    [SuiteCoreStringKey.Validation_PasswordMinLengthTemplate]:
      'パスワードは少なくとも{PasswordMinLength}文字必要です',
    [SuiteCoreStringKey.Validation_PasswordRegexErrorTemplate]:
      'パスワードは少なくとも{PasswordMinLength}文字で、少なくとも1つの文字、1つの数字、1つの特殊文字（!@#$%^&*()_+-=[]{};\':"|,.<>/?）を含む必要があります',
    [SuiteCoreStringKey.Validation_PasswordsDifferent]:
      '新しいパスワードは現在のパスワードと異なる必要があります',
    [SuiteCoreStringKey.Validation_Required]: '必須',
    [SuiteCoreStringKey.Validation_TimezoneInvalid]: '無効なタイムゾーン',
    [SuiteCoreStringKey.Validation_TimezoneRequired]: 'タイムゾーンが必要です',
    [SuiteCoreStringKey.Validation_TokenInvalid]:
      'メール確認リンクはすでに使用されているか無効です',
    [SuiteCoreStringKey.Validation_TokenMissing]: 'トークンが提供されていません',
    [SuiteCoreStringKey.Validation_TokenRequired]: 'トークンが必要です',
    [SuiteCoreStringKey.Validation_TokenValid]: 'トークンは有効です',
    [SuiteCoreStringKey.Validation_UserIdMustNotExist]: '新しいユーザーIDは存在してはいけません。',
    [SuiteCoreStringKey.Validation_UserIdRequired]: 'ユーザーIDが必要です',
    [SuiteCoreStringKey.Validation_UsernameMaxLengthTemplate]:
      'ユーザー名は最大{UsernameMaxLength}文字です',
    [SuiteCoreStringKey.Validation_UsernameMinLengthTemplate]:
      'ユーザー名は少なくとも{UsernameMinLength}文字必要です',
    [SuiteCoreStringKey.Validation_UsernameRegexErrorTemplate]:
      'ユーザー名は{UsernameMinLength}～{UsernameMaxLength}文字で、文字と数字のみを含む必要があります',
    [SuiteCoreStringKey.Validation_UserNotFound]: 'ユーザーが見つからないか非アクティブです',
  },
  [LanguageCodes.UK]: {
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
    [SuiteCoreStringKey.Common_SiteTemplate]: '{Site}',
    [SuiteCoreStringKey.Common_SiteTaglineTemplate]: '{SiteTagline}',
    [SuiteCoreStringKey.Common_SiteDescriptionTemplate]: '{SiteDescription}',
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
    [SuiteCoreStringKey.Error_IndexFileNotFoundTemplate]: 'Файл індексу не знайдено: {path}',
    [SuiteCoreStringKey.Error_AppDoesNotAppearToBeRunningWithinDistTemplate]: 'Здається, додаток не працює в каталозі /dist/: {dir}',
    [SuiteCoreStringKey.Error_InvalidCertificatePathAfterResolution]: 'Недійсний шлях до сертифіката після вирішення',
    [SuiteCoreStringKey.Error_InvalidCertificatePathMustBeAbsolute]: 'Недійсний шлях до сертифіката: повинен бути абсолютним і не може містити ..',
    [SuiteCoreStringKey.Error_InvalidViewsPathEscapesBaseDirectory]: 'Недійсний шлях перегляду: виходить за межі базового каталогу',
    [SuiteCoreStringKey.Error_InvalidPathContainsParentDirectoryReference]: 'Недійсний шлях: містить посилання на батьківський каталог',
    [SuiteCoreStringKey.Error_InvalidIndexPathEscapesBaseDirectory]: 'Недійсний шлях індексу: виходить за межі базового каталогу',
    [SuiteCoreStringKey.Error_InvalidAssetsPathEscapesBaseDirectory]: 'Недійсний шлях ресурсів: виходить за межі базового каталогу',
    [SuiteCoreStringKey.Error_MissingRequiredEnvironmentVariableTemplate]: 'Відсутня обов\'язкова змінна середовища: {key}',
    [SuiteCoreStringKey.Error_EmptyEnvironmentVariableTemplate]: 'Змінна середовища {key} порожня',
    [SuiteCoreStringKey.Error_ChildRoleCannotBeASystemRole]: 'Дочірня роль не може бути системною роллю',
    [SuiteCoreStringKey.Error_ChildRoleCannotBeAnAdminRole]: 'Дочірня роль не може бути роллю адміністратора',
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
    [SuiteCoreStringKey.Error_ValidationFunctionNotRegisteredInAllowlist]: 'Функцію валідації не зареєстровано в allowlist',

    [SuiteCoreStringKey.ValidationError]: 'Помилка Валідації',
    [SuiteCoreStringKey.Validation_MissingValidatedData]: 'Відсутні валідовані дані',
    [SuiteCoreStringKey.Validation_MissingValidatedDataForFieldTemplate]: 'Відсутні валідовані дані для поля: {field}',
    [SuiteCoreStringKey.Validation_MnemonicRegex]: 'Недійсний формат мнемоніки',
    [SuiteCoreStringKey.Admin_Error_InvalidMongoUri]: 'Недійсний Mongo URI',
    [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]: 'Клієнт MongoDB не знайдено, використовується резервний варіант',
    [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]: 'Транзакція не вдалася (тимчасово): {error}',
    [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]: 'Тайм-аут транзакції після {timeMs}мс',
    [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]: 'Початок ініціалізації бази даних',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]: 'Не вдалося ініціалізувати базу даних користувача (тайм-аут після {timeMs}мс)',
    [SuiteCoreStringKey.Admin_EnvNotSetTemplate]: 'Змінна середовища не встановлена: {variable}',
    [SuiteCoreStringKey.Admin_ServingRoute]: 'Обслуговування маршруту',
    [SuiteCoreStringKey.Admin_AccountCredentials]:
      'Облікові дані облікового запису (зберегти в менеджері паролів)',
    [SuiteCoreStringKey.Admin_CreatingUserTemplate]:
      'Створення {TYPE} користувача {NAME} та генерація ключів',
    [SuiteCoreStringKey.Admin_DatabaseInitializedWithOptionsHashTemplate]: 'База даних ініціалізована з хешем параметрів: {hash}',
    [SuiteCoreStringKey.Admin_DatabaseAlreadyInitialized]:
      'База даних вже ініціалізована',
    [SuiteCoreStringKey.Admin_DatabaseDropped]: 'Колекції бази даних видалено',
    [SuiteCoreStringKey.Admin_DevelopmentDatabase]: 'База даних розробки',
    [SuiteCoreStringKey.Admin_DroppingDatabase]: 'Видалення бази даних',
    [SuiteCoreStringKey.Admin_EndCredentials]: 'КІНЕЦЬ ОБЛІКОВИХ ДАНИХ',
    [SuiteCoreStringKey.Admin_EnvDirSetButMissingTemplate]:
      '{VAR} встановлено на {PATH}, але каталог відсутній',
    [SuiteCoreStringKey.Admin_EnvFileNotFound]:
      '.env файл не знайдено, пропускаючи завантаження',
    [SuiteCoreStringKey.Admin_EnvFileNotFoundTemplate]:
      'Файл середовища не знайдено за адресою {PATH}',
    [SuiteCoreStringKey.Admin_Error_DatabaseNotConnectedYet]:
      'db не підключено. спочатку викличте start()',
    [SuiteCoreStringKey.Admin_Error_EnvironmentAlreadyInitialized]:
      'Середовище вже ініціалізовано',
    [SuiteCoreStringKey.Admin_Error_EnvironmentNotInitialized]:
      'Середовище не ініціалізовано',
    [SuiteCoreStringKey.Admin_Error_FailedToDropDatabase]:
      'Не вдалося видалити колекції бази даних',
    [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabase]:
      'Не вдалося ініціалізувати базу даних користувачів',
    [SuiteCoreStringKey.Admin_Error_FailedToLoadEnvironment]:
      'Не вдалося завантажити файл .env',
    [SuiteCoreStringKey.Admin_Error_FailedToSetTransactionTimeout]:
      'Не вдалося встановити тайм-аут транзакції, немає підключення до бази даних',
    [SuiteCoreStringKey.Admin_Error_NotConnectedToMongoDB]:
      "Не вдалося встановити з'єднання з MongoDB.",
    [SuiteCoreStringKey.Admin_Error_SchemaMapIsNotLoadedYet]:
      'schemaMap не завантажено. спочатку викличте start()',
    [SuiteCoreStringKey.Admin_Error_UnhandledErrorInMain]:
      'Необроблена помилка в основному',
    [SuiteCoreStringKey.Admin_ErrorCleaningUpTestData]: 'Помилка очищення тестових даних',
    [SuiteCoreStringKey.Admin_ErrorClosingConnection]: "Помилка закриття з'єднання",
    [SuiteCoreStringKey.Admin_ErrorStoppingMongoServer]:
      'Помилка зупинки сервера MongoDB',
    [SuiteCoreStringKey.Admin_FailedToSetUpTestDatabase]:
      'Не вдалося налаштувати тестову базу даних',
    [SuiteCoreStringKey.Admin_LoadingEnvironmentTemplate]:
      'Завантаження середовища з {PATH}',
    [SuiteCoreStringKey.Admin_MakeSureToSetItInEnv]:
      'Обов’язково встановіть це у вашому файлі .env',
    [SuiteCoreStringKey.Admin_ProceedingToDbInitialization]:
      'Процес ініціалізації бази даних...',
    [SuiteCoreStringKey.Admin_RoleCreatedTemplate]:
      'Роль {ROLE} успішно створена з ID {ID}',
    [SuiteCoreStringKey.Admin_SettingUp]: 'Налаштування...',
    [SuiteCoreStringKey.Admin_SettingUpUsersAndRoles]:
      'Налаштування користувачів і ролей',
    [SuiteCoreStringKey.Admin_SetTransactionTimeoutSuccessfully]:
      'Час очікування транзакції успішно встановлено',
    [SuiteCoreStringKey.Admin_StartingDbInitialization]:
      'Початок ініціалізації бази даних...',
    [SuiteCoreStringKey.Admin_StringNotFoundForLanguageTemplate]:
      'Строка {NAME} не знайдена для мови {LANG}',
    [SuiteCoreStringKey.Admin_TearingDown]: 'Знесення...',
    [SuiteCoreStringKey.Admin_TransactionsEnabledDisabledTemplate]:
      'Статус транзакцій: {STATE}',
    [SuiteCoreStringKey.Admin_UserDatabaseInitialized]:
      'База даних користувачів ініціалізована',
    [SuiteCoreStringKey.Admin_UserRoleCreatedTemplate]:
      "Створено зв'язок між користувачем і роллю: Користувач {USERID} -> Роль {ROLEID}",
    [SuiteCoreStringKey.Admin_UsingMongoDbMemoryWithTransactions]:
      'Використання MongoDB Memory Server з підтримкою транзакцій',
    [SuiteCoreStringKey.AdminRoleNotFound]: 'Роль адміністратора не знайдено',
    [SuiteCoreStringKey.ApiAccess_Title]: 'Ваш токен доступу',
    [SuiteCoreStringKey.ApiAccess_TokenNotAvailable]: 'Токен недоступний',
    [SuiteCoreStringKey.BackupCodeRecovery_CodesRemainingTemplate]:
      '{count} кодів резервної копії залишилося',
    [SuiteCoreStringKey.BackupCodeRecovery_GenerateNewCodes]:
      'Генерувати нові коди резервної копії',
    [SuiteCoreStringKey.BackupCodeRecovery_Login]:
      'Вхід за допомогою коду резервної копії',
    [SuiteCoreStringKey.BackupCodeRecovery_RecoverMnemonic]: 'Відновити мнемоніку',
    [SuiteCoreStringKey.BackupCodeRecovery_Success]:
      'Відновлення коду резервної копії успішне.',
    [SuiteCoreStringKey.BackupCodeRecovery_Title]:
      'Вхід за допомогою коду резервної копії',
    [SuiteCoreStringKey.BackupCodeRecovery_YourNewCodes]:
      'Ось ваші нові резервні коди. Будь ласка, запишіть їх у безпечному місці, їх не можна буде переглянути знову.',
    [SuiteCoreStringKey.CannotRemoveLastAdmin]:
      'Неможливо видалити останнього адміністратора',
    [SuiteCoreStringKey.ChangePassword_ChangePasswordButton]: 'Змінити пароль',
    [SuiteCoreStringKey.Common_Admin]: 'Адміністратор',
    [SuiteCoreStringKey.Common_Amount]: 'Сума',
    [SuiteCoreStringKey.Common_BackupCode]: 'Код резервної копії',
    [SuiteCoreStringKey.Common_BackupCodes]: 'Коди резервної копії',
    [SuiteCoreStringKey.Common_Cancel]: 'Скасувати',
    [SuiteCoreStringKey.Common_ChangePassword]: 'Змінити пароль',
    [SuiteCoreStringKey.Common_ChangingPassword]: 'Зміна пароля',
    [SuiteCoreStringKey.Common_Confirm]: 'Підтвердити',
    [SuiteCoreStringKey.Common_ConfirmNewPassword]: 'Підтвердіть новий пароль',
    [SuiteCoreStringKey.Common_Connected]: 'Підключено',
    [SuiteCoreStringKey.Common_CopiedToClipboard]: 'Скопійовано до буфера обміну',
    [SuiteCoreStringKey.Common_CopyToClipboard]: 'Скопіювати до буфера обміну',
    [SuiteCoreStringKey.Common_CurrencyCode]: 'Код валюти',
    [SuiteCoreStringKey.Common_CurrentPassword]: 'Поточний пароль',
    [SuiteCoreStringKey.Common_Dashboard]: 'Панель керування',
    [SuiteCoreStringKey.Common_Date]: 'Дата',
    [SuiteCoreStringKey.Common_DateCreated]: 'Дата створення',
    [SuiteCoreStringKey.Common_Description]: 'Опис',
    [SuiteCoreStringKey.Common_Disabled]: 'Вимкнено',
    [SuiteCoreStringKey.Common_Email]: 'Електронна адреса',
    [SuiteCoreStringKey.Common_EmailVerification]: 'Підтвердження електронної пошти',
    [SuiteCoreStringKey.Common_Enabled]: 'Увімкнено',
    [SuiteCoreStringKey.Common_Expiration]: 'Експірація',
    [SuiteCoreStringKey.Common_ID]: 'ID',
    [SuiteCoreStringKey.Common_KeyFeatures]: 'Основні можливості',
    [SuiteCoreStringKey.Common_Loaded]: 'Завантажено',
    [SuiteCoreStringKey.Common_Loading]: 'Завантаження',
    [SuiteCoreStringKey.Common_Logo]: 'Логотип',
    [SuiteCoreStringKey.Common_Member]: 'Учасник',
    [SuiteCoreStringKey.Common_Minute]: 'Хвилина',
    [SuiteCoreStringKey.Common_Minutes]: 'Хвилини',
    [SuiteCoreStringKey.Common_Mnemonic]: 'Мнемонічна фраза',
    [SuiteCoreStringKey.Common_MnemonicExpiration]: 'Закінчення терміну дії Мнемоніки',
    [SuiteCoreStringKey.Common_NewPassword]: 'Новий пароль',
    [SuiteCoreStringKey.Common_Notification]: 'Сповіщення',
    [SuiteCoreStringKey.Common_NotValidTimeZoneTemplate]:
      '{timezone} не є дійсним часовим поясом',
    [SuiteCoreStringKey.Common_OK]: 'Давати Згоду',
    [SuiteCoreStringKey.Common_Online]: 'Онлайн',
    [SuiteCoreStringKey.Common_Password]: 'Пароль',
    [SuiteCoreStringKey.Common_PrivateKey]: 'Приватний ключ',
    [SuiteCoreStringKey.Common_PublicKey]: 'Публічний ключ',
    [SuiteCoreStringKey.Common_Registration]: 'Реєстрація',
    [SuiteCoreStringKey.Common_RemoveMember]: 'Видалити учасника',
    [SuiteCoreStringKey.Common_Role]: 'Роль',
    [SuiteCoreStringKey.Common_Schema]: 'Схема',
    [SuiteCoreStringKey.Common_Schemas]: 'Схеми',
    [SuiteCoreStringKey.Common_Seconds]: 'Секунди',
    [SuiteCoreStringKey.Common_Status]: 'Статус',
    [SuiteCoreStringKey.Common_System]: 'Система',
    [SuiteCoreStringKey.Common_ThemeToggle_Dark]: 'Активувати темний режим',
    [SuiteCoreStringKey.Common_ThemeToggle_Light]: 'Активувати світлий режим',
    [SuiteCoreStringKey.Common_Timezone]: 'Часовий пояс',
    [SuiteCoreStringKey.Common_Type]: 'Тип',
    [SuiteCoreStringKey.Common_UseMnemonic]: 'Використовувати лише мнемоніку',
    [SuiteCoreStringKey.Common_UsePassword]: 'Встановити пароль',
    [SuiteCoreStringKey.Common_User]: 'Користувач',
    [SuiteCoreStringKey.Common_UserCreatedTemplate]:
      '{TYPE} користувача {NAME} успішно створено',
    [SuiteCoreStringKey.Common_Username]: "Ім'я користувача",
    [SuiteCoreStringKey.Common_Using]: 'Використання',
    [SuiteCoreStringKey.Common_Wallet]: 'Гаманець',
    [SuiteCoreStringKey.Common_WalletExpiration]: 'Закінчення терміну дії Гаманця',
    [SuiteCoreStringKey.Dashboard_YourDashboard]: 'Ваша панель керування',
    [SuiteCoreStringKey.Email_ConfirmationBody]:
      'Будь ласка, перейдіть за посиланням нижче, щоб підтвердити свою електронну пошту.',
    [SuiteCoreStringKey.Email_ConfirmationSubjectTemplate]:
      '{Site} підтвердження електронної пошти',
    [SuiteCoreStringKey.Email_LinkExpiresInTemplate]:
      'Посилання буде дійсним ще {EmailTokenResendIntervalMinutes} хвилин.',
    [SuiteCoreStringKey.Email_LoginRequestBody]:
      'Будь ласка, перейдіть за посиланням нижче, щоб увійти до свого облікового запису.',
    [SuiteCoreStringKey.Email_LoginRequestSubjectTemplate]: '{Site} запит на вхід',
    [SuiteCoreStringKey.Email_ResetPasswordBody]:
      'Будь ласка, перейдіть за посиланням нижче, щоб скинути свій пароль.',
    [SuiteCoreStringKey.Email_ResetPasswordSubjectTemplate]: '{Site} скидання пароля',
    [SuiteCoreStringKey.Email_TokenFailedToSend]:
      'Не вдалося надіслати токен електронною поштою',
    [SuiteCoreStringKey.Email_TokenSent]:
      'Якщо існує обліковий запис з цією електронною поштою або ім’ям користувача, було надіслано електронний лист.',
    [SuiteCoreStringKey.EmailVerification_AlreadyVerified]:
      'Електронна пошта вже підтверджена',
    [SuiteCoreStringKey.EmailVerification_Failed]:
      'Не вдалося підтвердити електронну пошту. Будь ласка, спробуйте ще раз.',
    [SuiteCoreStringKey.EmailVerification_Resent]:
      'Лист для підтвердження електронної пошти успішно відправлено повторно',
    [SuiteCoreStringKey.EmailVerification_Success]:
      'Електронну пошту успішно підтверджено',
    [SuiteCoreStringKey.Error_ChallengeError]: 'Помилка під час створення виклику',
    [SuiteCoreStringKey.Error_DirectTokenAlreadyUsed]:
      'Токен прямого входу вже був використаний',
    [SuiteCoreStringKey.Error_Disposed]: 'Вже утилізовано',
    [SuiteCoreStringKey.Error_EciesError_InvalidMultipleMessageOverheadSize]:
      'Недійсні константи надлишкових витрат кількох повідомлень ECIES',
    [SuiteCoreStringKey.Error_EciesError_InvalidPublicKeyLength]:
      'Недійсна довжина відкритого ключа ECIES',
    [SuiteCoreStringKey.Error_EciesError_InvalidRecipientCount]:
      'Недійсний розмір кількості отримувачів ECIES',
    [SuiteCoreStringKey.Error_EciesErrorCrcError]: 'ECIES CRC помилка',
    [SuiteCoreStringKey.Error_EciesErrorDecryptionFailed]:
      'Не вдалося розшифрувати ECIES (помилка MAC або помилка заповнення)',
    [SuiteCoreStringKey.Error_EciesErrorEncryptionDataLengthMismatch]:
      'Неправильна довжина зашифрованих даних',
    [SuiteCoreStringKey.Error_EciesErrorEncryptionTypeMismatch]:
      'Неправильний тип шифрування',
    [SuiteCoreStringKey.Error_EciesErrorFileSizeTooLarge]: 'Розмір файлу занадто великий',
    [SuiteCoreStringKey.Error_EciesErrorInvalidAuthTagLength]:
      'Неправильна довжина тегу автентифікації',
    [SuiteCoreStringKey.Error_EciesErrorInvalidDataLength]: 'Неправильна довжина даних',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedDataLength]:
      'Неправильна довжина зашифрованих даних',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedKeyLength]:
      'Неправильна довжина зашифрованого ключа',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptionType]:
      'Неправильний тип шифрування',
    [SuiteCoreStringKey.Error_EciesErrorInvalidEphemeralPublicKey]:
      'Неправильний епімерний відкритий ключ',
    [SuiteCoreStringKey.Error_EciesErrorInvalidHeaderLength]:
      'Неправильна довжина заголовка',
    [SuiteCoreStringKey.Error_EciesErrorInvalidIVLength]: 'Неправильна довжина IV',
    [SuiteCoreStringKey.Error_EciesErrorInvalidMessageCrc]:
      'Неправильний CRC повідомлення',
    [SuiteCoreStringKey.Error_EciesErrorInvalidMnemonic]: 'Неправильний мнемонічний код',
    [SuiteCoreStringKey.Error_EciesErrorInvalidOperation]: 'Неправильна операція',
    [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientCount]:
      'Неправильна кількість отримувачів',
    [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientPublicKey]:
      'Неправильний відкритий ключ отримувача',
    [SuiteCoreStringKey.Error_EciesErrorInvalidSenderPublicKey]:
      'Неправильний відкритий ключ відправника',
    [SuiteCoreStringKey.Error_EciesErrorInvalidSignature]: 'Неправильна підпис',
    [SuiteCoreStringKey.Error_EciesErrorMessageLengthMismatch]:
      'Невідповідність довжини повідомлення',
    [SuiteCoreStringKey.Error_EciesErrorPrivateKeyNotLoaded]:
      'Приватний ключ не завантажено',
    [SuiteCoreStringKey.Error_EciesErrorRecipientKeyCountMismatch]:
      'Кількість отримувачів не відповідає кількості ключів',
    [SuiteCoreStringKey.Error_EciesErrorRecipientNotFound]: 'Отримувач не знайдений',
    [SuiteCoreStringKey.Error_EciesErrorSecretComputationFailed]:
      'Не вдалося обчислити спільний секрет під час операції ECIES',
    [SuiteCoreStringKey.Error_EciesErrorTooManyRecipients]: 'Забагато отримувачів',
    [SuiteCoreStringKey.Error_EciesFailedSharedSecret]:
      'Не вдалося обчислити спільний секрет',
    [SuiteCoreStringKey.Error_EmailSentTooRecentlyTemplate]: 'Токен електронної пошти надіслано занадто недавно. Будь ласка, спробуйте ще раз через ${timeRemaining} секунд.',
    [SuiteCoreStringKey.Error_FailedToCopy]: 'Помилка скопіювання тексту',
    [SuiteCoreStringKey.Error_FailedToCreateUserRoleTemplate]:
      "Не вдалося створити зв'язок між користувачем {USER_ID} та роллю {ROLE_ID}",
    [SuiteCoreStringKey.Error_FailedToCreateUserTemplate]:
      'Не вдалося створити користувача {NAME}',
    [SuiteCoreStringKey.Error_FailedToFindRoleTemplate]: 'Не вдалося знайти роль {ROLE}',
    [SuiteCoreStringKey.Error_FailedToLookupRoleTemplate]:
      'Не вдалося знайти ID ролі для {ROLE}',
    [SuiteCoreStringKey.Error_FailedToReEncryptMnemonicTemplate]:
      'Не вдалося повторно зашифрувати мнемонічний код з id: {ID}',
    [SuiteCoreStringKey.Error_FailedToStoreUserMnemonicTemplate]:
      'Не вдалося зберегти мнемоніку для користувача {NAME}',
    [SuiteCoreStringKey.Error_FailedToUpdateLastLoginTemplate]:
      'Не вдалося оновити lastLogin для користувача {userId}',
    [SuiteCoreStringKey.Error_FailedToUseDirectLoginToken]:
      'Не вдалося використати токен прямого входу',
    [SuiteCoreStringKey.Error_FecErrorDataRequired]: 'Дані, необхідні для FEC',
    [SuiteCoreStringKey.Error_FecErrorFecDecodingFailedTemplate]:
      'Помилка декодування FEC: {ERROR}',
    [SuiteCoreStringKey.Error_FecErrorFecEncodingFailedTemplate]:
      'Помилка кодування FEC: {ERROR}',
    [SuiteCoreStringKey.Error_FecErrorInputDataMustBeUint8Array]:
      'Дані введення повинні бути Uint8Array',
    [SuiteCoreStringKey.Error_FecErrorInvalidDataLengthTemplate]:
      'Недійсна довжина даних: {LENGTH}, очікувалося {EXPECTED}',
    [SuiteCoreStringKey.Error_FecErrorInvalidShardCounts]:
      'Недійсні підрахунки фрагментів',
    [SuiteCoreStringKey.Error_FecErrorInvalidShardsAvailableArray]:
      'Недійсний масив доступних фрагментів',
    [SuiteCoreStringKey.Error_FecErrorNotEnoughShardsAvailableTemplate]:
      'Недостатня кількість доступних фрагментів: {AVAILABLE}, потрібно {REQUIRED}',
    [SuiteCoreStringKey.Error_FecErrorParityDataCountMustBePositive]:
      'Кількість паритетних даних повинна бути позитивною',
    [SuiteCoreStringKey.Error_FecErrorParityDataRequired]:
      'Дані паритету є обов’язковими для операцій FEC',
    [SuiteCoreStringKey.Error_FecErrorShardSizeExceedsMaximumTemplate]:
      'Розмір фрагмента {SIZE} перевищує максимальний {MAXIMUM}',
    [SuiteCoreStringKey.Error_InvalidBackupCodeVersionTemplate]:
      '{version} є недійсною версією резервного коду',
    [SuiteCoreStringKey.Error_InvalidChallengeResponse]:
      'Недійсна або неправильна відповідь на виклик входу',
    [SuiteCoreStringKey.Error_InvalidChecksumConstants]:
      'Недійсні константи контрольної суми',
    [SuiteCoreStringKey.Error_InvalidEmail]: 'Недійсна електронна адреса.',
    [SuiteCoreStringKey.Error_InvalidEmailTemplate]: '{email} не є дійсною адресою електронної пошти.',
    [SuiteCoreStringKey.Error_InvalidEmailMissing]: 'Відсутня електронна адреса.',
    [SuiteCoreStringKey.Error_InvalidEmailWhitespace]:
      'Електронна адреса містить пробіли перед або після.',
    [SuiteCoreStringKey.Error_InvalidGuid]: 'Недійсний GUID.',
    [SuiteCoreStringKey.Error_InvalidGuidTemplate]: 'Недійсний GUID: {GUID}',
    [SuiteCoreStringKey.Error_InvalidGuidUnknownBrandTemplate]:
      'Невідома марка GUID: {BRAND}.',
    [SuiteCoreStringKey.Error_InvalidGuidUnknownLengthTemplate]:
      'Недійсна довжина GUID: {LENGTH}.',
    [SuiteCoreStringKey.Error_InvalidLanguageCodeTemplate]:
      'Недійсний код мови "{LANGUAGE}" надано. Повернення до мови за замовчуванням "{DEFAULT_LANGUAGE}".',
    [SuiteCoreStringKey.Error_InvalidMnemonicEncryptionKey]:
      'Ключ шифрування повинен бути довжиною 32 байти (64 шістнадцяткових символи).',
    [SuiteCoreStringKey.Error_LanguageNotFoundForEnumTemplate]:
      'Мова {lang} не знайдена для перерахування {enumName}',
    [SuiteCoreStringKey.Error_LanguageNotFoundInStringsTemplate]:
      'Language {LANG} not found in Strings',
    [SuiteCoreStringKey.Error_Login_ChallengeExpiredTemplate]:
      'Термін дії виклику входу закінчився через {LoginChallengeExpiration} ms',
    [SuiteCoreStringKey.Error_Login_DirectLoginNotAllowed]:
      'Прямий вхід не дозволений для цього облікового запису. Будь ласка, запитайте посилання для входу електронною поштою.',
    [SuiteCoreStringKey.Error_MemberErrorEncryptionDataTooLarge]:
      'Дані шифрування занадто великі.',
    [SuiteCoreStringKey.Error_MemberErrorFailedToConvertMemberData]:
      'Не вдалося конвертувати дані члена.',
    [SuiteCoreStringKey.Error_MemberErrorFailedToHydrateMember]:
      'Не вдалося гідратувати члена.',
    [SuiteCoreStringKey.Error_MemberErrorIncorrectOrInvalidPrivateKey]:
      'Неправильний або недійсний приватний ключ для відкритого ключа',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEmail]: 'Недійсна електронна пошта.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEmailWhitespace]:
      'Електронна пошта містить пробіли перед або після.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidEncryptionData]:
      'Недійсні дані шифрування.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberData]: 'Недійсні дані члена.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberName]: 'Недійсне ім’я члена.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberNameWhitespace]:
      'Ім’я члена містить пробіли перед або після.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMemberStatus]: 'Недійсний статус члена.',
    [SuiteCoreStringKey.Error_MemberErrorInvalidMnemonic]: 'Недійсний мнемонік гаманця.',
    [SuiteCoreStringKey.Error_MemberErrorMemberAlreadyExists]: 'Член вже існує.',
    [SuiteCoreStringKey.Error_MemberErrorMemberNotFound]: 'Член не знайдений.',
    [SuiteCoreStringKey.Error_MemberErrorMissingEmail]: 'Відсутня електронна пошта.',
    [SuiteCoreStringKey.Error_MemberErrorMissingEncryptionData]:
      'Відсутні дані шифрування.',
    [SuiteCoreStringKey.Error_MemberErrorMissingMemberName]: 'Відсутнє ім’я члена.',
    [SuiteCoreStringKey.Error_MemberErrorMissingPrivateKey]: 'Відсутній приватний ключ.',
    [SuiteCoreStringKey.Error_MemberErrorMissingVotingPrivateKey]:
      'Відсутній приватний ключ для голосування.',
    [SuiteCoreStringKey.Error_MemberErrorMissingVotingPublicKey]:
      'Відсутній відкритий ключ для голосування.',
    [SuiteCoreStringKey.Error_MemberErrorNoWallet]: 'Не завантажено жодного гаманця.',
    [SuiteCoreStringKey.Error_MemberErrorPrivateKeyRequiredToDeriveVotingKeyPair]:
      'Приватний ключ потрібен для отримання пари ключів для голосування.',
    [SuiteCoreStringKey.Error_MemberErrorWalletAlreadyLoaded]:
      'Гаманець вже завантажено.',
    [SuiteCoreStringKey.Error_MnemonicIsNullTemplate]: '{NAME} мнемонік є нульовим',
    [SuiteCoreStringKey.Error_NoTranslationsForEnumLanguageTemplate]:
      'Не знайдено перекладів для {enumName}.{value} в {language}',
    [SuiteCoreStringKey.Error_NoTranslationsForEnumTemplate]:
      'Не знайдено перекладів для перерахування: {enumName}',
    [SuiteCoreStringKey.Error_PasswordChange]: 'Помилка зміни пароля',
    [SuiteCoreStringKey.Error_Pbkdf2InvalidHashLength]:
      'Довжина хешу не відповідає очікуваній довжині',
    [SuiteCoreStringKey.Error_Pbkdf2InvalidSaltLength]:
      'Довжина солі не відповідає очікуваній довжині',
    [SuiteCoreStringKey.Error_RoleNotFoundTemplate]:
      'Не вдалося відобразити роль з ID {ID} на запис у переліку ролей',
    [SuiteCoreStringKey.Error_SecureStorageDecryptedValueChecksumMismatch]:
      'Контрольна сума розшифрованого значення не відповідає',
    [SuiteCoreStringKey.Error_SecureStorageDecryptedValueLengthMismatch]:
      'Довжина розшифрованого значення не відповідає очікуваній довжині',
    [SuiteCoreStringKey.Error_SecureStorageValueIsNull]:
      'Значення безпечного сховища є нульовим',
    [SuiteCoreStringKey.Error_SymmetricDataNullOrUndefined]:
      'Дані для шифрування не можуть бути null або undefined',
    [SuiteCoreStringKey.Error_SymmetricInvalidKeyLengthTemplate]:
      'Ключ шифрування повинен бути довжиною {KEY_BYTES} байт',
    [SuiteCoreStringKey.Error_UnknownEnumValueForEnumTemplate]:
      'Невідома значення перерахування: {value} для перерахування: {enumName}',
    [SuiteCoreStringKey.Error_EmailService_NotConfigured]: 'Сервіс електронної пошти не налаштовано. Викличте setEmailService() перед використанням middleware.',
    [SuiteCoreStringKey.Error_FailedToCreateEmailToken]: 'Не вдалося створити токен електронної пошти',
    [SuiteCoreStringKey.ForgotPassword_BackToLogin]: 'Повернутися до входу',
    [SuiteCoreStringKey.ForgotPassword_Error]:
      'Сталася помилка під час обробки вашого запиту.',
    [SuiteCoreStringKey.ForgotPassword_ForgotPassword]: 'Забули пароль',
    [SuiteCoreStringKey.ForgotPassword_InvalidToken]:
      'Недійсний або прострочений токен. Будь ласка, запросіть скидання пароля знову.',
    [SuiteCoreStringKey.ForgotPassword_ResetPassword]: 'Скинути пароль',
    [SuiteCoreStringKey.ForgotPassword_SendResetLink]: 'Надіслати посилання для скидання',
    [SuiteCoreStringKey.ForgotPassword_Success]:
      'Ваш пароль успішно скинуто. Тепер ви можете увійти з новим паролем.',
    [SuiteCoreStringKey.ForgotPassword_Title]: 'Забули пароль',
    [SuiteCoreStringKey.HavingTroubleContactSupport]:
      'Якщо у вас виникли проблеми, будь ласка, зв’яжіться з нашою службою підтримки або',
    [SuiteCoreStringKey.KeyFeatures_1]:
      'Безпечно зберігайте файли з правилами для автоматичного випуску або видалення.',
    [SuiteCoreStringKey.KeyFeatures_2]:
      'Створюйте "Канарки" для моніторингу вашої цифрової або фізичної активності.',
    [SuiteCoreStringKey.KeyFeatures_3]:
      'Дії спрацьовують на основі статусу канарки (напр., неактивність).',
    [SuiteCoreStringKey.KeyFeatures_4]: 'Коди примусу для негайних, екстрених дій.',
    [SuiteCoreStringKey.LanguageUpdate_Success]: 'Мову успішно оновлено',
    [SuiteCoreStringKey.LoggedIn_Success]: 'Успішний вхід',
    [SuiteCoreStringKey.Login_ChallengeGenerated]: 'Генерування виклику входу',
    [SuiteCoreStringKey.Login_DirectLogin]: 'Прямий вхід',
    [SuiteCoreStringKey.Login_DirectLoginWarning]:
      'Коли ім’я користувача або електронна пошта є недійсними, або користувач вимкнув прямий вхід, прямий вхід за викликом не вдасться, і буде повернено загальну помилку недійсного виклику, яка не розкриває, чи існує обліковий запис.',
    [SuiteCoreStringKey.Login_EmailChallengeSent]:
      'На вашу електронну пошту надіслано посилання для входу. Будь ласка, натисніть на нього, щоб увійти.',
    [SuiteCoreStringKey.Login_EmailLogin]: 'Вхід за електронною поштою',
    [SuiteCoreStringKey.Login_ForgotPassword]: 'Забули пароль?',
    [SuiteCoreStringKey.Login_LoginButton]: 'Увійти',
    [SuiteCoreStringKey.Login_SignUp]: 'Не маєте аккаунта? Зареєструйтеся',
    [SuiteCoreStringKey.Login_Title]: 'Вхід',
    [SuiteCoreStringKey.Login_UseEmail]: 'Використати електронну пошту',
    [SuiteCoreStringKey.Login_UseUsername]: "Використати ім'я користувача",
    [SuiteCoreStringKey.LogoutButton]: 'Вийти',
    [SuiteCoreStringKey.MemberRoleNotFound]: 'Роль учасника не знайдено',
    [SuiteCoreStringKey.MnemonicRecovery_Missing]:
      'Відсутні дані мнемонічного відновлення',
    [SuiteCoreStringKey.MnemonicRecovery_Success]: 'Відновлення мнемоніки успішне',
    [SuiteCoreStringKey.NoMembersYet]: 'Поки що немає учасників',
    [SuiteCoreStringKey.NoVerificationTokenProvided]: 'Токен підтвердження не надано.',
    [SuiteCoreStringKey.PasswordChange_IncorrectPassword]: 'Поточний пароль невірний',
    [SuiteCoreStringKey.PasswordChange_Success]: 'Пароль успішно змінено',
    [SuiteCoreStringKey.PasswordLogin_InvalidCurrentPassword]: 'Поточний пароль невірний',
    [SuiteCoreStringKey.PasswordLogin_Setup_Failure]: 'Налаштування входу за паролем не вдалося',
    [SuiteCoreStringKey.PasswordLogin_Setup_NotAvailable]: 'Вхід за паролем недоступний',
    [SuiteCoreStringKey.PasswordLogin_Setup_Success]: 'Налаштування входу за паролем успішне',
    [SuiteCoreStringKey.PasswordReset_AlreadySent]:
      'Посилання для скидання пароля вже було надіслано на вашу електронну пошту.',
    [SuiteCoreStringKey.PasswordReset_EmailNotVerified]:
      'Будь ласка, підтвердіть свою електронну адресу перед скиданням пароля.',
    [SuiteCoreStringKey.PasswordReset_Success]:
      'Якщо аккаунт з такою електронною поштою існує, посилання для скидання пароля було надіслано.',
    [SuiteCoreStringKey.ProceedToLogin]: 'Перейти до входу',
    [SuiteCoreStringKey.Register_RegisterButton]: 'Почати',
    [SuiteCoreStringKey.RegisterButton]: 'Зареєструватися',
    [SuiteCoreStringKey.Registration_ConfirmPassword]: 'Підтвердіть пароль',
    [SuiteCoreStringKey.Registration_Error]:
      'Під час реєстрації сталася несподівана помилка. Будь ласка, спробуйте ще раз.',
    [SuiteCoreStringKey.Registration_LoginLink]: 'Вже маєте аккаунт? Увійти',
    [SuiteCoreStringKey.Registration_MnemonicSuccess]:
      'Реєстрація успішна. Будь ласка, збережіть свій мнемонік безпечно. Він більше не буде показаний. Перевірте свою електронну пошту для підтвердження вашого аккаунта.',
    [SuiteCoreStringKey.Registration_RegisterButton]: 'Зареєструватися',
    [SuiteCoreStringKey.Registration_Registering]: 'Реєстрація...',
    [SuiteCoreStringKey.Registration_RegisteringMessage]:
      'Будь ласка, зачекайте, поки ми створимо ваш обліковий запис. Це може зайняти хвилину для генерації ключа та завершення реєстрації.',
    [SuiteCoreStringKey.Registration_Success]:
      'Реєстрація успішна. Будь ласка, перевірте свою електронну пошту для підтвердження вашого аккаунта.',
    [SuiteCoreStringKey.Registration_SuccessTitle]: 'Реєстрація успішна.',
    [SuiteCoreStringKey.RemoveAdmin_Success]: 'Адміністратора успішно видалено',
    [SuiteCoreStringKey.RemoveAdmin_Unauthorized]:
      'Ви не маєте права видаляти адміністратора',
    [SuiteCoreStringKey.RemoveMember_Success]: 'Учасника успішно видалено',
    [SuiteCoreStringKey.RemoveMember_Unauthorized]: 'Ви не маєте права видаляти учасника',
    [SuiteCoreStringKey.RequestNewVerificationEmail]:
      'запросіть новий лист для підтвердження',
    [SuiteCoreStringKey.SignInButton]: 'Увійти',
    [SuiteCoreStringKey.TestItemCountTemplate]: '{count} елементів',
    [SuiteCoreStringKey.TestTemplate]: 'Це тест: {variable1}, {AdministratorEmail}',
    [SuiteCoreStringKey.TestUsernameTemplate]: 'Це тестове ім’я користувача: {user}',
    [SuiteCoreStringKey.TogglePasswordVisibility]: 'показати/приховати пароль',
    [SuiteCoreStringKey.TokenCreate_Success]: 'Токен успішно створено',
    [SuiteCoreStringKey.TokenNotFoundTemplate]: 'Токен не знайдено: {TOKEN}',
    [SuiteCoreStringKey.TokenRefreshed]: 'Токен оновлено',
    [SuiteCoreStringKey.TokenType_AccountVerification]: 'Підтвердження аккаунта',
    [SuiteCoreStringKey.TokenType_LoginRequest]: 'Запит на вхід',
    [SuiteCoreStringKey.TokenType_PasswordReset]: 'Скидання пароля',
    [SuiteCoreStringKey.TokenType_MnemonicRecoveryRequest]: 'Запит на відновлення мнемоніки',
    [SuiteCoreStringKey.TokenType_PrivateKeyRequest]: 'Запит приватного ключа',
    [SuiteCoreStringKey.Validation_AccountLocked]: 'Аккаунт заблоковано',
    [SuiteCoreStringKey.Validation_AdminUserIdRequired]:
      'Потрібно вказати ID адміністратора',
    [SuiteCoreStringKey.Validation_ConfirmNewPassword]:
      'Будь ласка, підтвердіть новий пароль',
    [SuiteCoreStringKey.Validation_CreatedUserIdError]:
      'Ідентифікатор створеного користувача не існує або не відповідає новому ідентифікатору користувача.',
    [SuiteCoreStringKey.Validation_CurrencyCodeRequired]: 'Потрібно вказати код валюти',
    [SuiteCoreStringKey.Validation_CurrentPasswordRequired]:
      'Потрібно вказати поточний пароль',
    [SuiteCoreStringKey.Validation_DescriptionRequired]: 'Потрібно вказати опис',
    [SuiteCoreStringKey.Validation_EmailNotVerified]: 'Електронна пошта не підтверджена',
    [SuiteCoreStringKey.Validation_HmacRegex]:
      'HMAC має бути дійсною шестнадцятковою рядком.',
    [SuiteCoreStringKey.Validation_InvalidAdminUserId]: 'Недійсний ID адміністратора',
    [SuiteCoreStringKey.Validation_InvalidBackupCode]:
      'Недійсний або вже використаний код резервного копіювання',
    [SuiteCoreStringKey.Validation_InvalidChallenge]: 'Недійсний або неправильний виклик',
    [SuiteCoreStringKey.Validation_InvalidCurrencyCode]: 'Недійсний код валюти',
    [SuiteCoreStringKey.Validation_InvalidEncryptedMnemonic]:
      'Недійсна зашифрована мнемонічна фраза. Вона повинна бути дійсним шестнадцятковим рядком.',
    [SuiteCoreStringKey.Validation_InvalidGuid]: 'Недійсний GUID.',
    [SuiteCoreStringKey.Validation_InvalidLanguage]: 'Недійсна мова',
    [SuiteCoreStringKey.Validation_InvalidLanguageCode]: 'Недійсний код мови',
    [SuiteCoreStringKey.Validation_InvalidMemberId]: 'Недійсний ID учасника',
    [SuiteCoreStringKey.Validation_InvalidMnemonic]: 'Недійсна мнемонічна фраза.',
    [SuiteCoreStringKey.Validation_InvalidOldMnemonicEncryptionKey]:
      'Стара ключова фраза має бути 32 байти (64 шістнадцяткові символи).',
    [SuiteCoreStringKey.Validation_InvalidPassword]: 'Недійсний або неправильний пароль',
    [SuiteCoreStringKey.Validation_InvalidSignature]: 'Недійсна підпис',
    [SuiteCoreStringKey.Validation_InvalidUserId]: 'Недійсний ID користувача',
    [SuiteCoreStringKey.Validation_InvalidUserIdTemplate]: 'Недійсний ID користувача: {detail}',
    [SuiteCoreStringKey.Validation_IsMemberBoolean]:
      'isMember має бути булевим значенням',
    [SuiteCoreStringKey.Validation_MemberIdRequired]: 'Потрібно вказати ID учасника',
    [SuiteCoreStringKey.Validation_MnemonicOrPasswordRequired]:
      'Потрібно вказати або мнемонічну фразу, або пароль',
    [SuiteCoreStringKey.Validation_MnemonicRequired]: 'Мнемонічна фраза є обов’язковою.',
    [SuiteCoreStringKey.Validation_NameRequired]: "Потрібно вказати ім'я",
    [SuiteCoreStringKey.Validation_NewPasswordRequired]: 'Потрібно вказати новий пароль',
    [SuiteCoreStringKey.Validation_PasswordMatch]: 'Паролі мають збігатися',
    [SuiteCoreStringKey.Validation_PasswordMinLengthTemplate]:
      'Пароль має містити щонайменше {PasswordMinLength} символів',
    [SuiteCoreStringKey.Validation_PasswordRegexErrorTemplate]:
      'Пароль має містити щонайменше {PasswordMinLength} символів та включати хоча б одну літеру, одну цифру та один спеціальний символ (!@#$%^&*()_+-=[]{};\':"|,.<>/?)',
    [SuiteCoreStringKey.Validation_PasswordsDifferent]:
      'Новий пароль має відрізнятися від поточного',
    [SuiteCoreStringKey.Validation_Required]: 'Обов’язкове поле',
    [SuiteCoreStringKey.Validation_TimezoneInvalid]: 'Невірний часовий пояс',
    [SuiteCoreStringKey.Validation_TimezoneRequired]: 'Потрібно вказати часовий пояс',
    [SuiteCoreStringKey.Validation_TokenInvalid]:
      'Посилання для підтвердження електронної пошти вже використано або недійсне',
    [SuiteCoreStringKey.Validation_TokenMissing]: 'Токен не надано',
    [SuiteCoreStringKey.Validation_TokenRequired]: 'Потрібно вказати токен',
    [SuiteCoreStringKey.Validation_TokenValid]: 'Токен дійсний',
    [SuiteCoreStringKey.Validation_UserIdMustNotExist]:
      'Новий ідентифікатор користувача не повинен існувати.',
    [SuiteCoreStringKey.Validation_UserIdRequired]: 'Потрібно вказати ID користувача',
    [SuiteCoreStringKey.Validation_UsernameMaxLengthTemplate]:
      "Ім'я користувача має містити не більше {UsernameMaxLength} символів",
    [SuiteCoreStringKey.Validation_UsernameMinLengthTemplate]:
      "Ім'я користувача має містити щонайменше {UsernameMinLength} символів",
    [SuiteCoreStringKey.Validation_UsernameRegexErrorTemplate]:
      "Ім'я користувача має містити від {UsernameMinLength} до {UsernameMaxLength} символів і складатися лише з літер та цифр",
    [SuiteCoreStringKey.Validation_UserNotFound]:
      'Користувача не знайдено або він неактивний',
  },
};

// Create the component registration
export const SuiteCoreComponentRegistration: ComponentRegistration<
  SuiteCoreStringKey,
  string
> = {
  component: SuiteCoreComponent,
  strings: SuiteCoreComponentStrings,
};

/**
 * Initialize or get the User System i18n engine instance
 */
export function initSuiteCoreI18nEngine(
  instanceKey?: string,
): PluginI18nEngine<string> {
  const key = instanceKey || SuiteCoreI18nEngineKey;

  // Check if instance already exists
  let engine: PluginI18nEngine<string>;

  if (PluginI18nEngine.hasInstance(key)) {
    engine = PluginI18nEngine.getInstance<string>(key);
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
let _SuiteCoreI18nEngine: PluginI18nEngine<string> | null = null;

/**
 * Get the User System i18n engine instance (singleton)
 */
export function getSuiteCoreI18nEngine(): PluginI18nEngine<string> {
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
  language?: string,
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
  language?: string,
): string {
  const engine = getSuiteCoreI18nEngine();
  return engine.safeTranslate(SuiteCoreComponentId, key, variables, language);
}

/**
 * Register the User System component with an existing i18n engine
 */
export function registerSuiteCoreComponent(
  engine: PluginI18nEngine<string>,
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
