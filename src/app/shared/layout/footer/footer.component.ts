import { LayoutElement } from '@app/classes/layout-element.class';
import { FooterState } from '@models/interfaces/footer-state.interface';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutElementsEnum } from '@models/constants/layout-types.constant';
import { LayoutService } from '@shared/services/layout.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent extends LayoutElement<FooterState> {
  constructor(
    public override readonly router: Router,
    public override readonly layoutService: LayoutService,
  ) {
    super(router, layoutService, LayoutElementsEnum.Footer);
  }
}
