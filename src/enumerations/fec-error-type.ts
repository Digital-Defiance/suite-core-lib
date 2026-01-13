/**
 * Forward Error Correction (FEC) error types for data encoding/decoding operations.
 */
export enum FecErrorType {
  DataRequired = 'DataRequired',
  InputDataMustBeUint8Array = 'InputDataMustBeUint8Array',
  InvalidShardCounts = 'InvalidShardCounts',
  InvalidShardsAvailableArray = 'InvalidShardsAvailableArray',
  ParityDataCountMustBePositive = 'ParityDataCountMustBePositive',
  ParityDataRequired = 'ParityDataRequired',
  InvalidDataLength = 'InvalidDataLength',
  ShardSizeExceedsMaximum = 'ShardSizeExceedsMaximum',
  NotEnoughShardsAvailable = 'NotEnoughShardsAvailable',
  FecEncodingFailed = 'FecEncodingFailed',
  FecDecodingFailed = 'FecDecodingFailed',
}
