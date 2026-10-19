import { z } from "zod";

import { ZOD_ISSUE_CODE_KEY } from "@/schemas/zod/issue/code";
import { ZodIssueCustomSchema } from "@/schemas/zod/issue/custom";
import { ZodIssueInvalidStringFormatSchema } from "@/schemas/zod/issue/invalid-string-format";
import { ZodIssueInvalidTypeSchema } from "@/schemas/zod/issue/invalid-type";
import { ZodIssueInvalidValueSchema } from "@/schemas/zod/issue/invalid-value";
import { ZodIssueNotMultipleOfSchema } from "@/schemas/zod/issue/not-multiple-of";
import { ZodIssueTooBigSchema } from "@/schemas/zod/issue/too-big";
import { ZodIssueTooSmallSchema } from "@/schemas/zod/issue/too-small";
import { ZodIssueUnrecognizedKeysSchema } from "@/schemas/zod/issue/unrecognized-keys";

export const ZodIssueSchema = z.discriminatedUnion(ZOD_ISSUE_CODE_KEY, [
  ZodIssueInvalidTypeSchema(),
  ZodIssueTooBigSchema(),
  ZodIssueTooSmallSchema(),
  ZodIssueInvalidStringFormatSchema,
  ZodIssueNotMultipleOfSchema(),
  ZodIssueUnrecognizedKeysSchema,
  ZodIssueInvalidValueSchema(),
  ZodIssueCustomSchema,
]);
