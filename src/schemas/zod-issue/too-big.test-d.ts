import type { $ZodIssueTooBig } from "zod/v4/core";

import { describe, expectTypeOf, test } from "vitest";

import type { ZodIssueTooBig } from "@/schemas/zod-issue/too-big";

describe("ZodIssueTooBig type should be equal to", () => {
  test("$ZodIssueTooBig", () => {
    expectTypeOf<ZodIssueTooBig>().toEqualTypeOf<$ZodIssueTooBig>();
  });

  test("$ZodIssueTooBig when they both have the same Input generic", () => {
    type Input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expectTypeOf<ZodIssueTooBig<Input>>().toEqualTypeOf<
      $ZodIssueTooBig<Input>
    >();
  });
});
