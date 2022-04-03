import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class HttpErrorHandler implements ErrorHandler {
  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      alert(error.message)
    }
  }
}
