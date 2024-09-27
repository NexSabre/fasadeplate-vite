export default class SingleBoardCalc {
  deskSize: number;
  totalLength: number;

  countFullSizeBoards: number = 0;
  missingPart: number = 0;
  coverate: number = 0;
  clippings: boolean = false;

  constructor(deskSize = 0, totalLength = 0) {
    this.deskSize = deskSize;
    this.totalLength = totalLength;

    this.calculate();
  }

  calculate(): void {
    if (!this.deskSize || !this.totalLength) {
      return;
    }

    this.countFullSizeBoards = Math.floor(this.totalLength / this.deskSize);

    const sizeOfXDesk = this.countFullSizeBoards * this.deskSize;
    this.missingPart = this.totalLength - sizeOfXDesk;
    this.coverate = this.countFullSizeBoards * this.deskSize;

    this.clippings = this.totalLength % this.deskSize > 0;
  }
}
