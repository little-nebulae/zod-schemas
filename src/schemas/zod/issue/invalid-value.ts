import { z } from "zod";

import { PrimitiveSchema } from "@/schemas/primitive";
import { ExtensibleZodIssueBaseSchema } from "@/schemas/zod/issue/base";
import { ZOD_ISSUE_CODE_ENUM } from "@/schemas/zod/issue/code";
import { ZodIssueInputSchema } from "@/schemas/zod/issue/input";

export function ZodIssueInvalidValueSchema<Input = unknown>() {
  return ExtensibleZodIssueBaseSchema.safeExtend({
    code: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_VALUE),
    values: z.array(PrimitiveSchema),
    input: ZodIssueInputSchema<Input>(),
  }).readonly();
}
export type ZodIssueInvalidValue<Input = unknown> = z.infer<
  ReturnType<typeof ZodIssueInvalidValueSchema<Input>>
>;
