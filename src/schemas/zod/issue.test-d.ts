import type { ValueOf } from "type-fest";
import type { z } from "zod";
import type { $ZodIssueBase, $ZodIssueCode } from "zod/v4/core";

import { expectTypeOf, test } from "vitest";

import type {
  ZOD_ISSUE_CODE_ENUM,
  ZodIssueBaseSchema,
} from "@/schemas/zod/issue";

test("The type of ZOD_ISSUE_CODE_ENUM's values should be equal to $ZodIssueCode", () => {
  expectTypeOf<
    ValueOf<typeof ZOD_ISSUE_CODE_ENUM>
  >().toEqualTypeOf<$ZodIssueCode>();
});

test("When wrapped with Readonly, the inferred type of ZodIssueBaseSchema should be equal to $ZodIssueBase", () => {
  type Inferred = z.infer<typeof ZodIssueBaseSchema>;
  expectTypeOf<Inferred>().not.toEqualTypeOf<$ZodIssueBase>();
  expectTypeOf<Readonly<Inferred>>().toEqualTypeOf<$ZodIssueBase>();
});
