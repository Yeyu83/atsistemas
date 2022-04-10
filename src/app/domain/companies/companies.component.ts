import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CompaniesService } from '@shared/services/companies.service';
import { Company } from '@models/interfaces/company.interface';
import { Observable } from 'rxjs';
import { TitleService } from '@shared/services/title.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesComponent implements OnInit {
  public companies$!: Observable<Company[]>;

  constructor(
    private readonly companiesService: CompaniesService,
    private readonly titleService: TitleService,
  ) { }

  ngOnInit() {
    this.companies$ = this.companiesService.getCompanies();
    this.titleService.setTitle('LAYOUT.HEADER.TITLE.COMPANIES.ALL')
  }
}
