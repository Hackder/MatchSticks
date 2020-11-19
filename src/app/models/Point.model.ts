export class Point {
  constructor(public x: number, public y: number) {}

  public length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  public distance(point: Point) {
    const w = Math.abs(this.x - point.x);
    const h = Math.abs(this.y - point.y);

    return Math.sqrt(w * w + h * h);
  }
}
