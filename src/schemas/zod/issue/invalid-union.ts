import { z } from "zod";

import { PrimitiveSchema } from "@/schemas/primitive";
import { ExtensibleZodIssueBaseSchema } from "@/schemas/zod/issue/base";
import { ZOD_ISSUE_CODE_ENUM } from "@/schemas/zod/issue/code";

export const ZodIssueInvalidUnionNoMatchSchema =
  ExtensibleZodIssueBaseSchema.safeExtend({
    code: z.literal(ZOD_ISSUE_CODE_ENUM.INVALID_UNION),
    errors: z.array(
      z.array(z.looseObject(ExtensibleZodIssueBaseSchema.shape).readonly()),
    ),
    discriminator: z.string().optional(),
    options: z.array(PrimitiveSchema).exactOptional(),
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
