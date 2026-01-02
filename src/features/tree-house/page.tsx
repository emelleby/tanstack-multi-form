import { useAppForm } from '../../hooks/form.tsx';
import { treeHouseFormOpts } from './shared-form.ts';
import { useStore } from '@tanstack/react-form';
import { LocationStep } from './location-step';
import { SizeStep } from './size-step';
import { SpecialFeaturesStep } from './special-features-step';
import { Stepper } from '@/components/stepper';
import type { Step } from '@/components/stepper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

  const steps: Step[] = [
    { id: 'location', label: 'Location', description: 'Choose your tree' },
    { id: 'size', label: 'Size', description: 'Define dimensions' },
    { id: 'specialFeatures', label: 'Features', description: 'Add extras' },
    { id: 'confirmation', label: 'Review', description: 'Confirm details' },
  ];

  const handleStepClick = (stepId: string) => {
    const currentIndex = steps.findIndex((step) => step.id === section);
    const targetIndex = steps.findIndex((step) => step.id === stepId);
    
    // Only allow navigation to completed steps or the next step
    if (targetIndex <= currentIndex || targetIndex === currentIndex + 1) {
      form.setFieldValue('section', stepId as any);
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Design Your Dream Tree House</h1>
          <p className="text-muted-foreground">Create your perfect tree house in just a few steps</p>
        </div>

        <Stepper
          steps={steps}
          currentStep={section}
          onStepClick={handleStepClick}
          className="mb-8"
        />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          {section === 'location' && (
            <LocationStep form={form} />
          )}
          {section === 'size' && <SizeStep form={form} />}

          {section === 'specialFeatures' && <SpecialFeaturesStep form={form} />}

          {section === 'confirmation' && (
            <Card>
              <CardHeader>
                <CardTitle>Review & Submit</CardTitle>
                <CardDescription>Review your tree house design before submitting.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <pre className="p-4 bg-muted rounded-lg text-sm overflow-auto">{JSON.stringify(form.store.state.values, null, 2)}</pre>
                <form.Subscribe selector={(state) => state.isSubmitting}>
                  {(isSubmitting) => (
                    <Button type="submit" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? 'Processing...' : 'Submit'}
                    </Button>
                  )}
                </form.Subscribe>
              </CardContent>
            </Card>
          )}
        </form>
      </div>
    </div>
  );
};
