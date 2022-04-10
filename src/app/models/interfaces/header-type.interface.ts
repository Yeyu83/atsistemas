import { HeaderState } from '@models/interfaces/header-state.interface';
import { Layout } from '@models/interfaces/layout.interface';

export interface HeaderType extends Layout {
  header: HeaderState,
}
