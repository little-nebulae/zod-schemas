import { z } from "zod";

export const ZOD_STRING_FORMAT_ENUM = {
  EMAIL: "email",
  URL: "url",
  EMOJI: "emoji",
  UUID: "uuid",
  GUID: "guid",
  NANOID: "nanoid",
  CUID: "cuid",
  CUID2: "cuid2",
  ULID: "ulid",
  XID: "xid",
  KSUID: "ksuid",
  DATETIME: "datetime",
  DATE: "date",
  TIME: "time",
  DURATION: "duration",
  IPV4: "ipv4",
  IPV6: "ipv6",
  CIDRV4: "cidrv4",
  CIDRV6: "cidrv6",
  BASE64: "base64",
  BASE64URL: "base64url",
  JSON_STRING: "json_string",
  E164: "e164",
  CREDIT_CARD: "credit_card",
  IBAN: "iban",
  LOWERCASE: "lowercase",
  UPPERCASE: "uppercase",
  REGEX: "regex",
  JWT: "jwt",
  STARTS_WITH: "starts_with",
  ENDS_WITH: "ends_with",
  INCLUDES: "includes",
} as const;

export const ZodStringFormatSchema = z.enum(ZOD_STRING_FORMAT_ENUM);
export type ZodStringFormat = z.infer<typeof ZodStringFormatSchema>;
