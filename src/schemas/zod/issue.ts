import { z } from "zod";

import { PrimitiveSchema } from "@/schemas/primitive";
import { PropertyKeySchema } from "@/schemas/property-key";
import { NonEmptyStringSchema } from "@/schemas/string/non-empty";

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

export const ZodIssueCodeSchema = z.enum(ZOD_ISSUE_CODE_ENUM);

export const ZodIssueInputSchema = z.unknown().exactOptional();

export const ZodIssuePathSchema = z.array(PropertyKeySchema);

export const ZodIssueMessageSchema = NonEmptyStringSchema;

export const ZodIssueBaseSchema = z.object({
  [ZOD_ISSUE_CODE_KEY]: z.string().exactOptional(),
  input: ZodIssueInputSchema,
  path: ZodIssuePathSchema,
  message: ZodIssueMessageSchema,
});

export const ZodIssueInvalidUnionNoMatchSchema = z.object({
  code: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_UNION),
  input: ZodIssueInputSchema,
  path: ZodIssuePathSchema,
  message: ZodIssueMessageSchema,
  get errors(): z.ZodArray<z.ZodArray<typeof ZodIssueSchema>> {
    return z.array(z.array(ZodIssueSchema));
  },
  discriminator: z.string().optional(),
  options: z.array(PrimitiveSchema).exactOptional(),
  inclusive: z.literal(true).exactOptional(),
});

export const ZodIssueInvalidUnionMultipleMatchSchema =
  ZodIssueBaseSchema.safeExtend({
    code: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_UNION),
    errors: z.tuple([]),
    discriminator: z.string().optional(),
    inclusive: z.literal(false),
    matches: z.array(z.number()),
  });

export const ZodIssueInvalidUnionSchema = z.union([
  ZodIssueInvalidUnionNoMatchSchema,
  ZodIssueInvalidUnionMultipleMatchSchema,
]);

export const ZodIssueCustomSchema = ZodIssueBaseSchema.safeExtend({
  code: z.literal(ZOD_ISSUE_CODE_ENUM.CUSTOM),
  params: z.record(z.string(), z.any()).optional(),
});

export const ZodIssueSchema = z.discriminatedUnion(ZOD_ISSUE_CODE_KEY, [
  ...ZodIssueInvalidUnionSchema.options,
  ZodIssueCustomSchema,
]);
