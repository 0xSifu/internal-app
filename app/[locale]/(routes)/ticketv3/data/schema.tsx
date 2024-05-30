import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  registered_on: z.string(),
  status: z.string(),
  plan: z.string(),
  subscription_status: z.number(),
});

export type Tenant = z.infer<typeof userSchema>;
