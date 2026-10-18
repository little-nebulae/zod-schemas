import { z } from "zod";

export const INVALID_EMAIL_ERROR_MESSAGE = "Invalid email.";

export const EmailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .normalize("NFC")
  .pipe(z.email(INVALID_EMAIL_ERROR_MESSAGE).max(254, "Email is too long."));

export const UnicodeEmailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .normalize("NFC")
  .pipe(
    z
      .email({
        pattern: z.regexes.unicodeEmail,
        error: INVALID_EMAIL_ERROR_MESSAGE,
      })
      .max(254, "Email is too long."),
  );
