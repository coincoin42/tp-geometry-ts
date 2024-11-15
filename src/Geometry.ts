import Envelope from "./Envelope";
import GeometryVisitor from "./LogGeometryVisitor";

export default interface Geometry {
    accept(v:GeometryVisitor):void;
    getType() : string;
    isEmpty() : boolean;
    translate(dx :number, dy :number) : void;
    clone() : Geometry;
    getEnvelope() : Envelope;
}