export default class RunningMeterCalc {
  deskWide?: number;
  deskField?: number;
  percentageOfExcess: number;

  constructor(
    deskWide: number,
    deskField: number,
    percentageOfExcess: number = 0
  ) {
    this.deskWide = deskWide;
    this.deskField = deskField;
    this.percentageOfExcess = percentageOfExcess;
  }

  deskSquare(): number | null {
    if (!this.deskField || !this.deskWide) {
      return null;
    }
    return this.deskField / (this.deskWide * 0.1);
  }

  excess(): number | null {
    if (!this.deskField || !this.deskWide || this.percentageOfExcess < 0) {
      return null;
    }
    return (this.deskSquare()! / 100) * this.percentageOfExcess;
  }
}
