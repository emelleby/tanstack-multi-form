import { useFieldContext } from '../hooks/form-context.tsx';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function TextField({ label }: { label: string }) {
  const field = useFieldContext<string>();

  return (
    <div className="space-y-2">
      <Label htmlFor={field.name}>{label}</Label>
      <Input
        id={field.name}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
      />

      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <p className="text-sm text-destructive">{field.state.meta.errors[0].message}</p>
      ) : (
        <span className="text-sm text-muted-foreground opacity-0 pointer-events-none">&nbsp;</span>
      )}
    </div>
  );
}
