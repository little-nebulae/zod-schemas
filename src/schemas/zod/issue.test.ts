import { assert, describe, expect, test } from "vitest";
import { z } from "zod";

import { ZodIssueSchema } from "@/schemas/zod/issue";

describe("ZodIssueSchema should succeed", () => {
  test("at parsing complex issues", () => {
    const input = {
      prop1: new Date(),
      prop2: [
        { request: new Request("https://example.com") },
        { response: new Response() },
      ],
      [Symbol("prop3")]: () => {},
    };
    const parseJsonResult = z.json().safeParse(input);
    assert(parseJsonResult.success === false);

    const issues = z.array(ZodIssueSchema).parse(parseJsonResult.error.issues);
    expect(issues).toHaveLength(1);

    const [issue] = issues;
    assert(issue);
    assert(issue.code === "invalid_union");
    expect(issue.path).toHaveLength(0);
    expect(issue.errors).toHaveLength(6);
  });
});
