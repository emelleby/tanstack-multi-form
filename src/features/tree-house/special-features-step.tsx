import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscribeButtonWithForm } from '../../hooks/form';

interface SpecialFeaturesStepProps {
  form: any;
}

export const SpecialFeaturesStep = ({ form }: SpecialFeaturesStepProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Special Features</CardTitle>
        <CardDescription>Add special features and customize your tree house.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form.AppField
          name="specialFeatures.secretFeatures"
          children={(field: any) => <field.TextField label="Secret features" />}
        />
        <form.AppField
          name="specialFeatures.guestList"
          children={(field: any) => <field.TextField label="Guest list" />}
        />
        <SubscribeButtonWithForm label="Next" form={form} />
      </CardContent>
    </Card>
  );
};
