import { z } from "zod";

import { ExtensibleZodIssueBaseSchema } from "@/schemas/zod/issue/base";
import { ZOD_ISSUE_CODE_ENUM } from "@/schemas/zod/issue/code";

export const ZodIssueUnrecognizedKeysSchema =
  ExtensibleZodIssueBaseSchema.safeExtend({
    code: z.literal(ZOD_ISSUE_CODE_ENUM.UNRECOGNIZED_KEYS),
    keys: z.array(z.string()),
    input: z.record(z.string(), z.unknown()).exactOptional(),
  }).readonly();
export type ZodIssueUnrecognizedKeys = z.infer<
  typeof ZodIssueUnrecognizedKeysSchema
>;
