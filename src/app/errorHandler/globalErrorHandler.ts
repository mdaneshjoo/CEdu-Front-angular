import {ErrorHandler} from '@angular/core';
import {_ErrorHandler} from './errorHandler';

export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: Error): void {
    new _ErrorHandler(error);
  }
}
