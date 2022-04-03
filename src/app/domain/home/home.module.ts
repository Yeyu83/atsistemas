import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@domain/home/home.component';
import { HomeRoutingModule } from '@domain/home/home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
