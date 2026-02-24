/**
 * Chinese (Mandarin, zh-CN) translation strings for suite-core library.
 * Contains all localized error messages and user-facing text in Simplified Chinese.
 */
import { SuiteCoreStringKey } from '../enumerations';
import type { SuiteCoreStringKeyValue } from '../enumerations';

export const mandarinStrings: Record<SuiteCoreStringKeyValue, string> = {
  [SuiteCoreStringKey.Auth_AccountLocked]: '账户暂时被锁定',
  [SuiteCoreStringKey.Auth_InsufficientPermissions]: '权限不足，无法执行此操作',
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
  [SuiteCoreStringKey.Validation_ExpressValidationFailed]: 'Express验证失败',
  [SuiteCoreStringKey.Validation_MongooseValidationError]:
    '发生了Mongoose验证错误',
  [SuiteCoreStringKey.Error_ArrayLengthMismatch]: '数组长度必须相等',
  [SuiteCoreStringKey.Error_VerificationFailed]: '验证失败',
  [SuiteCoreStringKey.Error_AccountStatus_Active]: '账户处于激活状态',
  [SuiteCoreStringKey.Error_AccountStatus_AdminLock]: '账户被管理员锁定',
  [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
    '账户待电子邮件验证',
  [SuiteCoreStringKey.Error_IndexFileNotFoundTemplate]:
    '未找到索引文件：{path}',
  [SuiteCoreStringKey.Error_AppDoesNotAppearToBeRunningWithinDistTemplate]:
    '应用程序似乎未在/dist/目录中运行：{dir}',
  [SuiteCoreStringKey.Error_ChildRoleCannotBeASystemRole]:
    '子角色不能是系统角色',
  [SuiteCoreStringKey.Error_ChildRoleCannotBeAnAdminRole]:
    '子角色不能是管理员角色',
  [SuiteCoreStringKey.Error_ValidationFunctionNotRegisteredInAllowlist]:
    '验证函数未在允许列表中注册',
  [SuiteCoreStringKey.Error_InvalidCertificatePathAfterResolution]:
    '解析后的证书路径无效',
  [SuiteCoreStringKey.Error_InvalidCertificatePathMustBeAbsolute]:
    '证书路径无效：必须是绝对路径且不能包含..',
  [SuiteCoreStringKey.Error_InvalidViewsPathEscapesBaseDirectory]:
    '视图路径无效：超出基础目录',
  [SuiteCoreStringKey.Error_InvalidPathContainsParentDirectoryReference]:
    '路径无效：包含父目录引用',
  [SuiteCoreStringKey.Error_InvalidIndexPathEscapesBaseDirectory]:
    '索引路径无效：超出基础目录',
  [SuiteCoreStringKey.Error_InvalidAssetsPathEscapesBaseDirectory]:
    '资源路径无效：超出基础目录',
  [SuiteCoreStringKey.Error_MissingRequiredEnvironmentVariableTemplate]:
    '缺少必需的环境变量：{key}',
  [SuiteCoreStringKey.Error_EmptyEnvironmentVariableTemplate]:
    '环境变量 {key} 为空',
  [SuiteCoreStringKey.Error_RecursiveErrorHandlingDetected]:
    '检测到递归错误处理',
  [SuiteCoreStringKey.Error_SystemUserMustBeSystemMemberType]:
    '系统用户必须是 MemberType.System 类型',
  [SuiteCoreStringKey.Error_JwtSecretMustBe64CharHexString]:
    'JWT_SECRET 必须是 64 字符的十六进制字符串',
  [SuiteCoreStringKey.Error_MnemonicHmacSecretMustBe64CharHexString]:
    'MNEMONIC_HMAC_SECRET 必须是 64 字符的十六进制字符串',
  [SuiteCoreStringKey.Error_MnemonicEncryptionKeyMustBe64CharHexString]:
    'MNEMONIC_ENCRYPTION_KEY 必须是 64 字符的十六进制字符串',
  [SuiteCoreStringKey.Error_AdminMnemonicMustBeValidMnemonicPhrase]:
    '管理员助记词必须是有效的助记词短语',
  [SuiteCoreStringKey.Error_MemberMnemonicMustBeValidMnemonicPhrase]:
    'MEMBER_MNEMONIC 必须是有效的助记词短语',
  [SuiteCoreStringKey.Error_Pbkdf2IterationsMustBeGreaterThanZero]:
    'PBKDF2_ITERATIONS 必须大于 0',
  [SuiteCoreStringKey.Error_LetsEncryptMaintainerEmailRequired]:
    "启用 Let's Encrypt 时，LETS_ENCRYPT_EMAIL 是必需的",
  [SuiteCoreStringKey.Error_LetsEncryptHostnamesRequired]:
    "启用 Let's Encrypt 时，LETS_ENCRYPT_HOSTNAMES 是必需的",
  [SuiteCoreStringKey.Error_LetsEncryptInvalidHostnameTemplate]:
    'LETS_ENCRYPT_HOSTNAMES 中的主机名无效: {hostname}',
  [SuiteCoreStringKey.Error_InvalidCspOrHelmetOptionsProvided]:
    '提供的 CSP 或 Helmet 选项无效',
  [SuiteCoreStringKey.Error_EnvironmentIsRequired]: '环境是必需的',
  [SuiteCoreStringKey.Error_ApiRouterFactoryIsRequired]:
    'API 路由器工厂是必需的',
  [SuiteCoreStringKey.Error_SchemaMapFactoryIsRequired]: '架构映射工厂是必需的',
  [SuiteCoreStringKey.Error_DatabaseInitFunctionIsRequired]:
    '数据库初始化函数是必需的',
  [SuiteCoreStringKey.Error_InitResultHashFunctionIsRequired]:
    '初始化结果哈希函数是必需的',
  [SuiteCoreStringKey.Error_ServiceIsNotRegisteredTemplate]:
    '服务 {key} 未注册',
  [SuiteCoreStringKey.Validation_ValueIsRequired]: '值是必需的',
  [SuiteCoreStringKey.Validation_ValueMustBeOneOfTheAvailableOptions]:
    '值必须是可用选项之一',
  [SuiteCoreStringKey.Error_UnexpectedErrorInAuthenticateCrypto]:
    'authenticateCrypto 中出现意外错误',
  [SuiteCoreStringKey.Common_StackTrace]: '堆栈跟踪',
  [SuiteCoreStringKey.Common_UnexpectedError]: '发生了意外错误',
  [SuiteCoreStringKey.Common_Ready]: '就绪',
  [SuiteCoreStringKey.Common_Success]: '成功',
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
  [SuiteCoreStringKey.Error_InvalidModelKeyTemplate]:
    '无效的模型键：{modelKey}',
  [SuiteCoreStringKey.Error_ModelNotRegisteredTemplate]:
    '模型未注册：{modelName}',
  [SuiteCoreStringKey.Error_FailedToCreateRoleTemplate]: '创建{NAME}角色失败',

  [SuiteCoreStringKey.ValidationError]: '验证错误',
  [SuiteCoreStringKey.Validation_MissingValidatedData]: '缺少验证数据',
  [SuiteCoreStringKey.Validation_MissingValidatedDataForFieldTemplate]:
    '字段缺少验证数据：{field}',
  [SuiteCoreStringKey.Validation_MnemonicRegex]: '助记词格式无效',
  [SuiteCoreStringKey.Admin_DotEnvFormat]:
    '以下是需要添加到您的 API .env 文件中的凭据',
  [SuiteCoreStringKey.Admin_EndDotEnvFormat]: '.env 凭据结束',
  [SuiteCoreStringKey.Admin_Error_InvalidMongoUri]: '无效的 Mongo URI',
  [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]:
    '未找到MongoDB客户端，使用备用方案',
  [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]:
    '事务失败（临时）：{error}',
  [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]:
    '事务在{timeMs}毫秒后超时',
  [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]: '开始数据库初始化',
  [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]:
    '初始化用户数据库失败（{timeMs}毫秒后超时）',
  [SuiteCoreStringKey.Admin_EnvNotSetTemplate]: '环境变量未设置：{variable}',
  [SuiteCoreStringKey.Admin_ServingRoute]: '正在提供路由',
  [SuiteCoreStringKey.Admin_AccountCredentials]: '账户凭据（保存到密码管理器）',
  [SuiteCoreStringKey.Admin_CreatingUserTemplate]:
    '正在创建 {TYPE} 用户 {NAME} 并生成密钥',
  [SuiteCoreStringKey.Admin_DatabaseInitializedWithOptionsHashTemplate]:
    '数据库已使用选项哈希初始化：{hash}',
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
  [SuiteCoreStringKey.Admin_Error_EnvironmentAlreadyInitialized]:
    '环境已经初始化',
  [SuiteCoreStringKey.Admin_Error_EnvironmentNotInitialized]: '环境未初始化',
  [SuiteCoreStringKey.Admin_Error_FailedToDropDatabase]: '删除数据库集合失败',
  [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabase]:
    '初始化用户数据库失败',
  [SuiteCoreStringKey.Admin_Error_FailedToLoadEnvironment]:
    '加载 .env 文件失败',
  [SuiteCoreStringKey.Admin_Error_FailedToSetTransactionTimeout]:
    '无法设置事务超时，未连接到数据库',
  [SuiteCoreStringKey.Admin_Error_NotConnectedToMongoDB]:
    '未能建立与 MongoDB 的连接。',
  [SuiteCoreStringKey.Admin_Error_SchemaMapIsNotLoadedYet]:
    'schemaMap 尚未加载。请先调用 start()',
  [SuiteCoreStringKey.Admin_Error_UnhandledErrorInMain]: '主程序中未处理的错误',
  [SuiteCoreStringKey.Admin_ErrorCleaningUpTestData]: '清理测试数据时出错',
  [SuiteCoreStringKey.Admin_ErrorClosingConnection]: '关闭连接时出错',
  [SuiteCoreStringKey.Admin_ErrorStoppingMongoServer]:
    '停止 MongoDB 服务器时出错',
  [SuiteCoreStringKey.Admin_FailedToSetUpTestDatabase]: '设置测试数据库失败',
  [SuiteCoreStringKey.Admin_LoadingEnvironmentTemplate]: '正在加载环境：{PATH}',
  [SuiteCoreStringKey.Admin_MakeSureToSetItInEnv]:
    '确保在您的 .env 文件中设置它',
  [SuiteCoreStringKey.Admin_ProceedingToDbInitialization]:
    '正在进行数据库初始化...',
  [SuiteCoreStringKey.Admin_RoleCreatedTemplate]:
    '角色 {ROLE} 创建成功，ID 为 {ID}',
  [SuiteCoreStringKey.Admin_SettingUp]: '设置中...',
  [SuiteCoreStringKey.Admin_SettingUpUsersAndRoles]: '设置用户和角色',
  [SuiteCoreStringKey.Admin_SetTransactionTimeoutSuccessfully]:
    '事务超时设置成功',
  [SuiteCoreStringKey.Admin_StartingDbInitialization]:
    '正在启动数据库初始化...',
  [SuiteCoreStringKey.Admin_StringNotFoundForLanguageTemplate]:
    '未找到字符串 {NAME} 对应的语言 {LANG}',
  [SuiteCoreStringKey.Admin_TearingDown]: '正在拆卸...',
  [SuiteCoreStringKey.Admin_TransactionsEnabledDisabledTemplate]:
    '交易状态为 {STATE}',
  [SuiteCoreStringKey.Admin_UserDatabaseInitialized]: '用户数据库已初始化',
  [SuiteCoreStringKey.Admin_UserRoleCreatedTemplate]:
    '用户角色关系已创建：用户 {USERID} -> 角色 {ROLEID}',
  [SuiteCoreStringKey.Admin_CredentialsWrittenToEnv]: '凭据已写入 {path}',
  [SuiteCoreStringKey.Admin_UsingMongoDbMemoryWithTransactions]:
    '使用 MongoDB Memory Server 进行事务支持',
  [SuiteCoreStringKey.AdminRoleNotFound]: '未找到管理员角色',
  [SuiteCoreStringKey.ApiAccess_Title]: '您的访问令牌',
  [SuiteCoreStringKey.ApiAccess_TokenNotAvailable]: '令牌不可用',
  [SuiteCoreStringKey.BackupCodes_FailedToFetch]: '获取备份代码失败',
  [SuiteCoreStringKey.BackupCodes_FailedToGenerate]: '生成备份代码失败',
  [SuiteCoreStringKey.BackupCodes_RetrievedSuccess]: '备份代码获取成功',
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
  [SuiteCoreStringKey.Common_CheckingAuthentication]: '正在检查身份验证',
  [SuiteCoreStringKey.Common_ClearMnemonic]: '清除助记词',
  [SuiteCoreStringKey.Common_ClearWallet]: '清除钱包',
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
  [SuiteCoreStringKey.Common_NotValidTimeZoneTemplate]:
    '{timezone} 不是有效的时区',
  [SuiteCoreStringKey.Common_NotValidCurrencyTemplate]:
    '{currency} 不是有效的货币代码',
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
  [SuiteCoreStringKey.Common_UserID]: '用户 ID',
  [SuiteCoreStringKey.Common_UserCreatedTemplate]:
    '{TYPE} 用户 {NAME} 创建成功',
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
  [SuiteCoreStringKey.Error_NoPasswordOrMnemonicProvided]: '未提供密码或助记词',
  [SuiteCoreStringKey.Error_ChallengeError]: '生成挑战时出错',
  [SuiteCoreStringKey.Error_DirectTokenAlreadyUsed]: '直接登录令牌已被使用',
  [SuiteCoreStringKey.Error_Disposed]: '「已处理」',
  [SuiteCoreStringKey.Error_EciesError_InvalidMultipleMessageOverheadSize]:
    '无效的 ECIES 多消息开销常量',
  [SuiteCoreStringKey.Error_EciesError_InvalidPublicKeyLength]:
    '无效的 ECIES 公钥长度',
  [SuiteCoreStringKey.Error_EciesError_InvalidRecipientCount]:
    '无效的 ECIES 多收件人计数大小',
  [SuiteCoreStringKey.Error_EciesErrorCrcError]: 'ECIES CRC 错误',
  [SuiteCoreStringKey.Error_EciesErrorDecryptionFailed]:
    'ECIES 解密失败（MAC 检查或填充错误）',
  [SuiteCoreStringKey.Error_EciesErrorEncryptionDataLengthMismatch]:
    '加密数据长度不匹配',
  [SuiteCoreStringKey.Error_EciesErrorEncryptionTypeMismatch]: '加密类型不匹配',
  [SuiteCoreStringKey.Error_EciesErrorFileSizeTooLarge]: '文件大小过大',
  [SuiteCoreStringKey.Error_EciesErrorInvalidAuthTagLength]:
    '无效的认证标签长度',
  [SuiteCoreStringKey.Error_EciesErrorInvalidDataLength]: '无效的数据长度',
  [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedDataLength]:
    '无效的加密数据长度',
  [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptedKeyLength]:
    '无效的加密密钥长度',
  [SuiteCoreStringKey.Error_EciesErrorInvalidEncryptionType]: '无效的加密类型',
  [SuiteCoreStringKey.Error_EciesErrorInvalidEphemeralPublicKey]:
    '无效的临时公钥',
  [SuiteCoreStringKey.Error_EciesErrorInvalidHeaderLength]: '无效的头部长度',
  [SuiteCoreStringKey.Error_EciesErrorInvalidIVLength]: '无效的 IV 长度',
  [SuiteCoreStringKey.Error_EciesErrorInvalidMessageCrc]: '无效的消息 CRC',
  [SuiteCoreStringKey.Error_EciesErrorInvalidMnemonic]: '无效的助记词',
  [SuiteCoreStringKey.Error_EciesErrorInvalidOperation]: '无效的操作',
  [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientCount]:
    '无效的收件人数量',
  [SuiteCoreStringKey.Error_EciesErrorInvalidRecipientPublicKey]:
    '无效的收件人公钥',
  [SuiteCoreStringKey.Error_EciesErrorInvalidSenderPublicKey]:
    '无效的发送者公钥',
  [SuiteCoreStringKey.Error_EciesErrorInvalidSignature]: '无效的签名',
  [SuiteCoreStringKey.Error_EciesErrorMessageLengthMismatch]: '消息长度不匹配',
  [SuiteCoreStringKey.Error_EciesErrorPrivateKeyNotLoaded]: '私钥未加载',
  [SuiteCoreStringKey.Error_EciesErrorRecipientKeyCountMismatch]:
    '收件人数量与密钥数量不匹配',
  [SuiteCoreStringKey.Error_EciesErrorRecipientNotFound]:
    '未在收件人 ID 中找到收件人',
  [SuiteCoreStringKey.Error_EciesErrorSecretComputationFailed]:
    'ECIES 操作期间计算共享密钥失败',
  [SuiteCoreStringKey.Error_EciesErrorTooManyRecipients]:
    '收件人过多：超过最大允许数量',
  [SuiteCoreStringKey.Error_EciesFailedSharedSecret]: 'ECIES 共享密钥失败',
  [SuiteCoreStringKey.Error_EmailSentTooRecentlyTemplate]:
    '电子邮件令牌发送过于频繁。请在 ${timeRemaining} 秒后重试。',
  [SuiteCoreStringKey.Error_FailedToCopy]: '复制文本时出错',
  [SuiteCoreStringKey.Error_FailedToCreateUserRoleTemplate]:
    '创建用户 {USER_ID} 和角色 {ROLE_ID} 的用户角色关系失败',
  [SuiteCoreStringKey.Error_FailedToCreateUserTemplate]: '创建 {NAME} 用户失败',
  [SuiteCoreStringKey.Error_FailedToFindRoleTemplate]: '未找到角色 {ROLE}',
  [SuiteCoreStringKey.Error_FailedToLookupRoleTemplate]:
    '查找角色 {ROLE} 的 ID 失败',
  [SuiteCoreStringKey.Error_FailedToReEncryptMnemonicTemplate]:
    '重新加密助记词失败，ID: {ID}',
  [SuiteCoreStringKey.Error_FailedToStoreUserMnemonicTemplate]:
    '存储用户 {NAME} 的助记符失败',
  [SuiteCoreStringKey.Error_FailedToUpdateLastLoginTemplate]:
    '未能更新用户 {userId} 的 lastLogin',
  [SuiteCoreStringKey.Error_FailedToUseDirectLoginToken]:
    '使用直接登录令牌失败',
  [SuiteCoreStringKey.Error_FecErrorDataRequired]: '数据是必需的',
  [SuiteCoreStringKey.Error_FecErrorFecDecodingFailedTemplate]:
    'FEC 解码失败 : {ERROR}',
  [SuiteCoreStringKey.Error_FecErrorFecEncodingFailedTemplate]:
    'FEC 编码失败 : {ERROR}',
  [SuiteCoreStringKey.Error_FecErrorInputDataMustBeUint8Array]:
    '输入数据必须是一个 Uint8Array',
  [SuiteCoreStringKey.Error_FecErrorInvalidDataLengthTemplate]:
    '无效的数据长度 : {LENGTH}, 预期 {EXPECTED}',
  [SuiteCoreStringKey.Error_FecErrorInvalidShardCounts]: '无效的分片计数',
  [SuiteCoreStringKey.Error_FecErrorInvalidShardsAvailableArray]:
    '无效的可用分片数组',
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
  [SuiteCoreStringKey.Error_InvalidChallengeResponse]:
    '无效或不正确的登录挑战响应',
  [SuiteCoreStringKey.Error_InvalidChecksumConstants]: '无效的校验和常量',
  [SuiteCoreStringKey.Error_InvalidEmail]: '无效的电子邮件。',
  [SuiteCoreStringKey.Error_InvalidEmailTokenType]: '无效的电子邮件令牌类型。',
  [SuiteCoreStringKey.Error_InvalidEmailTemplate]:
    '{email} 不是有效的电子邮件地址。',
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
  [SuiteCoreStringKey.Error_Login_DirectChallengeNotEnabled]:
    '此账户未启用直接挑战登录。请使用电子邮件登录或联系支持。',
  [SuiteCoreStringKey.Error_Login_PasswordLoginNotEnabled]:
    '此账户未启用密码登录。请使用电子邮件登录或联系支持。',
  [SuiteCoreStringKey.Error_Login_PasswordLoginNotSetup]:
    '此浏览器未设置密码登录。请使用电子邮件登录或联系支持。',
  [SuiteCoreStringKey.Error_MemberErrorEncryptionDataTooLarge]:
    '加密数据过大。请确保数据不超过 1MB。',
  [SuiteCoreStringKey.Error_MemberErrorFailedToConvertMemberData]:
    '转换成员数据失败。',
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
  [SuiteCoreStringKey.Error_MemberErrorMissingVotingPrivateKey]:
    '缺少投票私钥。',
  [SuiteCoreStringKey.Error_MemberErrorMissingVotingPublicKey]:
    '缺少投票公钥。',
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
  [SuiteCoreStringKey.Error_Pbkdf2InvalidHashLength]:
    '哈希长度与预期长度不匹配',
  [SuiteCoreStringKey.Error_Pbkdf2InvalidSaltLength]: '盐长度与预期长度不匹配',
  [SuiteCoreStringKey.Error_RoleNotFoundTemplate]:
    '未找到角色 {NAME} 在角色枚举中的映射',
  [SuiteCoreStringKey.Error_SecureStorageDecryptedValueChecksumMismatch]:
    '解密值的校验和与预期不符',
  [SuiteCoreStringKey.Error_SecureStorageDecryptedValueLengthMismatch]:
    '解密值的长度与预期不符',
  [SuiteCoreStringKey.Error_SecureStorageValueIsNull]: '安全存储值为空',
  [SuiteCoreStringKey.Error_SymmetricDataNullOrUndefined]:
    '加密数据不能为空或未定义',
  [SuiteCoreStringKey.Error_SymmetricInvalidKeyLengthTemplate]:
    '加密密钥必须为 {KEY_BYTES} 字节长',
  [SuiteCoreStringKey.Error_UnknownEnumValueForEnumTemplate]:
    '未知的枚举值: {value} 对于枚举: {enumName}',
  [SuiteCoreStringKey.Error_EmailService_NotConfigured]:
    '电子邮件服务未配置。在使用中间件之前请调用 setEmailService()。',
  [SuiteCoreStringKey.Error_FailedToCreateEmailToken]: '创建电子邮件令牌失败',
  [SuiteCoreStringKey.Error_MustMatchRegexTemplate]:
    '{value} 必须符合要求的格式',
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
  [SuiteCoreStringKey.KeyFeatures_1]:
    '安全地存储文件，并设置自动释放或删除规则。',
  [SuiteCoreStringKey.KeyFeatures_2]: '创建“金丝雀”来监控您的数字或物理活动。',
  [SuiteCoreStringKey.KeyFeatures_3]:
    '根据金丝雀状态（例如，不活动）触发操作。',
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
  [SuiteCoreStringKey.Login_UseEmailAddress]: '使用邮箱地址',
  [SuiteCoreStringKey.Login_UseUsername]: '使用用户名',
  [SuiteCoreStringKey.LogoutButton]: '登出',
  [SuiteCoreStringKey.MemberRoleNotFound]: '未找到成员角色',
  [SuiteCoreStringKey.SystemRoleNotFound]: '未找到系统角色',
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
  [SuiteCoreStringKey.PasswordReset_AlreadySent]:
    '密码重置链接已发送到您的邮箱。',
  [SuiteCoreStringKey.PasswordReset_EmailNotVerified]:
    '请在重置密码前验证您的邮箱地址。',
  [SuiteCoreStringKey.PasswordReset_Success]:
    '如果该邮箱存在账户，密码重置链接已发送。',
  [SuiteCoreStringKey.PasswordReset_Title]: '重置密码',
  [SuiteCoreStringKey.PasswordReset_Button]: '发送重置链接',
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
  [SuiteCoreStringKey.Registration_DirectChallengeLabel]: '启用直接挑战登录',
  [SuiteCoreStringKey.Registration_DirectChallengeHelper]:
    '允许直接使用您的助记词登录，无需电子邮件验证。这更方便，但如果您的助记词泄露，安全性会降低。',
  [SuiteCoreStringKey.RemoveAdmin_Success]: '管理员移除成功',
  [SuiteCoreStringKey.RemoveAdmin_Unauthorized]: '未授权移除管理员',
  [SuiteCoreStringKey.RemoveMember_Success]: '成员移除成功',
  [SuiteCoreStringKey.RemoveMember_Unauthorized]: '未授权移除成员',
  [SuiteCoreStringKey.RequestNewVerificationEmail]: '请求新的验证邮件',
  [SuiteCoreStringKey.Settings_SaveSuccess]: '设置保存成功',
  [SuiteCoreStringKey.Settings_Title]: '设置',
  [SuiteCoreStringKey.Settings_EmailHelper]:
    '更改您的电子邮件地址将需要重新验证。我们将向新地址发送验证电子邮件以确认。请在保存更改后检查您的收件箱，并按照电子邮件中的说明验证您的新地址。',
  [SuiteCoreStringKey.Settings_SiteLanguage]: '网站语言',
  [SuiteCoreStringKey.Settings_Currency]: '首选货币',
  [SuiteCoreStringKey.Settings_DarkMode]: '深色模式',
  [SuiteCoreStringKey.Settings_DarkModeSuccess]: '深色模式已成功更新',
  [SuiteCoreStringKey.Settings_Saving]: '正在保存设置...',
  [SuiteCoreStringKey.Settings_Save]: '保存设置',
  [SuiteCoreStringKey.Settings_RetrievedSuccess]: '设置检索成功',
  [SuiteCoreStringKey.Settings_UpdateFailed]: '更新设置失败',
  [SuiteCoreStringKey.Settings_RetrieveFailure]: '检索设置失败',
  [SuiteCoreStringKey.SignInButton]: '登录',
  [SuiteCoreStringKey.TestItemCountTemplate]: '{count} 项',
  [SuiteCoreStringKey.TestTemplate]:
    '这是一个测试: {variable1}, {AdministratorEmail}',
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
  [SuiteCoreStringKey.Validation_InvalidUserIdTemplate]:
    '无效的用户ID: {detail}',
  [SuiteCoreStringKey.Validation_IsMemberBoolean]: 'isMember 必须是布尔值',
  [SuiteCoreStringKey.Validation_MemberIdRequired]: '需要成员ID',
  [SuiteCoreStringKey.Validation_MnemonicOrPasswordRequired]:
    '助记词或密码是必需的',
  [SuiteCoreStringKey.Validation_MnemonicRequired]: '助记词是必需的。',
  [SuiteCoreStringKey.Validation_NameRequired]: '需要名称',
  [SuiteCoreStringKey.Validation_NewPasswordRequired]: '需要新密码',
  [SuiteCoreStringKey.Validation_PasswordMatch]: '密码必须匹配',
  [SuiteCoreStringKey.Validation_PasswordMinLengthTemplate]:
    '密码必须至少包含 {PasswordMinLength} 个字符',
  [SuiteCoreStringKey.Validation_PasswordRegexErrorTemplate]:
    '密码必须至少包含 {PasswordMinLength} 个字符，并且包含至少一个字母、一个数字和一个特殊字符 (!@#$%^&*()_+-=[]{};\':"|,.<>/?)`',
  [SuiteCoreStringKey.Validation_PasswordsDifferent]:
    '新密码必须与当前密码不同',
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
};
