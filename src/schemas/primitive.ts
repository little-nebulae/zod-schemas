import { z } from "zod";

export const PrimitiveSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.symbol(),
  z.bigint(),
  z.null(),
  z.undefined(),
]);
