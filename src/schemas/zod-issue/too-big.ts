import { z } from "zod";

import { LengthOriginSchema } from "@/schemas/length-origin";
import { OpenEnumSchema } from "@/schemas/open-enum";
import { ExtensibleZodIssueBaseSchema } from "@/schemas/zod-issue/base";
import { ZodIssueInputSchema } from "@/schemas/zod-issue/input";

export function ZodIssueTooBigSchema<Input = unknown>() {
  return ExtensibleZodIssueBaseSchema.safeExtend({
    code: z.literal("too_big"),
    origin: OpenEnumSchema(LengthOriginSchema),
    maximum: z.union([z.number(), z.bigint()]),
    inclusive: z.boolean().exactOptional(),
    exact: z.boolean().exactOptional(),
    input: ZodIssueInputSchema<Input>(),
  }).readonly();
}
export type ZodIssueTooBig<Input = unknown> = z.infer<
  ReturnType<typeof ZodIssueTooBigSchema<Input>>
>;
