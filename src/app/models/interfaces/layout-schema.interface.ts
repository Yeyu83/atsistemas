export interface HeaderLayout {
  menu: boolean,
}

export interface FooterButtonsLayout {
  add: boolean,
  edit: boolean,
  delete: boolean,
}

export interface FooterLayout {
  buttons: FooterButtonsLayout,
}

export interface LayoutSchema {
  header: HeaderLayout,
  footer: FooterLayout,
}
