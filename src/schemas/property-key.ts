import { z } from "zod";

export const PropertyKeySchema = z.union([z.string(), z.number(), z.symbol()]);
