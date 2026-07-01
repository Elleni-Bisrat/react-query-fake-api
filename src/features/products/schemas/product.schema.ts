import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  price: z.number().positive('Price must be positive'),
  description: z.string().optional(),
});

export type ProductFormData = z.infer<typeof productSchema>;