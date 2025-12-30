import { withForm } from '../../hooks/form';
import { treeHouseFormOpts } from './shared-form.ts';

export const SizeStep = withForm({
  ...treeHouseFormOpts,
  render: function Render({ form }) {
    return (
      <div>
        <form.AppField
          name="size.rooms"
          children={(field) => <field.TextField label="Amount of rooms" />}
        />
        <button> Next </button>
      </div>
    );
  },
});
