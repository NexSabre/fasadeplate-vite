import diagonalCalculation from "../../../src/core/DiagonalCalc";

describe("Diagonal Calculation", () => {
  it("should return a null", () => {
    let dc = diagonalCalculation(10.0, 0);
    expect(dc).toBeNull();
  });

  it("should return a number", () => {
    let dc = diagonalCalculation(1.0, 1.0);
    expect(dc).toBe(1.4142135623730951);
  });
});
