import { formOptions } from '@tanstack/react-form';
import {
  locationSchema,
  sizeSchema,
  specialFeaturesSchema,
  type FormValues,
  formSchema,
} from './validators';

const defaultValues: FormValues = {
  section: 'location',
  location: {
    treeType: '',
    height: '',
  },
  size: {
    rooms: '',
  },
  specialFeatures: {
    secretFeatures: '',
    guestList: '',
  },
};

export const treeHouseFormOpts = formOptions({
  defaultValues,
  validators: {
    onSubmit: ({ value, formApi }) => {
      if (value.section === 'location') {
        return formApi.parseValuesWithSchema(
          locationSchema as typeof formSchema
        );
      }
      if (value.section === 'size') {
        return formApi.parseValuesWithSchema(sizeSchema as typeof formSchema);
      }
      if (value.section === 'specialFeatures') {
        return formApi.parseValuesWithSchema(
          specialFeaturesSchema as typeof formSchema
        );
      }
    },
  },
});
