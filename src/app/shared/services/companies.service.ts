import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '@models/interfaces/company.interface';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private readonly COMPANIES_API_URL = `${environment.api.url}/${environment.api.endpoints.companies}`;

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.COMPANIES_API_URL);
  }
}
