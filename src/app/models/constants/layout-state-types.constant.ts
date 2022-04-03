import { LayoutStateNames } from '@models/enums/layout-state-names.enum';
import { LayoutState } from '@models/interfaces/layout-state.interface';

export const LayoutStateTypes = new Map<LayoutStateNames, LayoutState>([
  [
    LayoutStateNames.All,
    {
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
  ],
  [
    LayoutStateNames.Detail,
    {
      header: {
        menu: false,
      },
      footer: {
        buttons: {
          add: false,
          edit: true,
          delete: true,
        },
      },
    },
  ],
  [
    LayoutStateNames.New,
    {
      header: {
        menu: false,
      },
      footer: {
        buttons: {
          add: false,
          edit: false,
          delete: false,
        },
      },
    },
  ],
]);
