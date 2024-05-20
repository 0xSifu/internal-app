import { z } from "zod";

// Define the schema for the task
export const taskSchema = z.object({
  id: z.string(),
  action: z.string(),
  status: z.string(),
  area: z.string(),
  name: z.string(),
  device: z.string(),
  detail: z.string(),
  version: z.string(),
});

// Infer the TypeScript type from the schema
export type Task = z.infer<typeof taskSchema>;
