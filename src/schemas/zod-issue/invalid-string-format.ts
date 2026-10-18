import { z } from "zod";

import { OpenStringSchema } from "@/schemas/open-string";
import { ExtensibleZodIssueBaseSchema } from "@/schemas/zod-issue/base";
import { ZodStringFormatsSchema } from "@/schemas/zod/string-formats";

export const ZodIssueInvalidStringFormatSchema =
  ExtensibleZodIssueBaseSchema.safeExtend({
    code: z.literal("invalid_format"),
    format: z.union([ZodStringFormatsSchema, OpenStringSchema]),
    pattern: z.string().exactOptional(),
    input: z.string().exactOptional(),
  }).readonly();
export type ZodIssueInvalidStringFormat = z.infer<
  typeof ZodIssueInvalidStringFormatSchema
>;
