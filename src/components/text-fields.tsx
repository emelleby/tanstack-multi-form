import { useFieldContext } from '../hooks/form-context.tsx';

export default function TextField({ label }: { label: string }) {
  const field = useFieldContext<string>();

  return (
    <div>
      <label>
        <div>{label}</div>
        <input
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
        />
      </label>

      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em style={{ color: 'red' }}>{field.state.meta.errors[0].message}</em>
      ) : (
        <span className="opacity-0 pointer-events-none"></span>
      )}
    </div>
  );
}
