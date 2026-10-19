import { z } from "zod";

import { PrimitiveSchema } from "@/schemas/primitive";
import { ExtensibleZodIssueBaseSchema } from "@/schemas/zod/issue/base";
import {
  ZOD_ISSUE_CODE_ENUM,
  ZOD_ISSUE_CODE_KEY,
} from "@/schemas/zod/issue/code";
import { ZodIssueCustomSchema } from "@/schemas/zod/issue/custom";
import { ZodIssueInputSchema } from "@/schemas/zod/issue/input";
import { ZodIssueInvalidStringFormatSchema } from "@/schemas/zod/issue/invalid-string-format";
import { ZodIssueInvalidTypeSchema } from "@/schemas/zod/issue/invalid-type";
import { ZodIssueInvalidValueSchema } from "@/schemas/zod/issue/invalid-value";
import { ZodIssueNotMultipleOfSchema } from "@/schemas/zod/issue/not-multiple-of";
import { ZodIssueTooBigSchema } from "@/schemas/zod/issue/too-big";
import { ZodIssueTooSmallSchema } from "@/schemas/zod/issue/too-small";
import { ZodIssueUnrecognizedKeysSchema } from "@/schemas/zod/issue/unrecognized-keys";

export const ZodIssueInvalidUnionNoMatchSchema =
  ExtensibleZodIssueBaseSchema.safeExtend({
    code: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_UNION),
    get errors() {
      return z.array(z.array(ZodIssueSchema));
    },
    discriminator: z.string().optional(),
    options: z.array(PrimitiveSchema),
    inclusive: z.literal(true).exactOptional(),
  }).readonly();
export type ZodIssueInvalidUnionNoMatch = z.infer<
  typeof ZodIssueInvalidUnionNoMatchSchema
>;

export const ZodIssueInvalidUnionMultipleMatchSchema =
  ExtensibleZodIssueBaseSchema.safeExtend({
    code: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_UNION),
    errors: z.tuple([]),
    discriminator: z.string().optional(),
    inclusive: z.literal(false),
    matches: z.array(z.number()),
  }).readonly();
export type ZodIssueInvalidUnionMultipleMatch = z.infer<
  typeof ZodIssueInvalidUnionMultipleMatchSchema
>;

export const ZodIssueInvalidUnionSchema = z.union([
  ZodIssueInvalidUnionNoMatchSchema,
  ZodIssueInvalidUnionMultipleMatchSchema,
]);
export type ZodIssueInvalidUnion = z.infer<typeof ZodIssueInvalidUnionSchema>;

export function ZodIssueInvalidKeySchema<Input = unknown>() {
  return ExtensibleZodIssueBaseSchema.safeExtend({
    code: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_KEY),
    origin: z.enum(["map", "record"]),
    get issues() {
      return z.array(ZodIssueSchema);
    },
    input: ZodIssueInputSchema<Input>(),
  }).readonly();
}

export function ZodIssueInvalidElementSchema<Input = unknown>() {
  return ExtensibleZodIssueBaseSchema.safeExtend({
    code: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_ELEMENT),
    origin: z.enum(["map", "set"]),
    key: z.unknown(),
    get issues() {
      return z.array(ZodIssueSchema);
    },
    input: ZodIssueInputSchema<Input>(),
  }).readonly();
}

export const ZodIssueSchema = z.discriminatedUnion(ZOD_ISSUE_CODE_KEY, [
  ZodIssueInvalidTypeSchema(),
  ZodIssueTooBigSchema(),
  ZodIssueTooSmallSchema(),
  ZodIssueInvalidStringFormatSchema,
  ZodIssueNotMultipleOfSchema(),
  ZodIssueUnrecognizedKeysSchema,
  ZodIssueInvalidUnionSchema,
  ZodIssueInvalidKeySchema(),
  ZodIssueInvalidElementSchema(),
  ZodIssueInvalidValueSchema(),
  ZodIssueCustomSchema,
]);
