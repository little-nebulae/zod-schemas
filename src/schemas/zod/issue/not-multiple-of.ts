import { z } from "zod";

import { ExtensibleZodIssueBaseSchema } from "@/schemas/zod/issue/base";
import { ZOD_ISSUE_CODE_ENUM } from "@/schemas/zod/issue/code";
import { ZodIssueInputSchema } from "@/schemas/zod/issue/input";

export function ZodIssueNotMultipleOfSchema<
  Input extends number | bigint = number | bigint,
>() {
  return ExtensibleZodIssueBaseSchema.safeExtend({
    code: z.literal(ZOD_ISSUE_CODE_ENUM.NOT_MULTIPLE_OF),
    divisor: z.number(),
    input: ZodIssueInputSchema<Input>(),
  }).readonly();
}
export type ZodIssueNotMultipleOf<
  Input extends number | bigint = number | bigint,
> = z.infer<ReturnType<typeof ZodIssueNotMultipleOfSchema<Input>>>;
