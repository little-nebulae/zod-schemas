import type { $ZodIssueUnrecognizedKeys } from "zod/v4/core";

import { expectTypeOf, test } from "vitest";

import type { ZodIssueUnrecognizedKeys } from "@/schemas/zod/issue/unrecognized-keys";

test("ZodIssueUnrecognizedKeys type should be equal to $ZodIssueUnrecognizedKeys type", () => {
  expectTypeOf<ZodIssueUnrecognizedKeys>().toEqualTypeOf<$ZodIssueUnrecognizedKeys>();
});
