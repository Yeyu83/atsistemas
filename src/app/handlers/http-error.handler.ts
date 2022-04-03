import { HttpErrorService } from '@shared/services/http-error.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';

@Injectable()
export class HttpErrorHandler implements ErrorHandler {
  constructor(
    private injector: Injector,
  ) { }

  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      this.injector.get(HttpErrorService).show(error.message);
    }
  }
}
