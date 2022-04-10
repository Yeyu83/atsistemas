import { HeaderState } from './../interfaces/header-state.interface';
import { LayoutTypesEnum } from "@models/enums/layout-types.enum";
import { FooterButtonsEnum } from './footer-icon-buttons.constant';
import { FooterState } from '../interfaces/footer-state.interface';

export type LayoutElementState = FooterState | HeaderState;

export enum LayoutElementsEnum {
  Header = 'header',
  Footer = 'footer',
}

export interface LayoutElementType {
  type: LayoutTypesEnum,
  content: LayoutElementState,
}

export const layoutElements = new Map<LayoutElementsEnum, LayoutElementType[]>([
  [LayoutElementsEnum.Header, [
    {
      type: LayoutTypesEnum.List,
      content: {
        menu: true,
      },
    },
    {
      type: LayoutTypesEnum.Detail,
      content: {
        menu: false,
      },
    },
    {
      type: LayoutTypesEnum.New,
      content: {
        menu: true,
      },
    },
  ]],
  [LayoutElementsEnum.Footer, [
    {
      type: LayoutTypesEnum.List,
      content: {
        buttons: [FooterButtonsEnum.Add],
      },
    },
    {
      type: LayoutTypesEnum.Detail,
      content: {
        buttons: [FooterButtonsEnum.Edit, FooterButtonsEnum.Delete],
      },
    },
    {
      type: LayoutTypesEnum.New,
      content: {
        buttons: [],
      },
    },
  ]]
]);
