import { SuiteCoreStringKey } from '../enumerations';

export const frenchStrings: Record<SuiteCoreStringKey, string> = {
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
    [SuiteCoreStringKey.Error_NoPasswordOrMnemonicProvided]: 'Aucun mot de passe ou phrase mnémonique fourni',
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
    [SuiteCoreStringKey.Error_RecursiveErrorHandlingDetected]: 'Gestion d\'erreur récursive détectée',
    [SuiteCoreStringKey.Error_SystemUserMustBeSystemMemberType]: 'L\'utilisateur système doit être de MemberType.System',
    [SuiteCoreStringKey.Error_JwtSecretMustBe64CharHexString]: 'JWT_SECRET doit être une chaîne hexadécimale de 64 caractères',
    [SuiteCoreStringKey.Error_MnemonicHmacSecretMustBe64CharHexString]: 'MNEMONIC_HMAC_SECRET doit être une chaîne hexadécimale de 64 caractères',
    [SuiteCoreStringKey.Error_MnemonicEncryptionKeyMustBe64CharHexString]: 'MNEMONIC_ENCRYPTION_KEY doit être une chaîne hexadécimale de 64 caractères',
    [SuiteCoreStringKey.Error_AdminMnemonicMustBeValidMnemonicPhrase]: 'La phrase mnémonique d\'administrateur doit être une phrase mnémonique valide',
    [SuiteCoreStringKey.Error_MemberMnemonicMustBeValidMnemonicPhrase]: 'La phrase mnémonique de membre doit être une phrase mnémonique valide',
    [SuiteCoreStringKey.Error_Pbkdf2IterationsMustBeGreaterThanZero]: 'PBKDF2_ITERATIONS doit être supérieur à 0',
    [SuiteCoreStringKey.Error_InvalidCspOrHelmetOptionsProvided]: 'Options CSP ou Helmet invalides fournies',
    [SuiteCoreStringKey.Error_EnvironmentIsRequired]: 'L\'environnement est requis',
    [SuiteCoreStringKey.Error_ApiRouterFactoryIsRequired]: 'La fabrique de routeur API est requise',
    [SuiteCoreStringKey.Error_SchemaMapFactoryIsRequired]: 'La fabrique de carte de schéma est requise',
    [SuiteCoreStringKey.Error_DatabaseInitFunctionIsRequired]: 'La fonction d\'initialisation de la base de données est requise',
    [SuiteCoreStringKey.Error_InitResultHashFunctionIsRequired]: 'La fonction de hachage du résultat d\'initialisation est requise',
    [SuiteCoreStringKey.Error_ServiceIsNotRegisteredTemplate]: 'Service {key} non enregistré',
    [SuiteCoreStringKey.Validation_ValueIsRequired]: 'La valeur est requise',
    [SuiteCoreStringKey.Validation_ValueMustBeOneOfTheAvailableOptions]: 'La valeur doit être l\'une des options disponibles',
    [SuiteCoreStringKey.Error_UnexpectedErrorInAuthenticateCrypto]: 'Erreur inattendue dans authenticateCrypto',
    [SuiteCoreStringKey.Common_StackTrace]: 'Trace de pile',
    [SuiteCoreStringKey.Common_UnexpectedError]: 'Une erreur inattendue s\'est produite',
    [SuiteCoreStringKey.Common_Ready]: 'Prêt',
    [SuiteCoreStringKey.Common_Success]: 'Succès',
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
    [SuiteCoreStringKey.Admin_DotEnvFormat]: 'Voici les identifiants à ajouter à votre fichier API .env',
    [SuiteCoreStringKey.Admin_EndDotEnvFormat]: 'Fin des identifiants .env',
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
    [SuiteCoreStringKey.Common_CheckingAuthentication]: 'Vérification de l\'authentification',
    [SuiteCoreStringKey.Common_ClearMnemonic]: 'Effacer la mnémotechnique',
    [SuiteCoreStringKey.Common_ClearWallet]: 'Effacer le portefeuille',
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
    [SuiteCoreStringKey.Common_UserID]: "ID d'utilisateur",
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
    [SuiteCoreStringKey.Error_InvalidEmailTokenType]: 'Type de jeton d\'email invalide.',
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
    [SuiteCoreStringKey.Error_Login_DirectChallengeNotEnabled]:
      'La connexion par défi direct n\'est pas activée pour ce compte. Veuillez utiliser la connexion par e-mail ou contacter le support.',  
    [SuiteCoreStringKey.Error_Login_PasswordLoginNotEnabled]:
      'La connexion par mot de passe n\'est pas activée pour ce compte. Veuillez utiliser la connexion par e-mail ou contacter le support.',
    [SuiteCoreStringKey.Error_Login_PasswordLoginNotSetup]:
      'La connexion par mot de passe n\'est pas configurée pour ce navigateur. Veuillez utiliser la connexion par e-mail ou contacter le support.',   
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
    [SuiteCoreStringKey.Error_MustMatchRegexTemplate]: '{value} doit correspondre au format requis',
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
    [SuiteCoreStringKey.Login_UseEmailAddress]: "Utiliser l'adresse e-mail",
    [SuiteCoreStringKey.Login_UseUsername]: "Utiliser le nom d'utilisateur",
    [SuiteCoreStringKey.LogoutButton]: 'Se déconnecter',
    [SuiteCoreStringKey.MemberRoleNotFound]: 'Rôle de membre non trouvé',
    [SuiteCoreStringKey.SystemRoleNotFound]: 'Rôle système non trouvé',
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
      [SuiteCoreStringKey.PasswordReset_Title]: 'Réinitialisation du mot de passe',
      [SuiteCoreStringKey.PasswordReset_Button]: 'Envoyer le lien de réinitialisation',
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
    [SuiteCoreStringKey.Registration_DirectChallengeLabel]: 'Activer la connexion par défi direct',
    [SuiteCoreStringKey.Registration_DirectChallengeHelper]: 'Permettre de se connecter directement avec votre phrase mnémotechnique sans vérification par e-mail. C\'est plus pratique mais moins sécurisé si votre phrase mnémotechnique est compromise.',
    [SuiteCoreStringKey.RemoveAdmin_Success]: 'Administrateur supprimé avec succès',
    [SuiteCoreStringKey.RemoveAdmin_Unauthorized]:
      'Non autorisé à supprimer un administrateur',
    [SuiteCoreStringKey.RemoveMember_Success]: 'Membre supprimé avec succès',
    [SuiteCoreStringKey.RemoveMember_Unauthorized]: 'Non autorisé à supprimer un membre',
    [SuiteCoreStringKey.RequestNewVerificationEmail]:
      'Demander un nouvel e-mail de vérification',
    [SuiteCoreStringKey.Settings_SaveSuccess]: 'Paramètres enregistrés avec succès',
    [SuiteCoreStringKey.Settings_Title]: 'Paramètres',
    [SuiteCoreStringKey.Settings_EmailHelper]: 'La modification de votre adresse e-mail nécessitera une nouvelle vérification. Nous enverrons un e-mail de vérification à la nouvelle adresse pour confirmer. Veuillez vérifier votre boîte de réception après avoir enregistré les modifications et suivre les instructions dans l\'e-mail pour vérifier votre nouvelle adresse.',
    [SuiteCoreStringKey.Settings_SiteLanguage]: 'Langue du site',
    [SuiteCoreStringKey.Settings_Currency]: 'Devise préférée',
    [SuiteCoreStringKey.Settings_DarkMode]: 'Mode sombre',
    [SuiteCoreStringKey.Settings_DarkModeSuccess]: 'Mode sombre mis à jour avec succès',
    [SuiteCoreStringKey.Settings_Saving]: 'Enregistrement des paramètres...',
    [SuiteCoreStringKey.Settings_Save]: 'Enregistrer les paramètres',
    [SuiteCoreStringKey.Settings_RetrievedSuccess]: 'Paramètres récupérés avec succès',
    [SuiteCoreStringKey.Settings_UpdateFailed]: 'Échec de la mise à jour des paramètres',
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
  };