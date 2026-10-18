import type { z } from "zod";
import type { $ZodStringFormats } from "zod/v4/core";

import { expectTypeOf, test } from "vitest";

import type { ZodStringFormatSchema } from "@/schemas/zod/string-format";

test("ZodStringFormatSchema's inferred type should be equal to $ZodStringFormats type", () => {
  expectTypeOf<
    z.infer<typeof ZodStringFormatSchema>
  >().toEqualTypeOf<$ZodStringFormats>();
});
