import type { $ZodEnum } from "zod/v4/core";

import { z } from "zod";

import { OpenStringSchema } from "@/schemas/open-string";

export function OpenEnumSchema<TEnumSchema extends $ZodEnum>(
  enumSchema: TEnumSchema,
) {
  return z.union([enumSchema, OpenStringSchema]);
}
