import type { $ZodIssueInvalidStringFormat } from "zod/v4/core";

import { expectTypeOf, test } from "vitest";

import type { ZodIssueInvalidStringFormat } from "@/schemas/zod/issue/invalid-string-format";

test("ZodIssueInvalidStringFormat type should be equal to $ZodIssueInvalidStringFormat type", () => {
  expectTypeOf<ZodIssueInvalidStringFormat>().toEqualTypeOf<$ZodIssueInvalidStringFormat>();
});
