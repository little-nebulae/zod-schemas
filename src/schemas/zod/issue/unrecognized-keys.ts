import { z } from "zod";

import { ExtensibleZodIssueBaseSchema } from "@/schemas/zod/issue/base";

export const ZodIssueUnrecognizedKeysSchema =
  ExtensibleZodIssueBaseSchema.safeExtend({
    code: z.literal("unrecognized_keys"),
    keys: z.array(z.string()),
    input: z.record(z.string(), z.unknown()).exactOptional(),
  }).readonly();
export type ZodIssueUnrecognizedKeys = z.infer<
  typeof ZodIssueUnrecognizedKeysSchema
>;
