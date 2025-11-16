import { SuiteCoreStringKey } from '../enumerations';
import { TranslatableSuiteError } from './translatable-suite';

export class InvalidChallengeError extends TranslatableSuiteError {
  constructor() {
    super(SuiteCoreStringKey.Error_ChallengeError);
    this.name = 'InvalidChallengeError';
  }
}
