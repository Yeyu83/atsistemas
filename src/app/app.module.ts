import { CoreModule } from '@app/core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@shared/layout/layout.module';
import { LoadingModule } from '@shared/components/loading/loading.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    CoreModule,
    LayoutModule,
    LoadingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
