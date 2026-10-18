import { z } from "zod";

import { OpenEnumSchema } from "@/schemas/open-enum";
import { ExtensibleZodIssueBaseSchema } from "@/schemas/zod-issue/base";
import { ZodIssueInputSchema } from "@/schemas/zod-issue/input";

export const ZOD_INVALID_TYPE_EXPECTED_ENUM = {
  STRING: "string",
  NUMBER: "number",
  INT: "int",
  BOOLEAN: "boolean",
  BIGINT: "bigint",
  SYMBOL: "symbol",
  UNDEFINED: "undefined",
  NULL: "null",
  NEVER: "never",
  VOID: "void",
  DATE: "date",
  ARRAY: "array",
  OBJECT: "object",
  TUPLE: "tuple",
  RECORD: "record",
  MAP: "map",
  SET: "set",
  FILE: "file",
  NONOPTIONAL: "nonoptional",
  NAN: "nan",
  FUNCTION: "function",
} as const;

export function ZodIssueInvalidTypeSchema<Input = unknown>() {
  return ExtensibleZodIssueBaseSchema.safeExtend({
    code: z.literal("invalid_type"),
    expected: OpenEnumSchema(z.enum(ZOD_INVALID_TYPE_EXPECTED_ENUM)),
    input: ZodIssueInputSchema<Input>(),
  }).readonly();
}
export type ZodIssueInvalidType<Input = unknown> = z.infer<
  ReturnType<typeof ZodIssueInvalidTypeSchema<Input>>
>;
