import RunningMeterCalc from "../../../src/core/RunningMeterCalc";

describe("Runnig Meter Calc", () => {
  it("should calculate properly", () => {
    let rmc = new RunningMeterCalc(10.0, 300.0, 0);
    expect(rmc.excess()).toBe(0);
    expect(rmc.deskSquare()).toBe(300);
  });

  it("should be calculate properly with 10% of excess", () => {
    let rmc = new RunningMeterCalc(10, 300, 10);
    expect(rmc.excess()).toBe(30);
    expect(rmc.deskSquare()).toBe(300);
  });
});
