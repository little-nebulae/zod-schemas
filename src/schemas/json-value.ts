import type { JsonValue } from "type-fest";

import { z } from "zod";

export const JsonValueSchema = z
  .json()
  .transform((value) => value as JsonValue);
