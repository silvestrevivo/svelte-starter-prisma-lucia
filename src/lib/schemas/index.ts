import { z } from 'zod';

export const loginUserSchema = z.object({
  email: z.string().email({ message: 'Please enter an valid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .trim(),
});
