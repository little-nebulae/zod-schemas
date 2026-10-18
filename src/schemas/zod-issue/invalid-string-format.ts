import { z } from "zod";

import { ExtensibleZodIssueBaseSchema } from "@/schemas/zod-issue/base";
import { ZodStringFormatsSchema } from "@/schemas/zod/string-formats";

export const ZodIssueInvalidStringFormatSchema =
  ExtensibleZodIssueBaseSchema.safeExtend({
    code: z.literal("invalid_format"),
    format: z.union([ZodStringFormatsSchema, z.string<string & {}>()]),
    pattern: z.string().exactOptional(),
    input: z.string().exactOptional(),
  }).readonly();
export type ZodIssueInvalidStringFormat = z.infer<
  typeof ZodIssueInvalidStringFormatSchema
>;
