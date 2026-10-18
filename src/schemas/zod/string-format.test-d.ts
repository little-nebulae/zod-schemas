import type { z } from "zod";
import type { $ZodStringFormats } from "zod/v4/core";

import { expectTypeOf, test } from "vitest";

import type { ZodStringFormatsSchema } from "@/schemas/zod/string-formats";

test("ZodStringFormatsSchema's inferred type should be equal to $ZodStringFormats type", () => {
  expectTypeOf<
    z.infer<typeof ZodStringFormatsSchema>
  >().toEqualTypeOf<$ZodStringFormats>();
});
