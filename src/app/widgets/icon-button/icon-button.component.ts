import { FooterButtonsEnum } from '@models/constants/footer-icon-buttons.constant';
import { footerButtons, FooterButton } from '@models/constants/footer-icon-buttons.constant';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {
  public iconButton!: FooterButton;

  @Input() set buttonDenomination(value: FooterButtonsEnum) {
    this.iconButton = footerButtons.get(value) as FooterButton;
  }

  @Output() onButtonClicked = new EventEmitter<FooterButton>();
}
