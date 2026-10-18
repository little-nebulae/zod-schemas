import { z } from "zod";

export const PositiveIntegerSchema = z.int().positive();
export const NegativeIntegerSchema = z.int().negative();
export const NonPositiveIntegerSchema = z.int().nonpositive();
export const NonNegativeIntegerSchema = z.int().nonnegative();
