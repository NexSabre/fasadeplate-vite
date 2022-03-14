import diagonalCalculation from "../../../src/core/DiagonalCalc";

describe("Diagonal Calculation", () => {
  it("should return a null", () => {
    let dc = diagonalCalculation(10.0, 0);
    expect(dc).toBeNull();
  });
});
