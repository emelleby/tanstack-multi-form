import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscribeButtonWithForm } from '../../hooks/form';

interface SizeStepProps {
  form: any;
}

export const SizeStep = ({ form }: SizeStepProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Size & Dimensions</CardTitle>
        <CardDescription>Define the size and layout of your dream tree house.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form.AppField
          name="size.rooms"
          children={(field: any) => <field.TextField label="Amount of rooms" />}
        />
        <SubscribeButtonWithForm label="Next" form={form} />
      </CardContent>
    </Card>
  );
};
