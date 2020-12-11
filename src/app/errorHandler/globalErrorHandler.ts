import {ErrorHandler, Injectable} from '@angular/core';
import {_ErrorHandler} from './errorHandler';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn:MessageService
})
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: Error): void {
    alert('global error')
    console.log(error);
  }
}
