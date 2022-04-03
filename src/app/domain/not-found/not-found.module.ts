import { NotFoundComponent } from '@domain/not-found/not-found.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundRoutingModule } from '@domain/not-found/not-found-routing.module';

@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NotFoundRoutingModule,
  ],
  exports: [
    NotFoundComponent,
  ]
})
export class NotFoundModule { }
