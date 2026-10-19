import type { $ZodIssueInvalidUnion } from "zod/v4/core";

import { expectTypeOf, test } from "vitest";

import type { ZodIssueInvalidUnionMultipleMatch } from "@/schemas/zod/issue/invalid-union";

test("ZodIssueInvalidUnionMultipleMatch type should be equal to $ZodIssueInvalidUnionMultipleMatch type", () => {
  expectTypeOf<ZodIssueInvalidUnionMultipleMatch>().toEqualTypeOf<
    Extract<$ZodIssueInvalidUnion, { inclusive: false }>
  >();
});
