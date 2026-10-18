import { z } from "zod";

export type OpenString = string & {};
export const OpenStringSchema = z.string<OpenString>();
