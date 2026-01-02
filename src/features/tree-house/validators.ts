import z from 'zod';

export const locationSchema = z.object({
  location: z.object({
    treeType: z.string().trim().min(1, 'Tree type is required'),
    height: z.number().min(0.1, 'Height is required'),
  }),
});

export const sizeSchema = z.object({
  size: z.object({
    rooms: z.number().min(1, 'Number of rooms is required'),
  }),
});

export const specialFeaturesSchema = z.object({
  specialFeatures: z.object({
    secretFeatures: z.string().trim(),
    guestList: z.string().trim().min(1, 'Guest list is required'),
  }),
});

export const formSchema = z.object({
  section: z.enum(['location', 'size', 'specialFeatures', 'confirmation']),
  ...locationSchema.shape,
  ...sizeSchema.shape,
  ...specialFeaturesSchema.shape,
});

export type FormValues = z.infer<typeof formSchema>;
