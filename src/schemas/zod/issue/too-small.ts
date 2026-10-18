import { z } from "zod";

import { LengthOriginSchema } from "@/schemas/length-origin";
import { ExtensibleZodIssueBaseSchema } from "@/schemas/zod/issue/base";
import { ZodIssueInputSchema } from "@/schemas/zod/issue/input";

export function ZodIssueTooSmallSchema<Input = unknown>() {
  return ExtensibleZodIssueBaseSchema.safeExtend({
    code: z.literal("too_small"),
    origin: LengthOriginSchema,
    minimum: z.union([z.number(), z.bigint()]),
    inclusive: z.boolean().exactOptional(),
    exact: z.boolean().exactOptional(),
    input: ZodIssueInputSchema<Input>(),
  }).readonly();
}
export type ZodIssueTooSmall<Input = unknown> = z.infer<
  ReturnType<typeof ZodIssueTooSmallSchema<Input>>
>;
