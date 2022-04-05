import { LayoutTypesEnum } from '@models/enums/layout-types.enum';
import { LayoutSchema } from '@models/interfaces/layout-schema.interface';

export interface LayoutType {
  type: LayoutTypesEnum,
  layout: LayoutSchema,
}
