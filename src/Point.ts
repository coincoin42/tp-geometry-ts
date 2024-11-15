import Coordinate from "./Coordinate";
import Geometry from  "./Geometry";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import LogGeometryVisitor from "./LogGeometryVisitor";
import AbstractGeometry from "./AbstractGeometry";

export default class Point extends AbstractGeometry {
  private coordinate: Coordinate;

  constructor(coordinate: Coordinate  = []) {
    super();
    this.coordinate = coordinate ;
  }

  isEmpty(): boolean {
    return Number.isNaN(this.x())||Number.isNaN(this.y());
  }

  accept(v:LogGeometryVisitor):string{
    return v.visitPoint(this);
  }
  translate(dx :number, dy :number) :void {
    if (!this.isEmpty()){
    this.coordinate[0] = this.x() + dx;
    this.coordinate[1] = this.y() + dy;
    }
  }

  getEnvelope(): Envelope {
    let eb = new EnvelopeBuilder();
    eb.insert(this.getCoordinate());
    return eb.build()
  }


  clone() : Geometry {
      return new Point([this.x(),this.y()])
  }

  getType(): string {
    return "Point";
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    if (this.coordinate.length === 0)
      {
        return Number.NaN
      }
    return this.coordinate[0];
  }

  y(): number {
    if (this.coordinate.length === 0)
      {
        return Number.NaN
      }
    return this.coordinate[1];
  }

}
