import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderState } from '@models/interfaces/header-state.interface';
import { LayoutService } from '@shared/services/layout.service';
import { TitleService } from '@shared/services/title.service';
import { Observable } from 'rxjs';
import { LayoutElement } from '@app/classes/layout-element.class';
import { LayoutElementsEnum } from '@app/models/constants/layout-types.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent extends LayoutElement<HeaderState> implements OnInit {
  public title$!: Observable<string>;

  constructor(
    private readonly titleService: TitleService,
    public readonly location: Location,
    public override readonly router: Router,
    public override readonly layoutService: LayoutService,
  ) {
    super(router, layoutService, LayoutElementsEnum.Header);
  }

  ngOnInit(): void {
    this.title$ = this.titleService.getTitle();
  }
}
