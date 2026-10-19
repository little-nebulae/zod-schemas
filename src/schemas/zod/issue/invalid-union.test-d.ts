import type { Except } from "type-fest";
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

test("ZodIssueInvalidUnionMultipleMatch type should be equal to $ZodIssueInvalidUnionMultipleMatch type", () => {
  expectTypeOf<ZodIssueInvalidUnionMultipleMatch>().toEqualTypeOf<$ZodIssueInvalidUnionMultipleMatch>();
});
