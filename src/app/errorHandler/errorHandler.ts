import {HttpErrorResponse} from '@angular/common/http';
import {MessageService} from 'primeng/api';

export class _ErrorHandler {
  constructor(e, private messageService?: MessageService) {
    this.httpErrorResponse(e);
  }

  private httpErrorResponse(e) {
    if (e instanceof HttpErrorResponse) {
      this.messageService.add({
        severity: 'error',
        summary: `${e.error['status'].toUpperCase()}-${e.error['code']}`,
        detail: e.error['message'],
      });
      console.log(e.error);
    }
  }
}
