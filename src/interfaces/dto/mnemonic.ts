/**
 * Mnemonic Data Transfer Object (DTO) type.
 * Plain string-based representation of mnemonic data for serialization and API transfer.
 */
import { IMnemonicBase } from '../bases';

export type IMnemonicDTO = IMnemonicBase<string>;
