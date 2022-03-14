export type numberOrNull = number | null;

export default (short: number, long: number): numberOrNull => {
  if (!short || !long) {
    return null;
  }
  return Math.sqrt(Math.pow(short, 2) + Math.pow(long, 2));
};
