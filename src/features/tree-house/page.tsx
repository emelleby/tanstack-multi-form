import { useAppForm } from '../../hooks/form.tsx';
import { treeHouseFormOpts } from './shared-form.ts';
import { useStore } from '@tanstack/react-form';
import { LocationStep } from './location-step';
import { SizeStep } from './size-step';
import { SpecialFeaturesStep } from './special-features-step';

export const TreeHousePage = () => {
  const form = useAppForm({
    ...treeHouseFormOpts,
    onSubmit: ({ value, formApi }) => {
      if (value.section === 'location') {
        formApi.setFieldValue('section', 'size');
      }
      if (value.section === 'size') {
        formApi.setFieldValue('section', 'specialFeatures');
      }
      if (value.section === 'specialFeatures') {
        formApi.setFieldValue('section', 'confirmation');
      }
      if (value.section === 'confirmation') {
        alert(JSON.stringify(value, null, 2));
      }
    },
  });

  const section = useStore(form.store, (state) => state.values.section);

  return (
    <div>
      <h1> Design Your Dream Tree House </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        {section === 'location' && (
          <>
            <LocationStep form={form} />
          </>
        )}
        {section === 'size' && <SizeStep form={form} />}

        {section === 'specialFeatures' && <SpecialFeaturesStep form={form} />}

        {section === 'confirmation' && (
          <div>
            <pre>{JSON.stringify(form.store.state.values, null, 2)}</pre>
            <button> Submit </button>
          </div>
        )}
      </form>
    </div>
  );
};
