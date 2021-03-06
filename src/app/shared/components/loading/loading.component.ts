import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  public isLoading$!: Observable<boolean>;

  constructor(
    private loadingService: LoadingService,
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this.loadingService.getLoadingState();
  }
}
