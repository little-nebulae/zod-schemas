import type { ValueOf } from "type-fest";
import type { z } from "zod";
import type {
  $ZodIssueBase,
  $ZodIssueCode,
  $ZodIssueInvalidType,
  $ZodIssueTooBig,
  $ZodIssueTooSmall,
} from "zod/v4/core";

import { expectTypeOf, test } from "vitest";

import type {
  ZOD_ISSUE_CODE_ENUM,
  ZodIssueBaseSchema,
  ZodIssueInvalidTypeSchema,
  ZodIssueTooBigSchema,
  ZodIssueTooSmallSchema,
} from "@/schemas/zod/issue";

test("The type of ZOD_ISSUE_CODE_ENUM's values should be equal to $ZodIssueCode", () => {
  expectTypeOf<
    ValueOf<typeof ZOD_ISSUE_CODE_ENUM>
  >().toEqualTypeOf<$ZodIssueCode>();
});

test("When wrapped with Readonly, the inferred type of ZodIssueBaseSchema should be equal to $ZodIssueBase", () => {
  type Actual = z.infer<typeof ZodIssueBaseSchema>;
  type Expected = $ZodIssueBase;
  expectTypeOf<Actual>().not.toEqualTypeOf<Expected>();
  expectTypeOf<Readonly<Actual>>().toEqualTypeOf<Expected>();
});

test("When wrapped with Readonly, the inferred type of ZodIssueInvalidTypeSchema should be equal to $ZodIssueInvalidType", () => {
  type Actual = z.infer<typeof ZodIssueInvalidTypeSchema>;
  type Expected = $ZodIssueInvalidType;
  expectTypeOf<Actual>().not.toEqualTypeOf<Expected>();
  expectTypeOf<Readonly<Actual>>().toEqualTypeOf<Expected>();
});

test("When wrapped with Readonly, the inferred type of ZodIssueTooBigSchema should be equal to $ZodIssueTooBig", () => {
  type Actual = z.infer<typeof ZodIssueTooBigSchema>;
  type Expected = $ZodIssueTooBig;
  expectTypeOf<Actual>().not.toEqualTypeOf<Expected>();
  expectTypeOf<Readonly<Actual>>().toEqualTypeOf<Expected>();
});

test("When wrapped with Readonly, the inferred type of ZodIssueTooSmallSchema should be equal to $ZodIssueTooSmall", () => {
  type Actual = z.infer<typeof ZodIssueTooSmallSchema>;
  type Expected = $ZodIssueTooSmall;
  expectTypeOf<Actual>().not.toEqualTypeOf<Expected>();
  expectTypeOf<Readonly<Actual>>().toEqualTypeOf<Expected>();
});
