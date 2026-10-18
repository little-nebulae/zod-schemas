import { z } from "zod";

import { ExtensibleZodIssueBaseSchema } from "@/schemas/zod-issue/base";

export const ZOD_INVALID_TYPE_EXPECTED_RECORD = {
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

export const ZOD_INVALID_TYPE_EXPECTED_LIST = [
  ZOD_INVALID_TYPE_EXPECTED_RECORD.STRING,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.NUMBER,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.INT,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.BOOLEAN,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.BIGINT,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.SYMBOL,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.UNDEFINED,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.NULL,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.NEVER,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.VOID,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.DATE,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.ARRAY,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.OBJECT,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.TUPLE,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.RECORD,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.MAP,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.SET,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.FILE,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.NONOPTIONAL,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.NAN,
  ZOD_INVALID_TYPE_EXPECTED_RECORD.FUNCTION,
] as const;

export function ZodIssueInvalidTypeSchema<Input = unknown>() {
  return ExtensibleZodIssueBaseSchema.safeExtend({
    code: z.literal("invalid_type"),
    expected: z.union([
      z.enum(ZOD_INVALID_TYPE_EXPECTED_LIST),
      z.string<string & {}>(),
    ]),
    input: z.custom<Input>().exactOptional(),
  }).readonly();
}
export type ZodIssueInvalidType<Input = unknown> = z.infer<
  ReturnType<typeof ZodIssueInvalidTypeSchema<Input>>
>;
