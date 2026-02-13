/**
 * English (GB) translation strings for suite-core library.
 * Contains all localized error messages and user-facing text in British English.
 */
import { SuiteCoreStringKey } from '../enumerations';
import type { SuiteCoreStringKeyValue } from '../enumerations';

export const britishEnglishStrings: Record<SuiteCoreStringKeyValue, string> = {
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
  [SuiteCoreStringKey.Validation_EmailInUse]: 'Email address is already in use',
  [SuiteCoreStringKey.Validation_InvalidCredentials]:
    'Invalid username or password',
  [SuiteCoreStringKey.Validation_InvalidEmail]: 'Invalid email address format',
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
  [SuiteCoreStringKey.Error_ArrayLengthMismatch]:
    'Arrays must be of equal length',
  [SuiteCoreStringKey.Error_AccountStatus_Active]: 'Account is active',
  [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
    'Account is locked by an administrator',
  [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
    'Account is pending email verification',
  [SuiteCoreStringKey.Error_InvalidCertificatePathAfterResolution]:
    'Invalid certificate path after resolution',
  [SuiteCoreStringKey.Error_InvalidCertificatePathMustBeAbsolute]:
    'Invalid certificate path: must be absolute and cannot contain ..',
  [SuiteCoreStringKey.Error_InvalidViewsPathEscapesBaseDirectory]:
    'Invalid views path: escapes base directory',
  [SuiteCoreStringKey.Error_InvalidPathContainsParentDirectoryReference]:
    'Invalid path: contains parent directory reference',
  [SuiteCoreStringKey.Error_InvalidIndexPathEscapesBaseDirectory]:
    'Invalid index path: escapes base directory',
  [SuiteCoreStringKey.Error_InvalidAssetsPathEscapesBaseDirectory]:
    'Invalid assets path: escapes base directory',
  [SuiteCoreStringKey.Error_MissingRequiredEnvironmentVariableTemplate]:
    'Missing required environment variable: {key}',
  [SuiteCoreStringKey.Error_EmptyEnvironmentVariableTemplate]:
    'Environment variable {key} is empty',
  [SuiteCoreStringKey.Error_SystemUserMustBeSystemMemberType]:
    'System user must be of MemberType.System',
  [SuiteCoreStringKey.Error_JwtSecretMustBe64CharHexString]:
    'JWT_SECRET must be a 64 character hex string',
  [SuiteCoreStringKey.Error_MnemonicHmacSecretMustBe64CharHexString]:
    'MNEMONIC_HMAC_SECRET must be a 64 character hex string',
  [SuiteCoreStringKey.Error_MnemonicEncryptionKeyMustBe64CharHexString]:
    'MNEMONIC_ENCRYPTION_KEY must be a 64 character hex string',
  [SuiteCoreStringKey.Error_AdminMnemonicMustBeValidMnemonicPhrase]:
    'ADMIN_MNEMONIC must be a valid mnemonic phrase',
  [SuiteCoreStringKey.Error_MemberMnemonicMustBeValidMnemonicPhrase]:
    'MEMBER_MNEMONIC must be a valid mnemonic phrase',
  [SuiteCoreStringKey.Error_Pbkdf2IterationsMustBeGreaterThanZero]:
    'PBKDF2_ITERATIONS must be greater than 0',
  [SuiteCoreStringKey.Error_LetsEncryptMaintainerEmailRequired]:
    "LETS_ENCRYPT_EMAIL is required when Let's Encrypt is enabled",
  [SuiteCoreStringKey.Error_LetsEncryptHostnamesRequired]:
    "LETS_ENCRYPT_HOSTNAMES is required when Let's Encrypt is enabled",
  [SuiteCoreStringKey.Error_LetsEncryptInvalidHostnameTemplate]:
    'Invalid hostname in LETS_ENCRYPT_HOSTNAMES: {hostname}',
  [SuiteCoreStringKey.Error_InvalidCspOrHelmetOptionsProvided]:
    'Invalid CSP or Helmet options provided.',
  [SuiteCoreStringKey.Error_EnvironmentIsRequired]: 'Environment is required',
  [SuiteCoreStringKey.Error_ApiRouterFactoryIsRequired]:
    'API router factory is required',
  [SuiteCoreStringKey.Error_SchemaMapFactoryIsRequired]:
    'Schema map factory is required',
  [SuiteCoreStringKey.Error_DatabaseInitFunctionIsRequired]:
    'Database init function is required',
  [SuiteCoreStringKey.Error_InitResultHashFunctionIsRequired]:
    'Init result hash function is required',
  [SuiteCoreStringKey.Error_ServiceIsNotRegisteredTemplate]:
    'Service {key} not registered',
  [SuiteCoreStringKey.Validation_ValueIsRequired]: 'Value is required',
  [SuiteCoreStringKey.Validation_ValueMustBeOneOfTheAvailableOptions]:
    'Value must be one of the available options',
  [SuiteCoreStringKey.Error_UnexpectedErrorInAuthenticateCrypto]:
    'Unexpected error in authenticateCrypto',
  [SuiteCoreStringKey.Common_StackTrace]: 'Stack trace',
  [SuiteCoreStringKey.Common_UnexpectedError]: 'An unexpected error occurred',
  [SuiteCoreStringKey.Common_Ready]: 'Ready',
  [SuiteCoreStringKey.Common_ClearMnemonic]: 'Clear Mnemonic',
  [SuiteCoreStringKey.Common_ClearWallet]: 'Clear Wallet',
  [SuiteCoreStringKey.Common_Stopping]: 'Stopping',
  [SuiteCoreStringKey.Common_Stopped]: 'Stopped',
  [SuiteCoreStringKey.Common_Connecting]: 'Connecting',
  [SuiteCoreStringKey.Common_Disconnected]: 'Disconnected',
  [SuiteCoreStringKey.Common_MongoDB]: 'MongoDB',
  [SuiteCoreStringKey.Common_ApplicationAndDatabase]:
    'Application and Database',
  [SuiteCoreStringKey.Common_Unauthorized]: 'Unauthorized',
  [SuiteCoreStringKey.Common_SiteTemplate]: '{Site}',
  [SuiteCoreStringKey.Common_SiteTaglineTemplate]: '{SiteTagline}',
  [SuiteCoreStringKey.Common_SiteDescriptionTemplate]: '{SiteDescription}',
  [SuiteCoreStringKey.Common_NoActiveRequest]: 'No active request',
  [SuiteCoreStringKey.Common_NoUserOnRequest]: 'No user on request',
  [SuiteCoreStringKey.Common_NoActiveResponse]: 'No active response',
  [SuiteCoreStringKey.Error_VerificationFailed]: 'Verification failed',
  [SuiteCoreStringKey.Error_ChildRoleCannotBeASystemRole]:
    'A child role cannot be a system role',
  [SuiteCoreStringKey.Error_ChildRoleCannotBeAnAdminRole]:
    'A child role cannot be an admin role',
  [SuiteCoreStringKey.Error_EngineAlreadySet]: 'I18n engine already set',
  [SuiteCoreStringKey.Error_EngineNotSet]: 'I18n engine not set',
  [SuiteCoreStringKey.Error_LengthExceedsMaximum]: 'Length exceeds maximum',
  [SuiteCoreStringKey.Error_LengthIsInvalidType]: 'Length is invalid type',
  [SuiteCoreStringKey.Error_FailedToStartApplication]:
    'Failed to start application',
  [SuiteCoreStringKey.Error_InvalidModelKeyTemplate]:
    'Invalid model key: {modelKey}',
  [SuiteCoreStringKey.Error_ModelNotRegisteredTemplate]:
    'Model not registered: {modelName}',
  [SuiteCoreStringKey.Error_FailedToCreateRoleTemplate]:
    'Failed to create {NAME} role',
  [SuiteCoreStringKey.Error_IndexFileNotFoundTemplate]:
    'Index file not found: {path}',
  [SuiteCoreStringKey.Error_AppDoesNotAppearToBeRunningWithinDistTemplate]:
    'App does not appear to be running within a /dist/ directory: {dir}',
  [SuiteCoreStringKey.Error_ValidationFunctionNotRegisteredInAllowlist]:
    'Validation function not registered in allowlist',
  [SuiteCoreStringKey.Error_RecursiveErrorHandlingDetected]:
    'Recursive error handling detected',
  [SuiteCoreStringKey.ValidationError]: 'Validation Error',
  [SuiteCoreStringKey.Validation_MissingValidatedData]:
    'Missing validated data',
  [SuiteCoreStringKey.Validation_MissingValidatedDataForFieldTemplate]:
    'Missing validated data for field: {field}',
  [SuiteCoreStringKey.Validation_MnemonicRegex]: 'Invalid mnemonic format',
  [SuiteCoreStringKey.Admin_DotEnvFormat]:
    'Below are the credentials to add to your API .env file',
  [SuiteCoreStringKey.Admin_EndDotEnvFormat]: 'End of .env credentials',
  [SuiteCoreStringKey.Admin_Error_InvalidMongoUri]: 'Invalid Mongo URI',
  [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]:
    'No MongoDB client found, falling back',
  [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]:
    'Transaction failed (transient): {error}',
  [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]:
    'Transaction timeout after {timeMs}ms',
  [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]:
    'Starting database initialization',
  [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]:
    'Failed to initialize user database (timeout after {timeMs}ms)',
  [SuiteCoreStringKey.Admin_EnvNotSetTemplate]:
    'Environment variable not set: {variable}',
  [SuiteCoreStringKey.Admin_ServingRoute]: 'Serving route',
  [SuiteCoreStringKey.Admin_AccountCredentials]:
    'ACCOUNT CREDENTIALS (Save to Password Manager)',
  [SuiteCoreStringKey.Admin_CreatingUserTemplate]:
    'Creating {TYPE} user {NAME} and generating keys',
  [SuiteCoreStringKey.Admin_DatabaseInitializedWithOptionsHashTemplate]:
    'Database initialized with options hash: {hash}',
  [SuiteCoreStringKey.Admin_DatabaseAlreadyInitialized]:
    'Database already initialized',
  [SuiteCoreStringKey.Admin_DatabaseDropped]: 'Database collections dropped',
  [SuiteCoreStringKey.Admin_DevelopmentDatabase]: 'Development Database',
  [SuiteCoreStringKey.Admin_DroppingDatabase]: 'Dropping database',
  [SuiteCoreStringKey.Admin_EndCredentials]: 'END CREDENTIALS',
  [SuiteCoreStringKey.Admin_EnvDirSetButMissingTemplate]:
    '{VAR} is set to {PATH} but the directory is missing',
  [SuiteCoreStringKey.Admin_EnvFileNotFound]:
    '.env file not found, skipping loading',
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
  [SuiteCoreStringKey.Admin_Error_FailedToLoadEnvironment]:
    'Failed to load .env file',
  [SuiteCoreStringKey.Admin_Error_FailedToSetTransactionTimeout]:
    'Unable to set transaction timeout, no database connection',
  [SuiteCoreStringKey.Admin_Error_NotConnectedToMongoDB]:
    'MongoDB connection not established as expected.',
  [SuiteCoreStringKey.Admin_Error_SchemaMapIsNotLoadedYet]:
    'schemaMap is not loaded yet. call start() first',
  [SuiteCoreStringKey.Admin_Error_UnhandledErrorInMain]:
    'Unhandled error in main',
  [SuiteCoreStringKey.Admin_ErrorCleaningUpTestData]:
    'Error cleaning up test data',
  [SuiteCoreStringKey.Admin_ErrorClosingConnection]: 'Error closing connection',
  [SuiteCoreStringKey.Admin_ErrorStoppingMongoServer]:
    'Error stopping mongo server',
  [SuiteCoreStringKey.Admin_FailedToSetUpTestDatabase]:
    'Failed to setup test database',
  [SuiteCoreStringKey.Admin_LoadingEnvironmentTemplate]:
    'Loading environment from {PATH}',
  [SuiteCoreStringKey.Admin_MakeSureToSetItInEnv]:
    'Make sure to set it in your .env file',
  [SuiteCoreStringKey.Admin_ProceedingToDbInitialization]:
    'Proceeding to database initialization...',
  [SuiteCoreStringKey.Admin_RoleCreatedTemplate]:
    'Role {ROLE} created successfully with ID {ID}',
  [SuiteCoreStringKey.Admin_SettingUp]: 'Setting up...',
  [SuiteCoreStringKey.Admin_SettingUpUsersAndRoles]:
    'Setting up users and roles',
  [SuiteCoreStringKey.Admin_SetTransactionTimeoutSuccessfully]:
    'Transaction timeout set successfully',
  [SuiteCoreStringKey.Admin_StartingDbInitialization]:
    'Starting database initialization...',
  [SuiteCoreStringKey.Admin_StringNotFoundForLanguageTemplate]:
    'String {NAME} not found for language {LANG}',
  [SuiteCoreStringKey.Admin_TearingDown]: 'Tearing down...',
  [SuiteCoreStringKey.Admin_TransactionsEnabledDisabledTemplate]:
    'Transactions are {STATE}',
  [SuiteCoreStringKey.Admin_UserDatabaseInitialized]:
    'User database initialized',
  [SuiteCoreStringKey.Admin_UserRoleCreatedTemplate]:
    'User-role relationship created: User {USERID} -> Role {ROLEID}',
  [SuiteCoreStringKey.Admin_CredentialsWrittenToEnv]:
    'Credentials written to {path}',
  [SuiteCoreStringKey.Admin_UsingMongoDbMemoryWithTransactions]:
    'Using MongoDB Memory Server with transaction support',
  [SuiteCoreStringKey.AdminRoleNotFound]: 'Admin role not found',
  [SuiteCoreStringKey.ApiAccess_Title]: 'Your Access Token',
  [SuiteCoreStringKey.ApiAccess_TokenNotAvailable]: 'Token not available',
  [SuiteCoreStringKey.BackupCodes_FailedToFetch]:
    'Failed to fetch backup codes',
  [SuiteCoreStringKey.BackupCodes_FailedToGenerate]:
    'Failed to generate backup codes',
  [SuiteCoreStringKey.BackupCodeRecovery_CodesRemainingTemplate]:
    '{count} backup codes remaining',
  [SuiteCoreStringKey.BackupCodeRecovery_GenerateNewCodes]:
    'Generate New Backup Codes',
  [SuiteCoreStringKey.BackupCodeRecovery_Login]: 'Login with Backup Code',
  [SuiteCoreStringKey.BackupCodeRecovery_RecoverMnemonic]:
    'Recover your mnemonic',
  [SuiteCoreStringKey.BackupCodeRecovery_Success]:
    'Backup code recovery successful.',
  [SuiteCoreStringKey.BackupCodeRecovery_Title]: 'Backup Code Login',
  [SuiteCoreStringKey.BackupCodeRecovery_YourNewCodes]:
    'Here are your new backup codes. Please write them down in a safe location, they cannot be viewed again.',
  [SuiteCoreStringKey.CannotRemoveLastAdmin]: 'Cannot remove last admin',
  [SuiteCoreStringKey.ChangePassword_ChangePasswordButton]: 'Change Password',
  [SuiteCoreStringKey.Common_Success]: 'Success',
  [SuiteCoreStringKey.Common_Admin]: 'Admin',
  [SuiteCoreStringKey.Common_Amount]: 'Amount',
  [SuiteCoreStringKey.Common_BackupCode]: 'Backup Code',
  [SuiteCoreStringKey.Common_BackupCodes]: 'Backup Codes',
  [SuiteCoreStringKey.Common_Cancel]: 'Cancel',
  [SuiteCoreStringKey.Common_ChangePassword]: 'Change Password',
  [SuiteCoreStringKey.Common_ChangingPassword]: 'Changing password',
  [SuiteCoreStringKey.Common_CheckingAuthentication]: 'Checking authentication',
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
  [SuiteCoreStringKey.Common_NotValidCurrencyTemplate]:
    '{currency} is not a valid currency code',
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
  [SuiteCoreStringKey.Common_UserID]: 'User ID',
  [SuiteCoreStringKey.Common_UserCreatedTemplate]:
    '{TYPE} user {NAME} created successfully',
  [SuiteCoreStringKey.Common_Username]: 'Username',
  [SuiteCoreStringKey.Common_Using]: 'Using',
  [SuiteCoreStringKey.Common_Wallet]: 'Wallet',
  [SuiteCoreStringKey.Common_WalletExpiration]: 'Wallet Expiration',
  [SuiteCoreStringKey.Dashboard_YourDashboard]: 'Your Dashboard',
  [SuiteCoreStringKey.Email_ConfirmationBody]:
    'Please click the link below to confirm your email.',
  [SuiteCoreStringKey.Email_ConfirmationSubjectTemplate]:
    '{Site} email confirmation',
  [SuiteCoreStringKey.Email_LinkExpiresInTemplate]:
    'Link expires in {EmailTokenResendIntervalMinutes} minutes.',
  [SuiteCoreStringKey.Email_LoginRequestBody]:
    'Please click the link below to log in to your account.',
  [SuiteCoreStringKey.Email_LoginRequestSubjectTemplate]:
    '{Site} login request',
  [SuiteCoreStringKey.Email_ResetPasswordBody]:
    'Please click the link below to reset your password.',
  [SuiteCoreStringKey.Email_ResetPasswordSubjectTemplate]:
    '{Site} password reset',
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
  [SuiteCoreStringKey.Error_NoPasswordOrMnemonicProvided]:
    'No password or mnemonic provided',
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
  [SuiteCoreStringKey.Error_EciesErrorInvalidAuthTagLength]:
    'Invalid auth tag length',
  [SuiteCoreStringKey.Error_EciesErrorInvalidDataLength]: 'Invalid data length',
  [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedDataLength]:
    'Invalid encrypted data length',
  [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedKeyLength]:
    'Invalid encrypted key length',
  [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptionType]:
    'Invalid encryption type',
  [SuiteCoreStringKey.Error_EciesErrorInvalidEphemeralPublicKey]:
    'Invalid ephemeral public key',
  [SuiteCoreStringKey.Error_EciesErrorInvalidHeaderLength]:
    'Invalid header length',
  [SuiteCoreStringKey.Error_EciesErrorInvalidIVLength]: 'Invalid IV length',
  [SuiteCoreStringKey.Error_EciesErrorInvalidMessageCrc]: 'Invalid message CRC',
  [SuiteCoreStringKey.Error_EciesErrorInvalidMnemonic]: 'Invalid mnemonic',
  [SuiteCoreStringKey.Error_EciesErrorInvalidOperation]: 'Invalid operation',
  [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientCount]:
    'Invalid recipient count',
  [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientPublicKey]:
    'Invalid recipient public key provided for encryption',
  [SuiteCoreStringKey.Error_EciesErrorInvalidSenderPublicKey]:
    'Invalid sender public key',
  [SuiteCoreStringKey.Error_EciesErrorInvalidSignature]: 'Invalid signature',
  [SuiteCoreStringKey.Error_EciesErrorMessageLengthMismatch]:
    'Message length mismatch',
  [SuiteCoreStringKey.Error_EciesErrorPrivateKeyNotLoaded]:
    'Private key not loaded',
  [SuiteCoreStringKey.Error_EciesErrorRecipientKeyCountMismatch]:
    'Recipient count does not match key count',
  [SuiteCoreStringKey.Error_EciesErrorRecipientNotFound]:
    'Recipient not found in recipient IDs',
  [SuiteCoreStringKey.Error_EciesErrorSecretComputationFailed]:
    'Failed to compute shared secret during ECIES operation',
  [SuiteCoreStringKey.Error_EciesErrorTooManyRecipients]:
    'Too many recipients: exceeds maximum allowed',
  [SuiteCoreStringKey.Error_EciesFailedSharedSecret]:
    'Failed to compute shared secret',
  [SuiteCoreStringKey.Error_EmailSentTooRecentlyTemplate]:
    'Email token sent too recently. Please try again in ${timeRemaining} seconds.',
  [SuiteCoreStringKey.Error_FailedToCopy]: 'Failed to copy text',
  [SuiteCoreStringKey.Error_FailedToCreateUserRoleTemplate]:
    'Failed to create user-role relationship for user {USER_ID} and role {ROLE_ID}',
  [SuiteCoreStringKey.Error_FailedToCreateUserTemplate]:
    'Failed to create {NAME} user',
  [SuiteCoreStringKey.Error_FailedToFindRoleTemplate]:
    'Failed to find role {ROLE}',
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
  [SuiteCoreStringKey.Error_InvalidChecksumConstants]:
    'Invalid checksum constants',
  [SuiteCoreStringKey.Error_InvalidEmail]: 'Invalid email.',
  [SuiteCoreStringKey.Error_InvalidEmailTokenType]: 'Invalid email token type.',
  [SuiteCoreStringKey.Error_InvalidEmailTemplate]:
    '{email} is not a valid email address.',
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
  [SuiteCoreStringKey.Error_Login_DirectChallengeNotEnabled]:
    'Direct challenge login is not enabled for this account. Please use email login or contact support.',
  [SuiteCoreStringKey.Error_Login_PasswordLoginNotEnabled]:
    'Password login is not enabled for this account. Please use email login or contact support.',
  [SuiteCoreStringKey.Error_Login_PasswordLoginNotSetup]:
    'Password login is not set up for this browser. Please use email login or contact support.',
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
  [SuiteCoreStringKey.Error_MemberErrorInvalidMemberData]:
    'Invalid member data.',
  [SuiteCoreStringKey.Error_MemberErrorInvalidMemberName]:
    'Invalid member name.',
  [SuiteCoreStringKey.Error_MemberErrorInvalidMemberNameWhitespace]:
    'Member name contains trailing or leading whitespace.',
  [SuiteCoreStringKey.Error_MemberErrorInvalidMemberStatus]:
    'Invalid member status.',
  [SuiteCoreStringKey.Error_MemberErrorInvalidMnemonic]:
    'Invalid wallet mnemonic.',
  [SuiteCoreStringKey.Error_MemberErrorMemberAlreadyExists]:
    'Member already exists.',
  [SuiteCoreStringKey.Error_MemberErrorMemberNotFound]: 'Member not found.',
  [SuiteCoreStringKey.Error_MemberErrorMissingEmail]: 'Missing email.',
  [SuiteCoreStringKey.Error_MemberErrorMissingEncryptionData]:
    'Missing encryption data.',
  [SuiteCoreStringKey.Error_MemberErrorMissingMemberName]:
    'Missing member name.',
  [SuiteCoreStringKey.Error_MemberErrorMissingPrivateKey]:
    'Missing private key.',
  [SuiteCoreStringKey.Error_MemberErrorMissingVotingPrivateKey]:
    'Missing voting private key.',
  [SuiteCoreStringKey.Error_MemberErrorMissingVotingPublicKey]:
    'Missing voting public key.',
  [SuiteCoreStringKey.Error_MemberErrorNoWallet]: 'No wallet loaded.',
  [SuiteCoreStringKey.Error_MemberErrorPrivateKeyRequiredToDeriveVotingKeyPair]:
    'Private key required to derive voting key pair.',
  [SuiteCoreStringKey.Error_MemberErrorWalletAlreadyLoaded]:
    'Wallet already loaded.',
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
  [SuiteCoreStringKey.Error_SecureStorageValueIsNull]:
    'Secure storage value is null',
  [SuiteCoreStringKey.Error_SymmetricDataNullOrUndefined]:
    'Data to encrypt cannot be null or undefined',
  [SuiteCoreStringKey.Error_SymmetricInvalidKeyLengthTemplate]:
    'Encryption key must be {KEY_BYTES} bytes long',
  [SuiteCoreStringKey.Error_UnknownEnumValueForEnumTemplate]:
    'Unknown enum value: {value} for enum: {enumName}',
  [SuiteCoreStringKey.Error_MustMatchRegexTemplate]:
    '{value} must match the required format',
  [SuiteCoreStringKey.Error_EmailService_NotConfigured]:
    'Email service not configured. Call setEmailService() before using middleware.',
  [SuiteCoreStringKey.Error_FailedToCreateEmailToken]:
    'Failed to create email token',
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
  [SuiteCoreStringKey.KeyFeatures_4]:
    'Duress codes for immediate, emergency actions.',
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
  [SuiteCoreStringKey.Login_UseEmailAddress]: 'Use Email Address',
  [SuiteCoreStringKey.Login_UseUsername]: 'Use Username',
  [SuiteCoreStringKey.LogoutButton]: 'Logout',
  [SuiteCoreStringKey.MemberRoleNotFound]: 'Member role not found',
  [SuiteCoreStringKey.SystemRoleNotFound]: 'System role not found',
  [SuiteCoreStringKey.MnemonicRecovery_Missing]:
    'Mnemonic recovery data missing',
  [SuiteCoreStringKey.MnemonicRecovery_Success]:
    'Mnemonic recovered successfully',
  [SuiteCoreStringKey.NoMembersYet]: 'No members yet',
  [SuiteCoreStringKey.NoVerificationTokenProvided]:
    'No verification token provided.',
  [SuiteCoreStringKey.PasswordChange_IncorrectPassword]:
    'Current password is incorrect',
  [SuiteCoreStringKey.PasswordLogin_InvalidCurrentPassword]:
    'Current password is incorrect',
  [SuiteCoreStringKey.PasswordChange_Success]: 'Password changed successfully',
  [SuiteCoreStringKey.PasswordLogin_Setup_Failure]:
    'Password login setup failed',
  [SuiteCoreStringKey.PasswordLogin_Setup_NotAvailable]:
    'Password login not available',
  [SuiteCoreStringKey.PasswordLogin_Setup_Success]:
    'Password login setup successful',
  [SuiteCoreStringKey.PasswordReset_AlreadySent]:
    'Password reset link has already been sent to your email.',
  [SuiteCoreStringKey.PasswordReset_EmailNotVerified]:
    'Please verify your email address before resetting your password.',
  [SuiteCoreStringKey.PasswordReset_Success]:
    'If an account with that email exists, a password reset link has been sent.',
  [SuiteCoreStringKey.PasswordReset_Title]: 'Password Reset',
  [SuiteCoreStringKey.PasswordReset_Button]: 'Reset Password',
  [SuiteCoreStringKey.ProceedToLogin]: 'Proceed to login',
  [SuiteCoreStringKey.Register_RegisterButton]: 'Get Started',
  [SuiteCoreStringKey.RegisterButton]: 'Register',
  [SuiteCoreStringKey.Registration_ConfirmPassword]: 'Confirm Password',
  [SuiteCoreStringKey.Registration_Error]:
    'An unexpected error occurred during registration. Please try again.',
  [SuiteCoreStringKey.Registration_LoginLink]:
    'Already have an account? Log in',
  [SuiteCoreStringKey.Registration_MnemonicSuccess]:
    'Registration successful. Please save your mnemonic securely. It will not be shown again. Please check your email to verify your account.',
  [SuiteCoreStringKey.Registration_RegisterButton]: 'Register',
  [SuiteCoreStringKey.Registration_Registering]: 'Registering...',
  [SuiteCoreStringKey.Registration_RegisteringMessage]:
    'Please wait while we create your account. This may take a minute to generate a key and complete the registration.',
  [SuiteCoreStringKey.Registration_Success]:
    'Registration successful. Please check your email to verify your account.',
  [SuiteCoreStringKey.Registration_SuccessTitle]: 'Registration successful.',
  [SuiteCoreStringKey.Registration_DirectChallengeLabel]:
    'Enable Direct Challenge Login',
  [SuiteCoreStringKey.Registration_DirectChallengeHelper]:
    'Allow logging in directly with your mnemonic phrase without email verification. This is more convenient but less secure if your mnemonic is compromised.',
  [SuiteCoreStringKey.RemoveAdmin_Success]: 'Admin removed successfully',
  [SuiteCoreStringKey.RemoveAdmin_Unauthorized]:
    'Unauthorized to remove an admin',
  [SuiteCoreStringKey.RemoveMember_Success]: 'Member removed successfully',
  [SuiteCoreStringKey.RemoveMember_Unauthorized]:
    'Unauthorized to remove a member',
  [SuiteCoreStringKey.RequestNewVerificationEmail]:
    'Request a new verification email',
  [SuiteCoreStringKey.Settings_SaveSuccess]: 'Settings saved successfully',
  [SuiteCoreStringKey.Settings_Title]: 'Settings',
  [SuiteCoreStringKey.Settings_EmailHelper]:
    'Changing your email address will require re-verification. We will send a verification email to the new address to confirm. Please check your inbox after saving changes and follow the instructions in the email to verify your new address.',
  [SuiteCoreStringKey.Settings_SiteLanguage]: 'Site Language',
  [SuiteCoreStringKey.Settings_Currency]: 'Preferred Currency',
  [SuiteCoreStringKey.Settings_DarkMode]: 'Dark Mode',
  [SuiteCoreStringKey.Settings_DarkModeSuccess]:
    'Dark mode updated successfully',
  [SuiteCoreStringKey.Settings_Saving]: 'Saving settings...',
  [SuiteCoreStringKey.Settings_Save]: 'Save Settings',
  [SuiteCoreStringKey.Settings_RetrievedSuccess]:
    'Settings retrieved successfully',
  [SuiteCoreStringKey.Settings_UpdateFailed]: 'Failed to update settings',
  [SuiteCoreStringKey.Settings_RetrieveFailure]: 'Failed to retrieve settings',
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
  [SuiteCoreStringKey.TokenType_MnemonicRecoveryRequest]:
    'Mnemonic Recovery Request',
  [SuiteCoreStringKey.TokenType_PrivateKeyRequest]: 'Private Key Request',
  [SuiteCoreStringKey.Validation_AccountLocked]: 'Account is locked',
  [SuiteCoreStringKey.Validation_AdminUserIdRequired]:
    'Admin user ID is required',
  [SuiteCoreStringKey.Validation_ConfirmNewPassword]:
    'Please confirm your new password',
  [SuiteCoreStringKey.Validation_CreatedUserIdError]:
    'The created by user ID does not exist and does not match the new user ID.',
  [SuiteCoreStringKey.Validation_CurrencyCodeRequired]:
    'Currency code is required',
  [SuiteCoreStringKey.Validation_CurrentPasswordRequired]:
    'Current password is required',
  [SuiteCoreStringKey.Validation_DescriptionRequired]:
    'Description is required',
  [SuiteCoreStringKey.Validation_EmailNotVerified]: 'Email is not verified',
  [SuiteCoreStringKey.Validation_HmacRegex]:
    'HMAC must be a valid hexadecimal string.',
  [SuiteCoreStringKey.Validation_InvalidAdminUserId]: 'Invalid admin user ID',
  [SuiteCoreStringKey.Validation_InvalidBackupCode]:
    'Invalid or already used backup code',
  [SuiteCoreStringKey.Validation_InvalidChallenge]:
    'Invalid or incorrect challenge',
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
  [SuiteCoreStringKey.Validation_InvalidPassword]:
    'Invalid or incorrect password',
  [SuiteCoreStringKey.Validation_InvalidSignature]: 'Invalid signature',
  [SuiteCoreStringKey.Validation_InvalidUserId]: 'Invalid user ID',
  [SuiteCoreStringKey.Validation_InvalidUserIdTemplate]:
    'Invalid user ID: {detail}',
  [SuiteCoreStringKey.Validation_IsMemberBoolean]: 'isMember must be a boolean',
  [SuiteCoreStringKey.Validation_MemberIdRequired]: 'Member ID is required',
  [SuiteCoreStringKey.Validation_MnemonicOrPasswordRequired]:
    'Either mnemonic or password is required',
  [SuiteCoreStringKey.Validation_MnemonicRequired]: 'Mnemonic is required.',
  [SuiteCoreStringKey.Validation_NameRequired]: 'Name is required',
  [SuiteCoreStringKey.Validation_NewPasswordRequired]:
    'New password is required',
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
  [SuiteCoreStringKey.Validation_UserIdMustNotExist]:
    'The new user ID must not exist.',
  [SuiteCoreStringKey.Validation_UserIdRequired]: 'User ID is required',
  [SuiteCoreStringKey.Validation_UsernameMaxLengthTemplate]:
    'Username must be at most {UsernameMaxLength} characters',
  [SuiteCoreStringKey.Validation_UsernameMinLengthTemplate]:
    'Username must be at least {UsernameMinLength} characters',
  [SuiteCoreStringKey.Validation_UsernameRegexErrorTemplate]:
    'Username must be {UsernameMinLength}-{UsernameMaxLength} characters long and contain only letters and numbers',
  [SuiteCoreStringKey.Validation_UserNotFound]: 'User not found or inactive',
};
