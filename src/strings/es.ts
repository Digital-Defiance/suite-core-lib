import { SuiteCoreStringKey } from '../enumerations';

export const spanishStrings: Record<SuiteCoreStringKey, string> = {
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
    [SuiteCoreStringKey.Error_RecursiveErrorHandlingDetected]: 'Manejo de errores recursivo detectado',
    [SuiteCoreStringKey.Error_SystemUserMustBeSystemMemberType]: 'El usuario del sistema debe ser de tipo MemberType.System',
    [SuiteCoreStringKey.Error_JwtSecretMustBe64CharHexString]: 'JWT_SECRET debe ser una cadena hexadecimal de 64 caracteres',
    [SuiteCoreStringKey.Error_MnemonicHmacSecretMustBe64CharHexString]: 'MNEMONIC_HMAC_SECRET debe ser una cadena hexadecimal de 64 caracteres',
    [SuiteCoreStringKey.Error_MnemonicEncryptionKeyMustBe64CharHexString]: 'MNEMONIC_ENCRYPTION_KEY debe ser una cadena hexadecimal de 64 caracteres',
    [SuiteCoreStringKey.Error_AdminMnemonicMustBeValidMnemonicPhrase]: 'La frase mnemotécnica del administrador debe ser una frase mnemotécnica válida',
    [SuiteCoreStringKey.Error_MemberMnemonicMustBeValidMnemonicPhrase]: 'La frase mnemotécnica del miembro debe ser una frase mnemotécnica válida',
    [SuiteCoreStringKey.Error_Pbkdf2IterationsMustBeGreaterThanZero]: 'PBKDF2_ITERATIONS debe ser mayor que 0',
    [SuiteCoreStringKey.Error_EnvironmentIsRequired]: 'El entorno es requerido',
    [SuiteCoreStringKey.Error_ApiRouterFactoryIsRequired]: 'La fábrica de enrutador API es requerida',
    [SuiteCoreStringKey.Error_SchemaMapFactoryIsRequired]: 'La fábrica de mapa de esquema es requerida',
    [SuiteCoreStringKey.Error_DatabaseInitFunctionIsRequired]: 'La función de inicialización de base de datos es requerida',
    [SuiteCoreStringKey.Error_InitResultHashFunctionIsRequired]: 'La función de hash de resultado de inicialización es requerida',
    [SuiteCoreStringKey.Error_InvalidCspOrHelmetOptionsProvided]: 'Opciones CSP o Helmet inválidas proporcionadas',
    [SuiteCoreStringKey.Error_ServiceIsNotRegisteredTemplate]: 'Servicio {key} no registrado',
    [SuiteCoreStringKey.Validation_ValueIsRequired]: 'Se requiere un valor',
    [SuiteCoreStringKey.Validation_ValueMustBeOneOfTheAvailableOptions]: 'El valor debe ser una de las opciones disponibles',
    [SuiteCoreStringKey.Error_UnexpectedErrorInAuthenticateCrypto]: 'Error inesperado en authenticateCrypto',
    [SuiteCoreStringKey.Common_StackTrace]: 'Traza de pila',
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
    [SuiteCoreStringKey.Admin_DotEnvFormat]: 'A continuación se muestran las credenciales para agregar a su archivo .env de API',
    [SuiteCoreStringKey.Admin_EndDotEnvFormat]: 'Fin de las credenciales .env',
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
    [SuiteCoreStringKey.Common_CheckingAuthentication]: 'Comprobando autenticación',
    [SuiteCoreStringKey.Common_ClearMnemonic]: 'Borrar mnemotécnica',
    [SuiteCoreStringKey.Common_ClearWallet]: 'Borrar cartera',
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
    [SuiteCoreStringKey.Common_Success]: 'Éxito',
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
    [SuiteCoreStringKey.Common_UserID]: 'ID de usuario',
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
    [SuiteCoreStringKey.Error_NoPasswordOrMnemonicProvided]: 'No se proporcionó contraseña o frase mnemotécnica',
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
    [SuiteCoreStringKey.Error_InvalidEmailTokenType]: 'Tipo de token de correo electrónico inválido.',
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
    [SuiteCoreStringKey.Error_Login_DirectChallengeNotEnabled]:
      'El inicio de sesión por desafío directo no está habilitado para esta cuenta. Por favor, use el inicio de sesión por correo electrónico o contacte al soporte.',
    [SuiteCoreStringKey.Error_Login_PasswordLoginNotEnabled]:
      'El inicio de sesión con contraseña no está habilitado para esta cuenta. Por favor, use el inicio de sesión por correo electrónico o contacte al soporte.',
    [SuiteCoreStringKey.Error_Login_PasswordLoginNotSetup]:
      'El inicio de sesión con contraseña no está configurado para este navegador. Por favor, use el inicio de sesión por correo electrónico o contacte al soporte.',
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
    [SuiteCoreStringKey.Error_MustMatchRegexTemplate]: '{value} debe coincidir con el formato requerido',
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
    [SuiteCoreStringKey.Login_UseEmailAddress]: 'Usar dirección de correo electrónico',
    [SuiteCoreStringKey.Login_UseUsername]: 'Usar nombre de usuario',
    [SuiteCoreStringKey.LogoutButton]: 'Cerrar sesión',
    [SuiteCoreStringKey.MemberRoleNotFound]: 'Rol de miembro no encontrado',
    [SuiteCoreStringKey.SystemRoleNotFound]: 'Rol de sistema no encontrado',
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
    [SuiteCoreStringKey.PasswordReset_Button]: 'Restablecer Contraseña',
    [SuiteCoreStringKey.PasswordReset_Title]: 'Restablecer Contraseña',
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
    [SuiteCoreStringKey.Registration_DirectChallengeLabel]: 'Habilitar inicio de sesión por desafío directo',
    [SuiteCoreStringKey.Registration_DirectChallengeHelper]: 'Permitir iniciar sesión directamente con su frase mnemotécnica sin verificación por correo electrónico. Esto es más conveniente pero menos seguro si su frase mnemotécnica se ve comprometida.',
    [SuiteCoreStringKey.RemoveAdmin_Success]: 'Administrador eliminado con éxito',
    [SuiteCoreStringKey.RemoveAdmin_Unauthorized]:
      'No autorizado para eliminar un administrador',
    [SuiteCoreStringKey.RemoveMember_Success]: 'Miembro eliminado con éxito',
    [SuiteCoreStringKey.RemoveMember_Unauthorized]:
      'No autorizado para eliminar un miembro',
    [SuiteCoreStringKey.RequestNewVerificationEmail]:
      'Solicitar un nuevo correo electrónico de verificación',
    [SuiteCoreStringKey.Settings_SaveSuccess]: 'Configuración guardada correctamente',
    [SuiteCoreStringKey.Settings_Title]: 'Configuración',
    [SuiteCoreStringKey.Settings_EmailHelper]: 'Cambiar su dirección de correo electrónico requerirá una nueva verificación. Enviaremos un correo electrónico de verificación a la nueva dirección para confirmar. Por favor, revise su bandeja de entrada después de guardar los cambios y siga las instrucciones en el correo electrónico para verificar su nueva dirección.',
    [SuiteCoreStringKey.Settings_SiteLanguage]: 'Idioma del sitio',
    [SuiteCoreStringKey.Settings_Currency]: 'Moneda preferida',
    [SuiteCoreStringKey.Settings_DarkMode]: 'Modo oscuro',
    [SuiteCoreStringKey.Settings_DarkModeSuccess]: 'Modo oscuro actualizado con éxito',
    [SuiteCoreStringKey.Settings_Saving]: 'Guardando configuración...',
    [SuiteCoreStringKey.Settings_Save]: 'Guardar configuración',
    [SuiteCoreStringKey.Settings_RetrievedSuccess]: 'Configuración recuperada con éxito',
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
  };