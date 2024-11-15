import Envelope from "./Envelope";
import Point from "./Point";
import LineString from "./LineString";


export default interface GeometryVisitor {

    visitPoint(p:Point):string;
    visitLineString(l:LineString):string;
}
    