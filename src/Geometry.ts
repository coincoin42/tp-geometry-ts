import Envelope from "./Envelope";
import LogGeometryVisitor from "./LogGeometryVisitor";

export default interface Geometry {
    accept(v:LogGeometryVisitor):void;
    getType() : string;
    isEmpty() : boolean;
    translate(dx :number, dy :number) : void;
    clone() : Geometry;
    getEnvelope() : Envelope;
}