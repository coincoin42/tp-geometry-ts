import Coordinate from "./Coordinate";
import Geometry from  "./Geometry";
import Envelope from "./Envelope";
import Point from "./Point"
import LineString from "./LineString"
import EnvelopeBuilder from "./EnvelopeBuilder";
import GeometryVisitor from "./GeometryVisitor";
import WktWriter from "./WktWriter";
import WktVisitor from "./WktVisitor";

export default abstract class AbstractGeometry implements Geometry {
    asText():string{
        let v = new WktVisitor();
        this.accept(v);
        return v.getBuffer();

    }
    getEnvelope(): Envelope {
        let v = new EnvelopeBuilder();
        this.accept(v);
        return v.build();
    }
    abstract getType(): string;
    
    abstract translate(dx: number, dy: number): void;
    abstract isEmpty(): boolean;
    abstract accept(v: GeometryVisitor): void;
    abstract clone(): Geometry;
}