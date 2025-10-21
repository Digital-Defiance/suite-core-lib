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
