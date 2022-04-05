import { LayoutService } from '@app/shared/services/layout.service';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from './shared/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'atsistemas';

  constructor(
    private navigationService: NavigationService,
    private layoutService: LayoutService,
  ) { }

  ngOnInit(): void {
    this.navigationService.onRoutesRecognized().subscribe(event => {
      this.layoutService.setLayoutState((event as any).urlAfterRedirects)
    })
  }
}
