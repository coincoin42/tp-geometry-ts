import Envelope from "./Envelope";
import Point from "./Point";
import LineString from "./LineString";
import GeometryCollection from "./GeometryCollection";


export default interface GeometryVisitor {

    visitPoint(p:Point):void;
    visitLineString(l:LineString):void;
    visitGeometryCollection(g:GeometryCollection):void;
}
    