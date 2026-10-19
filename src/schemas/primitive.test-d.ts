import type { Primitive } from "type-fest";
import type { z } from "zod";

import { expectTypeOf, test } from "vitest";

import type { PrimitiveSchema } from "@/schemas/primitive";

test("PrimitiveSchema's inferred type should be equal to Primitive type from type-fest", () => {
  type Inferred = z.infer<typeof PrimitiveSchema>;
  expectTypeOf<Inferred>().toEqualTypeOf<Primitive>();
});
