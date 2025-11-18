import { SuiteCoreStringKey } from '../enumerations';

export const japaneseStrings: Record<SuiteCoreStringKey, string> = {
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
    [SuiteCoreStringKey.Error_VerificationFailed]: '検証に失敗しました',
    [SuiteCoreStringKey.Error_AccountStatus_Active]: 'アカウントはアクティブです',
    [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
      'アカウントは管理者によってロックされています',
    [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
      'アカウントはメール確認待ちです',
    [SuiteCoreStringKey.Common_UnexpectedError]: '予期しないエラーが発生しました',
    [SuiteCoreStringKey.Common_Ready]: '準備完了',
    [SuiteCoreStringKey.Common_Success]: '成功',
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
    [SuiteCoreStringKey.Error_SystemUserMustBeSystemMemberType]: 'システムユーザーは MemberType.System である必要があります',
    [SuiteCoreStringKey.Error_JwtSecretMustBe64CharHexString]: 'JWT_SECRET は64文字の16進数文字列である必要があります',
    [SuiteCoreStringKey.Error_MnemonicHmacSecretMustBe64CharHexString]: 'MNEMONIC_HMAC_SECRET は64文字の16進数文字列である必要があります',
    [SuiteCoreStringKey.Error_MnemonicEncryptionKeyMustBe64CharHexString]: 'MNEMONIC_ENCRYPTION_KEY は64文字の16進数文字列である必要があります',
    [SuiteCoreStringKey.Error_AdminMnemonicMustBeValidMnemonicPhrase]: '管理者のMNEMONIC は有効なフレーズである必要があります',
    [SuiteCoreStringKey.Error_MemberMnemonicMustBeValidMnemonicPhrase]: 'MEMBER_MNEMONIC は有効な助記詞フレーズである必要があります',
    [SuiteCoreStringKey.Error_Pbkdf2IterationsMustBeGreaterThanZero]: 'PBKDF2_ITERATIONS は 0 より大きい値である必要があります',
    [SuiteCoreStringKey.Error_InvalidCspOrHelmetOptionsProvided]: '無効な CSP または Helmet オプションが提供されました',
    [SuiteCoreStringKey.Error_EnvironmentIsRequired]: '環境が必要です',
    [SuiteCoreStringKey.Error_ApiRouterFactoryIsRequired]: 'APIルーターファクトリが必要です',
    [SuiteCoreStringKey.Error_SchemaMapFactoryIsRequired]: 'スキーママップファクトリが必要です',
    [SuiteCoreStringKey.Error_DatabaseInitFunctionIsRequired]: 'データベース初期化関数が必要です',
    [SuiteCoreStringKey.Error_InitResultHashFunctionIsRequired]: '初期化結果ハッシュ関数が必要です',
    [SuiteCoreStringKey.Error_ServiceIsNotRegisteredTemplate]: 'サービス {key} は登録されていません',
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
    [SuiteCoreStringKey.Error_RecursiveErrorHandlingDetected]: '再帰的なエラー処理が検出されました',
    [SuiteCoreStringKey.Error_UnexpectedErrorInAuthenticateCrypto]: 'authenticateCryptoで予期しないエラーが発生しました',
    [SuiteCoreStringKey.Common_StackTrace]: 'スタックトレース',
    [SuiteCoreStringKey.Validation_ValueIsRequired]: '値は必須です',
    [SuiteCoreStringKey.Validation_ValueMustBeOneOfTheAvailableOptions]: '値は利用可能なオプションのいずれかである必要があります',
    [SuiteCoreStringKey.ValidationError]:
     '検証エラー',
    [SuiteCoreStringKey.Validation_MissingValidatedData]: 
    '検証済みデータがありません',
    [SuiteCoreStringKey.Validation_MissingValidatedDataForFieldTemplate]: 
     'フィールドの検証済みデータがありません: {field}',
    [SuiteCoreStringKey.Validation_MnemonicRegex]: 
    '無効な助記詞の形式',
    [SuiteCoreStringKey.Admin_DotEnvFormat]: '以下は、API .env ファイルに追加する必要がある認証情報です',
    [SuiteCoreStringKey.Admin_EndDotEnvFormat]: '.env 認証情報の終了',
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
    [SuiteCoreStringKey.BackupCodes_FailedToFetch]: 'バックアップコードの取得に失敗しました',
    [SuiteCoreStringKey.BackupCodes_FailedToGenerate]: 'バックアップコードの生成に失敗しました',
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
    [SuiteCoreStringKey.Common_CheckingAuthentication]: '認証を確認中',
    [SuiteCoreStringKey.Common_ClearMnemonic]: 'ニーモニックをクリア',
    [SuiteCoreStringKey.Common_ClearWallet]: 'ウォレットをクリア',
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
    [SuiteCoreStringKey.Common_NotValidCurrencyTemplate]:
      '{currency} は有効な通貨コードではありません',
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
    [SuiteCoreStringKey.Common_UserID]: 'ユーザーID',
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
    [SuiteCoreStringKey.Error_NoPasswordOrMnemonicProvided]: 'パスワードまたはニーモニックフレーズが提供されていません',
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
    [SuiteCoreStringKey.Error_InvalidEmailTokenType]: '無効なメールトークンタイプ。',
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
    [SuiteCoreStringKey.Error_Login_DirectChallengeNotEnabled]:
      'このアカウントではダイレクトチャレンジログインが有効になっていません。メールログインを使用するか、サポートにお問い合わせください。',
    [SuiteCoreStringKey.Error_Login_PasswordLoginNotEnabled]:
      'このアカウントではパスワードログインが有効になっていません。メールログインを使用するか、サポートにお問い合わせください。',
    [SuiteCoreStringKey.Error_Login_PasswordLoginNotSetup]:
      'このブラウザではパスワードログインが設定されていません。メールログインを使用するか、サポートにお問い合わせください。',
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
    [SuiteCoreStringKey.Error_MustMatchRegexTemplate]: '{value}は必要な形式と一致する必要があります',
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
    [SuiteCoreStringKey.Login_UseEmailAddress]: 'メールアドレスを使用',
    [SuiteCoreStringKey.Login_UseUsername]: 'ユーザー名を使用',
    [SuiteCoreStringKey.LogoutButton]: 'ログアウト',
    [SuiteCoreStringKey.MemberRoleNotFound]: 'メンバー役割が見つかりません',
    [SuiteCoreStringKey.SystemRoleNotFound]: 'システム役割が見つかりません',
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
    [SuiteCoreStringKey.PasswordReset_Title]: 'パスワードリセット',
    [SuiteCoreStringKey.PasswordReset_Button]: 'パスワードをリセット',
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
    [SuiteCoreStringKey.Registration_DirectChallengeLabel]: 'ダイレクトチャレンジログインを有効にする',
    [SuiteCoreStringKey.Registration_DirectChallengeHelper]: 'メール確認なしでニーモニックフレーズを使用して直接ログインできるようにします。これはより便利ですが、ニーモニックが漏洩した場合はセキュリティが低下します。',
    [SuiteCoreStringKey.RemoveAdmin_Success]: '管理者が正常に削除されました',
    [SuiteCoreStringKey.RemoveAdmin_Unauthorized]: '管理者を削除する権限がありません',
    [SuiteCoreStringKey.RemoveMember_Success]: 'メンバーが正常に削除されました',
    [SuiteCoreStringKey.RemoveMember_Unauthorized]: 'メンバーを削除する権限がありません',
    [SuiteCoreStringKey.RequestNewVerificationEmail]: '新しい確認メールをリクエスト',
    [SuiteCoreStringKey.Settings_SaveSuccess]: '設定が正常に保存されました',
    [SuiteCoreStringKey.Settings_Title]: '設定',
    [SuiteCoreStringKey.Settings_EmailHelper]: 'メールアドレスを変更すると、再確認が必要になります。新しいアドレスに確認メールを送信します。変更を保存した後、受信トレイを確認し、メールの指示に従って新しいアドレスを確認してください。',
    [SuiteCoreStringKey.Settings_SiteLanguage]: 'サイト言語',
    [SuiteCoreStringKey.Settings_Currency]: '希望通貨',
    [SuiteCoreStringKey.Settings_DarkMode]: 'ダークモード',
    [SuiteCoreStringKey.Settings_DarkModeSuccess]: 'ダークモードが正常に更新されました',
    [SuiteCoreStringKey.Settings_Saving]: '設定を保存中...',
    [SuiteCoreStringKey.Settings_Save]: '設定を保存',
    [SuiteCoreStringKey.Settings_RetrievedSuccess]: '設定が正常に取得されました',
    [SuiteCoreStringKey.Settings_UpdateFailed]: '設定の更新に失敗しました',
    [SuiteCoreStringKey.Settings_RetrieveFailure]: '設定の取得に失敗しました',
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
  };