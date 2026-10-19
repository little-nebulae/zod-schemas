import { z } from "zod";

export const ZOD_ISSUE_CODE_KEY = "code";
export const ZOD_ISSUE_CODE_ENUM = {
  INVALID_TYPE: "invalid_type",
  TOO_BIG: "too_big",
  TOO_SMALL: "too_small",
  INVALID_FORMAT: "invalid_format",
  NOT_MULTIPLE_OF: "not_multiple_of",
  UNRECOGNIZED_KEYS: "unrecognized_keys",
  INVALID_UNION: "invalid_union",
  INVALID_KEY: "invalid_key",
  INVALID_ELEMENT: "invalid_element",
  INVALID_VALUE: "invalid_value",
  CUSTOM: "custom",
} as const;

export const ZodIssueCodeSchema = z.enum(ZOD_ISSUE_CODE_ENUM);
export type ZodIssueCode = z.infer<typeof ZodIssueCodeSchema>;
