import type { Except, ExcludeStrict, ExtractStrict, ValueOf } from "type-fest";
import type { z } from "zod";
import type {
  $ZodIssueCode,
  $ZodIssueCustom,
  $ZodIssueInvalidElement,
  $ZodIssueInvalidKey,
  $ZodIssueInvalidStringFormat,
  $ZodIssueInvalidType,
  $ZodIssueInvalidUnion,
  $ZodIssueInvalidValue,
  $ZodIssueNotMultipleOf,
  $ZodIssueTooBig,
  $ZodIssueTooSmall,
  $ZodIssueUnrecognizedKeys,
} from "zod/v4/core";

import { expectTypeOf, test } from "vitest";

import type {
  ZOD_ISSUE_CODE_ENUM,
  ZodIssueCustomSchema,
  ZodIssueInvalidElementSchema,
  ZodIssueInvalidKeySchema,
  ZodIssueInvalidStringFormatSchema,
  ZodIssueInvalidTypeSchema,
  ZodIssueInvalidUnionMultipleMatchSchema,
  ZodIssueInvalidUnionNoMatchSchema,
  ZodIssueInvalidValueSchema,
  ZodIssueNotMultipleOfSchema,
  ZodIssueTooBigSchema,
  ZodIssueTooSmallSchema,
  ZodIssueUnrecognizedKeysSchema,
} from "@/schemas/zod/issue";

test("The type of ZOD_ISSUE_CODE_ENUM's values should be equal to $ZodIssueCode", () => {
  expectTypeOf<
    ValueOf<typeof ZOD_ISSUE_CODE_ENUM>
  >().toEqualTypeOf<$ZodIssueCode>();
});

test("The inferred type of ZodIssueInvalidTypeSchema should be equal to $ZodIssueInvalidType", () => {
  expectTypeOf<
    z.infer<typeof ZodIssueInvalidTypeSchema>
  >().toEqualTypeOf<$ZodIssueInvalidType>();
});

test("The inferred type of ZodIssueTooBigSchema should be equal to $ZodIssueTooBig", () => {
  expectTypeOf<
    z.infer<typeof ZodIssueTooBigSchema>
  >().toEqualTypeOf<$ZodIssueTooBig>();
});

test("The inferred type of ZodIssueTooSmallSchema should be equal to $ZodIssueTooSmall", () => {
  expectTypeOf<
    z.infer<typeof ZodIssueTooSmallSchema>
  >().toEqualTypeOf<$ZodIssueTooSmall>();
});

test("The inferred type of ZodIssueInvalidStringFormatSchema should be equal to $ZodIssueInvalidStringFormat", () => {
  expectTypeOf<
    z.infer<typeof ZodIssueInvalidStringFormatSchema>
  >().toEqualTypeOf<$ZodIssueInvalidStringFormat>();
});

test("The inferred type of ZodIssueNotMultipleOfSchema should be equal to $ZodIssueNotMultipleOf", () => {
  expectTypeOf<
    z.infer<typeof ZodIssueNotMultipleOfSchema>
  >().toEqualTypeOf<$ZodIssueNotMultipleOf>();
});

test("The inferred type of ZodIssueUnrecognizedKeysSchema should be equal to $ZodIssueUnrecognizedKeys", () => {
  expectTypeOf<
    z.infer<typeof ZodIssueUnrecognizedKeysSchema>
  >().toEqualTypeOf<$ZodIssueUnrecognizedKeys>();
});

type $ZodIssueInvalidUnionDiscriminator = { inclusive: false };
type $ZodIssueInvalidUnionNoMatch = ExcludeStrict<
  $ZodIssueInvalidUnion,
  $ZodIssueInvalidUnionDiscriminator
>;
type $ZodIssueInvalidUnionMultipleMatch = ExtractStrict<
  $ZodIssueInvalidUnion,
  $ZodIssueInvalidUnionDiscriminator
>;

test("The inferred type of ZodIssueInvalidUnionNoMatchSchema should be equal to $ZodIssueInvalidUnionNoMatch when the errors property is ignored and the resulting type is wrapped with Readonly", () => {
  type Actual = z.infer<typeof ZodIssueInvalidUnionNoMatchSchema>;
  type Expected = $ZodIssueInvalidUnionNoMatch;
  type MismatchProperty = "errors";
  expectTypeOf<Actual>().not.toEqualTypeOf<Expected>();
  expectTypeOf<Readonly<Except<Actual, MismatchProperty>>>().toEqualTypeOf<
    Except<Expected, MismatchProperty>
  >();
});

test("The inferred type of ZodIssueInvalidUnionMultipleMatchSchema should be equal to $ZodIssueInvalidUnionMultipleMatch", () => {
  expectTypeOf<
    z.infer<typeof ZodIssueInvalidUnionMultipleMatchSchema>
  >().toEqualTypeOf<$ZodIssueInvalidUnionMultipleMatch>();
});

test("The inferred type of ZodIssueInvalidKeySchema should be equal to $ZodIssueInvalidUnionNoMatch when the issues property is ignored and the resulting type is wrapped with Readonly", () => {
  type Actual = z.infer<typeof ZodIssueInvalidKeySchema>;
  type Expected = $ZodIssueInvalidKey;
  type MismatchProperty = "issues";
  expectTypeOf<Actual>().not.toEqualTypeOf<Expected>();
  expectTypeOf<Readonly<Except<Actual, MismatchProperty>>>().toEqualTypeOf<
    Except<Expected, MismatchProperty>
  >();
});

test("The inferred type of ZodIssueInvalidElementSchema should be equal to $ZodIssueInvalidElement when the issues property is ignored and the resulting type is wrapped with Readonly", () => {
  type Actual = z.infer<typeof ZodIssueInvalidElementSchema>;
  type Expected = $ZodIssueInvalidElement;
  type MismatchProperty = "issues";
  expectTypeOf<Actual>().not.toEqualTypeOf<Expected>();
  expectTypeOf<Readonly<Except<Actual, MismatchProperty>>>().toEqualTypeOf<
    Except<Expected, MismatchProperty>
  >();
});

test("The inferred type of ZodIssueInvalidValueSchema should be equal to $ZodIssueInvalidValue", () => {
  expectTypeOf<
    z.infer<typeof ZodIssueInvalidValueSchema>
  >().toEqualTypeOf<$ZodIssueInvalidValue>();
});

test("The inferred type of ZodIssueCustomSchema should be equal to $ZodIssueCustom", () => {
  expectTypeOf<
    z.infer<typeof ZodIssueCustomSchema>
  >().toEqualTypeOf<$ZodIssueCustom>();
});
