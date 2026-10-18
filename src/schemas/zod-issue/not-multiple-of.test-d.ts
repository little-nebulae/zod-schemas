import type { $ZodIssueNotMultipleOf } from "zod/v4/core";

import { describe, expectTypeOf, test } from "vitest";

import type { ZodIssueNotMultipleOf } from "@/schemas/zod-issue/not-multiple-of";

describe("ZodIssueNotMultipleOf type should be equal to", () => {
  test("$ZodIssueNotMultipleOf", () => {
    expectTypeOf<ZodIssueNotMultipleOf>().toEqualTypeOf<$ZodIssueNotMultipleOf>();
  });

  test("$ZodIssueNotMultipleOf when they both have the same Input generic", () => {
    type Input = 5;
    expectTypeOf<ZodIssueNotMultipleOf<Input>>().toEqualTypeOf<
      $ZodIssueNotMultipleOf<Input>
    >();
  });
});
