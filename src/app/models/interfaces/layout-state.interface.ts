export enum HeaderStateEntity {
  Movies = 'movies',
  Companies = 'companies',
  Actors = 'actors',
}

export interface HeaderState {
  menu: boolean;
}

export interface FooterButtonsState {
  add: boolean;
  edit: boolean;
  delete: boolean;
}

export interface FooterState {
  buttons: FooterButtonsState;
}

export interface LayoutState {
  header: HeaderState;
  footer: FooterState;
}
