import { z } from "zod";

export function ZodIssueInputSchema<Input = unknown>() {
  return z.custom<Input>().exactOptional();
}
