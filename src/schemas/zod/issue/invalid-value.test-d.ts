import type { $ZodIssueInvalidValue } from "zod/v4/core";

import { describe, expectTypeOf, test } from "vitest";

import type { ZodIssueInvalidValue } from "@/schemas/zod/issue/invalid-value";

describe("ZodIssueInvalidValue type should be equal to", () => {
  test("$ZodIssueInvalidValue", () => {
    expectTypeOf<ZodIssueInvalidValue>().toEqualTypeOf<$ZodIssueInvalidValue>();
  });

  test("$ZodIssueInvalidValue when they both have the same Input generic", () => {
    type Input = { text: string; count: number };
    expectTypeOf<ZodIssueInvalidValue<Input>>().toEqualTypeOf<
      $ZodIssueInvalidValue<Input>
    >();
  });
});
