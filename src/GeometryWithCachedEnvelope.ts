import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import Geometry from "./Geometry";
import Linestring from "./LineString";
import LogGeometryVisitor from "./LogGeometryVisitor";
import Point from "./Point";

export default class GeometryWithCachedEnvelope implements Geometry  {
 private original:Geometry;
 private cache:Envelope;

constructor(g: Geometry  = new Point()) {
    
    this.original = g;
    this.cache = new Envelope();
    

  }

  isEmpty(): boolean {
    return this.original.isEmpty();
  }

  getType(): string {
    return this.original.getType();
  }

  accept(v: LogGeometryVisitor): void {
      this.original.accept(v);
  }

  clone(): Geometry {
      return this.original.clone();
  }

  translate(dx: number, dy: number): void {
      this.original.translate(dx,dy);
      this.cache = new Envelope();
  }

  getEnvelope(): Envelope {
      this.cache = this.original.getEnvelope();
      return this.cache;
  }

  getCache(): Envelope {
    return this.cache
  }

  getOriginal(): Geometry {
    return this.original;
  }
  }
