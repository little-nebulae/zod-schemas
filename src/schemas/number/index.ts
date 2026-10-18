import { z } from "zod";

export const PositiveNumberSchema = z.number().positive();
export const NegativeNumberSchema = z.number().negative();
export const NonPositiveNumberSchema = z.number().nonpositive();
export const NonNegativeNumberSchema = z.number().nonnegative();
