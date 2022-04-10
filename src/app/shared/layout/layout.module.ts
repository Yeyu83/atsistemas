import { IconButtonModule } from './../../widgets/icon-button/icon-button.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '@shared/layout/header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    TranslateModule,
    MatIconModule,
    IconButtonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
})
export class LayoutModule { }
