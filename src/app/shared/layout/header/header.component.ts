import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { LayoutSchema } from '@models/interfaces/layout-schema.interface';
import { LayoutService } from '@shared/services/layout.service';
import { TitleService } from '@shared/services/title.service';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public title$: Observable<string> | undefined;

  public layout$: Observable<LayoutSchema | undefined> | undefined;

  constructor(
    private readonly titleService: TitleService,
    public readonly location: Location,
    private readonly layoutService: LayoutService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getHeaderData();
  }

  private getHeaderData(): void {
    this.layout$ = this.router.events
      .pipe(
        filter(event => event instanceof RoutesRecognized),
        map(event => this.layoutService.getLayoutByRoute((event as any).urlAfterRedirects)),
      );
    this.title$ = this.titleService.getTitle();
  }
}
