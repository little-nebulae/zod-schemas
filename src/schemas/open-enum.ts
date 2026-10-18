import type { $ZodEnum } from "zod/v4/core";

import { z } from "zod";

export function OpenEnumSchema<TEnumSchema extends $ZodEnum>(
  enumSchema: TEnumSchema,
) {
  return z.union([enumSchema, z.string<string & {}>()]);
}
