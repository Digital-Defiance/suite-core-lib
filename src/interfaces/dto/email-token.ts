/**
 * Email token Data Transfer Object (DTO) type.
 * Plain string-based representation of email token data for serialization and API transfer.
 */
import { IEmailTokenBase } from '../bases/email-token';

export type IEmailTokenDTO = IEmailTokenBase<string, string, string>;
