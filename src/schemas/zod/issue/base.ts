import { z } from "zod";

import { PropertyKeySchema } from "@/schemas/property-key";
import { ZOD_ISSUE_CODE_KEY } from "@/schemas/zod/issue/code";

export const ExtensibleZodIssueBaseSchema = z.object({
  [ZOD_ISSUE_CODE_KEY]: z.string().exactOptional(),
  input: z.unknown().exactOptional(),
  path: z.array(PropertyKeySchema),
  message: z.string(),
});

export const ZodIssueBaseSchema = ExtensibleZodIssueBaseSchema.readonly();
export type ZodIssueBase = z.infer<typeof ZodIssueBaseSchema>;
