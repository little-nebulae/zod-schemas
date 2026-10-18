import type { $ZodIssueCode } from "zod/v4/core";

import { expectTypeOf, test } from "vitest";

import type { ZodIssueCode } from "@/schemas/zod/issue/code";

test("ZodIssueCode type should be equal to $ZodIssueCode type", () => {
  expectTypeOf<ZodIssueCode>().toEqualTypeOf<$ZodIssueCode>();
});
