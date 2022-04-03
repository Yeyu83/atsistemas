import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsComponent } from '@domain/actors/actors.component';
import { ActorsRoutingModule } from './actors-routing.module';

@NgModule({
  declarations: [
    ActorsComponent,
  ],
  imports: [
    CommonModule,
    ActorsRoutingModule,
    TranslateModule,
  ],
})
export class ActorsModule { }
