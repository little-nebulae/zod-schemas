import { z } from "zod";

import { OpenEnumSchema } from "@/schemas/open-enum";
import { PrimitiveSchema } from "@/schemas/primitive";
import { PropertyKeySchema } from "@/schemas/property-key";
import { ZodStringFormatSchema } from "@/schemas/zod/string-format";

/**
 * Schemas modelling Zod's `$ZodIssue` type.
 *
 * ## Conventions
 *
 * - Every issue is discriminated on its `code` field (see {@link ZOD_ISSUE_CODE_KEY}).
 * - Most issue schemas spread {@link ZodIssueBaseSchema} and are finished with
 *   `.readonly()`.
 * - **Circular schemas are the exception.** Schemas that reference
 *   {@link ZodIssueSchema} through a getter (`get errors()` / `get issues()`):
 *   - do **not** spread `ZodIssueBaseSchema` (spreading `.shape` would evaluate
 *     the getters eagerly), so the base fields are declared inline instead, and
 *   - are **not** chained with `.readonly()`, as that would break the lazy
 *     getter-based recursion.
 */

// ============================================================================
// Constants
// ============================================================================

/** The property name used to discriminate between issue types. */
export const ZOD_ISSUE_CODE_KEY = "code";

/** All known values of the issue `code` discriminator. */
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

// ============================================================================
// Base Schemas
// ============================================================================

/** The raw input that caused the issue. May be absent entirely. */
const ZodIssueInputSchema = z.unknown().exactOptional();

/** Path to the offending value, as a list of property keys. */
const ZodIssuePathSchema = z.array(PropertyKeySchema);

/** Human-readable description of the issue. */
const ZodIssueMessageSchema = z.string();

/**
 * Fields shared by every issue.
 *
 * Spread via `.shape` into non-circular issue schemas. Circular schemas must
 * re-declare these fields inline instead (see the file-level notes).
 */
const ZodIssueBaseSchema = z.object({
  [ZOD_ISSUE_CODE_KEY]: z.string().exactOptional(),
  input: ZodIssueInputSchema,
  path: ZodIssuePathSchema,
  message: ZodIssueMessageSchema,
});

// ============================================================================
// Type Issues
// ============================================================================

/** The `expected` types Zod may report on an `invalid_type` issue. */
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

/**
 * Issue raised when the input is not of the expected type.
 *
 * `expected` is an open enum, so unknown values are tolerated.
 */
export const ZodIssueInvalidTypeSchema = z
  .object({
    ...ZodIssueBaseSchema.shape,
    [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_TYPE),
    expected: OpenEnumSchema(z.enum(ZOD_INVALID_TYPE_EXPECTED_ENUM)),
  })
  .readonly();

// ============================================================================
// Bounds Issues (too_big / too_small)
// ============================================================================

/** The kinds of values that can have a size or value bound. */
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

/** The type of value a bound applies to. Open enum, so unknown origins pass. */
export const ZodBoundOriginSchema = OpenEnumSchema(
  z.enum(ZOD_BOUND_ORIGIN_ENUM),
);

/** Issue raised when a value exceeds its maximum. */
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

/** Issue raised when a value falls below its minimum. */
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

// ============================================================================
// Format & Value Issues
// ============================================================================

/**
 * Issue raised when a string does not match the expected format
 * (e.g. email, uuid, regex).
 *
 * Narrows the base `input` to a string.
 */
export const ZodIssueInvalidStringFormatSchema = z
  .object({
    ...ZodIssueBaseSchema.shape,
    [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_FORMAT),
    input: z.string().exactOptional(),
    format: OpenEnumSchema(ZodStringFormatSchema),
    pattern: z.string().exactOptional(),
  })
  .readonly();

/**
 * Issue raised when a number is not a multiple of `divisor`.
 *
 * Narrows the base `input` to a number or bigint.
 */
export const ZodIssueNotMultipleOfSchema = z
  .object({
    ...ZodIssueBaseSchema.shape,
    [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.NOT_MULTIPLE_OF),
    input: z.union([z.number(), z.bigint()]).exactOptional(),
    divisor: z.number(),
  })
  .readonly();

/**
 * Issue raised when the input does not match any of the allowed literal
 * values. `values` lists the accepted primitives.
 */
export const ZodIssueInvalidValueSchema = z
  .object({
    ...ZodIssueBaseSchema.shape,
    [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_VALUE),
    values: z.array(PrimitiveSchema),
  })
  .readonly();

// ============================================================================
// Object Issues
// ============================================================================

/**
 * Issue raised when a strict object contains keys that are not part of its
 * schema. `keys` lists the unrecognized keys.
 *
 * Narrows the base `input` to a string-keyed record.
 */
export const ZodIssueUnrecognizedKeysSchema = z
  .object({
    ...ZodIssueBaseSchema.shape,
    [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.UNRECOGNIZED_KEYS),
    input: z.record(z.string(), z.unknown()).exactOptional(),
    keys: z.array(z.string()),
  })
  .readonly();

// ============================================================================
// Union Issues
// ============================================================================

/** The property name used to discriminate between the two union issue shapes. */
export const ZOD_ISSUE_INVALID_UNION_INCLUSIVE_KEY = "inclusive";

/**
 * Union issue where the input matched **none** of the options.
 *
 * `errors` holds, per option, the issues that option produced.
 *
 * @remarks
 * Circular: references {@link ZodIssueSchema} via a getter, so it does not
 * spread {@link ZodIssueBaseSchema} and is not chained with `.readonly()`.
 */
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
  [ZOD_ISSUE_INVALID_UNION_INCLUSIVE_KEY]: z.literal(true).exactOptional(),
});

/**
 * Union issue where the input matched **more than one** option (only possible
 * with exclusive unions).
 *
 * `matches` holds the indices of the options that matched.
 */
export const ZodIssueInvalidUnionMultipleMatchSchema = z
  .object({
    ...ZodIssueBaseSchema.shape,
    [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_UNION),
    errors: z.tuple([]),
    discriminator: z.string().optional(),
    [ZOD_ISSUE_INVALID_UNION_INCLUSIVE_KEY]: z.literal(false),
    matches: z.array(z.number()),
  })
  .readonly();

/**
 * Issue raised when a union fails to validate, discriminated on
 * {@link ZOD_ISSUE_INVALID_UNION_INCLUSIVE_KEY} into the no-match and
 * multiple-match variants.
 */
export const ZodIssueInvalidUnionSchema = z.discriminatedUnion(
  ZOD_ISSUE_INVALID_UNION_INCLUSIVE_KEY,
  [ZodIssueInvalidUnionNoMatchSchema, ZodIssueInvalidUnionMultipleMatchSchema],
);

// ============================================================================
// Collection Issues (Map / Set / Record)
// ============================================================================

/**
 * Issue raised when a key in a map or record is invalid.
 *
 * `issues` contains the nested issues for the offending key.
 *
 * @remarks
 * Circular: references {@link ZodIssueSchema} via a getter, so it does not
 * spread {@link ZodIssueBaseSchema} and is not chained with `.readonly()`.
 */
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

/**
 * Issue raised when an element of a map or set is invalid.
 *
 * `key` is the key of the offending entry and `issues` contains the nested
 * issues for it.
 *
 * @remarks
 * Circular: references {@link ZodIssueSchema} via a getter, so it does not
 * spread {@link ZodIssueBaseSchema} and is not chained with `.readonly()`.
 */
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

// ============================================================================
// Custom Issues
// ============================================================================

/**
 * Issue raised by custom validation logic (e.g. `.refine()` / `.superRefine()`).
 * `params` may carry arbitrary extra data.
 */
export const ZodIssueCustomSchema = z
  .object({
    ...ZodIssueBaseSchema.shape,
    [ZOD_ISSUE_CODE_KEY]: z.literal(ZOD_ISSUE_CODE_ENUM.CUSTOM),
    params: z.record(z.string(), z.any()).optional(),
  })
  .readonly();

// ============================================================================
// Root Schema
// ============================================================================

/**
 * Any Zod issue, discriminated on {@link ZOD_ISSUE_CODE_KEY}.
 *
 * This is the top-level schema modelling `$ZodIssue`.
 */
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
