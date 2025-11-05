
import { PluginTypedError } from '@digitaldefiance/i18n-lib';
import { FecErrorType, SuiteCoreStringKey } from '../enumerations';
import { getSuiteCoreI18nEngine, SuiteCoreComponentId } from '../i18n-setup';

export class FecError extends PluginTypedError<typeof FecErrorType, SuiteCoreStringKey> {
  constructor(
    type: FecErrorType,
    language?: string,
    templateParams?: Record<string, string>,
  ) {
    super(
      SuiteCoreComponentId,
      type,
      {
        [FecErrorType.DataRequired]: SuiteCoreStringKey.Error_FecErrorDataRequired,
        [FecErrorType.InvalidShardCounts]: SuiteCoreStringKey.Error_FecErrorInvalidShardCounts,
        [FecErrorType.InvalidShardsAvailableArray]: SuiteCoreStringKey.Error_FecErrorInvalidShardsAvailableArray,
        [FecErrorType.InputDataMustBeUint8Array]: SuiteCoreStringKey.Error_FecErrorInputDataMustBeUint8Array,
        [FecErrorType.InvalidDataLength]: SuiteCoreStringKey.Error_FecErrorInvalidDataLengthTemplate,
        [FecErrorType.ShardSizeExceedsMaximum]: SuiteCoreStringKey.Error_FecErrorShardSizeExceedsMaximumTemplate,
        [FecErrorType.NotEnoughShardsAvailable]: SuiteCoreStringKey.Error_FecErrorNotEnoughShardsAvailableTemplate,
        [FecErrorType.FecEncodingFailed]: SuiteCoreStringKey.Error_FecErrorFecEncodingFailedTemplate,
        [FecErrorType.FecDecodingFailed]: SuiteCoreStringKey.Error_FecErrorFecDecodingFailedTemplate,
        [FecErrorType.ParityDataCountMustBePositive]: SuiteCoreStringKey.Error_FecErrorParityDataCountMustBePositive,
        [FecErrorType.ParityDataRequired]: SuiteCoreStringKey.Error_FecErrorParityDataRequired,
      },
      language,
      templateParams,
    );
    this.name = 'FecError';
  }
}
