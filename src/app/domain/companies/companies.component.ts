import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '@shared/services/companies.service';
import { Company } from '@models/interfaces/company.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  public companies$: Observable<Company[]> | undefined;

  constructor(
    private readonly companiesService: CompaniesService,
  ) { }

  ngOnInit() {
    this.companies$ = this.companiesService.getCompanies();
  }
}
