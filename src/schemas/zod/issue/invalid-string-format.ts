import { z } from "zod";

import { OpenEnumSchema } from "@/schemas/open-enum";
import { ExtensibleZodIssueBaseSchema } from "@/schemas/zod/issue/base";
import { ZOD_ISSUE_CODE_ENUM } from "@/schemas/zod/issue/code";
import { ZodStringFormatSchema } from "@/schemas/zod/string-format";

export const ZodIssueInvalidStringFormatSchema =
  ExtensibleZodIssueBaseSchema.safeExtend({
    code: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_FORMAT),
    format: OpenEnumSchema(ZodStringFormatSchema),
    pattern: z.string().exactOptional(),
    input: z.string().exactOptional(),
  }).readonly();
export type ZodIssueInvalidStringFormat = z.infer<
  typeof ZodIssueInvalidStringFormatSchema
>;
