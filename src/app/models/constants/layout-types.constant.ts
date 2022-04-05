import { LayoutTypesEnum } from "@models/enums/layout-types.enum";
import { LayoutType } from "@models/interfaces/layout-type.interface";


export const LAYOUT_TYPES: LayoutType[] = [
  {
    type: LayoutTypesEnum.List,
    layout: {
      header: {
        menu: true,
      },
      footer: {
        buttons: {
          add: true,
          edit: false,
          delete: false,
        },
      },
    },
  },
  {
    type: LayoutTypesEnum.Detail,
    layout: {
      header: {
        menu: false,
      },
      footer: {
        buttons: {
          add: true,
          edit: false,
          delete: false,
        },
      },
    },
  },
  {
    type: LayoutTypesEnum.New,
    layout: {
      header: {
        menu: true,
      },
      footer: {
        buttons: {
          add: true,
          edit: false,
          delete: false,
        },
      },
    },
  }
]
