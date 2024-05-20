import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  username: z.string(),
  phone_number: z.string().optional(),
  email: z.string().email(),
  gender: z.enum(["Male", "Female", "Other"]), 
  address: z.string().optional(),
  registered_on: z.string(),
  status: z.string(),
  subscription_status: z.string(),
});

export type User = z.infer<typeof userSchema>;
