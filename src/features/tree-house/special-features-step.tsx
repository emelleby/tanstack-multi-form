import { withForm } from '../../hooks/form';
import { treeHouseFormOpts } from './shared-form.ts';

export const SpecialFeaturesStep = withForm({
  ...treeHouseFormOpts,
  render: function Render({ form }) {
    return (
      <div>
        <form.AppField
          name="specialFeatures.secretFeatures"
          children={(field) => <field.TextField label="Secret features" />}
        />
        <form.AppField
          name="specialFeatures.guestList"
          children={(field) => <field.TextField label="Guest list" />}
        />
        <button> Next </button>
      </div>
    );
  },
});
