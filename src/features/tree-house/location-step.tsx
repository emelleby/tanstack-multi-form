import { withForm } from '../../hooks/form';
import { treeHouseFormOpts } from './shared-form.ts';

export const LocationStep = withForm({
  ...treeHouseFormOpts,
  render: function Render({ form }) {
    return (
      <div>
        <form.AppField
          name="location.treeType"
          children={(field) => <field.TextField label="Tree type" />}
        />
        <form.AppField
          name="location.height"
          children={(field) => <field.TextField label="Tree height" />}
        />
        <button> Next </button>
      </div>
    );
  },
});
