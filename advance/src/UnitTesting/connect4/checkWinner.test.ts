import { describe, expect, test } from "vitest";
import checkWinner from "./checkWinner";

type Board = (string | null)[][];

describe("Check winner", () => {
  test("vertical winner", () => {
    const board: Board = [
      ["x", "x", "x", "x", null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
    ];

    const result = checkWinner(board);
    expect(result).toBe("x");

    const board2: Board = [
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, "x", "x", "x", "x"],
    ];
    const result2 = checkWinner(board2);
    expect(result2).toBe("x");
  });

  test("horizontal winner", () => {
    const board: Board = [
      [null, null, null, null, null, null],
      ["x", null, null, null, null, null],
      ["x", null, null, null, null, null],
      ["x", null, null, null, null, null],
      ["x", null, null, null, null, null],
    ];
    const result = checkWinner(board);
    expect(result).toBe("x");
  });

  test("diagonal winner", () => {
    const board: Board = [
      [null, null, null, null, null, null],
      [null, "x", null, null, null, null],
      [null, null, "x", null, null, null],
      [null, null, null, "x", null, null],
      [null, null, null, null, "x", null],
    ];
    expect(checkWinner(board)).toBe("x");
  });

  test("no winner", () => {
    const board1: Board = [
      ["x", "o", "x", null, null, null],
      ["o", "x", "o", "x", null, null],
      ["x", "o", "x", "o", null, null],
      ["o", "x", "o", null, null, null],
      [null, null, null, null, null, null],
    ];

    const filledBoard: Board = [
      ["x", "x", "x", "o", "o", "o", "x"],
      ["o", "o", "o", "x", "x", "x", "o"],
      ["x", "x", "x", "o", "o", "o", "x"],
      ["o", "o", "o", "x", "x", "x", "o"],
      ["x", "x", "x", "o", "o", "o", "x"],
      ["o", "o", "o", "x", "x", "x", "o"],
    ];

    expect(checkWinner(board1)).toBe(null);
    expect(checkWinner(filledBoard)).toBe(null);
  });
});
