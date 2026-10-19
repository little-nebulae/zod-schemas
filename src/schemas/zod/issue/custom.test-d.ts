import type { $ZodIssueCustom } from "zod/v4/core";

import { expectTypeOf, test } from "vitest";

import type { ZodIssueCustom } from "@/schemas/zod/issue/custom";

test("ZodIssueCustom type should be equal to $ZodIssueCustom type", () => {
  expectTypeOf<ZodIssueCustom>().toEqualTypeOf<$ZodIssueCustom>();
});
