import { z } from "zod";

import { OpenEnumSchema } from "@/schemas/open-enum";
import { PrimitiveSchema } from "@/schemas/primitive";
import { PropertyKeySchema } from "@/schemas/property-key";
import { ZodStringFormatSchema } from "@/schemas/zod/string-format";

export const ZOD_ISSUE_CODE_KEY = "code";

export const ZOD_ISSUE_CODE_ENUM = {
  INVALID_TYPE: "invalid_type",
  TOO_BIG: "too_big",
  TOO_SMALL: "too_small",
  INVALID_FORMAT: "invalid_format",
  NOT_MULTIPLE_OF: "not_multiple_of",
  UNRECOGNIZED_KEYS: "unrecognized_keys",
  INVALID_UNION: "invalid_union",
  INVALID_KEY: "invalid_key",
  INVALID_ELEMENT: "invalid_element",
  INVALID_VALUE: "invalid_value",
  CUSTOM: "custom",
} as const;

const ZodIssueInputSchema = z.unknown().exactOptional();

const ZodIssuePathSchema = z.array(PropertyKeySchema);

const ZodIssueMessageSchema = z.string();

const ZodIssueBaseSchema = z.object({
  [ZOD_ISSUE_CODE_KEY]: z.string().exactOptional(),
  input: ZodIssueInputSchema,
  path: ZodIssuePathSchema,
  message: ZodIssueMessageSchema,
});

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

export const ZodIssueInvalidTypeSchema = z
  .object({
    ...ZodIssueBaseSchema.shape,
    [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_TYPE),
    expected: OpenEnumSchema(z.enum(ZOD_INVALID_TYPE_EXPECTED_ENUM)),
  })
  .readonly();

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

export const ZodIssueTooBigSchema = z
  .object({
    ...ZodIssueBaseSchema.shape,
    [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.TOO_BIG),
    origin: ZodBoundOriginSchema,
    maximum: z.union([z.number(), z.bigint()]),
    inclusive: z.boolean().exactOptional(),
    exact: z.boolean().exactOptional(),
  })
  .readonly();

export const ZodIssueTooSmallSchema = z
  .object({
    ...ZodIssueBaseSchema.shape,
    [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.TOO_SMALL),
    origin: ZodBoundOriginSchema,
    minimum: z.union([z.number(), z.bigint()]),
    inclusive: z.boolean().exactOptional(),
    exact: z.boolean().exactOptional(),
  })
  .readonly();

export const ZodIssueInvalidStringFormatSchema = z
  .object({
    ...ZodIssueBaseSchema.shape,
    [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_FORMAT),
    input: z.string().exactOptional(),
    format: OpenEnumSchema(ZodStringFormatSchema),
    pattern: z.string().exactOptional(),
  })
  .readonly();

export const ZodIssueNotMultipleOfSchema = z
  .object({
    ...ZodIssueBaseSchema.shape,
    [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.NOT_MULTIPLE_OF),
    input: z.union([z.number(), z.bigint()]).exactOptional(),
    divisor: z.number(),
  })
  .readonly();

export const ZodIssueUnrecognizedKeysSchema = z
  .object({
    ...ZodIssueBaseSchema.shape,
    [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.UNRECOGNIZED_KEYS),
    input: z.record(z.string(), z.unknown()).exactOptional(),
    keys: z.array(z.string()),
  })
  .readonly();

export const ZodIssueInvalidUnionNoMatchSchema = z.object({
  [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_UNION),
  input: ZodIssueInputSchema,
  path: ZodIssuePathSchema,
  message: ZodIssueMessageSchema,
  get errors() {
    return z.array(z.array(ZodIssueSchema));
  },
  discriminator: z.string().optional(),
  options: z.array(PrimitiveSchema).exactOptional(),
  inclusive: z.literal(true).exactOptional(),
});

export const ZodIssueInvalidUnionMultipleMatchSchema = z
  .object({
    ...ZodIssueBaseSchema.shape,
    [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_UNION),
    errors: z.tuple([]),
    discriminator: z.string().optional(),
    inclusive: z.literal(false),
    matches: z.array(z.number()),
  })
  .readonly();

export const ZodIssueInvalidUnionSchema = z.discriminatedUnion("inclusive", [
  ZodIssueInvalidUnionNoMatchSchema,
  ZodIssueInvalidUnionMultipleMatchSchema,
]);

export const ZodIssueInvalidKeySchema = z.object({
  [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_KEY),
  input: ZodIssueInputSchema,
  path: ZodIssuePathSchema,
  message: ZodIssueMessageSchema,
  origin: z.enum(["map", "record"]),
  get issues() {
    return z.array(ZodIssueSchema);
  },
});

export const ZodIssueInvalidElementSchema = z.object({
  [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_ELEMENT),
  input: ZodIssueInputSchema,
  path: ZodIssuePathSchema,
  message: ZodIssueMessageSchema,
  origin: z.enum(["map", "set"]),
  key: z.unknown(),
  get issues() {
    return z.array(ZodIssueSchema);
  },
});

export const ZodIssueInvalidValueSchema = z
  .object({
    ...ZodIssueBaseSchema.shape,
    [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_VALUE),
    values: z.array(PrimitiveSchema),
  })
  .readonly();

export const ZodIssueCustomSchema = z
  .object({
    ...ZodIssueBaseSchema.shape,
    [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.CUSTOM),
    params: z.record(z.string(), z.any()).optional(),
  })
  .readonly();

export const ZodIssueSchema = z.discriminatedUnion(ZOD_ISSUE_CODE_KEY, [
  ZodIssueInvalidTypeSchema,
  ZodIssueTooBigSchema,
  ZodIssueTooSmallSchema,
  ZodIssueInvalidStringFormatSchema,
  ZodIssueNotMultipleOfSchema,
  ZodIssueUnrecognizedKeysSchema,
  ZodIssueInvalidUnionSchema,
  ZodIssueInvalidKeySchema,
  ZodIssueInvalidElementSchema,
  ZodIssueInvalidValueSchema,
  ZodIssueCustomSchema,
]);
