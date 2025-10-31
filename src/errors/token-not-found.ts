import { CoreLanguageCode, CustomLanguageContext } from '@digitaldefiance/i18n-lib';
import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteHandleableError } from './translatable-suite-handleable';


export class TokenNotFoundError extends TranslatableSuiteHandleableError {
  public readonly token: string;
  constructor(
    token: string,
    language?: CoreLanguageCode,
    statusCode = 404,
  ) {
    super(
      SuiteCoreStringKey.TokenNotFoundTemplate,
      {
        TOKEN: token,
      },
      language,
      {
        statusCode,
      },
    );
    this.token = token;
    this.name = 'TokenNotFoundError';
  }
}
