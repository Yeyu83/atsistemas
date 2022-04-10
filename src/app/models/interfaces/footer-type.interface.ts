import { FooterState } from '@models/interfaces/footer-state.interface';
import { Layout } from '@models/interfaces/layout.interface';

export interface FooterType extends Layout {
  footer: FooterState,
}
