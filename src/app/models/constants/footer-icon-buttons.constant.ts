export enum FooterButtonsEnum {
  Add = 'add',
  Edit = 'edit',
  Delete = 'delete',
}

export interface FooterButton {
  denomination: string,
  color: string,
  backgroundColor: string,
}

export const footerButtons = new Map<FooterButtonsEnum, FooterButton>([
  [
    FooterButtonsEnum.Add,
    { denomination: 'add', color: 'black', backgroundColor: 'yellow' },
  ],
  [
    FooterButtonsEnum.Edit,
    { denomination: 'edit', color: 'white', backgroundColor: 'green' },
  ],
  [
    FooterButtonsEnum.Delete,
    { denomination: 'delete', color: 'white', backgroundColor: 'red' },
  ]
]);
