import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { NotificationService } from '@shared/services/notification.service';

@Injectable()
export class HttpErrorHandler implements ErrorHandler {
  constructor(
    private injector: Injector,
  ) { }

  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      this.injector.get(NotificationService).showError(error.message);
    }
  }
}
