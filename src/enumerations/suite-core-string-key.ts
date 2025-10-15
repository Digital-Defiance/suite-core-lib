export enum SuiteCoreStringKey {
  // Common messages
  Common_UnexpectedError = 'common_unexpectedError',
  Common_Ready = 'common_ready',
  Common_Stopping = 'common_stopping',
  Common_Stopped = 'common_stopped',
  Common_Connecting = 'common_connecting',
  Common_Disconnected = 'common_disconnected',
  Common_MongoDB = 'common_mongodb',
  Common_ApplicationAndDatabase = 'common_applicationAndDatabase',
  Common_Unauthorized = 'common_unauthorized',
  Common_NoActiveRequest = 'common_noActiveRequest',
  Common_NoUserOnRequest = 'common_noUserOnRequest',
  Common_NoActiveResponse = 'common_noActiveResponse',

  // Validation errors
  Validation_UsernameInUse = 'validation_usernameInUse',
  Validation_EmailInUse = 'validation_emailInUse',
  Validation_InvalidUsername = 'validation_invalidUsername',
  Validation_InvalidEmail = 'validation_invalidEmail',
  Validation_PasswordTooWeak = 'validation_passwordTooWeak',
  Validation_InvalidCredentials = 'validation_invalidCredentials',
  Validation_UsernameOrEmailRequired = 'validation_usernameOrEmailRequired',
  Validation_TokenExpired = 'validation_tokenExpired',
  Validation_InvalidJwtToken = 'validation_invalidJwtToken',
  Validation_InvalidToken = 'validation_invalidToken',
  ValidationError = 'validation_error',
  Validation_MissingValidatedData = 'validation_missingValidatedData',
  Validation_MissingValidatedDataForField = 'validation_missingValidatedDataForField',
  Validation_MnemonicRegex = 'validation_mnemonicRegex',

  // Authentication errors
  Auth_UserNotFound = 'auth_userNotFound',
  Auth_AccountLocked = 'auth_accountLocked',
  Auth_TokenExpired = 'auth_tokenExpired',
  Auth_InvalidToken = 'auth_invalidToken',
  Auth_InsufficientPermissions = 'auth_insufficientPermissions',

  // User management errors
  User_CreationFailed = 'user_creationFailed',
  User_UpdateFailed = 'user_updateFailed',
  User_DeletionFailed = 'user_deletionFailed',
  User_NotFound = 'user_notFound',
  User_AlreadyExists = 'user_alreadyExists',

  // Account status errors
  Error_AccountStatus_Active = 'error_accountStatus_active',
  Error_AccountStatus_AdminLock = 'error_accountStatus_adminLock',
  Error_AccountStatus_PendingEmailVerification = 'error_accountStatus_pendingEmailVerification',

  // Error messages
  Error_EngineAlreadySet = 'error_engineAlreadySet',
  Error_EngineNotSet = 'error_engineNotSet',
  Error_LengthExceedsMaximum = 'error_lengthExceedsMaximum',
  Error_LengthIsInvalidType = 'error_lengthIsInvalidType',
  Error_FailedToStartApplication = 'error_failedToStartApplication',
  Error_InvalidModelKeyTemplate = 'error_invalidModelKeyTemplate',
  Error_ModelNotRegisteredTemplate = 'error_modelNotRegisteredTemplate',

  // Admin/system messages
  Admin_NoMongoDbClientFoundFallingBack = 'admin_noMongodbClientFoundFallingBack',
  Admin_TransactionFailedTransientTemplate = 'admin_transactionFailedTransientTemplate',
  Admin_TransactionTimeoutTemplate = 'admin_transactionTimeoutTemplate',
  Admin_StartingDatabaseInitialization = 'admin_startingDatabaseInitialization',
  Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate = 'admin_errorFailedToInitializeUserDatabaseTimeoutTemplate',
  Admin_EnvNotSetTemplate = 'admin_envNotSetTemplate',
}