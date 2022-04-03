import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeaderState } from '@models/interfaces/layout-state.interface';
import { LayoutService } from '@app/shared/services/layout.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public headerState$: Observable<HeaderState | undefined> | undefined

  constructor(
    private readonly layoutService: LayoutService,
    public readonly location: Location,
  ) { }

  ngOnInit(): void {
    this.headerState$ = this.layoutService.getLayoutState()
      .pipe(map(layoutState => layoutState?.header))
  }
}
