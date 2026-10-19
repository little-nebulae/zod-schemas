import type { ValueOf } from "type-fest";
import type { $ZodIssueCode } from "zod/v4/core";

import { expectTypeOf, test } from "vitest";

import type { ZOD_ISSUE_CODE_ENUM } from "@/schemas/zod/issue";

test("The type of ZOD_ISSUE_CODE_ENUM's values should be equal to $ZodIssueCode", () => {
  expectTypeOf<
    ValueOf<typeof ZOD_ISSUE_CODE_ENUM>
  >().toEqualTypeOf<$ZodIssueCode>();
});
