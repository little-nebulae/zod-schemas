import { z } from "zod";

import { OpenEnumSchema } from "@/schemas/open-enum";
import { ExtensibleZodIssueBaseSchema } from "@/schemas/zod-issue/base";
import { ZodStringFormatsSchema } from "@/schemas/zod/string-formats";

export const ZodIssueInvalidStringFormatSchema =
  ExtensibleZodIssueBaseSchema.safeExtend({
    code: z.literal("invalid_format"),
    format: OpenEnumSchema(ZodStringFormatsSchema),
    pattern: z.string().exactOptional(),
    input: z.string().exactOptional(),
  }).readonly();
export type ZodIssueInvalidStringFormat = z.infer<
  typeof ZodIssueInvalidStringFormatSchema
>;
