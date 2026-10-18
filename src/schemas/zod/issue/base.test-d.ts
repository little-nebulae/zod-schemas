import type { $ZodIssueBase } from "zod/v4/core";

import { expectTypeOf, test } from "vitest";

import type { ZodIssueBase } from "@/schemas/zod/issue/base";

test("ZodIssueBase type should be equal to $ZodIssueBase type", () => {
  expectTypeOf<ZodIssueBase>().toEqualTypeOf<$ZodIssueBase>();
});
