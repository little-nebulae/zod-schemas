import type { $ZodIssueInvalidType } from "zod/v4/core";

import { describe, expectTypeOf, test } from "vitest";

import type { ZodIssueInvalidType } from "@/schemas/zod-issue/invalid-type";

describe("ZodIssueInvalidType type should be equal to", () => {
  test("$ZodIssueInvalidType", () => {
    expectTypeOf<ZodIssueInvalidType>().toEqualTypeOf<$ZodIssueInvalidType>();
  });
});
