import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";

export default interface Geometry {
    accept<T>(v:GeometryVisitor<T>):T;
    getType() : string;
    isEmpty() : boolean;
    translate(dx :number, dy :number) : void;
    clone() : Geometry;
    getEnvelope() : Envelope;
}