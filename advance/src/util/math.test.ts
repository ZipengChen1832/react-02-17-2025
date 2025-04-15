import { describe, expect, test } from "vitest";
import { multiply, subtract, sum } from "./math";

describe("sum", () => {
  test("add positive numbers ", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 3)).toBe(5);
    expect(sum(3, 4)).toBe(7);
  });

  test("add negative numbers ", () => {
    expect(sum(-1, -2)).toBe(-3);
    expect(sum(-2, -3)).toBe(-5);
    expect(sum(-3, -4)).toBe(-7);
  });
});

describe("subtract", () => {
  test("subtract positive numbers ", () => {
    expect(subtract(1, 2)).toBe(-1);
    expect(subtract(2, 3)).toBe(-1);
    expect(subtract(3, 4)).toBe(-1);
  });

  test("subtract negative numbers ", () => {
    expect(subtract(-1, -2)).toBe(1);
    expect(subtract(-2, -3)).toBe(1);
    expect(subtract(-3, -4)).toBe(1);
  });
});

describe("multiply", () => {
  test("multiply positive numbers ", () => {
    expect(multiply(1, 2)).toBe(2);
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(3, 4)).toBe(12);
  });

  test("multiply negative numbers ", () => {
    expect(multiply(-1, -2)).toBe(2);
    expect(multiply(-2, -3)).toBe(6);
    expect(multiply(-3, -4)).toBe(12);
  });
});
