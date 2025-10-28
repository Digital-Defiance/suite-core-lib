import { EmailTokenType } from '../../enumerations/email-token-type';
import { IEmailTokenBase } from '../bases/email-token';

export type IEmailTokenFrontendObject = IEmailTokenBase<
  string,
  Date,
  EmailTokenType
>;
