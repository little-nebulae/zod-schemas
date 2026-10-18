import { z } from "zod";

import { PropertyKeySchema } from "@/schemas/property-key";

export const ZodIssueBaseSchema = z
  .object({
    code: z.string().exactOptional(),
    input: z.unknown().exactOptional(),
    path: z.array(PropertyKeySchema),
    message: z.string(),
  })
  .readonly();
export type ZodIssueBase = z.infer<typeof ZodIssueBaseSchema>;
