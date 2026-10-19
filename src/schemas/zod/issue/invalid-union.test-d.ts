import type { Except, Simplify } from "type-fest";
import type { $ZodIssueInvalidUnion } from "zod/v4/core";

import { expectTypeOf, test } from "vitest";

import type {
  ZodIssueInvalidUnionMultipleMatch,
  ZodIssueInvalidUnionNoMatch,
} from "@/schemas/zod/issue/invalid-union";

type $ZodIssueInvalidUnionNoMatch = Exclude<
  $ZodIssueInvalidUnion,
  { inclusive: false }
>;
type $ZodIssueInvalidUnionMultipleMatch = Extract<
  $ZodIssueInvalidUnion,
  { inclusive: false }
>;

test("ZodIssueInvalidUnionNoMatch type should be equal to $ZodIssueInvalidUnionNoMatch type when the errors property is omitted", () => {
  expectTypeOf<Except<ZodIssueInvalidUnionNoMatch, "errors">>().toEqualTypeOf<
    Except<$ZodIssueInvalidUnionNoMatch, "errors">
  >();
});

test("$ZodIssueInvalidUnionNoMatch type's errors property's members should extend ZodIssueInvalidUnionNoMatch type's errors property's members", () => {
  expectTypeOf<
    Simplify<$ZodIssueInvalidUnionNoMatch["errors"][number][number]>
  >().toExtend<ZodIssueInvalidUnionNoMatch["errors"][number][number]>();
});

test("ZodIssueInvalidUnionMultipleMatch type should be equal to $ZodIssueInvalidUnionMultipleMatch type", () => {
  expectTypeOf<ZodIssueInvalidUnionMultipleMatch>().toEqualTypeOf<$ZodIssueInvalidUnionMultipleMatch>();
});
