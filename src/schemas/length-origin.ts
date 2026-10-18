import { z } from "zod";

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

export const LengthOriginSchema = z.enum(LENGTH_ORIGIN_ENUM);
export type LengthOrigin = z.infer<typeof LengthOriginSchema>;
