import { z } from "zod";

import { OpenEnumSchema } from "@/schemas/open-enum";

export const LENGTH_ORIGIN_ENUM = {
  NUMBER: "number",
  INT: "int",
  BIGINT: "bigint",
  DATE: "date",
  STRING: "string",
  ARRAY: "array",
  SET: "set",
  FILE: "file",
} as const;

export const LengthOriginSchema = OpenEnumSchema(z.enum(LENGTH_ORIGIN_ENUM));
export type LengthOrigin = z.infer<typeof LengthOriginSchema>;
