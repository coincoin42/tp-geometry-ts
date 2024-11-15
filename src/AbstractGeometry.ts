import Coordinate from "./Coordinate";
import Geometry from  "./Geometry";
import Envelope from "./Envelope";
import Point from "./Point"
import LineString from "./LineString"
import EnvelopeBuilder from "./EnvelopeBuilder";
import LogGeometryVisitor from "./LogGeometryVisitor";
import WktWriter from "./WktWriter";
import WktVisitor from "./WktVisitor";

export default abstract class AbstractGeometry implements Geometry {
    asText():string{
        let v = new WktVisitor();
        return this.accept(v);
    }

    abstract getType(): string;
    abstract getEnvelope(): Envelope;
    abstract translate(dx: number, dy: number): void;
    abstract isEmpty(): boolean;
    abstract accept(v: LogGeometryVisitor): string;
    abstract clone(): Geometry;
}