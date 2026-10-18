import { z } from "zod";

import { OpenEnumSchema } from "@/schemas/open-enum";

export const ZOD_BOUND_ORIGIN_ENUM = {
  NUMBER: "number",
  INT: "int",
  BIGINT: "bigint",
  DATE: "date",
  STRING: "string",
  ARRAY: "array",
  SET: "set",
  FILE: "file",
} as const;

export const ZodBoundOriginSchema = OpenEnumSchema(
  z.enum(ZOD_BOUND_ORIGIN_ENUM),
);
export type ZodBoundOrigin = z.infer<typeof ZodBoundOriginSchema>;
