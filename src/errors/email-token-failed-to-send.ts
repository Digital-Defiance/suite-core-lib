import { CoreLanguageCode, HandleableError, HandleableErrorOptions } from '@digitaldefiance/i18n-lib';
import { EmailTokenType, SuiteCoreStringKey } from '../enumerations';
import { getSuiteCoreTranslation } from '../i18n-setup';

export class EmailTokenFailedToSendError extends HandleableError {
  constructor(tokenType: EmailTokenType, language?: CoreLanguageCode, options?: HandleableErrorOptions) {
    const map: Record<EmailTokenType, SuiteCoreStringKey> = {
      [EmailTokenType.AccountVerification]: SuiteCoreStringKey.TokenType_AccountVerification,
      [EmailTokenType.PasswordReset]: SuiteCoreStringKey.TokenType_PasswordReset,
      [EmailTokenType.LoginRequest]: SuiteCoreStringKey.TokenType_LoginRequest,
      [EmailTokenType.MnemonicRecoveryRequest]: SuiteCoreStringKey.TokenType_MnemonicRecoveryRequest,
      [EmailTokenType.PrivateKeyRequest]: SuiteCoreStringKey.TokenType_PrivateKeyRequest,
    };
    const translate = getSuiteCoreTranslation(map[tokenType], undefined, language);
    super(
      new Error(`${getSuiteCoreTranslation(SuiteCoreStringKey.Email_TokenFailedToSend, undefined, language)}: ${translate}`), options
    );
    this.name = 'EmailTokenFailedToSendError';
  }
}
