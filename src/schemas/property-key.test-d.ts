import type { z } from "zod";

import { expectTypeOf, test } from "vitest";

import type { PropertyKeySchema } from "@/schemas/property-key";

test("PropertyKeySchema's inferred type should be equal to the built-in PropertyKey type", () => {
  type Inferred = z.infer<typeof PropertyKeySchema>;
  expectTypeOf<Inferred>().toEqualTypeOf<PropertyKey>();
});
