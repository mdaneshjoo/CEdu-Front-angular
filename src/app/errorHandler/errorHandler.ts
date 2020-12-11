import {HttpErrorResponse} from '@angular/common/http';
import {MessageService} from 'primeng/api';

export class _ErrorHandler {
  private messageService=new MessageService();

  constructor(e) {
    this.httpErrorResponse(e);
  }

  private httpErrorResponse(e) {
    if (e instanceof HttpErrorResponse) {
      this.messageService.add({
        severity: 'error',
        summary: 'Authentication Failed',
        detail: 'API Key or URL is invalid.',
      });
      console.log(e.error);
    }
  }
}
