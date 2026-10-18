import { z } from "zod";

import { OpenEnumSchema } from "@/schemas/open-enum";

export const ZOD_LENGTH_ORIGIN_ENUM = {
  NUMBER: "number",
  INT: "int",
  BIGINT: "bigint",
  DATE: "date",
  STRING: "string",
  ARRAY: "array",
  SET: "set",
  FILE: "file",
} as const;

export const ZodLengthOriginSchema = OpenEnumSchema(
  z.enum(ZOD_LENGTH_ORIGIN_ENUM),
);
export type ZodLengthOrigin = z.infer<typeof ZodLengthOriginSchema>;
