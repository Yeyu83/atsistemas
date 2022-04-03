import {
  HttpRequest, HttpHandler, HttpEvent, HttpInterceptor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from '@shared/services/loading.service';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(
    private readonly loadingService: LoadingService,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(() => this.loadingService.setLoadingState(true)),
      finalize(() => this.loadingService.setLoadingState(false)),
    );
  }
}
