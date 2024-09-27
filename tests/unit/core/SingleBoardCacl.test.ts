import SingleBoardCalc from "../../../src/core/SingleBoardCalc";

describe("SingleBoardCalc", () => {
  it("should calculate properly", () => {
    let sbc = new SingleBoardCalc(14.8, 345.5);

    expect(sbc.deskSize).toBe(14.8);
    expect(sbc.totalLength).toBe(345.5);

    expect(sbc.coverate.toFixed(4)).toBe("340.4000");
    expect(sbc.countFullSizeBoards).toBe(23);
    expect(sbc.missingPart.toFixed(4)).toBe("5.1000");
    expect(sbc.clippings).toBeTruthy();
  });
});
