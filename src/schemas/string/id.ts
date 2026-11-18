import type { Tagged } from "type-fest";
import type { $ZodUUIDParams } from "zod/v4/core";

import { z } from "zod";

export function IdSchema<T extends Tagged<string, PropertyKey>>(
  { version = "v7" }: $ZodUUIDParams = { version: "v7" },
) {
  return z.uuid({ version }).transform((value) => value as T);
}
