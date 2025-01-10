import { expect, test } from "vitest";
import { init } from "@/assets/data";
function sum(a: number, b: number) {
  return a + b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("loadForLang", async () => {
  await init("en");
});
