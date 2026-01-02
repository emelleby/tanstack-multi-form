import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscribeButtonWithForm } from '../../hooks/form';

interface LocationStepProps {
  form: any;
}

export const LocationStep = ({ form }: LocationStepProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Location Details</CardTitle>
        <CardDescription>Tell us about the tree where you want to build your tree house.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form.AppField
          name="location.treeType"
          children={(field: any) => <field.TextField label="Tree type" />}
        />
        <form.AppField
          name="location.height"
          children={(field: any) => <field.TextField label="Tree height" />}
        />
        <SubscribeButtonWithForm label="Next" form={form} />
      </CardContent>
    </Card>
  );
};
