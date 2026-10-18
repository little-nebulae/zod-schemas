import type { $ZodIssueTooSmall } from "zod/v4/core";

import { describe, expectTypeOf, test } from "vitest";

import type { ZodIssueTooSmall } from "@/schemas/zod/issue/too-small";

describe("ZodIssueTooSmall type should be equal to", () => {
  test("$ZodIssueTooSmall", () => {
    expectTypeOf<ZodIssueTooSmall>().toEqualTypeOf<$ZodIssueTooSmall>();
  });

  test("$ZodIssueTooSmall when they both have the same Input generic", () => {
    type Input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expectTypeOf<ZodIssueTooSmall<Input>>().toEqualTypeOf<
      $ZodIssueTooSmall<Input>
    >();
  });
});
