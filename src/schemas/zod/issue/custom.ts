import { z } from "zod";

import { ExtensibleZodIssueBaseSchema } from "@/schemas/zod/issue/base";
import { ZOD_ISSUE_CODE_ENUM } from "@/schemas/zod/issue/code";

export const ZodIssueCustomSchema = ExtensibleZodIssueBaseSchema.safeExtend({
  code: z.literal(ZOD_ISSUE_CODE_ENUM.CUSTOM),
  params: z.record(z.string(), z.any()).optional(),
});
export type ZodIssueCustom = z.infer<typeof ZodIssueCustomSchema>;
