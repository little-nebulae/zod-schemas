import type { $ZodStringFormats } from "zod/v4/core";

import { expectTypeOf, test } from "vitest";

import type { ZodStringFormat } from "@/schemas/zod/string-format";

test("ZodStringFormat type should be equal to $ZodStringFormats type", () => {
  expectTypeOf<ZodStringFormat>().toEqualTypeOf<$ZodStringFormats>();
});
