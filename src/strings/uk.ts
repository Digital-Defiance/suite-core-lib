/**
 * Ukrainian (uk) translation strings for suite-core library.
 * Contains all localized error messages and user-facing text in Ukrainian.
 */
import { SuiteCoreStringKey } from '../enumerations';
import type { SuiteCoreStringKeyValue } from '../enumerations';

export const ukrainianStrings: Record<SuiteCoreStringKeyValue, string> = {
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
  [SuiteCoreStringKey.Error_ArrayLengthMismatch]:
    'Довжини масивів повинні бути однаковими',
  [SuiteCoreStringKey.Error_AccountStatus_Active]: 'Обліковий запис активний',
  [SuiteCoreStringKey.Error_AccountStatus_AdminLock]:
    'Обліковий запис заблоковано адміністратором',
  [SuiteCoreStringKey.Error_AccountStatus_PendingEmailVerification]:
    'Обліковий запис очікує підтвердження електронної пошти',
  [SuiteCoreStringKey.Error_IndexFileNotFoundTemplate]:
    'Файл індексу не знайдено: {path}',
  [SuiteCoreStringKey.Error_AppDoesNotAppearToBeRunningWithinDistTemplate]:
    'Здається, додаток не працює в каталозі /dist/: {dir}',
  [SuiteCoreStringKey.Error_InvalidCertificatePathAfterResolution]:
    'Недійсний шлях до сертифіката після вирішення',
  [SuiteCoreStringKey.Error_InvalidCertificatePathMustBeAbsolute]:
    'Недійсний шлях до сертифіката: повинен бути абсолютним і не може містити ..',
  [SuiteCoreStringKey.Error_InvalidViewsPathEscapesBaseDirectory]:
    'Недійсний шлях перегляду: виходить за межі базового каталогу',
  [SuiteCoreStringKey.Error_InvalidPathContainsParentDirectoryReference]:
    'Недійсний шлях: містить посилання на батьківський каталог',
  [SuiteCoreStringKey.Error_InvalidIndexPathEscapesBaseDirectory]:
    'Недійсний шлях індексу: виходить за межі базового каталогу',
  [SuiteCoreStringKey.Error_InvalidAssetsPathEscapesBaseDirectory]:
    'Недійсний шлях ресурсів: виходить за межі базового каталогу',
  [SuiteCoreStringKey.Error_MissingRequiredEnvironmentVariableTemplate]:
    "Відсутня обов'язкова змінна середовища: {key}",
  [SuiteCoreStringKey.Error_EmptyEnvironmentVariableTemplate]:
    'Змінна середовища {key} порожня',
  [SuiteCoreStringKey.Error_ChildRoleCannotBeASystemRole]:
    'Дочірня роль не може бути системною роллю',
  [SuiteCoreStringKey.Error_ChildRoleCannotBeAnAdminRole]:
    'Дочірня роль не може бути роллю адміністратора',
  [SuiteCoreStringKey.Error_RecursiveErrorHandlingDetected]:
    'Виявлено рекурсивну обробку помилок',
  [SuiteCoreStringKey.Error_SystemUserMustBeSystemMemberType]:
    'Системний користувач повинен бути типу MemberType.System',
  [SuiteCoreStringKey.Error_JwtSecretMustBe64CharHexString]:
    'JWT_SECRET повинен бути шістнадцятковим рядком з 64 символів',
  [SuiteCoreStringKey.Error_MnemonicEncryptionKeyMustBe64CharHexString]:
    'MNEMONIC_ENCRYPTION_KEY повинен бути шістнадцятковим рядком з 64 символів',
  [SuiteCoreStringKey.Error_AdminMnemonicMustBeValidMnemonicPhrase]:
    'ADMIN_MNEMONIC повинен бути дійсною мнемонічною фразою',
  [SuiteCoreStringKey.Error_MemberMnemonicMustBeValidMnemonicPhrase]:
    'MEMBER_MNEMONIC повинен бути дійсною мнемонічною фразою',
  [SuiteCoreStringKey.Error_InvalidCspOrHelmetOptionsProvided]:
    'Надано недійсні параметри CSP або Helmet',
  [SuiteCoreStringKey.Validation_ValueIsRequired]: "Значення є обов'язковим",
  [SuiteCoreStringKey.Validation_ValueMustBeOneOfTheAvailableOptions]:
    'Значення повинно бути одним з доступних варіантів',
  [SuiteCoreStringKey.Common_UnexpectedError]: 'Сталася неочікувана помилка',
  [SuiteCoreStringKey.Common_Ready]: 'Готово',
  [SuiteCoreStringKey.Common_Success]: 'Успіх',
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
  [SuiteCoreStringKey.Error_UnexpectedErrorInAuthenticateCrypto]:
    'Неочікувана помилка в authenticateCrypto',
  [SuiteCoreStringKey.Common_StackTrace]: 'Трасування стека',
  [SuiteCoreStringKey.Error_EngineAlreadySet]: 'Двигун i18n вже налаштовано',
  [SuiteCoreStringKey.Error_EngineNotSet]: 'Двигун i18n не налаштовано',
  [SuiteCoreStringKey.Error_LengthExceedsMaximum]: 'Довжина перевищує максимум',
  [SuiteCoreStringKey.Error_LengthIsInvalidType]: 'Довжина має недійсний тип',
  [SuiteCoreStringKey.Error_FailedToStartApplication]:
    'Не вдалося запустити додаток',
  [SuiteCoreStringKey.Error_InvalidModelKeyTemplate]:
    'Недійсний ключ моделі: {modelKey}',
  [SuiteCoreStringKey.Error_ModelNotRegisteredTemplate]:
    'Модель не зареєстрована: {modelName}',
  [SuiteCoreStringKey.Error_FailedToCreateRoleTemplate]:
    'Не вдалося створити роль {NAME}',
  [SuiteCoreStringKey.Error_ValidationFunctionNotRegisteredInAllowlist]:
    'Функцію валідації не зареєстровано в allowlist',
  [SuiteCoreStringKey.Error_MnemonicHmacSecretMustBe64CharHexString]:
    'MNEMONIC_HMAC_SECRET повинен бути шістнадцятковим рядком з 64 символів',
  [SuiteCoreStringKey.Error_Pbkdf2IterationsMustBeGreaterThanZero]:
    'PBKDF2_ITERATIONS повинен бути більше 0',
  [SuiteCoreStringKey.Error_LetsEncryptMaintainerEmailRequired]:
    'LETS_ENCRYPT_EMAIL є обов\'язковим, коли Let\'s Encrypt увімкнено',
  [SuiteCoreStringKey.Error_LetsEncryptHostnamesRequired]:
    'LETS_ENCRYPT_HOSTNAMES є обов\'язковим, коли Let\'s Encrypt увімкнено',
  [SuiteCoreStringKey.Error_LetsEncryptInvalidHostnameTemplate]:
    'Недійсне ім\'я хоста в LETS_ENCRYPT_HOSTNAMES: {hostname}',
  [SuiteCoreStringKey.Error_EnvironmentIsRequired]: "Середовище є обов'язковим",
  [SuiteCoreStringKey.Error_ApiRouterFactoryIsRequired]:
    "Фабрика API-маршрутизатора є обов'язковою",
  [SuiteCoreStringKey.Error_SchemaMapFactoryIsRequired]:
    "Фабрика карти схеми є обов'язковою",
  [SuiteCoreStringKey.Error_DatabaseInitFunctionIsRequired]:
    "Функція ініціалізації бази даних є обов'язковою",
  [SuiteCoreStringKey.Error_InitResultHashFunctionIsRequired]:
    "Функція хешування результату ініціалізації є обов'язковою",
  [SuiteCoreStringKey.Error_ServiceIsNotRegisteredTemplate]:
    'Сервіс {key} не зареєстровано',
  [SuiteCoreStringKey.ValidationError]: 'Помилка Валідації',
  [SuiteCoreStringKey.Validation_MissingValidatedData]:
    'Відсутні валідовані дані',
  [SuiteCoreStringKey.Validation_MissingValidatedDataForFieldTemplate]:
    'Відсутні валідовані дані для поля: {field}',
  [SuiteCoreStringKey.Validation_MnemonicRegex]: 'Недійсний формат мнемоніки',
  [SuiteCoreStringKey.Admin_DotEnvFormat]:
    'Нижче наведено облікові дані, які потрібно додати до файлу API .env',
  [SuiteCoreStringKey.Admin_EndDotEnvFormat]: 'Кінець облікових даних .env',
  [SuiteCoreStringKey.Admin_Error_InvalidMongoUri]: 'Недійсний Mongo URI',
  [SuiteCoreStringKey.Admin_NoMongoDbClientFoundFallingBack]:
    'Клієнт MongoDB не знайдено, використовується резервний варіант',
  [SuiteCoreStringKey.Admin_TransactionFailedTransientTemplate]:
    'Транзакція не вдалася (тимчасово): {error}',
  [SuiteCoreStringKey.Admin_TransactionTimeoutTemplate]:
    'Тайм-аут транзакції після {timeMs}мс',
  [SuiteCoreStringKey.Admin_StartingDatabaseInitialization]:
    'Початок ініціалізації бази даних',
  [SuiteCoreStringKey.Admin_Error_FailedToInitializeUserDatabaseTimeoutTemplate]:
    'Не вдалося ініціалізувати базу даних користувача (тайм-аут після {timeMs}мс)',
  [SuiteCoreStringKey.Admin_EnvNotSetTemplate]:
    'Змінна середовища не встановлена: {variable}',
  [SuiteCoreStringKey.Admin_ServingRoute]: 'Обслуговування маршруту',
  [SuiteCoreStringKey.Admin_AccountCredentials]:
    'Облікові дані облікового запису (зберегти в менеджері паролів)',
  [SuiteCoreStringKey.Admin_CreatingUserTemplate]:
    'Створення {TYPE} користувача {NAME} та генерація ключів',
  [SuiteCoreStringKey.Admin_DatabaseInitializedWithOptionsHashTemplate]:
    'База даних ініціалізована з хешем параметрів: {hash}',
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
  [SuiteCoreStringKey.Admin_ErrorCleaningUpTestData]:
    'Помилка очищення тестових даних',
  [SuiteCoreStringKey.Admin_ErrorClosingConnection]:
    "Помилка закриття з'єднання",
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
  [SuiteCoreStringKey.Admin_CredentialsWrittenToEnv]:
    'Облікові дані записано в {path}',
  [SuiteCoreStringKey.Admin_UsingMongoDbMemoryWithTransactions]:
    'Використання MongoDB Memory Server з підтримкою транзакцій',
  [SuiteCoreStringKey.AdminRoleNotFound]: 'Роль адміністратора не знайдено',
  [SuiteCoreStringKey.ApiAccess_Title]: 'Ваш токен доступу',
  [SuiteCoreStringKey.ApiAccess_TokenNotAvailable]: 'Токен недоступний',
  [SuiteCoreStringKey.BackupCodes_FailedToFetch]:
    'Не вдалося отримати коди резервної копії',
  [SuiteCoreStringKey.BackupCodes_FailedToGenerate]:
    'Не вдалося згенерувати коди резервної копії',
  [SuiteCoreStringKey.BackupCodeRecovery_CodesRemainingTemplate]:
    '{count} кодів резервної копії залишилося',
  [SuiteCoreStringKey.BackupCodeRecovery_GenerateNewCodes]:
    'Генерувати нові коди резервної копії',
  [SuiteCoreStringKey.BackupCodeRecovery_Login]:
    'Вхід за допомогою коду резервної копії',
  [SuiteCoreStringKey.BackupCodeRecovery_RecoverMnemonic]:
    'Відновити мнемоніку',
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
  [SuiteCoreStringKey.Common_CheckingAuthentication]:
    'Перевірка автентифікації',
  [SuiteCoreStringKey.Common_ClearMnemonic]: 'Очистити мнемоніку',
  [SuiteCoreStringKey.Common_ClearWallet]: 'Очистити гаманець',
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
  [SuiteCoreStringKey.Common_EmailVerification]:
    'Підтвердження електронної пошти',
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
  [SuiteCoreStringKey.Common_MnemonicExpiration]:
    'Закінчення терміну дії Мнемоніки',
  [SuiteCoreStringKey.Common_NewPassword]: 'Новий пароль',
  [SuiteCoreStringKey.Common_Notification]: 'Сповіщення',
  [SuiteCoreStringKey.Common_NotValidTimeZoneTemplate]:
    '{timezone} не є дійсним часовим поясом',
  [SuiteCoreStringKey.Common_NotValidCurrencyTemplate]:
    '{currency} не є дійсним кодом валюти',
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
  [SuiteCoreStringKey.Common_UserID]: 'ID користувача',
  [SuiteCoreStringKey.Common_UserCreatedTemplate]:
    '{TYPE} користувача {NAME} успішно створено',
  [SuiteCoreStringKey.Common_Username]: "Ім'я користувача",
  [SuiteCoreStringKey.Common_Using]: 'Використання',
  [SuiteCoreStringKey.Common_Wallet]: 'Гаманець',
  [SuiteCoreStringKey.Common_WalletExpiration]:
    'Закінчення терміну дії Гаманця',
  [SuiteCoreStringKey.Dashboard_YourDashboard]: 'Ваша панель керування',
  [SuiteCoreStringKey.Email_ConfirmationBody]:
    'Будь ласка, перейдіть за посиланням нижче, щоб підтвердити свою електронну пошту.',
  [SuiteCoreStringKey.Email_ConfirmationSubjectTemplate]:
    '{Site} підтвердження електронної пошти',
  [SuiteCoreStringKey.Email_LinkExpiresInTemplate]:
    'Посилання буде дійсним ще {EmailTokenResendIntervalMinutes} хвилин.',
  [SuiteCoreStringKey.Email_LoginRequestBody]:
    'Будь ласка, перейдіть за посиланням нижче, щоб увійти до свого облікового запису.',
  [SuiteCoreStringKey.Email_LoginRequestSubjectTemplate]:
    '{Site} запит на вхід',
  [SuiteCoreStringKey.Email_ResetPasswordBody]:
    'Будь ласка, перейдіть за посиланням нижче, щоб скинути свій пароль.',
  [SuiteCoreStringKey.Email_ResetPasswordSubjectTemplate]:
    '{Site} скидання пароля',
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
  [SuiteCoreStringKey.Error_VerificationFailed]: 'Верифікація не вдалася',
  [SuiteCoreStringKey.Error_NoPasswordOrMnemonicProvided]:
    'Не надано пароль або мнемонічну фразу',
  [SuiteCoreStringKey.Error_ChallengeError]:
    'Помилка під час створення виклику',
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
  [SuiteCoreStringKey.Error_EciesErrorFileSizeTooLarge]:
    'Розмір файлу занадто великий',
  [SuiteCoreStringKey.Error_EciesErrorInvalidAuthTagLength]:
    'Неправильна довжина тегу автентифікації',
  [SuiteCoreStringKey.Error_EciesErrorInvalidDataLength]:
    'Неправильна довжина даних',
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
  [SuiteCoreStringKey.Error_EciesErrorInvalidIVLength]:
    'Неправильна довжина IV',
  [SuiteCoreStringKey.Error_EciesErrorInvalidMessageCrc]:
    'Неправильний CRC повідомлення',
  [SuiteCoreStringKey.Error_EciesErrorInvalidMnemonic]:
    'Неправильний мнемонічний код',
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
  [SuiteCoreStringKey.Error_EciesErrorRecipientNotFound]:
    'Отримувач не знайдений',
  [SuiteCoreStringKey.Error_EciesErrorSecretComputationFailed]:
    'Не вдалося обчислити спільний секрет під час операції ECIES',
  [SuiteCoreStringKey.Error_EciesErrorTooManyRecipients]:
    'Забагато отримувачів',
  [SuiteCoreStringKey.Error_EciesFailedSharedSecret]:
    'Не вдалося обчислити спільний секрет',
  [SuiteCoreStringKey.Error_EmailSentTooRecentlyTemplate]:
    'Токен електронної пошти надіслано занадто недавно. Будь ласка, спробуйте ще раз через ${timeRemaining} секунд.',
  [SuiteCoreStringKey.Error_FailedToCopy]: 'Помилка скопіювання тексту',
  [SuiteCoreStringKey.Error_FailedToCreateUserRoleTemplate]:
    "Не вдалося створити зв'язок між користувачем {USER_ID} та роллю {ROLE_ID}",
  [SuiteCoreStringKey.Error_FailedToCreateUserTemplate]:
    'Не вдалося створити користувача {NAME}',
  [SuiteCoreStringKey.Error_FailedToFindRoleTemplate]:
    'Не вдалося знайти роль {ROLE}',
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
  [SuiteCoreStringKey.Error_InvalidEmailTokenType]:
    'Недійсний тип токена електронної пошти.',
  [SuiteCoreStringKey.Error_InvalidEmailTemplate]:
    '{email} не є дійсною адресою електронної пошти.',
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
  [SuiteCoreStringKey.Error_Login_DirectChallengeNotEnabled]:
    'Прямий виклик входу не ввімкнено для цього облікового запису. Будь ласка, використовуйте вхід через електронну пошту або зверніться до служби підтримки.',
  [SuiteCoreStringKey.Error_Login_PasswordLoginNotEnabled]:
    'Вхід за паролем не ввімкнено для цього облікового запису. Будь ласка, використовуйте вхід через електронну пошту або зверніться до служби підтримки.',
  [SuiteCoreStringKey.Error_Login_PasswordLoginNotSetup]:
    'Вхід за паролем не налаштовано для цього браузера. Будь ласка, використовуйте вхід через електронну пошту або зверніться до служби підтримки.',
  [SuiteCoreStringKey.Error_MemberErrorEncryptionDataTooLarge]:
    'Дані шифрування занадто великі.',
  [SuiteCoreStringKey.Error_MemberErrorFailedToConvertMemberData]:
    'Не вдалося конвертувати дані члена.',
  [SuiteCoreStringKey.Error_MemberErrorFailedToHydrateMember]:
    'Не вдалося гідратувати члена.',
  [SuiteCoreStringKey.Error_MemberErrorIncorrectOrInvalidPrivateKey]:
    'Неправильний або недійсний приватний ключ для відкритого ключа',
  [SuiteCoreStringKey.Error_MemberErrorInvalidEmail]:
    'Недійсна електронна пошта.',
  [SuiteCoreStringKey.Error_MemberErrorInvalidEmailWhitespace]:
    'Електронна пошта містить пробіли перед або після.',
  [SuiteCoreStringKey.Error_MemberErrorInvalidEncryptionData]:
    'Недійсні дані шифрування.',
  [SuiteCoreStringKey.Error_MemberErrorInvalidMemberData]:
    'Недійсні дані члена.',
  [SuiteCoreStringKey.Error_MemberErrorInvalidMemberName]:
    'Недійсне ім’я члена.',
  [SuiteCoreStringKey.Error_MemberErrorInvalidMemberNameWhitespace]:
    'Ім’я члена містить пробіли перед або після.',
  [SuiteCoreStringKey.Error_MemberErrorInvalidMemberStatus]:
    'Недійсний статус члена.',
  [SuiteCoreStringKey.Error_MemberErrorInvalidMnemonic]:
    'Недійсний мнемонік гаманця.',
  [SuiteCoreStringKey.Error_MemberErrorMemberAlreadyExists]: 'Член вже існує.',
  [SuiteCoreStringKey.Error_MemberErrorMemberNotFound]: 'Член не знайдений.',
  [SuiteCoreStringKey.Error_MemberErrorMissingEmail]:
    'Відсутня електронна пошта.',
  [SuiteCoreStringKey.Error_MemberErrorMissingEncryptionData]:
    'Відсутні дані шифрування.',
  [SuiteCoreStringKey.Error_MemberErrorMissingMemberName]:
    'Відсутнє ім’я члена.',
  [SuiteCoreStringKey.Error_MemberErrorMissingPrivateKey]:
    'Відсутній приватний ключ.',
  [SuiteCoreStringKey.Error_MemberErrorMissingVotingPrivateKey]:
    'Відсутній приватний ключ для голосування.',
  [SuiteCoreStringKey.Error_MemberErrorMissingVotingPublicKey]:
    'Відсутній відкритий ключ для голосування.',
  [SuiteCoreStringKey.Error_MemberErrorNoWallet]:
    'Не завантажено жодного гаманця.',
  [SuiteCoreStringKey.Error_MemberErrorPrivateKeyRequiredToDeriveVotingKeyPair]:
    'Приватний ключ потрібен для отримання пари ключів для голосування.',
  [SuiteCoreStringKey.Error_MemberErrorWalletAlreadyLoaded]:
    'Гаманець вже завантажено.',
  [SuiteCoreStringKey.Error_MnemonicIsNullTemplate]:
    '{NAME} мнемонік є нульовим',
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
  [SuiteCoreStringKey.Error_EmailService_NotConfigured]:
    'Сервіс електронної пошти не налаштовано. Викличте setEmailService() перед використанням middleware.',
  [SuiteCoreStringKey.Error_FailedToCreateEmailToken]:
    'Не вдалося створити токен електронної пошти',
  [SuiteCoreStringKey.Error_MustMatchRegexTemplate]:
    '{value} має відповідати необхідному формату',
  [SuiteCoreStringKey.ForgotPassword_BackToLogin]: 'Повернутися до входу',
  [SuiteCoreStringKey.ForgotPassword_Error]:
    'Сталася помилка під час обробки вашого запиту.',
  [SuiteCoreStringKey.ForgotPassword_ForgotPassword]: 'Забули пароль',
  [SuiteCoreStringKey.ForgotPassword_InvalidToken]:
    'Недійсний або прострочений токен. Будь ласка, запросіть скидання пароля знову.',
  [SuiteCoreStringKey.ForgotPassword_ResetPassword]: 'Скинути пароль',
  [SuiteCoreStringKey.ForgotPassword_SendResetLink]:
    'Надіслати посилання для скидання',
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
  [SuiteCoreStringKey.KeyFeatures_4]:
    'Коди примусу для негайних, екстрених дій.',
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
  [SuiteCoreStringKey.Login_UseEmailAddress]:
    'Використати адресу електронної пошти',
  [SuiteCoreStringKey.Login_UseUsername]: "Використати ім'я користувача",
  [SuiteCoreStringKey.LogoutButton]: 'Вийти',
  [SuiteCoreStringKey.MemberRoleNotFound]: 'Роль учасника не знайдено',
  [SuiteCoreStringKey.SystemRoleNotFound]: 'Роль системи не знайдено',
  [SuiteCoreStringKey.MnemonicRecovery_Missing]:
    'Відсутні дані мнемонічного відновлення',
  [SuiteCoreStringKey.MnemonicRecovery_Success]:
    'Відновлення мнемоніки успішне',
  [SuiteCoreStringKey.NoMembersYet]: 'Поки що немає учасників',
  [SuiteCoreStringKey.NoVerificationTokenProvided]:
    'Токен підтвердження не надано.',
  [SuiteCoreStringKey.PasswordChange_IncorrectPassword]:
    'Поточний пароль невірний',
  [SuiteCoreStringKey.PasswordChange_Success]: 'Пароль успішно змінено',
  [SuiteCoreStringKey.PasswordLogin_InvalidCurrentPassword]:
    'Поточний пароль невірний',
  [SuiteCoreStringKey.PasswordLogin_Setup_Failure]:
    'Налаштування входу за паролем не вдалося',
  [SuiteCoreStringKey.PasswordLogin_Setup_NotAvailable]:
    'Вхід за паролем недоступний',
  [SuiteCoreStringKey.PasswordLogin_Setup_Success]:
    'Налаштування входу за паролем успішне',
  [SuiteCoreStringKey.PasswordReset_AlreadySent]:
    'Посилання для скидання пароля вже було надіслано на вашу електронну пошту.',
  [SuiteCoreStringKey.PasswordReset_EmailNotVerified]:
    'Будь ласка, підтвердіть свою електронну адресу перед скиданням пароля.',
  [SuiteCoreStringKey.PasswordReset_Success]:
    'Якщо аккаунт з такою електронною поштою існує, посилання для скидання пароля було надіслано.',
  [SuiteCoreStringKey.PasswordReset_Title]: 'Скидання Пароля',
  [SuiteCoreStringKey.PasswordReset_Button]: 'Скинути Пароль',
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
  [SuiteCoreStringKey.Registration_DirectChallengeLabel]:
    'Увімкнути прямий вхід за викликом',
  [SuiteCoreStringKey.Registration_DirectChallengeHelper]:
    'Дозволити вхід безпосередньо за допомогою вашої мнемонічної фрази без підтвердження електронної пошти. Це зручніше, але менш безпечно, якщо ваша мнемоніка скомпрометована.',
  [SuiteCoreStringKey.RemoveAdmin_Success]: 'Адміністратора успішно видалено',
  [SuiteCoreStringKey.RemoveAdmin_Unauthorized]:
    'Ви не маєте права видаляти адміністратора',
  [SuiteCoreStringKey.RemoveMember_Success]: 'Учасника успішно видалено',
  [SuiteCoreStringKey.RemoveMember_Unauthorized]:
    'Ви не маєте права видаляти учасника',
  [SuiteCoreStringKey.RequestNewVerificationEmail]:
    'запросіть новий лист для підтвердження',
  [SuiteCoreStringKey.Settings_SaveSuccess]: 'Налаштування успішно збережено',
  [SuiteCoreStringKey.Settings_Title]: 'Налаштування',
  [SuiteCoreStringKey.Settings_EmailHelper]:
    'Зміна вашої адреси електронної пошти вимагатиме повторної перевірки. Ми надішлемо лист для підтвердження на нову адресу. Будь ласка, перевірте свою поштову скриньку після збереження змін і дотримуйтесь інструкцій у листі, щоб підтвердити нову адресу.',
  [SuiteCoreStringKey.Settings_SiteLanguage]: 'Мова сайту',
  [SuiteCoreStringKey.Settings_Currency]: 'Бажана валюта',
  [SuiteCoreStringKey.Settings_DarkMode]: 'Темний режим',
  [SuiteCoreStringKey.Settings_DarkModeSuccess]:
    'Темний режим успішно оновлено',
  [SuiteCoreStringKey.Settings_Saving]: 'Збереження налаштувань...',
  [SuiteCoreStringKey.Settings_Save]: 'Зберегти налаштування',
  [SuiteCoreStringKey.Settings_RetrievedSuccess]:
    'Налаштування успішно отримано',
  [SuiteCoreStringKey.Settings_UpdateFailed]: 'Не вдалося оновити налаштування',
  [SuiteCoreStringKey.Settings_RetrieveFailure]:
    'Не вдалося отримати налаштування',
  [SuiteCoreStringKey.SignInButton]: 'Увійти',
  [SuiteCoreStringKey.TestItemCountTemplate]: '{count} елементів',
  [SuiteCoreStringKey.TestTemplate]:
    'Це тест: {variable1}, {AdministratorEmail}',
  [SuiteCoreStringKey.TestUsernameTemplate]:
    'Це тестове ім’я користувача: {user}',
  [SuiteCoreStringKey.TogglePasswordVisibility]: 'показати/приховати пароль',
  [SuiteCoreStringKey.TokenCreate_Success]: 'Токен успішно створено',
  [SuiteCoreStringKey.TokenNotFoundTemplate]: 'Токен не знайдено: {TOKEN}',
  [SuiteCoreStringKey.TokenRefreshed]: 'Токен оновлено',
  [SuiteCoreStringKey.TokenType_AccountVerification]: 'Підтвердження аккаунта',
  [SuiteCoreStringKey.TokenType_LoginRequest]: 'Запит на вхід',
  [SuiteCoreStringKey.TokenType_PasswordReset]: 'Скидання пароля',
  [SuiteCoreStringKey.TokenType_MnemonicRecoveryRequest]:
    'Запит на відновлення мнемоніки',
  [SuiteCoreStringKey.TokenType_PrivateKeyRequest]: 'Запит приватного ключа',
  [SuiteCoreStringKey.Validation_AccountLocked]: 'Аккаунт заблоковано',
  [SuiteCoreStringKey.Validation_AdminUserIdRequired]:
    'Потрібно вказати ID адміністратора',
  [SuiteCoreStringKey.Validation_ConfirmNewPassword]:
    'Будь ласка, підтвердіть новий пароль',
  [SuiteCoreStringKey.Validation_CreatedUserIdError]:
    'Ідентифікатор створеного користувача не існує або не відповідає новому ідентифікатору користувача.',
  [SuiteCoreStringKey.Validation_CurrencyCodeRequired]:
    'Потрібно вказати код валюти',
  [SuiteCoreStringKey.Validation_CurrentPasswordRequired]:
    'Потрібно вказати поточний пароль',
  [SuiteCoreStringKey.Validation_DescriptionRequired]: 'Потрібно вказати опис',
  [SuiteCoreStringKey.Validation_EmailNotVerified]:
    'Електронна пошта не підтверджена',
  [SuiteCoreStringKey.Validation_HmacRegex]:
    'HMAC має бути дійсною шестнадцятковою рядком.',
  [SuiteCoreStringKey.Validation_InvalidAdminUserId]:
    'Недійсний ID адміністратора',
  [SuiteCoreStringKey.Validation_InvalidBackupCode]:
    'Недійсний або вже використаний код резервного копіювання',
  [SuiteCoreStringKey.Validation_InvalidChallenge]:
    'Недійсний або неправильний виклик',
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
  [SuiteCoreStringKey.Validation_InvalidPassword]:
    'Недійсний або неправильний пароль',
  [SuiteCoreStringKey.Validation_InvalidSignature]: 'Недійсна підпис',
  [SuiteCoreStringKey.Validation_InvalidUserId]: 'Недійсний ID користувача',
  [SuiteCoreStringKey.Validation_InvalidUserIdTemplate]:
    'Недійсний ID користувача: {detail}',
  [SuiteCoreStringKey.Validation_IsMemberBoolean]:
    'isMember має бути булевим значенням',
  [SuiteCoreStringKey.Validation_MemberIdRequired]:
    'Потрібно вказати ID учасника',
  [SuiteCoreStringKey.Validation_MnemonicOrPasswordRequired]:
    'Потрібно вказати або мнемонічну фразу, або пароль',
  [SuiteCoreStringKey.Validation_MnemonicRequired]:
    'Мнемонічна фраза є обов’язковою.',
  [SuiteCoreStringKey.Validation_NameRequired]: "Потрібно вказати ім'я",
  [SuiteCoreStringKey.Validation_NewPasswordRequired]:
    'Потрібно вказати новий пароль',
  [SuiteCoreStringKey.Validation_PasswordMatch]: 'Паролі мають збігатися',
  [SuiteCoreStringKey.Validation_PasswordMinLengthTemplate]:
    'Пароль має містити щонайменше {PasswordMinLength} символів',
  [SuiteCoreStringKey.Validation_PasswordRegexErrorTemplate]:
    'Пароль має містити щонайменше {PasswordMinLength} символів та включати хоча б одну літеру, одну цифру та один спеціальний символ (!@#$%^&*()_+-=[]{};\':"|,.<>/?)',
  [SuiteCoreStringKey.Validation_PasswordsDifferent]:
    'Новий пароль має відрізнятися від поточного',
  [SuiteCoreStringKey.Validation_Required]: 'Обов’язкове поле',
  [SuiteCoreStringKey.Validation_TimezoneInvalid]: 'Невірний часовий пояс',
  [SuiteCoreStringKey.Validation_TimezoneRequired]:
    'Потрібно вказати часовий пояс',
  [SuiteCoreStringKey.Validation_TokenInvalid]:
    'Посилання для підтвердження електронної пошти вже використано або недійсне',
  [SuiteCoreStringKey.Validation_TokenMissing]: 'Токен не надано',
  [SuiteCoreStringKey.Validation_TokenRequired]: 'Потрібно вказати токен',
  [SuiteCoreStringKey.Validation_TokenValid]: 'Токен дійсний',
  [SuiteCoreStringKey.Validation_UserIdMustNotExist]:
    'Новий ідентифікатор користувача не повинен існувати.',
  [SuiteCoreStringKey.Validation_UserIdRequired]:
    'Потрібно вказати ID користувача',
  [SuiteCoreStringKey.Validation_UsernameMaxLengthTemplate]:
    "Ім'я користувача має містити не більше {UsernameMaxLength} символів",
  [SuiteCoreStringKey.Validation_UsernameMinLengthTemplate]:
    "Ім'я користувача має містити щонайменше {UsernameMinLength} символів",
  [SuiteCoreStringKey.Validation_UsernameRegexErrorTemplate]:
    "Ім'я користувача має містити від {UsernameMinLength} до {UsernameMaxLength} символів і складатися лише з літер та цифр",
  [SuiteCoreStringKey.Validation_UserNotFound]:
    'Користувача не знайдено або він неактивний',
};
