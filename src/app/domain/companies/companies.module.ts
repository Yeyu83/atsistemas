import { CompaniesRoutingModule } from '@domain/companies/companies-routing.module';
import { CompaniesComponent } from '@domain/companies/companies.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CompaniesComponent,
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    TranslateModule,
  ],
})
export class CompaniesModule { }
