import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreRoutingModule } from './core-routing.module';
import { LoadingInterceptor } from '@app/interceptors/loading.interceptor';
import { HttpErrorHandler } from '@app/handlers/http-error.handler';
import { MatSnackBarModule } from '@angular/material/snack-bar';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'es',
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: HttpErrorHandler,
    },
  ],
})
export class CoreModule { }
