import type { ValueOf } from "type-fest";
import type { z } from "zod";
import type {
  $ZodIssueBase,
  $ZodIssueCode,
  $ZodIssueInvalidType,
  $ZodIssueTooBig,
} from "zod/v4/core";

import { expectTypeOf, test } from "vitest";

import type {
  ZOD_ISSUE_CODE_ENUM,
  ZodIssueBaseSchema,
  ZodIssueInvalidTypeSchema,
  ZodIssueTooBigSchema,
} from "@/schemas/zod/issue";

test("The type of ZOD_ISSUE_CODE_ENUM's values should be equal to $ZodIssueCode", () => {
  expectTypeOf<
    ValueOf<typeof ZOD_ISSUE_CODE_ENUM>
  >().toEqualTypeOf<$ZodIssueCode>();
});

test("When wrapped with Readonly, the inferred type of ZodIssueBaseSchema should be equal to $ZodIssueBase", () => {
  type Inferred = z.infer<typeof ZodIssueBaseSchema>;
  expectTypeOf<Inferred>().not.toEqualTypeOf<$ZodIssueBase>();
  expectTypeOf<Readonly<Inferred>>().toEqualTypeOf<$ZodIssueBase>();
});

test("When wrapped with Readonly, the inferred type of ZodIssueInvalidTypeSchema should be equal to $ZodIssueInvalidType", () => {
  type Inferred = z.infer<typeof ZodIssueInvalidTypeSchema>;
  expectTypeOf<Inferred>().not.toEqualTypeOf<$ZodIssueInvalidType>();
  expectTypeOf<Readonly<Inferred>>().toEqualTypeOf<$ZodIssueInvalidType>();
});

test("When wrapped with Readonly, the inferred type of ZodIssueTooBigSchema should be equal to $ZodIssueTooBig", () => {
  type Inferred = z.infer<typeof ZodIssueTooBigSchema>;
  expectTypeOf<Inferred>().not.toEqualTypeOf<$ZodIssueTooBig>();
  expectTypeOf<Readonly<Inferred>>().toEqualTypeOf<$ZodIssueTooBig>();
});
